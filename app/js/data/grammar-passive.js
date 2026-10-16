/* =========================================================
   Data: Passive Voice (Present, Past, Modals & IT Inventions)
   Core topic for the 100-word Writing and Final Exam
   ========================================================= */
window.DATA = window.DATA || {};
window.DATA.topics = window.DATA.topics || [];

window.DATA.topics.push({
  id: 'passive-voice',
  title: 'Passive Voice',
  category: 'Gramática Clave',
  tag: 'Passive Voice (Writing Key)',
  badge: 'pv',
  color: 'var(--c-pv)',
  icon: '⚙️',
  summary: 'Voz pasiva en Presente, Pasado, Futuro y Modales. Fundamental para el Writing de 100 palabras.',
  theory: `
    <div class="lesson">
      <div class="callout info">
        <span class="c-ico">📌</span>
        <div>
          <b>Definición oficial IES 9008:</b>
          <p>The passive voice is <b>not</b> a tense in English. Each tense has its own passive voice which is created by using a form of the <b>auxiliary verb TO BE + V3 (Past Participle)</b>.</p>
          <p>• <b>Active Voice:</b> el sujeto realiza la acción: <i>"James Cameron directed Titanic."</i><br>
          • <b>Passive Voice:</b> la acción recae sobre el sujeto: <i>"Titanic [pv:was directed] by James Cameron."</i></p>
        </div>
      </div>

      <h3>1. Fórmula Maestra</h3>
      <div class="formula">
        <span class="fx k">Objeto Activo ➜ Sujeto Pasivo</span>
        <span class="op">+</span>
        <span class="fx k">VERB TO BE (en el tiempo de la activa)</span>
        <span class="op">+</span>
        <span class="fx">PAST PARTICIPLE (V3 / -ed)</span>
        <span class="op">+</span>
        <span class="fx">(by + agente)</span>
      </div>

      <h3>2. Cuadro de Tiempos Verbales (IES 9008)</h3>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Tiempo</th><th>Forma del verbo TO BE + V3</th><th>Ejemplo en Voz Pasiva</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Present Simple</b></td>
              <td><b>am / is / are</b> + V3</td>
              <td>[pv:Wine is made] from grapes.<br>[pv:Robots are used] in factories.</td>
            </tr>
            <tr>
              <td><b>Past Simple</b></td>
              <td><b>was / were</b> + V3</td>
              <td>The telephone [pv:was invented] by Bell.<br>Radio waves [pv:were researched] in the 19th century.</td>
            </tr>
            <tr>
              <td><b>Present Progressive</b></td>
              <td><b>am / is / are + being</b> + V3</td>
              <td>The document [pv:is being sent] right now.</td>
            </tr>
            <tr>
              <td><b>Past Progressive</b></td>
              <td><b>was / were + being</b> + V3</td>
              <td>The database [pv:was being updated] when the server failed.</td>
            </tr>
            <tr>
              <td><b>Future (will)</b></td>
              <td><b>will be</b> + V3</td>
              <td>The security contract [pv:will be signed] tomorrow.</td>
            </tr>
            <tr>
              <td><b>Modals (can / could)</b></td>
              <td><b>can / could + be</b> + V3</td>
              <td>PDFs [pv:can be downloaded] from this website.<br>A passport [pv:can only be issued] at the embassy.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3. ¿Cuándo se usa "BY + Agent"?</h3>
      <ul class="ex-list">
        <li><b>Se usa "by":</b> cuando la persona o entidad que realiza la acción es relevante o conocida: <i>"The light bulb was patented <b>by Thomas Edison</b>."</i></li>
        <li><b>Se OMITE el agente:</b> cuando es obvio, desconocido o irrelevante (people, someone, they, everybody):<br>
        <i>"Active: People speak English worldwide."</i> ➜ <i>"Passive: English is spoken worldwide"</i> (sin 'by people').</li>
      </ul>

      <h3>4. Frases Clave de Invenciones y Tecnología (para tu Writing)</h3>
      <div class="callout tip">
        <span class="c-ico">✍️</span>
        <div>
          <b>Modelos extraídos de la cátedra para el Writing de 100 palabras:</b>
          <p>• <i>"First, the printing press [pv:was created] in 1440."</i><br>
          • <i>"Centuries later, the telephone [pv:was developed] in 1876."</i><br>
          • <i>"Modern antibiotics [pv:were discovered] in the 20th century, and millions of lives [pv:were saved]."</i><br>
          • <i>"Today, artificial intelligence algorithms [pv:are trained] on massive datasets."</i></p>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      id: 'pv-mc-1',
      type: 'mc',
      text: 'A lot of holidays .......... booked online.',
      options: ['are', 'is'],
      correct: 0,
      explanation: '"Holidays" es plural ➜ are booked.'
    },
    {
      id: 'pv-mc-2',
      type: 'mc',
      text: 'Millions of emails are .......... every day.',
      options: ['sent', 'send'],
      correct: 0,
      explanation: 'La voz pasiva requiere el participio pasado V3: "sent" (no infinitivo).'
    },
    {
      id: 'pv-mc-3',
      type: 'mc',
      text: 'Music and books are .......... in stores.',
      options: ['sold', 'sell'],
      correct: 0,
      explanation: 'Participio de sell es "sold" ➜ are sold.'
    },
    {
      id: 'pv-mc-4',
      type: 'mc',
      text: 'Meat .......... eaten all over the world.',
      options: ['is', 'are'],
      correct: 0,
      explanation: '"Meat" es un sustantivo incontable singular ➜ is eaten.'
    },
    {
      id: 'pv-mc-5',
      type: 'mc',
      text: 'New websites are .......... all the time.',
      options: ['created', 'create'],
      correct: 0,
      explanation: 'Voz pasiva: are + created (participio regular).'
    },
    {
      id: 'pv-act-pas-1',
      type: 'mc',
      text: 'Clasificá la oración: "Millions of people send emails every day."',
      options: ['Activa (Active)', 'Pasiva (Passive)'],
      correct: 0,
      explanation: 'Activa: El sujeto (Millions of people) realiza la acción.'
    },
    {
      id: 'pv-act-pas-2',
      type: 'mc',
      text: 'Clasificá la oración: "This car is made in the UK."',
      options: ['Pasiva (Passive)', 'Activa (Active)'],
      correct: 0,
      explanation: 'Pasiva: is made (verbo be + participio pasado).'
    },
    {
      id: 'pv-act-pas-3',
      type: 'mc',
      text: 'Clasificá la oración: "A mouse is connected to a computer."',
      options: ['Pasiva (Passive)', 'Activa (Active)'],
      correct: 0,
      explanation: 'Pasiva: is connected (be + V3).'
    },
    {
      id: 'pv-it-1',
      type: 'blank',
      text: 'Pasá a voz pasiva: "They found a problem." ➜ A problem [blank].',
      answer: ['was found', 'was found by them'],
      explanation: '"found" está en Simple Past ➜ was found.'
    },
    {
      id: 'pv-it-2',
      type: 'blank',
      text: 'Pasá a voz pasiva: "The customer requires a dynamic, exciting website." ➜ A dynamic, exciting website [blank].',
      answer: ['is required by the customer', 'is required'],
      explanation: '"requires" está en Present Simple ➜ is required by the customer.'
    },
    {
      id: 'pv-it-3',
      type: 'blank',
      text: 'Pasá a voz pasiva: "We used PHP for the website." ➜ PHP [blank] for the website.',
      answer: ['was used', 'was used by us'],
      explanation: '"used" está en Simple Past ➜ PHP was used for the website.'
    },
    {
      id: 'pv-it-4',
      type: 'blank',
      text: 'Pasá a voz pasiva: "People can watch videos on the website." ➜ Videos [blank] on the website.',
      answer: 'can be watched',
      explanation: 'Modal can + be + watched (se omite by people).'
    },
    {
      id: 'pv-it-5',
      type: 'blank',
      text: 'Pasá a voz pasiva: "People can download useful PDFs from this website." ➜ Useful PDFs [blank] from this website.',
      answer: 'can be downloaded',
      explanation: 'Modal can + be + downloaded.'
    },
    {
      id: 'pv-it-6',
      type: 'blank',
      text: 'Pasá a voz pasiva: "A USB cable connects computers and devices." ➜ Computers and devices [blank] by a USB cable.',
      answer: 'are connected',
      explanation: 'Computers and devices (plural) + are connected.'
    },
    {
      id: 'pv-it-7',
      type: 'blank',
      text: 'Pasá a voz pasiva: "A printer prints documents and pictures." ➜ Documents and pictures [blank] by a printer.',
      answer: 'are printed',
      explanation: 'Plural + are printed.'
    },
    {
      id: 'pv-inv-1',
      type: 'blank',
      text: 'Inventions: "Ancient civilizations created the wheel." ➜ The wheel [blank] thousands of years ago.',
      answer: 'was created',
      explanation: 'The wheel (singular) + was created.'
    },
    {
      id: 'pv-inv-2',
      type: 'blank',
      text: 'Inventions: "Alexander Fleming discovered penicillin in 1928." ➜ Penicillin [blank] by Alexander Fleming in 1928.',
      answer: 'was discovered',
      explanation: 'Penicillin was discovered by Alexander Fleming.'
    },
    {
      id: 'pv-inv-3',
      type: 'blank',
      text: 'Inventions: "James Watt improved the steam engine." ➜ The steam engine [blank] by James Watt.',
      answer: 'was improved',
      explanation: 'The steam engine was improved by James Watt.'
    },
    {
      id: 'pv-inv-4',
      type: 'blank',
      text: 'Inventions: "Alexander Graham Bell invented the telephone." ➜ The telephone [blank] by Alexander Graham Bell.',
      answer: 'was invented',
      explanation: 'The telephone was invented by Alexander Graham Bell.'
    }
  ]
});
