/* =========================================================
   English Prep — Main App, Router & Views
   Inglés Técnico II · Repaso 3 Días Parcial
   ========================================================= */

// Navigation items
const NAV_ITEMS = [
  { path: '#/', label: 'Inicio', icon: '🏠', badge: null },
  { path: '#/plan', label: 'Plan de 3 Días', icon: '📅', badge: '3 Días' },
  { path: '#/grammar', label: 'Gramática', icon: '📖', badge: null },
  { path: '#/practice', label: 'Práctica', icon: '✍️', badge: 'Quiz' },
  { path: '#/verbs', label: 'Lista de Verbos', icon: '📋', badge: null },
  { path: '#/readings', label: 'Lecturas Oficiales', icon: '📰', badge: null },
  { path: '#/writing', label: 'Writing (100 Palabras)', icon: '✍️', badge: 'Clave' },
  { path: '#/oral', label: 'Simulador Oral', icon: '🎤', badge: 'Audio' },
  { path: '#/exam', label: 'Simulacro de Examen', icon: '🎓', badge: 'Test' }
];

// App State
const state = {
  theme: store.get('theme', 'dark'),
  planDone: store.get('plan_done', {}),
  writingDraft: store.get('writing_draft', ''),
  examScores: store.get('exam_scores', [])
};

// Apply theme immediately
document.documentElement.setAttribute('data-theme', state.theme);

/* ---------- Sidebar & Bottom Nav Render ---------- */
function initNavigation() {
  const sideNav = $('#side-nav');
  const bottomNav = $('#bottom-nav');

  const navHtml = `
    <div class="nav-label">General</div>
    ${NAV_ITEMS.slice(0, 2).map(renderNavLink).join('')}
    <div class="nav-label">Contenido Académico</div>
    ${NAV_ITEMS.slice(2, 6).map(renderNavLink).join('')}
    <div class="nav-label">Evaluaciones Clave</div>
    ${NAV_ITEMS.slice(6).map(renderNavLink).join('')}
  `;
  sideNav.innerHTML = navHtml;

  // Mobile bottom bar (5 essential tabs)
  const mobileTabs = [
    { path: '#/', label: 'Inicio', icon: '🏠' },
    { path: '#/plan', label: 'Plan', icon: '📅' },
    { path: '#/practice', label: 'Práctica', icon: '✍️' },
    { path: '#/writing', label: 'Writing', icon: '📝' },
    { path: '#/oral', label: 'Oral', icon: '🎤' }
  ];
  bottomNav.innerHTML = mobileTabs.map(t => `
    <a href="${t.path}" data-path="${t.path}">
      <span class="bn-ico">${t.icon}</span>
      <span>${t.label}</span>
    </a>
  `).join('');

  // Mobile menu toggle
  const menuBtn = $('#menu-btn');
  const scrim = $('#scrim');
  const toggleMenu = () => document.body.classList.toggle('menu-open');
  menuBtn.addEventListener('click', toggleMenu);
  scrim.addEventListener('click', () => document.body.classList.remove('menu-open'));

  // Theme toggle button
  const themeBtn = $('#theme-toggle');
  const updateThemeBtn = () => {
    themeBtn.innerHTML = state.theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  };
  updateThemeBtn();
  themeBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    store.set('theme', state.theme);
    updateThemeBtn();
  });

  // Countdown Pill
  const pill = $('#countdown-pill');
  pill.innerHTML = `⏳ <b>3 Días</b> para el parcial`;
}

function renderNavLink(item) {
  return `
    <a class="nav-link" href="${item.path}" data-path="${item.path}">
      <span class="nav-ico">${item.icon}</span>
      <span>${item.label}</span>
      ${item.badge ? `<span class="pill sm ${item.badge === 'Clave' ? 'pv' : ''}">${item.badge}</span>` : ''}
    </a>
  `;
}

function updateActiveNav(hash) {
  $$('.nav-link').forEach(link => {
    const p = link.dataset.path;
    const active = hash === p || (p !== '#/' && hash.startsWith(p));
    link.classList.toggle('active', active);
  });
  $$('#bottom-nav a').forEach(link => {
    const p = link.dataset.path;
    const active = hash === p || (p !== '#/' && hash.startsWith(p));
    link.classList.toggle('active', active);
  });
  document.body.classList.remove('menu-open');
}

/* =========================================================
   ROUTER & VIEWS
   ========================================================= */
const router = {
  routes: {},
  add(path, handler) { this.routes[path] = handler; },
  navigate() {
    const hash = window.location.hash || '#/';
    updateActiveNav(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Matching exact or parameter routes
    for (const [route, handler] of Object.entries(this.routes)) {
      if (route.includes(':')) {
        const parts = route.split('/');
        const hParts = hash.split('/');
        if (parts.length === hParts.length && parts[1] === hParts[1]) {
          const param = hParts[2];
          handler(param);
          return;
        }
      } else if (route === hash) {
        handler();
        return;
      }
    }
    // Default fallback
    this.routes['#/']();
  }
};

window.addEventListener('hashchange', () => router.navigate());

/* ---------- View: Dashboard ---------- */
router.add('#/', () => {
  $('#topbar-title').textContent = 'English Prep · Panel General';
  const view = $('#view');

  const topics = window.DATA.topics || [];
  const readings = window.DATA.readings || [];
  const oralTopics = window.DATA.oral.topics || [];

  const completedTasks = Object.values(state.planDone).filter(Boolean).length;
  const planPct = Math.round((completedTasks / 9) * 100);

  view.innerHTML = `
    <div class="stack">
      <div class="hero">
        <span class="eyebrow">IES 9008 · Inglés Técnico II</span>
        <h1 class="mt-1">Preparación Integral para el 2º Parcial</h1>
        <p class="muted">Todo el contenido de tus apuntes ordenado pedagógicamente para estudiar en 3 días. Incluye gramática, lecturas de IA, laboratorio de Writing de 100 palabras con voz pasiva y simulador oral.</p>
        <div class="row mt-2">
          <a class="btn lg" href="#/plan">📅 Comenzar Plan de 3 Días</a>
          <a class="btn ghost lg" href="#/exam">🎓 Hacer Simulacro de Examen</a>
        </div>
      </div>

      <div class="grid c3 mt-2">
        <div class="card">
          <div class="card-title"><span class="pill ok">Progreso del Plan</span></div>
          <div class="stat">
            <b>${planPct}%</b>
            <span>${completedTasks} de 9 metas completadas</span>
          </div>
          <div class="bar mt-1"><i style="width:${planPct}%"></i></div>
        </div>

        <div class="card">
          <div class="card-title"><span class="pill pv">Writing 100 Palabras</span></div>
          <div class="stat">
            <b>Passive Voice</b>
            <span>Modelos ensayados + corrector en vivo</span>
          </div>
          <a class="btn ghost sm mt-1" href="#/writing">Abrir Laboratorio ➜</a>
        </div>

        <div class="card">
          <div class="card-title"><span class="pill pc">Examen Oral</span></div>
          <div class="stat">
            <b>Chatbots / Inventores</b>
            <span>6 discursos + audio + preguntas típicas</span>
          </div>
          <a class="btn ghost sm mt-1" href="#/oral">Practicar Oral ➜</a>
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <h2>Temas de Gramática</h2>
          <a class="small" href="#/grammar">Ver todos ➜</a>
        </div>
        <div class="grid c2">
          ${topics.map(t => `
            <a class="card topic-card" href="#/grammar/${t.id}" style="--tc:${t.color}">
              <div class="row">
                <div class="t-ico">${t.icon}</div>
                <div>
                  <span class="pill sm ${t.badge}">${t.tag}</span>
                  <h3 class="mt-0">${t.title}</h3>
                </div>
              </div>
              <p class="muted small">${t.summary}</p>
              <div class="t-foot">
                <span class="small" style="font-weight:600; color:var(--accent-2);">Ver teoría y ejercicios ➜</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <h2>Lecturas Oficiales de Cátedra</h2>
          <a class="small" href="#/readings">Ver lecturas ➜</a>
        </div>
        <div class="grid c2">
          ${readings.map(r => `
            <a class="card" href="#/readings/${r.id}">
              <span class="pill sm">${r.badge}</span>
              <h3 class="mt-1">${r.title}</h3>
              <p class="muted small">${r.subtitle}</p>
              <div class="row between mt-2">
                <span class="tiny muted">${r.exercises.length} actividades</span>
                <span class="small" style="color:var(--accent-2); font-weight:600;">Leer y practicar ➜</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
});

/* ---------- View: 3-Day Study Plan ---------- */
router.add('#/plan', () => {
  $('#topbar-title').textContent = 'Plan de Estudio de 3 Días';
  const view = $('#view');

  const plan = [
    {
      day: 1,
      title: 'Día 1: Pasado Simple, Continuo y Lista de Verbos',
      desc: 'Dominar la diferencia entre acciones terminadas (Simple Past) y acciones en progreso (Past Continuous). Aprender los verbos técnicos y leer "The Evolution of AI".',
      tasks: [
        { id: 't1_1', text: 'Repasar teoría y reglas de Simple Past (-ed e irregulares)', link: '#/grammar/past-simple' },
        { id: 't1_2', text: 'Dominar Past Continuous (was/were + -ing)', link: '#/grammar/past-continuous' },
        { id: 't1_3', text: 'Resolver ejercicios de WHEN vs WHILE (acciones interrumpidas)', link: '#/grammar/past-vs-continuous' },
        { id: 't1_4', text: 'Practicar 20 verbos técnicos y los irregulares clave con Flashcards', link: '#/verbs' },
        { id: 't1_5', text: 'Completar lectura: "The Evolution of Artificial Intelligence"', link: '#/readings/history-of-ai' }
      ]
    },
    {
      day: 2,
      title: 'Día 2: Present Perfect, Since/For y Chatbots',
      desc: 'Comprender cómo el Present Perfect conecta el pasado con el presente. Dominar Just, Yet, Already y Since vs For. Lectura de "Meet Chatbot".',
      tasks: [
        { id: 't2_1', text: 'Estudiar estructura de Present Perfect (have/has + V3)', link: '#/grammar/present-perfect' },
        { id: 't2_2', text: 'Practicar posiciones exactas de JUST, YET y ALREADY', link: '#/grammar/just-yet-already' },
        { id: 't2_3', text: 'Dominar SINCE (punto de inicio) vs FOR (duración)', link: '#/grammar/since-for' },
        { id: 't2_4', text: 'Estudiar cuadro comparativo: Present Perfect vs Simple Past', link: '#/grammar/present-perfect-vs-past-simple' },
        { id: 't2_5', text: 'Resolver actividades oficiales de la lectura: "AI Chatbots"', link: '#/readings/ai-chatbots' }
      ]
    },
    {
      day: 3,
      title: 'Día 3: Voz Pasiva, Writing de 100 Palabras y Simulador Oral',
      desc: 'Día crucial. Transformaciones a voz pasiva, memorizar y redactar el párrafo de 100 palabras con Passive Voice, ensayar el oral sobre inventores o chatbots y rendir el simulacro.',
      tasks: [
        { id: 't3_1', text: 'Dominar Passive Voice en Presente, Pasado y Modales (can be / will be)', link: '#/grammar/passive-voice' },
        { id: 't3_2', text: 'Transformar las 17 oraciones técnicas de software a voz pasiva', link: '#/practice' },
        { id: 't3_3', text: 'Escribir y verificar tu texto de ~100 palabras en el Writing Lab', link: '#/writing' },
        { id: 't3_4', text: 'Elegir tu tema oral (Chatbots o tu inventor favorito) y practicar con el teleprompter', link: '#/oral' },
        { id: 't3_5', text: 'Realizar el Simulacro de Examen Completo de 20 preguntas', link: '#/exam' }
      ]
    }
  ];

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico">📅</div>
        <div>
          <h1>Plan Estratégico de 3 Días</h1>
          <p class="muted">Tildá las tareas a medida que las completes. Tu progreso se guarda automáticamente.</p>
        </div>
      </div>

      <div class="grid">
        ${plan.map(d => `
          <div class="card day-card">
            <div class="row between">
              <div>
                <span class="pill ${d.day === 1 ? 'ps' : (d.day === 2 ? 'pp' : 'pv')}">ETAPA ${d.day}</span>
                <h3 class="mt-1">${d.title}</h3>
              </div>
              <div class="day-num muted">${d.day}</div>
            </div>
            <p class="muted small">${d.desc}</p>
            <div class="divider"></div>
            <div>
              ${d.tasks.map(t => {
                const done = !!state.planDone[t.id];
                return `
                  <label class="task ${done ? 'done' : ''}" data-tid="${t.id}">
                    <input type="checkbox" ${done ? 'checked' : ''}>
                    <span class="task-t">${t.text}</span>
                    <a href="${t.link}">Ir ➜</a>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  $$('.task input', view).forEach(cb => {
    cb.addEventListener('change', e => {
      const parent = cb.closest('.task');
      const tid = parent.dataset.tid;
      state.planDone[tid] = cb.checked;
      parent.classList.toggle('done', cb.checked);
      store.set('plan_done', state.planDone);
      toast(cb.checked ? '¡Excelente avance!' : 'Tarea desmarcada');
    });
  });
});

/* ---------- View: Grammar Directory & Lesson Detail ---------- */
router.add('#/grammar', () => {
  $('#topbar-title').textContent = 'Gramática Oficial · Temas';
  const view = $('#view');
  const topics = window.DATA.topics || [];

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico">📖</div>
        <div>
          <h1>Contenido Gramatical del Parcial</h1>
          <p class="muted">Explicaciones pedagógicas directas, fórmulas claras, cuadros comparativos y ejercicios interactivos extraídos de las guías de clase.</p>
        </div>
      </div>

      <div class="grid c2">
        ${topics.map(t => `
          <a class="card topic-card" href="#/grammar/${t.id}" style="--tc:${t.color}">
            <div class="row">
              <div class="t-ico">${t.icon}</div>
              <div>
                <span class="pill sm ${t.badge}">${t.tag}</span>
                <h3 class="mt-0">${t.title}</h3>
              </div>
            </div>
            <p class="muted small">${t.summary}</p>
            <div class="row between mt-2">
              <span class="tiny muted">${t.exercises.length} ejercicios de práctica</span>
              <span class="small" style="color:var(--accent-2); font-weight:600;">Estudiar tema ➜</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
});

router.add('#/grammar/:id', (id) => {
  const topic = (window.DATA.topics || []).find(t => t.id === id);
  if (!topic) { window.location.hash = '#/grammar'; return; }

  $('#topbar-title').textContent = topic.title;
  const view = $('#view');

  view.innerHTML = `
    <div class="stack">
      <div class="breadcrumb">
        <a href="#/">Inicio</a> <span>/</span>
        <a href="#/grammar">Gramática</a> <span>/</span>
        <span>${topic.title}</span>
      </div>

      <div class="page-head">
        <div class="ph-ico" style="--tc:${topic.color}">${topic.icon}</div>
        <div>
          <span class="pill sm ${topic.badge}">${topic.tag}</span>
          <h1>${topic.title}</h1>
          <p class="muted">${topic.summary}</p>
        </div>
      </div>

      <div class="tabs">
        <button class="tab active" data-tab="theory" type="button">📘 Teoría y Ejemplos</button>
        <button class="tab" data-tab="practice" type="button">✍️ Práctica Interactiva (${topic.exercises.length})</button>
      </div>

      <div id="tab-content">
        <div id="pane-theory" class="card pad-lg">${topic.theory}</div>
        <div id="pane-practice" class="hidden">
          <div id="quiz-mount"></div>
        </div>
      </div>
    </div>
  `;

  const tabs = $$('.tab', view);
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const target = t.dataset.tab;
      if (target === 'theory') {
        $('#pane-theory').classList.remove('hidden');
        $('#pane-practice').classList.add('hidden');
      } else {
        $('#pane-theory').classList.add('hidden');
        $('#pane-practice').classList.remove('hidden');
        // Mount quiz
        const mount = $('#quiz-mount');
        mount.innerHTML = '';
        const quiz = new QuizEngine(mount, topic.exercises, {
          title: `Práctica: ${topic.title}`
        });
        quiz.start();
      }
    });
  });
});

/* ---------- View: Practice Center ---------- */
router.add('#/practice', () => {
  $('#topbar-title').textContent = 'Centro de Práctica';
  const view = $('#view');
  const topics = window.DATA.topics || [];

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico">✍️</div>
        <div>
          <h1>Práctica Interactiva por Tema</h1>
          <p class="muted">Poné a prueba tus conocimientos con ejercicios de opción múltiple, completar espacios y ordenar oraciones.</p>
        </div>
      </div>

      <div class="grid c2">
        ${topics.map(t => `
          <a class="card set-card" href="#/practice/${t.id}">
            <div class="t-ico" style="font-size:1.8rem;">${t.icon}</div>
            <div class="set-body">
              <span class="pill sm ${t.badge}">${t.tag}</span>
              <h4 class="mt-1">${t.title}</h4>
              <p>${t.exercises.length} preguntas interactivas con auto-corrección</p>
            </div>
            <span class="small" style="color:var(--accent-2); font-weight:700;">Empezar ➜</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
});

router.add('#/practice/:id', (id) => {
  const topic = (window.DATA.topics || []).find(t => t.id === id);
  if (!topic) { window.location.hash = '#/practice'; return; }

  $('#topbar-title').textContent = `Práctica: ${topic.title}`;
  const view = $('#view');

  view.innerHTML = `
    <div class="stack">
      <div class="breadcrumb">
        <a href="#/">Inicio</a> <span>/</span>
        <a href="#/practice">Práctica</a> <span>/</span>
        <span>${topic.title}</span>
      </div>

      <div class="page-head">
        <div class="ph-ico">${topic.icon}</div>
        <div>
          <h1>Ejercicios: ${topic.title}</h1>
          <p class="muted">Completá cada consigna y recibí corrección instantánea con explicación.</p>
        </div>
      </div>

      <div id="quiz-mount"></div>
    </div>
  `;

  const quiz = new QuizEngine($('#quiz-mount'), topic.exercises);
  quiz.start();
});

/* ---------- View: Verbs Laboratory ---------- */
router.add('#/verbs', () => {
  $('#topbar-title').textContent = 'Laboratorio de Verbos (IES 9008)';
  const view = $('#view');

  const regular = window.DATA.techRegularVerbs || [];
  const irregular = window.DATA.irregularVerbs || [];
  const all = window.DATA.allVerbs || [];

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico">📋</div>
        <div>
          <h1>Lista Oficial de Verbos (IES 9008)</h1>
          <p class="muted">Los 20 verbos regulares técnicos + más de 70 verbos irregulares de la cátedra con pronunciación en audio y modo tarjeta de memoria.</p>
        </div>
      </div>

      <div class="tabs">
        <button class="tab active" data-tab="table" type="button">📑 Tabla Completa (${all.length})</button>
        <button class="tab" data-tab="flashcards" type="button">🎴 Flashcards 3D</button>
      </div>

      <div id="verbs-pane-table">
        <div class="card">
          <div class="verbs-toolbar">
            <input type="text" class="text-input" id="verb-search" placeholder="🔍 Buscar verbo en inglés o español...">
            <div class="row">
              <button class="btn sm ghost" id="btn-filter-all" type="button">Todos (${all.length})</button>
              <button class="btn sm ghost" id="btn-filter-reg" type="button">Regulares Tech (${regular.length})</button>
              <button class="btn sm ghost" id="btn-filter-irreg" type="button">Irregulares (${irregular.length})</button>
            </div>
            <label class="switch">
              <input type="checkbox" id="test-mode-toggle">
              <span>Modo examen (ocultar pasados)</span>
            </label>
          </div>

          <div class="tbl-wrap">
            <table class="tbl" id="verbs-tbl">
              <thead>
                <tr>
                  <th>Infinitivo</th>
                  <th>Simple Past (V2)</th>
                  <th>Past Participle (V3)</th>
                  <th>Significado en Español</th>
                  <th>Audio</th>
                </tr>
              </thead>
              <tbody id="verbs-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="verbs-pane-fc" class="hidden">
        <div class="card pad-lg">
          <div id="flashcard-mount"></div>
        </div>
      </div>
    </div>
  `;

  // Render verbs table
  let currentFilter = 'all';
  let searchTerm = '';
  let testMode = false;

  const tbody = $('#verbs-tbody');
  const renderRows = () => {
    const q = searchTerm.toLowerCase();
    const filtered = all.filter(v => {
      if (currentFilter === 'regular' && v.type !== 'regular') return false;
      if (currentFilter === 'irregular' && v.type !== 'irregular') return false;
      if (!q) return true;
      return v.inf.toLowerCase().includes(q) || v.past.toLowerCase().includes(q) || v.part.toLowerCase().includes(q) || v.es.toLowerCase().includes(q);
    });

    tbody.innerHTML = filtered.map(v => `
      <tr>
        <td><b>${esc(v.inf)}</b> <span class="pill tiny ${v.type === 'regular' ? 'pc' : 'ps'}">${v.type === 'regular' ? 'Regular' : 'Irregular'}</span></td>
        <td class="${testMode ? 'cell-hidden' : ''}">${esc(v.past)}</td>
        <td class="${testMode ? 'cell-hidden' : ''}">${esc(v.part)}</td>
        <td class="muted">${esc(v.es)}</td>
        <td>${speakBtn(`${v.inf}. ${v.past}. ${v.part}`)}</td>
      </tr>
    `).join('');

    if (testMode) {
      $$('.cell-hidden', tbody).forEach(cell => {
        cell.addEventListener('click', () => cell.classList.toggle('revealed'));
      });
    }
  };

  renderRows();

  $('#verb-search').addEventListener('input', e => {
    searchTerm = e.target.value;
    renderRows();
  });

  $('#btn-filter-all').addEventListener('click', () => { currentFilter = 'all'; renderRows(); });
  $('#btn-filter-reg').addEventListener('click', () => { currentFilter = 'regular'; renderRows(); });
  $('#btn-filter-irreg').addEventListener('click', () => { currentFilter = 'irregular'; renderRows(); });

  $('#test-mode-toggle').addEventListener('change', e => {
    testMode = e.target.checked;
    renderRows();
    toast(testMode ? 'Modo examen activado: hacé clic sobre una celda para revelar la respuesta' : 'Modo normal restaurado');
  });

  // Tabs
  const tabs = $$('.tab', view);
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      if (t.dataset.tab === 'table') {
        $('#verbs-pane-table').classList.remove('hidden');
        $('#verbs-pane-fc').classList.add('hidden');
      } else {
        $('#verbs-pane-table').classList.add('hidden');
        $('#verbs-pane-fc').classList.remove('hidden');
        const fc = new FlashcardViewer($('#flashcard-mount'), all);
        fc.render();
      }
    });
  });
});

/* ---------- View: Reading Comprehensions ---------- */
router.add('#/readings', () => {
  $('#topbar-title').textContent = 'Lecturas Oficiales de Examen';
  const view = $('#view');
  const readings = window.DATA.readings || [];

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico">📰</div>
        <div>
          <h1>Textos Oficiales de Lectura Comprensiva</h1>
          <p class="muted">Textos evaluados en el 2º parcial con preguntas de opción múltiple, True/False y gramática contextual.</p>
        </div>
      </div>

      <div class="grid c2">
        ${readings.map(r => `
          <a class="card set-card" href="#/readings/${r.id}">
            <div class="set-body">
              <span class="pill sm ps">${r.badge}</span>
              <h3 class="mt-1">${r.title}</h3>
              <p class="muted small">${r.subtitle}</p>
              <div class="row between mt-2">
                <span class="tiny muted">${r.exercises.length} actividades</span>
                <span class="small" style="color:var(--accent-2); font-weight:700;">Leer y responder ➜</span>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
});

router.add('#/readings/:id', (id) => {
  const reading = (window.DATA.readings || []).find(r => r.id === id);
  if (!reading) { window.location.hash = '#/readings'; return; }

  $('#topbar-title').textContent = reading.title;
  const view = $('#view');

  view.innerHTML = `
    <div class="stack">
      <div class="breadcrumb">
        <a href="#/">Inicio</a> <span>/</span>
        <a href="#/readings">Lecturas</a> <span>/</span>
        <span>${reading.title}</span>
      </div>

      <div class="page-head">
        <div class="ph-ico">📰</div>
        <div>
          <span class="pill sm ps">${reading.badge}</span>
          <h1>${reading.title}</h1>
          <p class="muted">${reading.subtitle}</p>
        </div>
      </div>

      <div class="card pad-lg">
        <div class="row between mb-2">
          <div class="row">
            <button class="btn sm" id="btn-audio-summary" type="button">🔊 Escuchar Resumen</button>
            <button class="btn sm ghost" id="btn-stop-audio" type="button">⏹️ Detener</button>
          </div>
          <label class="switch">
            <input type="checkbox" id="hl-toggle" checked>
            <span>Resaltar tiempos verbales</span>
          </label>
        </div>

        <div class="legend mb-2">
          <span class="pill sm ps">Simple Past</span>
          <span class="pill sm pc">Past Continuous</span>
          <span class="pill sm pp">Present Perfect</span>
          <span class="pill sm pv">Passive Voice</span>
        </div>

        <div id="reading-body" style="font-size:1.06rem; line-height:1.9;">${reading.text}</div>
      </div>

      <div class="card pad-lg">
        <h2>Actividades de Comprensión y Gramática</h2>
        <div id="reading-quiz-mount"></div>
      </div>
    </div>
  `;

  $('#btn-audio-summary').addEventListener('click', () => {
    tts.speak(reading.audioSummary);
    toast('Reproduciendo resumen en inglés...');
  });
  $('#btn-stop-audio').addEventListener('click', () => {
    tts.stop();
  });

  const rBody = $('#reading-body');
  $('#hl-toggle').addEventListener('change', e => {
    rBody.classList.toggle('plain-mode', !e.target.checked);
  });

  const quiz = new QuizEngine($('#reading-quiz-mount'), reading.exercises);
  quiz.start();
});

/* ---------- View: 100-word Writing Lab ---------- */
router.add('#/writing', () => {
  $('#topbar-title').textContent = 'Writing Lab · 100 Palabras';
  const view = $('#view');
  const wData = window.DATA.writing;

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico" style="--tc:var(--c-pv)">✍️</div>
        <div>
          <span class="pill sm pv">Evaluación Obligatoria</span>
          <h1>${wData.title}</h1>
          <p class="muted">${wData.prompt}</p>
        </div>
      </div>

      <div class="grid c2">
        <div class="card pad-lg">
          <div class="row between mb-1">
            <h3>Tu Borrador de Escritura</h3>
            <button class="btn sm ghost" id="btn-clear-writing" type="button">🗑️ Limpiar</button>
          </div>

          <textarea class="text-input editor" id="writing-input" placeholder="Escribí aquí tu párrafo de aproximadamente 100 palabras en inglés... Podés empezar usando los modelos de la derecha.">${esc(state.writingDraft)}</textarea>

          <div class="wc-bar">
            <div class="wc-count" id="wc-display">0 palabras</div>
            <div class="bar"><i id="wc-bar-fill" style="width:0%"></i></div>
            <span class="pill" id="wc-pill">Objetivo: 85 - 115</span>
          </div>

          <div class="mt-2">
            <h4>Checklist Automático de Evaluación</h4>
            <ul class="check-list">
              <li id="ck-wc"><span class="ck">1</span> <span>Extensión aproximada (entre 85 y 115 palabras)</span></li>
              <li id="ck-pv"><span class="ck">2</span> <span>Uso obligatorio de <b>Passive Voice</b> (mínimo 3 oraciones con be + participio)</span></li>
              <li id="ck-conn"><span class="ck">3</span> <span>Conectores cronológicos (First, Centuries later, Finally, Nowadays, etc.)</span></li>
            </ul>
          </div>

          <div class="mt-2 row">
            <button class="btn sm" id="btn-speak-my-text" type="button">🔊 Escuchar mi texto</button>
            <button class="btn sm ghost" id="btn-copy-my-text" type="button">📋 Copiar al portapapeles</button>
          </div>
        </div>

        <div class="stack">
          <div class="card">
            <h3>Modelos Calibrados de ~100 Palabras</h3>
            <p class="muted small">Listos para usar o memorizar. Cada uno tiene exactamente la extensión solicitada y usa la voz pasiva de forma ejemplar.</p>

            <div class="stack mt-2">
              ${wData.models.map(m => `
                <div class="card flat" style="background:var(--surface-2); border:1px solid var(--border);">
                  <div class="row between">
                    <b>${m.title}</b>
                    <span class="pill sm pv">${m.wordCount} palabras</span>
                  </div>
                  <p class="small muted mt-1">${m.description}</p>
                  <div class="model-text mt-1" style="font-size:.95rem; line-height:1.7;">${mk(m.text)}</div>
                  <div class="row between mt-2">
                    <span class="tiny muted">${m.passiveCount} verbos en voz pasiva</span>
                    <div class="row">
                      <button class="btn sm ghost" data-use-model="${m.id}" type="button">Usar en mi editor ⬇</button>
                      ${speakBtn(m.text)}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card">
            <h4>Frases y Conectores Recomendados</h4>
            <div class="connectors mt-1">
              ${wData.connectors.map(c => `<span>${c.word}</span>`).join('')}
            </div>
            <h4 class="mt-2">Formas Pasivas Habituales</h4>
            <div class="connectors mt-1">
              ${wData.passivePhrases.map(p => `<span>${p.en}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const input = $('#writing-input');
  const wcDisplay = $('#wc-display');
  const wcBarFill = $('#wc-bar-fill');
  const wcPill = $('#wc-pill');
  const ckWC = $('#ck-wc');
  const ckPV = $('#ck-pv');
  const ckConn = $('#ck-conn');

  const analyzeWriting = () => {
    const txt = input.value;
    state.writingDraft = txt;
    store.set('writing_draft', txt);

    const words = wordCount(txt);
    wcDisplay.textContent = `${words} palabras`;

    const pct = Math.min(100, Math.round((words / 100) * 100));
    wcBarFill.style.width = `${pct}%`;

    // Word count check
    if (words >= 85 && words <= 115) {
      wcPill.className = 'pill ok';
      wcPill.textContent = '¡Extensión Perfecta! (85-115)';
      ckWC.classList.add('done');
    } else if (words < 85) {
      wcPill.className = 'pill';
      wcPill.textContent = `Faltan ${85 - words} palabras`;
      ckWC.classList.remove('done');
    } else {
      wcPill.className = 'pill bad';
      wcPill.textContent = `Te pasaste por ${words - 115} palabras`;
      ckWC.classList.remove('done');
    }

    // Passive voice detection
    // Match forms: am/is/are/was/were/been/being + participle
    const pvMatches = txt.match(/\b(was|were|is|are|been|being)\s+([a-zA-Z]+ed|built|made|written|discovered|invented|created|developed|patented|used|trained|designed|sent|sold|eaten|powered|improved|known|born)\b/gi) || [];
    const pvCount = pvMatches.length;
    if (pvCount >= 3) {
      ckPV.classList.add('done');
      ckPV.querySelector('span:last-child').innerHTML = `Uso de <b>Passive Voice</b> detectado (${pvCount} oraciones ✅)`;
    } else {
      ckPV.classList.remove('done');
      ckPV.querySelector('span:last-child').innerHTML = `Uso de <b>Passive Voice</b> (${pvCount} de 3 mínimas requeridas)`;
    }

    // Connectors detection
    const connWords = ['first', 'initially', 'later', 'centuries later', 'afterwards', 'finally', 'nowadays', 'today', 'in the', 'in conclusion'];
    const connFound = connWords.some(c => txt.toLowerCase().includes(c));
    ckConn.classList.toggle('done', connFound);
  };

  input.addEventListener('input', analyzeWriting);
  analyzeWriting();

  $('#btn-clear-writing').addEventListener('click', () => {
    if (confirm('¿Querés borrar el texto actual?')) {
      input.value = '';
      analyzeWriting();
    }
  });

  $('#btn-speak-my-text').addEventListener('click', () => {
    if (!input.value.trim()) { toast('Escribí algo primero.'); return; }
    tts.speak(input.value);
    toast('Leyendo tu texto en inglés...');
  });

  $('#btn-copy-my-text').addEventListener('click', () => {
    if (!input.value.trim()) { toast('No hay texto para copiar.'); return; }
    navigator.clipboard.writeText(input.value);
    toast('Texto copiado al portapapeles');
  });

  $$('[data-use-model]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mid = btn.dataset.useModel;
      const model = wData.models.find(m => m.id === mid);
      if (model) {
        input.value = stripMk(model.text);
        analyzeWriting();
        toast('Modelo cargado en tu editor');
        input.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

/* ---------- View: Oral Defense Simulator ---------- */
router.add('#/oral', () => {
  $('#topbar-title').textContent = 'Simulador de Examen Oral';
  const view = $('#view');
  const oral = window.DATA.oral;

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico" style="--tc:var(--c-pc)">🎤</div>
        <div>
          <span class="pill sm pc">Examen Oral Oficial</span>
          <h1>Simulador Oral: Chatbots e Inventores</h1>
          <p class="muted">Preparate para rendir el oral con discursos fluidos de 1.5 a 2 minutos, guía fonética, teleprompter y simulador de preguntas del docente.</p>
        </div>
      </div>

      <div class="card">
        <h3>Consejos Pedagógicos para el Oral</h3>
        <div class="grid c3 mt-1">
          ${oral.tips.map(t => `
            <div class="callout tip">
              <div>
                <b>${t.title}</b>
                <p class="small muted mt-0">${t.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <h2>Elegí tu Tema para el Oral</h2>
        </div>
        <div class="grid c2">
          ${oral.topics.map(t => `
            <a class="card person-card" href="#/oral/${t.id}">
              <div class="avatar">${t.avatar}</div>
              <div>
                <span class="pill sm">${t.category}</span>
                <h3 class="mt-1 mb-0">${t.name}</h3>
                <p class="muted small">${t.shortDesc}</p>
                <span class="small" style="color:var(--accent-2); font-weight:700;">Ensayar este tema ➜</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
});

router.add('#/oral/:id', (id) => {
  const topic = (window.DATA.oral.topics || []).find(t => t.id === id);
  if (!topic) { window.location.hash = '#/oral'; return; }

  $('#topbar-title').textContent = `Oral: ${topic.name}`;
  const view = $('#view');

  view.innerHTML = `
    <div class="stack">
      <div class="breadcrumb">
        <a href="#/">Inicio</a> <span>/</span>
        <a href="#/oral">Oral</a> <span>/</span>
        <span>${topic.name}</span>
      </div>

      <div class="page-head">
        <div class="avatar lg">${topic.avatar}</div>
        <div>
          <span class="pill sm pc">${topic.category}</span>
          <h1>${topic.name}</h1>
          <p class="muted">${topic.shortDesc}</p>
        </div>
      </div>

      <div class="facts">
        ${Object.entries(topic.facts).map(([k, v]) => `
          <div class="fact">
            <small>${k}</small>
            <b>${v}</b>
          </div>
        `).join('')}
      </div>

      <div class="tabs">
        <button class="tab active" data-tab="script" type="button">📜 Discurso Completo</button>
        <button class="tab" data-tab="phonetics" type="button">🗣️ Fonética y Pronunciación</button>
        <button class="tab" data-tab="qa" type="button">❓ Preguntas del Docente (Q&A)</button>
      </div>

      <div id="oral-pane-script">
        <div class="card pad-lg">
          <div class="row between mb-2">
            <div class="row">
              <button class="btn sm" id="btn-oral-audio" type="button">🔊 Escuchar Discurso con Audio Nativo</button>
              <button class="btn sm ghost" id="btn-oral-teleprompter" type="button">📺 Modo Teleprompter</button>
            </div>
            <button class="btn sm ghost bad" id="btn-oral-stop" type="button">⏹️ Detener</button>
          </div>

          <div class="card flat mb-2" style="background:var(--surface-2); border:1px solid var(--border);">
            <div class="row between">
              <div class="row">
                <button class="btn sm ok" id="btn-start-rec" type="button">🎙️ Practicar con mi Micrófono</button>
                <span id="rec-status" class="small muted">Hacé clic para hablar en voz alta y comprobar tu fluidez</span>
              </div>
            </div>
            <div class="transcript mt-1 hidden" id="rec-transcript"></div>
          </div>

          <div class="script" id="oral-script-body">
            ${topic.script.split('\n\n').map(p => `<p>${esc(p)}</p>`).join('')}
          </div>
        </div>
      </div>

      <div id="oral-pane-phonetics" class="hidden">
        <div class="card pad-lg">
          <h3>Palabras Difíciles de Pronunciar</h3>
          <p class="muted">Escuchá la pronunciación nativa y mirá cómo descomponer las sílabas:</p>
          <div class="grid c2 mt-2">
            ${topic.phonetics.map(p => `
              <div class="card flat" style="background:var(--surface-2); border:1px solid var(--border);">
                <div class="row between">
                  <b style="font-size:1.15rem">${p.word}</b>
                  ${speakBtn(p.word)}
                </div>
                <div class="muted small">${p.ipa}</div>
                <div class="callout tip mt-1">
                  <div><b>Cómo decirlo:</b> ${p.tip}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="oral-pane-qa" class="hidden">
        <div class="card pad-lg">
          <h3>Preguntas Frecuentes del Docente en el Parcial</h3>
          <p class="muted">Hacé clic en cada pregunta para ensayar tu respuesta:</p>
          <div class="stack mt-2">
            ${topic.qa.map(item => `
              <div class="qa-item">
                <button class="qa-q" type="button">
                  <span>❓ ${item.q}</span>
                  <span class="chev">▼</span>
                </button>
                <div class="qa-a">
                  <div class="callout info">
                    <div>
                      <b>Respuesta recomendada:</b>
                      <p>${item.a}</p>
                      <div class="mt-1">${speakBtn(item.a)}</div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Tabs
  const tabs = $$('.tab', view);
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      $('#oral-pane-script').classList.toggle('hidden', t.dataset.tab !== 'script');
      $('#oral-pane-phonetics').classList.toggle('hidden', t.dataset.tab !== 'phonetics');
      $('#oral-pane-qa').classList.toggle('hidden', t.dataset.tab !== 'qa');
    });
  });

  // Audio speech
  $('#btn-oral-audio').addEventListener('click', () => {
    tts.speak(topic.script, { rate: 0.9 });
    toast('Reproduciendo discurso oral...');
  });
  $('#btn-oral-stop').addEventListener('click', () => {
    tts.stop();
  });

  // Teleprompter
  $('#btn-oral-teleprompter').addEventListener('click', () => {
    launchTeleprompter(topic.name, topic.script);
  });

  // Speech Recognition practice
  const recBtn = $('#btn-start-rec');
  const recStatus = $('#rec-status');
  const recTrans = $('#rec-transcript');
  const recognizer = getRecognizer();

  if (recognizer) {
    let recognizing = false;
    recognizer.onstart = () => {
      recognizing = true;
      recBtn.textContent = '⏹️ Detener micrófono';
      recBtn.className = 'btn sm bad';
      recStatus.innerHTML = '<span class="mic-live">Escuchando tu voz en inglés...</span>';
      recTrans.classList.remove('hidden');
      recTrans.textContent = '';
    };
    recognizer.onresult = (e) => {
      let interim = '';
      let final = '';
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      recTrans.textContent = final || interim;
    };
    recognizer.onerror = (e) => {
      recStatus.textContent = `Error: ${e.error}`;
      recognizing = false;
    };
    recognizer.onend = () => {
      recognizing = false;
      recBtn.textContent = '🎙️ Practicar con mi Micrófono';
      recBtn.className = 'btn sm ok';
      recStatus.textContent = 'Grabación finalizada. ¡Buen intento!';
    };

    recBtn.addEventListener('click', () => {
      if (recognizing) recognizer.stop();
      else recognizer.start();
    });
  } else {
    recBtn.disabled = true;
    recStatus.textContent = '(El reconocimiento de voz requiere Google Chrome o Microsoft Edge)';
  }

  // Accordion for QA
  $$('.qa-q', view).forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.qa-item').classList.toggle('open');
    });
  });
});

function launchTeleprompter(title, scriptText) {
  const modal = document.createElement('div');
  modal.className = 'teleprompter';
  modal.innerHTML = `
    <div class="row between">
      <h2>${title} · Teleprompter</h2>
      <button class="btn sm ghost" id="tp-close" type="button">✕ Salir</button>
    </div>
    <div class="tp-body" id="tp-content">
      ${scriptText.split('\n\n').map(p => `<p>${esc(p)}</p>`).join('')}
    </div>
    <div class="tp-bar">
      <button class="btn sm" id="tp-toggle-scroll" type="button">▶ Iniciar Desplazamiento</button>
      <button class="btn sm ghost" id="tp-speed-down" type="button">🐢 Más lento</button>
      <button class="btn sm ghost" id="tp-speed-up" type="button">🐇 Más rápido</button>
      <div class="spacer"></div>
      <div class="timer-big" id="tp-timer">00:00</div>
    </div>
  `;
  document.body.appendChild(modal);

  const bodyEl = $('#tp-content', modal);
  let scrolling = false;
  let speed = 1.2;
  let scrollInterval;
  let sec = 0;
  let timerInterval = setInterval(() => {
    if (scrolling) {
      sec++;
      $('#tp-timer', modal).textContent = fmtTime(sec);
    }
  }, 1000);

  const startScroll = () => {
    scrolling = true;
    $('#tp-toggle-scroll', modal).textContent = '⏸ Pausar';
    scrollInterval = setInterval(() => {
      bodyEl.scrollTop += speed;
    }, 30);
  };

  const stopScroll = () => {
    scrolling = false;
    $('#tp-toggle-scroll', modal).textContent = '▶ Reanudar';
    clearInterval(scrollInterval);
  };

  $('#tp-toggle-scroll', modal).addEventListener('click', () => {
    if (scrolling) stopScroll();
    else startScroll();
  });

  $('#tp-speed-up', modal).addEventListener('click', () => { speed += 0.5; toast(`Velocidad: ${speed.toFixed(1)}x`); });
  $('#tp-speed-down', modal).addEventListener('click', () => { speed = Math.max(0.4, speed - 0.4); toast(`Velocidad: ${speed.toFixed(1)}x`); });

  $('#tp-close', modal).addEventListener('click', () => {
    stopScroll();
    clearInterval(timerInterval);
    modal.remove();
  });
}

/* ---------- View: Full Mock Exam (20 questions) ---------- */
router.add('#/exam', () => {
  $('#topbar-title').textContent = 'Simulacro de Examen';
  const view = $('#view');

  // Collect 20 balanced questions from all topics
  const allQs = [];
  (window.DATA.topics || []).forEach(t => allQs.push(...t.exercises));
  (window.DATA.readings || []).forEach(r => allQs.push(...r.exercises));

  const examQuestions = sample(allQs, Math.min(20, allQs.length));

  view.innerHTML = `
    <div class="stack">
      <div class="page-head">
        <div class="ph-ico" style="--tc:var(--c-warn)">🎓</div>
        <div>
          <span class="pill sm ok">Examen de Prueba</span>
          <h1>Simulacro Completo de 2º Parcial</h1>
          <p class="muted">20 preguntas aleatorias que cubren Past Simple, Past Continuous, Present Perfect, Since/For, Adverbios, Passive Voice y lecturas de IA.</p>
        </div>
      </div>

      <div id="exam-quiz-mount"></div>
    </div>
  `;

  const quiz = new QuizEngine($('#exam-quiz-mount'), examQuestions, {
    title: 'Simulacro de Parcial',
    onComplete: (res) => {
      state.examScores.push({ date: new Date().toISOString(), score: res.score, total: res.total, pct: res.pct });
      store.set('exam_scores', state.examScores);
    }
  });
  quiz.start();
});

// App Startup
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  router.navigate();
});
