/* =========================================================
   Interactive Quiz & Flashcard Engine
   Handles: Multiple Choice, Fill-in-the-Blank, Word Reordering,
   Flashcards, and Web Audio synthesised sound cues
   ========================================================= */
const sounds = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
    }
  },
  play(freq, type, duration) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) { /* ignore audio blocked */ }
  },
  correct() {
    this.play(523.25, 'sine', 0.12);
    setTimeout(() => this.play(659.25, 'sine', 0.22), 110);
  },
  wrong() {
    this.play(261.63, 'triangle', 0.18);
    setTimeout(() => this.play(220, 'triangle', 0.24), 160);
  }
};

class QuizEngine {
  constructor(container, questions, options = {}) {
    this.container = typeof container === 'string' ? $(container) : container;
    this.questions = questions || [];
    this.title = options.title || 'Práctica Interactiva';
    this.onComplete = options.onComplete || (() => {});
    this.currentIndex = 0;
    this.score = 0;
    this.answers = [];
    this.answered = false;
  }

  start() {
    this.currentIndex = 0;
    this.score = 0;
    this.answers = [];
    this.render();
  }

  render() {
    if (!this.questions.length) {
      this.container.innerHTML = `<div class="empty-state"><div class="big-emoji">📚</div><h3>No hay preguntas cargadas</h3></div>`;
      return;
    }
    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.answered = false;

    const progressPct = Math.round((this.currentIndex / this.questions.length) * 100);

    let bodyHtml = '';
    if (q.type === 'mc') {
      bodyHtml = `
        <div class="opts">
          ${q.options.map((opt, i) => `
            <button class="opt" type="button" data-idx="${i}">
              <span class="opt-k">${String.fromCharCode(65 + i)}</span>
              <span>${mk(opt)}</span>
            </button>
          `).join('')}
        </div>
      `;
    } else if (q.type === 'blank') {
      const parts = q.text.split('[blank]');
      bodyHtml = `
        <div class="card flat" style="background:var(--surface-2); font-size:1.15rem; line-height:2;">
          ${mk(parts[0])}
          <input type="text" class="blank-input" id="q-blank" autocomplete="off" spellcheck="false" placeholder="Escribí aquí...">
          ${parts[1] ? mk(parts[1]) : ''}
        </div>
        <div class="q-actions">
          <button class="btn" id="btn-check-blank" type="button">Comprobar respuesta</button>
        </div>
      `;
    } else if (q.type === 'order') {
      const shuffled = shuffle(q.words);
      bodyHtml = `
        <div class="order-zone empty" id="order-target"></div>
        <div class="order-bank" id="order-bank">
          ${shuffled.map((w, idx) => `<span class="chip" data-word="${esc(w)}" data-id="${idx}">${esc(w)}</span>`).join('')}
        </div>
        <div class="q-actions">
          <button class="btn ghost sm" id="btn-reset-order" type="button">Reiniciar</button>
          <div class="spacer"></div>
          <button class="btn" id="btn-check-order" type="button">Comprobar orden</button>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="q-card">
        <div class="quiz-head">
          <span class="pill">${this.currentIndex + 1} de ${this.questions.length}</span>
          <div class="bar"><i style="width:${progressPct}%"></i></div>
          <span class="pill ok">Aciertos: ${this.score}</span>
        </div>

        <div class="card pad-lg">
          <div class="row between mb-1">
            <span class="q-type">${q.category || 'Ejercicio'} · ${q.type === 'order' ? 'Ordenar Oración' : (q.type === 'blank' ? 'Completar Espacio' : 'Opción Múltiple')}</span>
            ${speakBtn(q.text.replace(/\[blank\]/g, 'blank'))}
          </div>
          <div class="q-text">${mk(q.text)}</div>

          ${bodyHtml}

          <div id="q-feedback" class="hidden"></div>

          <div class="q-actions hidden" id="q-next-wrap">
            <div class="spacer"></div>
            <button class="btn" id="btn-next" type="button">
              ${this.currentIndex === this.questions.length - 1 ? 'Ver resultados' : 'Siguiente pregunta ➜'}
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(q);
  }

  bindEvents(q) {
    if (q.type === 'mc') {
      $$('.opt', this.container).forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.answered) return;
          const idx = parseInt(btn.dataset.idx, 10);
          this.submitAnswer(idx === q.correct, q.options[idx], q.options[q.correct], q.explanation);
          $$('.opt', this.container).forEach((b, i) => {
            b.disabled = true;
            if (i === q.correct) b.classList.add('correct');
            else if (i === idx) b.classList.add('wrong');
          });
        });
      });
    } else if (q.type === 'blank') {
      const input = $('#q-blank', this.container);
      const checkBtn = $('#btn-check-blank', this.container);
      const doCheck = () => {
        if (this.answered) return;
        const val = input.value.trim();
        if (!val) { toast('Por favor, ingresá una respuesta.'); input.focus(); return; }
        const ok = isMatch(val, q.answer);
        input.disabled = true;
        checkBtn.disabled = true;
        input.classList.add(ok ? 'correct' : 'wrong');
        const expected = Array.isArray(q.answer) ? q.answer[0] : q.answer;
        this.submitAnswer(ok, val, expected, q.explanation);
      };
      checkBtn.addEventListener('click', doCheck);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') doCheck(); });
      setTimeout(() => input.focus(), 150);
    } else if (q.type === 'order') {
      const target = $('#order-target', this.container);
      const bank = $('#order-bank', this.container);
      const checkBtn = $('#btn-check-order', this.container);
      const resetBtn = $('#btn-reset-order', this.container);

      let placed = [];

      const sync = () => {
        target.innerHTML = placed.map((item, pIdx) => `
          <span class="chip placed" data-pidx="${pIdx}">${esc(item.word)}</span>
        `).join('');
        if (placed.length === 0) target.classList.add('empty');
        else target.classList.remove('empty');
      };

      bank.addEventListener('click', e => {
        const chip = e.target.closest('.chip:not(.used)');
        if (!chip || this.answered) return;
        chip.classList.add('used');
        placed.push({ word: chip.dataset.word, id: chip.dataset.id, el: chip });
        sync();
      });

      target.addEventListener('click', e => {
        const chip = e.target.closest('.chip.placed');
        if (!chip || this.answered) return;
        const pIdx = parseInt(chip.dataset.pidx, 10);
        const [removed] = placed.splice(pIdx, 1);
        removed.el.classList.remove('used');
        sync();
      });

      resetBtn.addEventListener('click', () => {
        if (this.answered) return;
        placed = [];
        $$('.chip', bank).forEach(c => c.classList.remove('used'));
        sync();
      });

      checkBtn.addEventListener('click', () => {
        if (this.answered) return;
        if (!placed.length) { toast('Hacé clic sobre las palabras para ordenarlas.'); return; }
        const sentence = placed.map(p => p.word).join(' ');
        const ok = isMatch(sentence, q.correct);
        checkBtn.disabled = true;
        resetBtn.disabled = true;
        this.submitAnswer(ok, sentence, q.correct, q.explanation);
      });
    }

    const nextBtn = $('#btn-next', this.container);
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.currentIndex++;
        this.render();
      });
    }
  }

  submitAnswer(isCorrect, userVal, expectedVal, explanation) {
    this.answered = true;
    if (isCorrect) {
      this.score++;
      sounds.correct();
    } else {
      sounds.wrong();
    }

    this.answers.push({ question: this.questions[this.currentIndex], isCorrect, userVal, expectedVal });

    const fb = $('#q-feedback', this.container);
    fb.className = `feedback ${isCorrect ? 'ok' : 'bad'}`;
    fb.innerHTML = `
      <div class="fb-title">${isCorrect ? '¡Excelente! Respuesta correcta 🎉' : 'Incorrecto ❌'}</div>
      ${!isCorrect ? `<div class="fb-answer"><b>Respuesta esperada:</b> <code style="font-size:1.05rem">${esc(expectedVal)}</code></div>` : ''}
      ${explanation ? `<div class="fb-explain">${mk(explanation)}</div>` : ''}
    `;
    fb.classList.remove('hidden');

    const nextWrap = $('#q-next-wrap', this.container);
    if (nextWrap) {
      nextWrap.classList.remove('hidden');
      setTimeout(() => nextWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
  }

  renderSummary() {
    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);
    const passed = pct >= 60;

    if (passed) confetti();

    this.container.innerHTML = `
      <div class="card pad-lg center result-hero">
        <div class="ring lg" style="--p:${pct}; --c:${passed ? 'var(--c-ok)' : 'var(--c-bad)'}">
          <span>${pct}%</span>
        </div>
        <h2>${passed ? '¡Felicitaciones! Muy buen repaso' : 'A repasar un poco más'}</h2>
        <p class="muted">Obtuviste <b>${this.score} de ${total}</b> respuestas correctas (${pct}%).</p>

        <div class="row" style="justify-content:center; margin-top:20px;">
          <button class="btn" id="btn-retry" type="button">🔄 Reintentar este ejercicio</button>
          <a class="btn ghost" href="#/practice">Volver al centro de práctica</a>
        </div>
      </div>
    `;

    $('#btn-retry', this.container).addEventListener('click', () => this.start());
    this.onComplete({ score: this.score, total, pct, passed });
  }
}

/* ---------- Flashcards Component ---------- */
class FlashcardViewer {
  constructor(container, cards) {
    this.container = typeof container === 'string' ? $(container) : container;
    this.cards = cards || [];
    this.idx = 0;
  }

  render() {
    if (!this.cards.length) {
      this.container.innerHTML = '<div class="empty-state">No hay tarjetas disponibles</div>';
      return;
    }
    const card = this.cards[this.idx];
    this.container.innerHTML = `
      <div class="stack">
        <div class="row between">
          <span class="pill">${this.idx + 1} de ${this.cards.length}</span>
          <button class="btn ghost sm" id="fc-shuffle" type="button">🔀 Mezclar</button>
        </div>

        <div class="flash-wrap">
          <div class="flash" id="flash-card" tabindex="0" role="button" aria-label="Girar tarjeta">
            <div class="flash-face front">
              <span class="lbl">${esc(card.tag || 'Verbo')}</span>
              <div class="big">${esc(card.inf)}</div>
              <div class="muted small mt-1">Tocá para ver las conjugaciones y significado</div>
              <div class="mt-2">${speakBtn(card.inf)}</div>
            </div>
            <div class="flash-face back">
              <span class="lbl">Pasado Simple (V2) & Participio (V3)</span>
              <div class="forms">
                <span>${esc(card.past)}</span>
                <span>${esc(card.part)}</span>
              </div>
              <div class="mt-2" style="font-size:1.15rem; font-weight:600; color:var(--accent-2);">${esc(card.es)}</div>
              <div class="mt-1">${speakBtn(`${card.inf}. Past: ${card.past}. Participle: ${card.part}`)}</div>
            </div>
          </div>
        </div>

        <div class="row" style="justify-content:center; gap:12px;">
          <button class="btn ghost" id="fc-prev" type="button">⬅ Anterior</button>
          <button class="btn ghost" id="fc-flip" type="button">🔄 Girar</button>
          <button class="btn" id="fc-next" type="button">Siguiente ➡</button>
        </div>
      </div>
    `;

    const el = $('#flash-card', this.container);
    const flip = () => el.classList.toggle('flipped');
    el.addEventListener('click', flip);
    el.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });

    $('#fc-flip', this.container).addEventListener('click', flip);
    $('#fc-prev', this.container).addEventListener('click', () => {
      this.idx = (this.idx - 1 + this.cards.length) % this.cards.length;
      this.render();
    });
    $('#fc-next', this.container).addEventListener('click', () => {
      this.idx = (this.idx + 1) % this.cards.length;
      this.render();
    });
    $('#fc-shuffle', this.container).addEventListener('click', () => {
      this.cards = shuffle(this.cards);
      this.idx = 0;
      toast('Tarjetas mezcladas');
      this.render();
    });
  }
}
