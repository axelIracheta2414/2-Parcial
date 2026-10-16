/* =========================================================
   Data: Past Simple, Past Continuous & Comparison
   Extracted & expanded from IES 9008 class materials
   ========================================================= */
window.DATA = window.DATA || {};
window.DATA.topics = window.DATA.topics || [];

window.DATA.topics.push({
  id: 'past-simple',
  title: 'Simple Past',
  category: 'Gramática',
  tag: 'Past Simple',
  badge: 'ps',
  color: 'var(--c-ps)',
  icon: '⏱️',
  summary: 'Acciones finalizadas en un momento específico del pasado. Verbos regulares (-ed) e irregulares.',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Definición oficial IES 9008:</b>
          <p>The simple past is a verb tense that is used to talk about things that happened or existed before now. The simple past tense emphasizes that the action is <b>finished</b>.</p>
        </div>
      </div>

      <h3>1. Estructura y Reglas</h3>
      <div class="formula">
        <span class="fx k">Sujeto</span>
        <span class="op">+</span>
        <span class="fx">Verbo en Pasado (-ed / Irregular)</span>
        <span class="op">+</span>
        <span class="fx">Complemento</span>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Forma</th><th>Estructura</th><th>Ejemplo Afirmativo</th><th>Ejemplo Negativo / Pregunta</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Regular (-ed)</b></td>
              <td>Verbo base + <code>-ed</code> / <code>-d</code></td>
              <td>[ps:He travelled] by plane.</td>
              <td>He <b>didn't travel</b> by plane.</td>
            </tr>
            <tr>
              <td><b>Irregular</b></td>
              <td>Forma propia (2ª columna)</td>
              <td>[ps:He went] to school yesterday.</td>
              <td>He <b>didn't go</b> to school yesterday.</td>
            </tr>
            <tr>
              <td><b>Interrogativa</b></td>
              <td><code>Did + Sujeto + Verbo Base + ...?</code></td>
              <td>Did he go to school?</td>
              <td>Yes, he did. / No, he didn't.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout warn">
        <span class="c-ico">⚠️</span>
        <div>
          <b>¡Regla de Oro para el Parcial!</b>
          <p>La diferencia entre regulares e irregulares <b>solo se aplica en la forma afirmativa</b>. Para negar o preguntar, el auxiliar <code>did / didn't</code> ya absorbe el pasado, por lo que el verbo principal vuelve a su <b>forma base (infinitivo)</b>.</p>
          <p class="small">❌ <i>He didn't went</i> &nbsp;➜&nbsp; ✅ <b>He didn't go</b><br>
          ❌ <i>Did you saw the error?</i> &nbsp;➜&nbsp; ✅ <b>Did you see the error?</b></p>
        </div>
      </div>

      <h3>2. Expresiones de Tiempo Clave (Time Expressions)</h3>
      <p>Palabras que delatan que <b>debes usar Simple Past</b> en el examen:</p>
      <div class="row">
        <span class="pill ps">yesterday</span>
        <span class="pill ps">last night / week / month / year</span>
        <span class="pill ps">two days ago</span>
        <span class="pill ps">in 1997 / in 2010</span>
        <span class="pill ps">when I was a child</span>
      </div>

      <h3>3. Reglas de Ortografía para Verbos Regulares (-ed)</h3>
      <ul class="ex-list">
        <li><b>Regla general:</b> agregar <code>-ed</code> (work ➜ worked, clean ➜ cleaned, fail ➜ failed).</li>
        <li><b>Terminados en -e:</b> solo agregar <code>-d</code> (close ➜ closed, change ➜ changed, save ➜ saved).</li>
        <li><b>Consonante + y:</b> cambia a <code>-ied</code> (try ➜ tried, copy ➜ copied).</li>
        <li><b>Consonante-Vocal-Consonante (1 sílaba acentuada):</b> duplica la consonante (stop ➜ stopped, plan ➜ planned).</li>
      </ul>
    </div>
  `,
  exercises: [
    {
      id: 'ps-1',
      type: 'blank',
      text: 'He [blank] (go) to school yesterday.',
      answer: 'went',
      explanation: 'El verbo "go" es irregular; su forma en Simple Past es "went".'
    },
    {
      id: 'ps-2',
      type: 'blank',
      text: 'He [blank] (not travel) by plane last week.',
      answer: ["didn't travel", "did not travel"],
      explanation: 'Para negar en pasado simple usamos "didn\'t" + verbo en infinitivo (travel).'
    },
    {
      id: 'ps-3',
      type: 'mc',
      text: '¿Cuál es la forma interrogativa correcta para: "They saved the source code"?',
      options: [
        'Did they save the source code?',
        'Did they saved the source code?',
        'Were they save the source code?',
        'Have they save the source code?'
      ],
      correct: 0,
      explanation: 'En preguntas con Simple Past usamos "Did + sujeto + verbo en base (save)".'
    },
    {
      id: 'ps-4',
      type: 'blank',
      text: 'The developer [blank] (delete) the temporary files two hours ago.',
      answer: 'deleted',
      explanation: '"Delete" es un verbo regular que termina en -e, por lo tanto solo agregamos -d: deleted.'
    },
    {
      id: 'ps-5',
      type: 'blank',
      text: 'Yesterday, the database server [blank] (fail) during the stress test.',
      answer: 'failed',
      explanation: '"Fail" es regular: failed.'
    },
    {
      id: 'ps-6',
      type: 'blank',
      text: 'John McCarthy [blank] (coin) the term "Artificial Intelligence" in 1956.',
      answer: 'coined',
      explanation: 'Del texto "The Evolution of AI": McCarthy coined the term in 1956 (regular).'
    },
    {
      id: 'ps-7',
      type: 'mc',
      text: 'Elegí la opción con el pasado correcto de: BREAK, BRING, BUY:',
      options: [
        'broke, brought, bought',
        'breaked, bringed, buyed',
        'broke, brang, bought',
        'broken, brought, bought'
      ],
      correct: 0,
      explanation: 'Break ➜ broke, Bring ➜ brought, Buy ➜ bought.'
    }
  ]
});

window.DATA.topics.push({
  id: 'past-continuous',
  title: 'Past Continuous',
  category: 'Gramática',
  tag: 'Past Continuous',
  badge: 'pc',
  color: 'var(--c-pc)',
  icon: '⏳',
  summary: 'Acciones que estaban en progreso en un momento específico del pasado.',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Definición oficial IES 9008:</b>
          <p>Se utiliza cuando queremos especificar algo que <b>estaba ocurriendo en un momento determinado</b> del pasado.</p>
        </div>
      </div>

      <h3>1. Estructura</h3>
      <div class="formula">
        <span class="fx k">Sujeto</span>
        <span class="op">+</span>
        <span class="fx k">WAS / WERE</span>
        <span class="op">+</span>
        <span class="fx">Verbo-ING</span>
        <span class="op">+</span>
        <span class="fx">Complemento</span>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Sujetos</th><th>Afirmativo (+)</th><th>Negativo (-)</th><th>Pregunta (?)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>I / He / She / It</b></td>
              <td>was working</td>
              <td>was not / <b>wasn't</b> working</td>
              <td><b>Was</b> she working?</td>
            </tr>
            <tr>
              <td><b>You / We / They</b></td>
              <td>were playing</td>
              <td>were not / <b>weren't</b> playing</td>
              <td><b>Were</b> you reading?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout tip">
        <span class="c-ico">💡</span>
        <div>
          <b>Ejemplos de las guías de clase:</b>
          <p>• Dylan [pc:was doing] his school project all day yesterday.<br>
          • We [pc:weren't working] from Monday to Wednesday last week.<br>
          • The programmer [pc:was debugging] the source code line by line.</p>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'pc-1',
      type: 'blank',
      text: 'Milly wasn\'t in bed at midnight last night. She [blank] (watch) a horror film!',
      answer: 'was watching',
      explanation: 'Para "She" usamos "was" + watching.'
    },
    {
      id: 'pc-2',
      type: 'blank',
      text: 'We [blank] (write) emails all morning yesterday.',
      answer: 'were writing',
      explanation: 'Para "We" usamos "were" + writing (la -e final de write se elimina antes de -ing).'
    },
    {
      id: 'pc-3',
      type: 'blank',
      text: 'Troy [blank] (not listen) to his maths teacher in class. He was sending text messages!',
      answer: ["wasn't listening", "was not listening"],
      explanation: 'Troy = he ➜ wasn\'t listening.'
    },
    {
      id: 'pc-4',
      type: 'blank',
      text: 'Jim [blank] (not wear) jeans yesterday. He was wearing shorts.',
      answer: ["wasn't wearing", "was not wearing"],
      explanation: 'Jim = he ➜ wasn\'t wearing.'
    },
    {
      id: 'pc-5',
      type: 'blank',
      text: 'At 8:00 PM last night, Sarah [blank] (watch) her favorite TV show in the living room.',
      answer: 'was watching',
      explanation: 'Sarah = she ➜ was watching.'
    },
    {
      id: 'pc-6',
      type: 'blank',
      text: 'What [blank] you [blank] (do) when the power went out?',
      answer: 'were / doing',
      explanation: 'Pregunta con "you": What were you doing?'
    },
    {
      id: 'pc-7',
      type: 'order',
      text: 'Ordená las palabras para formar la oración exacta del ejercicio de Sistemas:',
      words: ['the', 'engineers', 'were', 'testing', 'the', 'new', 'software', 'yesterday', 'afternoon'],
      correct: 'the engineers were testing the new software yesterday afternoon',
      explanation: 'Sujeto (the engineers) + were + testing + the new software + yesterday afternoon.'
    },
    {
      id: 'pc-8',
      type: 'order',
      text: 'Ordená la oración técnica sobre administración de servidores:',
      words: ['the', 'administrator', 'was', 'monitoring', 'the', 'server', 'traffic', 'at', '10', 'AM'],
      correct: 'the administrator was monitoring the server traffic at 10 AM',
      explanation: 'The administrator was monitoring the server traffic at 10 AM.'
    },
    {
      id: 'pc-9',
      type: 'order',
      text: 'Ordená la oración sobre programación:',
      words: ['the', 'programmer', 'was', 'debugging', 'the', 'source', 'code', 'line', 'by', 'line'],
      correct: 'the programmer was debugging the source code line by line',
      explanation: 'The programmer was debugging the source code line by line.'
    }
  ]
});

window.DATA.topics.push({
  id: 'past-vs-continuous',
  title: 'Simple Past vs Past Continuous',
  category: 'Gramática',
  tag: 'Past Simple vs Continuous',
  badge: 'ps',
  color: 'var(--c-ps)',
  icon: '⚡',
  summary: 'Uso de WHEN y WHILE: acciones interrumpidas y acciones simultáneas.',
  theory: `
    <div class="lesson">
      <div class="compare">
        <div>
          <h4>Simple Past</h4>
          <p>• Acciones completadas y finalizadas.</p>
          <p>• Hábitos o hechos del pasado.</p>
          <p class="small"><i>"I went to the cinema yesterday."</i></p>
        </div>
        <div>
          <h4>Past Continuous</h4>
          <p>• Acción en progreso interrumpida por otra.</p>
          <p>• Dos acciones ocurriendo al mismo tiempo en el pasado.</p>
          <p class="small"><i>"I was watching TV when the phone rang."</i></p>
        </div>
      </div>

      <h3>Conectores Clave: WHEN vs WHILE</h3>
      <div class="callout tip">
        <span class="c-ico">🎯</span>
        <div>
          <b>Regla mnemotécnica del examen:</b>
          <p>• <b>WHILE</b> (mientras) suele ir seguido de <b>Past Continuous</b> (la acción larga):<br>
          <i>"<u>While</u> my brother [pc:was studying], I [pc:was cooking] dinner."</i> (simultáneas)<br>
          <i>"<u>While</u> she [pc:was doing] homework, her brother was playing football."</i></p>
          <p>• <b>WHEN</b> (cuando) suele ir seguido de <b>Simple Past</b> (la interrupción corta):<br>
          <i>"I [pc:was watching] TV <u>when</u> the phone [ps:rang]."</i><br>
          <i>"We were downloading the security patch <u>when</u> the power [ps:went] out."</i></p>
        </div>
      </div>

      <h3>Caso Histórico de IA (del examen)</h3>
      <p><i>"While chess grandmaster Garry Kasparov [pc:was competing] against IBM's Deep Blue in 1997, the supercomputer [pc:was processing] millions of potential moves per second."</i> <b>(Simultáneas)</b></p>
      <p><i>"While researchers [pc:were promising] rapid breakthroughs, progress [ps:slowed] down."</i> <b>(Interrumpida / Contraste)</b></p>
    </div>
  `,
  exercises: [
    {
      id: 'pvc-1',
      type: 'blank',
      text: 'I was watching TV when the phone [blank] (ring).',
      answer: 'rang',
      explanation: 'La acción que interrumpe va en Simple Past (ring ➜ rang).'
    },
    {
      id: 'pvc-2',
      type: 'blank',
      text: 'While my brother [blank] (study) for his history exam, I [blank] (cook) dinner.',
      answer: ['was studying / was cooking', 'was studying/was cooking'],
      explanation: 'Dos acciones simultáneas en progreso con WHILE: was studying / was cooking.'
    },
    {
      id: 'pvc-3',
      type: 'blank',
      text: 'The children were playing soccer in the backyard when it [blank] (start) to rain.',
      answer: 'started',
      explanation: 'Acción que interrumpe después de WHEN va en Simple Past: started.'
    },
    {
      id: 'pvc-4',
      type: 'blank',
      text: 'We were downloading the security patch when the power [blank] (go) out.',
      answer: 'went',
      explanation: '"went out" (interrupción en Simple Past).'
    },
    {
      id: 'pvc-5',
      type: 'blank',
      text: 'While tech companies [blank] (collect) data, researchers realized the potential of neural networks.',
      answer: 'were collecting',
      explanation: 'Con WHILE describimos la acción de fondo en progreso: were collecting.'
    }
  ]
});
