/* =========================================================
   Data: Official Reading Comprehensions & Exam Activities
   Extracted from:
   - "The Evolution of Artificial Intelligence"
   - "AI Chatbots (Meet Chatbot)"
   - "A Journey Through Great Discoveries (Inventions)"
   ========================================================= */
window.DATA = window.DATA || {};
window.DATA.readings = [
  {
    id: 'history-of-ai',
    title: 'The Evolution of Artificial Intelligence',
    subtitle: 'From Dartmouth 1956 to Modern Generative Models',
    badge: 'Lectura Clave',
    date: '2º Año — IES 9008',
    level: 'Technical Reading',
    text: `
      <p>Artificial Intelligence (AI) [pp:has transformed] from a theoretical concept into one of the most powerful engines of modern technology. Although ancient mythologies [pc:were already describing] mechanical beings centuries ago, the formal field of AI research [ps:was born] in {1956|Año de la Conferencia de Dartmouth} at the historic Dartmouth Conference. While researchers [pc:were discussing] the future of computing during that summer, {John McCarthy|Científico que acuñó el término} [ps:coined] the term "Artificial Intelligence."</p>

      <p>In its early decades, AI research [ps:relied] heavily on {Symbolic AI|IA Simbólica basada en reglas lógicas explícitas}. While computers [pc:were running] early logic programs, engineers [pc:were manually coding] thousands of explicit rules into software. However, these early systems [ps:struggled] whenever they [ps:encountered] real-world noise and ambiguity. While scientists [pc:were promising] rapid breakthroughs, progress [pc:was slowing] down due to hardware limitations. Because researchers [pp:had failed] to deliver on their original promises, investors [ps:withdrew] their financial support. As a result, the industry [ps:entered] severe periods of reduced funding known as {"AI Winters"|Inviernos de la IA: épocas de recorte financiero y escepticismo}.</p>

      <p>The major turning point [ps:occurred] in the late 1990s and early 2000s while computer scientists [pc:were developing] advanced statistical methods. Instead of writing fixed rules, engineers [ps:began] feeding massive datasets into algorithms. While chess grandmaster {Garry Kasparov|Campeón mundial de ajedrez} [pc:was competing] against IBM’s Deep Blue in 1997, the supercomputer [pc:was processing] millions of potential moves per second. Deep Blue [ps:defeated] Kasparov, proving that machines [pp:had achieved] master-level strategic calculation.</p>

      <p>By the early 2010s, a dramatic breakthrough [ps:took] place. While tech companies [pc:were collecting] unprecedented amounts of internet data, researchers [ps:realized] that multi-layered artificial neural networks could process complex visual and linguistic patterns. In 2012, while competitors [pc:were using] traditional algorithms in the ImageNet competition, the {AlexNet|Modelo que inició el auge del Deep Learning} model [ps:won] by a massive margin using {deep learning on GPUs|Aprendizaje profundo acelerado por placas de video}. Since the introduction of the {Transformer architecture|Arquitectura clave introducida por Google en 2017} in 2017, AI systems [pp:have evolved] rapidly, leading to the generative models that are changing the world today.</p>
    `,
    audioSummary: 'Artificial Intelligence was born in 1956 at the Dartmouth Conference when John McCarthy coined the term. Early systems relied on Symbolic AI, leading to AI Winters. In 1997, Deep Blue defeated Garry Kasparov. In 2012, AlexNet revolutionized image recognition with GPUs. In 2017, the Transformer architecture laid the foundation for modern generative AI.',
    exercises: [
      {
        id: 'ai-q1',
        type: 'mc',
        text: 'In which year was the term "Artificial Intelligence" formally coined?',
        options: ['1945', '1956', '1997', '2012'],
        correct: 1,
        explanation: 'En el primer párrafo: "the formal field of AI research was born in 1956... John McCarthy coined the term".'
      },
      {
        id: 'ai-q2',
        type: 'mc',
        text: 'What was the primary methodology used during the early decades of AI research?',
        options: ['Deep Learning', 'Statistical Modeling', 'Symbolic AI', 'Neural Networks'],
        correct: 2,
        explanation: 'Segundo párrafo: "In its early decades, AI research relied heavily on Symbolic AI".'
      },
      {
        id: 'ai-q3',
        type: 'mc',
        text: 'What does the term "AI Winter" refer to in the context of the text?',
        options: [
          'A period where AI was used to predict weather patterns.',
          'The technical limitations of running computers in cold climates.',
          'Eras of reduced funding and interest due to unmet expectations.',
          'The initial discovery of AI in a laboratory during winter.'
        ],
        correct: 2,
        explanation: '"severe periods of reduced funding known as AI Winters" debido a promesas no cumplidas e inversores que retiraron apoyo.'
      },
      {
        id: 'ai-q4',
        type: 'mc',
        text: 'What was the significance of the match between Garry Kasparov and Deep Blue?',
        options: [
          'It was the first time a computer played a game of chess.',
          'It proved that machines could achieve master-level strategic calculation.',
          'It led to the immediate creation of the internet.',
          'It demonstrated that AI could feel human emotions.'
        ],
        correct: 1,
        explanation: '"proving that machines had achieved master-level strategic calculation."'
      },
      {
        id: 'ai-q5',
        type: 'mc',
        text: 'Which technology was crucial for the success of the AlexNet model in 2012?',
        options: ['Symbolic Logic', 'Manual coding of rules', 'Deep learning on GPUs', 'Ancient mechanical blueprints'],
        correct: 2,
        explanation: '"AlexNet model won by a massive margin using deep learning on GPUs."'
      },
      {
        id: 'ai-gram-1',
        type: 'blank',
        text: 'Grammar Identification (Simultaneous Actions in 1997): Garry Kasparov was [blank] (compete) while Deep Blue was [blank] (process) moves.',
        answer: ['competing / processing', 'competing/processing'],
        explanation: 'Ambas acciones en Past Continuous: was competing / was processing.'
      },
      {
        id: 'ai-open-1',
        type: 'mc',
        text: 'According to the text, why did early AI systems struggle with real-world applications?',
        options: [
          'Because they struggled whenever they encountered real-world noise and ambiguity.',
          'Because computers were too expensive to turn on.',
          'Because engineers refused to write explicit rules.',
          'Because the internet was too fast for algorithms.'
        ],
        correct: 0,
        explanation: 'Texto textual: "these early systems struggled whenever they encountered real-world noise and ambiguity."'
      },
      {
        id: 'ai-open-2',
        type: 'mc',
        text: 'What architecture, introduced in 2017, paved the way for modern generative models?',
        options: [
          'The Transformer architecture',
          'Symbolic Decision Trees',
          'Deep Blue Hardware v2',
          'AlexNet GPU clustering'
        ],
        correct: 0,
        explanation: '"Since the introduction of the Transformer architecture in 2017..."'
      }
    ]
  },
  {
    id: 'ai-chatbots',
    title: 'Reading Comprehension: AI Chatbots',
    subtitle: 'Meet Chatbot & Present Perfect in Practice',
    badge: 'Lectura Clave',
    date: '2º Año — IES 9008',
    level: 'Technical Reading',
    text: `
      <p>Over the past few years, artificial intelligence [pp:has transformed] how people communicate online. Among these new technologies, <b>Meet Chatbot</b> [pp:has emerged] as a versatile digital assistant. Developers [pp:have trained] this system on millions of text files, allowing it to understand natural human language with remarkable precision. Since its creation, Meet Chatbot [pp:has helped] students, teachers, and professionals across the world with various daily tasks:</p>

      <ul class="ex-list">
        <li><b>Interactive Dialogue:</b> The chatbot [pp:has learned] to participate in dynamic conversations, adapting its responses to match user preferences over time.</li>
        <li><b>Instant Information:</b> Millions of users [pp:have relied] on Meet Chatbot to find quick answers and summarize complex educational topics efficiently.</li>
        <li><b>Language Learning:</b> Students [pp:have used] the platform as a practice partner to improve their grammar, expand vocabulary, and draft clear essays.</li>
        <li><b>Personal Organization:</b> Many people [pp:have created] study schedules and structured daily routines using the system's step-by-step guidance.</li>
      </ul>

      <p>However, experts [pp:have warned] that users must remain cautious. Although AI technology [pp:has improved] significantly, Meet Chatbot [pp:has occasionally produced] incorrect details, so verifying its information with reliable sources remains essential.</p>
    `,
    audioSummary: 'AI Chatbots have transformed digital communication. Meet Chatbot was trained on millions of text files. Users have relied on it for instant answers, language learning, and personal schedules. However, experts have warned that verifying facts remains essential.',
    exercises: [
      {
        id: 'cb-q1',
        type: 'mc',
        text: 'Which sentence from the text uses the Present Perfect tense to describe an action that started in the past and continues to be relevant?',
        options: [
          'Meet Chatbot is a versatile digital assistant.',
          'Developers have trained this system on millions of text files.',
          'Verifying its information remains essential.',
          'The chatbot works on computers.'
        ],
        correct: 1,
        explanation: 'Opción textual del parcial: "Developers have trained this system on millions of text files."'
      },
      {
        id: 'cb-q2',
        type: 'mc',
        text: 'According to the text, how have students used Meet Chatbot?',
        options: [
          'They have used it to design physical hardware.',
          'They have used it as a practice partner for language and writing.',
          'They have used it to replace all human instructors.',
          'They have used it exclusively to play online games.'
        ],
        correct: 1,
        explanation: '"Students have used the platform as a practice partner to improve their grammar, expand vocabulary, and draft clear essays."'
      },
      {
        id: 'cb-q3',
        type: 'mc',
        text: 'What have experts warned users about regarding Meet Chatbot?',
        options: [
          'It has become too expensive to run.',
          'It has occasionally generated inaccurate information.',
          'It has stopped accepting new user accounts.',
          'It has erased past study schedules.'
        ],
        correct: 1,
        explanation: '"Meet Chatbot has occasionally produced incorrect details, so verifying its information remains essential."'
      },
      {
        id: 'cb-tf-1',
        type: 'mc',
        text: 'Developers have trained Meet Chatbot on millions of text files.',
        options: ['True (Verdadero)', 'False (Falso)'],
        correct: 0,
        explanation: 'Verdadero. Párrafo 1: "Developers have trained this system on millions of text files".'
      },
      {
        id: 'cb-tf-2',
        type: 'mc',
        text: 'AI technology has stopped improving in recent years.',
        options: ['False (Falso)', 'True (Verdadero)'],
        correct: 0,
        explanation: 'Falso. El texto aclara que la tecnología de IA sigue mejorando notablemente.'
      },
      {
        id: 'cb-gap-1',
        type: 'blank',
        text: 'AI technology [blank] (transform) digital communication in recent years.',
        answer: ["has transformed", "'s transformed"],
        explanation: 'AI technology (it) ➜ has transformed.'
      },
      {
        id: 'cb-gap-2',
        type: 'blank',
        text: 'Millions of users [blank] (rely) on Meet Chatbot for quick information.',
        answer: ["have relied", "'ve relied"],
        explanation: 'Millions of users (they) ➜ have relied.'
      },
      {
        id: 'cb-gap-3',
        type: 'blank',
        text: 'Meet Chatbot [blank] (help) students organize their schedules.',
        answer: ["has helped", "'s helped"],
        explanation: 'Meet Chatbot (it) ➜ has helped.'
      }
    ]
  },
  {
    id: 'inventions-reading',
    title: 'A Journey Through Great Discoveries',
    subtitle: 'Active vs Passive Voice in Historical Inventions',
    badge: 'Lectura Clave',
    date: '2º Año — IES 9008',
    level: 'Technical Reading',
    text: `
      <p>In the year 2150, a class of students visited the Museum of Human Innovation. As they walked silently through the galleries, they observed replicas and holograms of the moments that changed the world:</p>

      <div class="compare">
        <div>
          <h4>The Wheel</h4>
          <p>• <b>Active:</b> Ancient civilizations created the wheel thousands of years ago.<br>
          • <b>Passive:</b> The wheel [pv:was created] thousands of years ago to make transportation easier.</p>
        </div>
        <div>
          <h4>The Steam Engine</h4>
          <p>• <b>Active:</b> James Watt improved the steam engine in the 18th century.<br>
          • <b>Passive:</b> The steam engine [pv:was improved] by James Watt in the 18th century, and factories [pv:were powered] by steam energy.</p>
        </div>
      </div>

      <div class="compare">
        <div>
          <h4>Penicillin</h4>
          <p>• <b>Active:</b> Alexander Fleming discovered penicillin by accident in 1928.<br>
          • <b>Passive:</b> Penicillin [pv:was discovered] by Alexander Fleming in 1928. Millions of lives [pp:have been saved] by antibiotics since then.</p>
        </div>
        <div>
          <h4>The Internet</h4>
          <p>• <b>Active:</b> Computer scientists developed the early Internet in the late 20th century.<br>
          • <b>Passive:</b> The early Internet [pv:was developed] in the late 20th century. Today, global communication [pv:is shared] instantly around the world.</p>
        </div>
      </div>
    `,
    audioSummary: 'The wheel was created thousands of years ago. The steam engine was improved by James Watt. Penicillin was discovered by Alexander Fleming in 1928. The early Internet was developed in the late 20th century.',
    exercises: [
      {
        id: 'inv-q1',
        type: 'blank',
        text: 'The wheel [blank] (create) thousands of years ago.',
        answer: 'was created',
        explanation: 'The wheel (singular) + was created.'
      },
      {
        id: 'inv-q2',
        type: 'blank',
        text: 'The steam engine [blank] (improve) by James Watt in the 18th century.',
        answer: 'was improved',
        explanation: 'The steam engine + was improved.'
      },
      {
        id: 'inv-q3',
        type: 'blank',
        text: 'Penicillin [blank] (discover) by Alexander Fleming in 1928.',
        answer: 'was discovered',
        explanation: 'Penicillin + was discovered.'
      },
      {
        id: 'inv-q4',
        type: 'blank',
        text: 'The early Internet [blank] (develop) in the late 20th century.',
        answer: 'was developed',
        explanation: 'The early Internet + was developed.'
      }
    ]
  }
];
