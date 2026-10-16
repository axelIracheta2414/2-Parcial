/* =========================================================
   Data: Present Perfect, Just / Yet / Already, Since / For
   & Comparison with Simple Past
   ========================================================= */
window.DATA = window.DATA || {};
window.DATA.topics = window.DATA.topics || [];

window.DATA.topics.push({
  id: 'present-perfect',
  title: 'Present Perfect',
  category: 'Gramática',
  tag: 'Present Perfect',
  badge: 'pp',
  color: 'var(--c-pp)',
  icon: '🔗',
  summary: 'Conecta acciones del pasado con el presente. Acciones recientes, resultados y experiencias de vida.',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Definición oficial IES 9008:</b>
          <p>Las oraciones en <b>Present Perfect</b> utilizan dos elementos: el auxiliar <b>HAVE o HAS + Past Participle</b> (tercera columna de verbos). Se utiliza para acciones pasadas conectadas con el presente o cuando el marco de tiempo no está cerrado.</p>
        </div>
      </div>

      <h3>1. Estructura</h3>
      <div class="formula">
        <span class="fx k">Sujeto</span>
        <span class="op">+</span>
        <span class="fx k">HAVE / HAS</span>
        <span class="op">+</span>
        <span class="fx">Past Participle (V3 / -ed)</span>
        <span class="op">+</span>
        <span class="fx">Complemento</span>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Sujeto</th><th>Afirmativa</th><th>Negativa</th><th>Interrogativa</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>I / You / We / They</b></td>
              <td>I [pp:have bought] / I've bought</td>
              <td>I <b>haven't bought</b></td>
              <td><b>Have</b> you bought?</td>
            </tr>
            <tr>
              <td><b>He / She / It</b></td>
              <td>He [pp:has bought] / He's bought</td>
              <td>He <b>hasn't bought</b></td>
              <td><b>Has</b> he bought?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout tip">
        <span class="c-ico">💻</span>
        <div>
          <b>Contexto de Informática (IES 9008):</b>
          <p>• <i>"I've emailed the manager."</i><br>
          • <i>"The computer has crashed three times today."</i> (el día de hoy aún no terminó)<br>
          • <i>"They've re-installed the software."</i><br>
          • <i>"We have worked together for 5 years."</i></p>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'pp-1',
      type: 'blank',
      text: 'I [blank] (email) the manager.',
      answer: ["have emailed", "'ve emailed"],
      explanation: 'Con "I" usamos have + participio regular emailed.'
    },
    {
      id: 'pp-2',
      type: 'blank',
      text: 'She [blank] (restart) the computer.',
      answer: ["has restarted", "'s restarted"],
      explanation: 'Con "She" usamos has + restarted.'
    },
    {
      id: 'pp-3',
      type: 'blank',
      text: 'The computer [blank] (crash) three times today.',
      answer: ["has crashed", "'s crashed"],
      explanation: 'The computer = it ➜ has crashed.'
    },
    {
      id: 'pp-4',
      type: 'blank',
      text: 'We [blank] (work) together for 5 years.',
      answer: ["have worked", "'ve worked"],
      explanation: 'We + have worked.'
    },
    {
      id: 'pp-5',
      type: 'blank',
      text: 'You [blank] (solve) the problem.',
      answer: ["have solved", "'ve solved"],
      explanation: 'You + have solved.'
    },
    {
      id: 'pp-6',
      type: 'blank',
      text: '[blank] you [blank] (restart) your computer? – Yes, I have.',
      answer: 'Have / restarted',
      explanation: 'Pregunta: Have you restarted...?'
    },
    {
      id: 'pp-7',
      type: 'blank',
      text: '[blank] she [blank] (finish) her exams? – Yes, she has.',
      answer: 'Has / finished',
      explanation: 'Pregunta con "she": Has she finished...?'
    }
  ]
});

window.DATA.topics.push({
  id: 'just-yet-already',
  title: 'Just, Yet & Already',
  category: 'Gramática',
  tag: 'Adverbios Clave',
  badge: 'pp',
  color: 'var(--c-pp)',
  icon: '⏱️',
  summary: 'Posición y uso exacto de Just, Yet y Already en Present Perfect.',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Reglas Oficiales IES 9008:</b>
          <p>Tres adverbios esenciales con reglas de posición fija en la oración:</p>
        </div>
      </div>

      <h3>1. JUST (Acaba de ocurrir)</h3>
      <p>Indica que la acción ocurrió hace un instante muy breve. Se ubica <b>entre el auxiliar (have/has) y el verbo participio</b>.</p>
      <div class="formula">
        <span class="fx">Sujeto</span> <span class="op">+</span>
        <span class="fx k">have / has</span> <span class="op">+</span>
        <span class="fx k">JUST</span> <span class="op">+</span>
        <span class="fx">Past Participle</span>
      </div>
      <p><i>"Where's George? – He [pp:has [ad:just] woken up]."</i> (¿Dónde está George? – Se acaba de despertar).</p>

      <h3>2. ALREADY (Ya ocurrió - antes de lo esperado)</h3>
      <p>Se usa casi siempre en <b>oraciones afirmativas</b>. Se coloca entre el auxiliar y el verbo principal.</p>
      <div class="formula">
        <span class="fx">Sujeto</span> <span class="op">+</span>
        <span class="fx k">have / has</span> <span class="op">+</span>
        <span class="fx k">ALREADY</span> <span class="op">+</span>
        <span class="fx">Past Participle</span>
      </div>
      <p>• <i>"He has [ad:already] finished the programming."</i><br>
      • <i>"The computer specialist has [ad:already] solved the problem."</i><br>
      • <i>"I have [ad:already] entered my username and password."</i></p>

      <h3>3. YET (Todavía / Aún / Ya en preguntas)</h3>
      <p>Se utiliza en <b>oraciones negativas</b> y en <b>preguntas</b>. Va SIEMPRE <b>al final de la oración</b>.</p>
      <div class="compare">
        <div>
          <h4>Negativa (= todavía no)</h4>
          <p><i>"We haven't arrived [ad:yet]."</i></p>
          <p><i>"The email hasn't arrived [ad:yet]."</i></p>
          <p><i>"The printer hasn't stopped working [ad:yet]."</i></p>
        </div>
        <div>
          <h4>Interrogativa (= ¿ya?)</h4>
          <p><i>"Have you read it [ad:yet]?"</i></p>
          <p><i>"Has she switched off the computer [ad:yet]?"</i></p>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'jya-1',
      type: 'blank',
      text: 'Transformá a negativa con YET: "I\'ve finished the check-up." ➜ I [blank] yet.',
      answer: ["haven't finished the check-up", "have not finished the check-up"],
      explanation: 'Para la negativa usamos haven\'t finished the check-up + yet.'
    },
    {
      id: 'jya-2',
      type: 'blank',
      text: 'Transformá a negativa con YET: "The email has arrived." ➜ The email [blank] yet.',
      answer: ["hasn't arrived", "has not arrived"],
      explanation: 'The email = it ➜ hasn\'t arrived yet.'
    },
    {
      id: 'jya-3',
      type: 'blank',
      text: 'Transformá a negativa con YET: "They\'ve done the work." ➜ They [blank] yet.',
      answer: ["haven't done the work", "have not done the work"],
      explanation: 'They haven\'t done the work yet.'
    },
    {
      id: 'jya-4',
      type: 'blank',
      text: 'He [blank] (already / finish) the programming.',
      answer: ["has already finished", "'s already finished"],
      explanation: 'Posición de already: has + already + finished.'
    },
    {
      id: 'jya-5',
      type: 'blank',
      text: 'The computer specialist [blank] (already / solve) the problem with my laptop.',
      answer: ["has already solved", "'s already solved"],
      explanation: 'The computer specialist = he/she ➜ has already solved.'
    },
    {
      id: 'jya-6',
      type: 'mc',
      text: '¿Dónde se coloca "YET" en una oración en inglés?',
      options: [
        'Siempre al final de la oración (en preguntas y negaciones).',
        'Entre el sujeto y el auxiliar have/has.',
        'Entre el auxiliar have/has y el verbo principal.',
        'Solo al principio de la pregunta.'
      ],
      correct: 0,
      explanation: 'Yet siempre va al final: "We haven\'t finished yet" / "Have you called him yet?".'
    },
    {
      id: 'jya-7',
      type: 'order',
      text: 'Ordená la pregunta con YET:',
      words: ['have', 'you', 'read', 'the', 'documentation', 'yet', '?'],
      correct: 'have you read the documentation yet ?',
      explanation: 'Have you read the documentation yet?'
    }
  ]
});

window.DATA.topics.push({
  id: 'since-for',
  title: 'Since vs For',
  category: 'Gramática',
  tag: 'Since / For',
  badge: 'sf',
  color: 'var(--c-sf)',
  icon: '📅',
  summary: 'Diferencia exacta entre períodos (for) y momentos de inicio específicos (since).',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Explicación IES 9008 Manuel Belgrano:</b>
          <p>Ambas preposiciones responden a la pregunta <b>"How long...?"</b> (¿Cuánto tiempo hace que...?), pero apuntan a conceptos distintos:</p>
        </div>
      </div>

      <div class="compare">
        <div>
          <h4>FOR (= durante / por)</h4>
          <p>Se usa para expresar un <b>período / duración de tiempo</b> (cuántos minutos, horas, días, meses, años).</p>
          <div class="formula"><span class="fx k">FOR</span> <span class="op">+</span> <span class="fx">Cantidad de tiempo</span></div>
          <p><i>"They have lived in Paris [sf:for] ten years."</i></p>
          <ul class="ex-list">
            <li>for twenty minutes</li>
            <li>for six months</li>
            <li>for an hour</li>
            <li>for 5 years</li>
            <li>for a long time</li>
          </ul>
        </div>
        <div>
          <h4>SINCE (= desde)</h4>
          <p>Indica el <b>punto o momento exacto en que inició la acción</b> en el pasado.</p>
          <div class="formula"><span class="fx k">SINCE</span> <span class="op">+</span> <span class="fx">Punto de inicio específico</span></div>
          <p><i>"My brother has been sick [sf:since] Friday."</i></p>
          <ul class="ex-list">
            <li>since April</li>
            <li>since last Saturday</li>
            <li>since Christmas</li>
            <li>since 2 o'clock</li>
            <li>since 1998 / since yesterday</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'sf-1',
      type: 'mc',
      text: 'Completá la expresión: "........... twenty minutes"',
      options: ['for', 'since'],
      correct: 0,
      explanation: 'Twenty minutes es una duración de tiempo ➜ for twenty minutes.'
    },
    {
      id: 'sf-2',
      type: 'mc',
      text: 'Completá la expresión: "........... six months"',
      options: ['for', 'since'],
      correct: 0,
      explanation: 'Six months es un período ➜ for six months.'
    },
    {
      id: 'sf-3',
      type: 'mc',
      text: 'Completá la expresión: "........... last Saturday"',
      options: ['since', 'for'],
      correct: 0,
      explanation: 'Last Saturday es un momento concreto de inicio ➜ since last Saturday.'
    },
    {
      id: 'sf-4',
      type: 'mc',
      text: 'Completá la expresión: "........... an hour"',
      options: ['for', 'since'],
      correct: 0,
      explanation: 'An hour es una duración ➜ for an hour.'
    },
    {
      id: 'sf-5',
      type: 'mc',
      text: 'Completá la expresión: "........... Christmas"',
      options: ['since', 'for'],
      correct: 0,
      explanation: 'Christmas es una fecha/evento específico ➜ since Christmas.'
    },
    {
      id: 'sf-6',
      type: 'mc',
      text: 'Completá la expresión: "........... 2 o\'clock"',
      options: ['since', 'for'],
      correct: 0,
      explanation: '2 o\'clock es una hora exacta de partida ➜ since 2 o\'clock.'
    },
    {
      id: 'sf-7',
      type: 'blank',
      text: 'Since its creation, Meet Chatbot [blank] (help) students across the world.',
      answer: ["has helped", "'s helped"],
      explanation: 'Desde su creación (since its creation) ➜ Present Perfect: has helped.'
    }
  ]
});

window.DATA.topics.push({
  id: 'present-perfect-vs-past-simple',
  title: 'Present Perfect vs Simple Past',
  category: 'Gramática',
  tag: 'PP vs Simple Past',
  badge: 'pp',
  color: 'var(--c-pp)',
  icon: '⚖️',
  summary: 'Cuadro comparativo exacto de IES 9008: acciones con impacto actual vs período cerrado.',
  theory: `
    <div class="lesson">
      <div class="callout exam">
        <span class="c-ico">🔥</span>
        <div>
          <b>Cuadro Oficial de Examen IES 9008</b>
          <p>Este cuadro se toma textual en la mesa de examen para evaluar la diferencia conceptual:</p>
        </div>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Aspecto</th><th>Present Perfect</th><th>Simple Past</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Uso Principal</b></td>
              <td>Acciones pasadas conectadas o con impacto en el presente.</td>
              <td>Acciones completadas en un marco de tiempo pasado específico.</td>
            </tr>
            <tr>
              <td><b>Marco Temporal</b></td>
              <td>No especificado, inacabado o abierto.</td>
              <td>Definido, específico o completamente terminado.</td>
            </tr>
            <tr>
              <td><b>Estructura Afirmativa</b></td>
              <td>Sujeto + <b>have / has + Past Participle</b> (e.g., <i>I have eaten</i>)</td>
              <td>Sujeto + <b>Past Form (-ed / irregular)</b> (e.g., <i>I ate</i>)</td>
            </tr>
            <tr>
              <td><b>Expresiones de Tiempo</b></td>
              <td>ever, never, already, yet, just, since, for, so far, recently</td>
              <td>yesterday, last night/week, ago, in 2010, when...</td>
            </tr>
            <tr>
              <td><b>Ejemplo de Experiencia</b></td>
              <td><i>"I have visited Paris twice."</i><br><small class="muted">(En mi vida; aún puedo volver a ir)</small></td>
              <td><i>"I visited Paris in 2019."</i><br><small class="muted">(Ocurrió en 2019; tiempo finalizado)</small></td>
            </tr>
            <tr>
              <td><b>Ejemplo de Resultado</b></td>
              <td><i>"I have lost my keys."</i><br><small class="muted">(Las perdí y <u>ahora no las tengo</u>)</small></td>
              <td><i>"I lost my keys yesterday, but I found them."</i><br><small class="muted">(El evento empezó y terminó ayer)</small></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'pps-1',
      type: 'mc',
      text: 'Which sentence describes an action that started in the past and continues to be relevant today?',
      options: [
        'Developers have trained this system on millions of text files.',
        'Meet Chatbot is a versatile digital assistant.',
        'Verifying its information remains essential.',
        'The chatbot works on computers.'
      ],
      correct: 0,
      explanation: 'Pregunta textual del parcial: "Developers have trained this system..." usa Present Perfect para acción relevante en el presente.'
    },
    {
      id: 'pps-2',
      type: 'mc',
      text: '"I [lost / have lost] my laptop yesterday." ¿Cuál es la opción correcta?',
      options: ['lost', 'have lost'],
      correct: 0,
      explanation: '"yesterday" define un marco de tiempo cerrado en el pasado, por lo tanto requiere Simple Past (lost).'
    },
    {
      id: 'pps-3',
      type: 'mc',
      text: '"Look! I [lost / have lost] my security token. I cannot log into the server right now."',
      options: ['have lost', 'lost'],
      correct: 0,
      explanation: 'El resultado impacta directamente en el presente (no puedo ingresar ahora) ➜ Present Perfect: have lost.'
    },
    {
      id: 'pps-4',
      type: 'blank',
      text: 'Alexander Fleming [blank] (discover) penicillin in 1928, but it [blank] (save) millions of lives since then.',
      answer: ['discovered / has saved', 'discovered/has saved'],
      explanation: 'En 1928 es Simple Past (discovered). "Since then" requiere Present Perfect (has saved).'
    }
  ]
});
