/* =========================================================
   Data: Oral Presentation Simulator (Chatbots & Inventors)
   Prepared for oral defense: Chatbots, Jobs, Tesla, Einstein, Newton, Turing
   ========================================================= */
window.DATA = window.DATA || {};

window.DATA.oral = {
  tips: [
    { title: 'Ritmo y Pausas', desc: 'No hables demasiado rápido. Hacé pausas claras en los puntos seguidos para respirar y sonar seguro.' },
    { title: 'Conectores Orales', desc: 'Usá frases como "Good morning teacher", "First of all", "Furthermore", "As a software student, I believe that...", "Thank you for your attention".' },
    { title: 'Enlace con la Carrera', desc: 'Cualquiera sea el inventor que elijas, vinculalo con el desarrollo de software o la computación para sumar puntos.' }
  ],

  topics: [
    {
      id: 'oral-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      category: 'Tecnología Actual',
      avatar: '🤖',
      shortDesc: 'Evolución de los chatbots, arquitectura Transformer, beneficios en educación y limitaciones éticas.',
      facts: {
        'Tema Principal': 'Natural Language Processing (NLP)',
        'Hito Clave': 'Transformer Architecture (2017)',
        'Uso Principal': 'Atención al cliente, educación, programación',
        'Desafío Actual': 'Alucinaciones y precisión de datos'
      },
      phonetics: [
        { word: 'algorithm', ipa: '/ˈæl.ɡə.rɪ.ðəm/', tip: 'ál-go-ri-zom (la "th" con la punta de la lengua entre los dientes)' },
        { word: 'natural language', ipa: '/ˈnætʃ.ər.əl ˈlæŋ.ɡwɪdʒ/', tip: 'ná-cho-rol láng-güidsh' },
        { word: 'architecture', ipa: '/ˈɑːr.kə.tek.tʃər/', tip: 'ár-ki-tek-chor (ch suena como k)' },
        { word: 'accuracy', ipa: '/ˈæk.jə.rə.si/', tip: 'ák-iur-e-si (énfasis en la primera sílaba)' }
      ],
      script: `Good morning teacher. Today, I would like to talk about Artificial Intelligence Chatbots and how they are transforming modern communication.

Over the past few years, virtual assistants have evolved significantly. While early conversational programs relied on rigid symbolic rules, modern chatbots are powered by neural networks and the Transformer architecture, which was introduced in 2017. Systems like Meet Chatbot and ChatGPT have been trained on millions of text files. As a result, they can understand natural human language and produce dynamic answers in seconds.

In software development and education, chatbots offer tremendous advantages. Students have used them as practice partners to improve their technical English, clarify coding concepts, and debug complex syntax. Furthermore, companies utilize them to deliver instant customer support twenty-four hours a day.

However, experts have warned that we must remain cautious. AI models can occasionally generate inaccurate information or hallucinations. Therefore, verifying critical facts with reliable documentation remains essential. In conclusion, chatbots are powerful digital tools that will continue to reshape software engineering.

Thank you very much.`,
      qa: [
        {
          q: 'Why did you choose this topic?',
          a: 'I chose AI Chatbots because I am studying Software Development, and artificial intelligence is fundamentally changing how developers write and debug code every day.'
        },
        {
          q: 'What is the main limitation of modern chatbots?',
          a: 'The main limitation is that they can generate hallucinations or inaccurate details. Therefore, developers must verify facts and never accept generated code without testing it.'
        },
        {
          q: 'How do chatbots relate to the Present Perfect tense studied in class?',
          a: 'In our reading about Meet Chatbot, the Present Perfect is used to show ongoing impacts, for example: "AI technology has transformed digital communication" and "developers have trained the system on millions of files".'
        }
      ]
    },
    {
      id: 'oral-steve-jobs',
      name: 'Steve Jobs & the Personal Computer',
      category: 'Inventores & Visionarios',
      avatar: '🍏',
      shortDesc: 'Cofundador de Apple, popularización de la interfaz gráfica (GUI) y la era del smartphone.',
      facts: {
        'Nacimiento / Muerte': '1955 – 2011 (San Francisco, EE.UU.)',
        'Empresas': 'Apple Inc., NeXT, Pixar',
        'Grandes Productos': 'Apple II, Macintosh, iPod, iPhone, iPad',
        'Aporte Clave': 'Popularización del GUI, tipografía digital y diseño centrado en el usuario'
      },
      phonetics: [
        { word: 'entrepreneur', ipa: '/ˌɑːn.trə.prəˈnɜːr/', tip: 'on-tro-pro-nér' },
        { word: 'graphical', ipa: '/ˈɡræf.ɪ.kəl/', tip: 'grá-fi-kol' },
        { word: 'revolutionary', ipa: '/ˌrev.əˈluː.ʃən.er.i/', tip: 're-vo-lú-sho-ne-ri' },
        { word: 'device', ipa: '/dɪˈvaɪs/', tip: 'di-váis (termina en sonido s)' }
      ],
      script: `Good morning teacher. Today, I am going to talk about Steve Jobs, one of the most influential innovators in modern technology.

Steve Jobs was born in California in 1955. Together with Steve Wozniak, he co-founded Apple Computer in 1976. Jobs believed that computers should not only be powerful scientific machines, but also elegant, intuitive tools for ordinary people. In 1984, the Macintosh was introduced. It was the first mass-market personal computer featuring a graphical user interface and a mouse, replacing complicated command lines with icons and windows.

Later in his career, Jobs transformed multiple industries. In 2001, the iPod was released, revolutionizing the digital music business. Then, in 2007, the first iPhone was presented to the world, combining a widescreen iPod, a revolutionary mobile phone, and a breakthrough Internet communicator into a single pocket device.

As a software development student, I admire Steve Jobs because he proved that technology must always be paired with great design and user experience. His vision changed how humanity interacts with software forever.

Thank you.`,
      qa: [
        {
          q: 'Why was the Macintosh computer so important in 1984?',
          a: 'Because it was the first personal computer to popularize the graphical user interface (GUI) and the mouse, making computers accessible to ordinary people rather than just computer scientists.'
        },
        {
          q: 'What quality made Steve Jobs unique as a leader?',
          a: 'He had a relentless focus on user experience and simplicity. He believed that engineering and the liberal arts should be combined together.'
        }
      ]
    },
    {
      id: 'oral-nikola-tesla',
      name: 'Nikola Tesla & Electrical Energy',
      category: 'Inventores & Científicos',
      avatar: '⚡',
      shortDesc: 'Pionero de la corriente alterna (AC), el motor de inducción y la comunicación inalámbrica.',
      facts: {
        'Nacimiento / Muerte': '1856 – 1943 (Smiljan, Croacia)',
        'Invenciones': 'Alternating Current (AC), Motor de inducción, Bobina de Tesla, Radio',
        'Rivalidad Histórica': 'La "Guerra de las Corrientes" contra Thomas Edison',
        'Impacto Actual': 'Redes eléctricas mundiales, robótica, transmisión inalámbrica'
      },
      phonetics: [
        { word: 'electricity', ipa: '/ɪˌlekˈtrɪs.ə.ti/', tip: 'i-lek-trí-si-ti' },
        { word: 'alternating current', ipa: '/ˈɔːl.tər.neɪ.tɪŋ ˈkɜːr.ənt/', tip: 'ól-ter-nei-ting ká-rrent' },
        { word: 'wireless', ipa: '/ˈwaɪər.ləs/', tip: 'uáier-les' },
        { word: 'machinery', ipa: '/məˈʃiː.nər.i/', tip: 'mo-shí-ne-ri (suena con sh, no ch)' }
      ],
      script: `Good morning teacher. Today, I would like to speak about Nikola Tesla, a brilliant electrical engineer whose inventions powered the modern world.

Tesla was born in 1856 in what is now Croatia. During the late nineteenth century, there was an intense scientific battle known as the "War of the Currents" between Thomas Edison, who defended Direct Current, and Tesla, who advocated for Alternating Current. Tesla demonstrated that Alternating Current could be safely transmitted over hundreds of kilometers using transformers. His AC system was eventually adopted worldwide and remains the standard for our modern electrical grid today.

In addition to AC electricity, Tesla designed the induction motor, conducted pioneering experiments with radio waves, and envisioned wireless energy transmission decades before the creation of the Internet and Wi-Fi networks.

Without Tesla's brilliant patents, modern computers, data centers, and telecommunication networks could not operate today, because all server infrastructure relies on reliable electric power. He was a true visionary who worked for the advancement of humanity.

Thank you very much.`,
      qa: [
        {
          q: 'What was the main difference between Edison\'s and Tesla\'s electrical systems?',
          a: 'Edison promoted Direct Current (DC), which could only travel short distances before losing energy. Tesla championed Alternating Current (AC), which can be stepped up to high voltages and transmitted over very long distances.'
        },
        {
          q: 'How does Tesla\'s work connect to computer science?',
          a: 'All modern data centers, cloud servers, and supercomputers require immense, continuous electrical energy, which is distributed globally through Tesla\'s AC electrical grid.'
        }
      ]
    },
    {
      id: 'oral-albert-einstein',
      name: 'Albert Einstein & Modern Physics',
      category: 'Científicos Universales',
      avatar: '🌌',
      shortDesc: 'Teoría de la Relatividad, efecto fotoeléctrico (Nobel 1921), base del GPS y física cuántica.',
      facts: {
        'Nacimiento / Muerte': '1879 – 1955 (Ulm, Alemania)',
        'Premio Nobel': 'Física 1921 por la ley del efecto fotoeléctrico',
        'Teoría Famosa': 'Relatividad Especial y General (E = mc²)',
        'Aplicación Tecnológica': 'Satélites GPS, sensores fotográficos, energía solar'
      },
      phonetics: [
        { word: 'physicist', ipa: '/ˈfɪz.ɪ.sɪst/', tip: 'fí-zi-sist (la ph suena como f)' },
        { word: 'relativity', ipa: '/ˌrel.əˈtɪv.ə.ti/', tip: 're-lo-tí-vi-ti' },
        { word: 'photoelectric', ipa: '/ˌfoʊ.toʊ.ɪˈlek.trɪk/', tip: 'fou-tou-i-lék-trik' },
        { word: 'theoretical', ipa: '/ˌθiː.əˈret̬.kəl/', tip: 'zi-o-ré-ti-kol' }
      ],
      script: `Good morning teacher. Today, I will present on Albert Einstein, one of the greatest theoretical physicists in human history.

Einstein was born in Germany in 1879. In 1905, during what historians call his "Miracle Year," he published four revolutionary scientific papers while working at a Swiss patent office. One of these papers explained the photoelectric effect, proving that light consists of individual quantum particles called photons. For this discovery, he was awarded the Nobel Prize in Physics in 1921.

Furthermore, Einstein formulated the Theory of Special and General Relativity, introducing the famous equation E = mc². He demonstrated that space and time are interconnected into a single fabric called spacetime, and that gravity is the bending of spacetime caused by massive objects.

Today, Einstein's equations are not just theoretical physics; they are essential for modern software systems. For example, GPS satellite software must constantly correct for relativistic time dilation, otherwise smartphone maps would produce errors of several kilometers every day.

Thank you for your attention.`,
      qa: [
        {
          q: 'Did Einstein receive the Nobel Prize for the Theory of Relativity?',
          a: 'No, that is a common misconception! He was awarded the Nobel Prize in 1921 specifically for his explanation of the photoelectric effect, which laid the foundation for quantum mechanics and solar cells.'
        },
        {
          q: 'Why does GPS software need Einstein\'s equations?',
          a: 'Because time passes slightly faster for satellites orbiting high above Earth due to lower gravity. Without calculating this relativistic effect, GPS coordinates would drift by about ten kilometers each day.'
        }
      ]
    },
    {
      id: 'oral-isaac-newton',
      name: 'Sir Isaac Newton & Classical Mechanics',
      category: 'Científicos Clásicos',
      avatar: '🍎',
      shortDesc: 'Leyes del movimiento, gravitación universal, cálculo infinitesimal y óptica.',
      facts: {
        'Nacimiento / Muerte': '1643 – 1727 (Woolsthorpe, Inglaterra)',
        'Obra Cumbre': 'Philosophiae Naturalis Principia Mathematica (1687)',
        'Descubrimientos': '3 Leyes del Movimiento, Gravitación, Cálculo, Prisma de luz',
        'Uso en Software': 'Motores de videojuegos, simulaciones físicas, renderizado'
      },
      phonetics: [
        { word: 'gravitation', ipa: '/ˌɡræv.ɪˈteɪ.ʃən/', tip: 'gra-vi-téi-shon' },
        { word: 'calculus', ipa: '/ˈkæl.kjə.ləs/', tip: 'kál-kiu-los' },
        { word: 'mathematics', ipa: '/ˌmæθˈmæt.ɪks/', tip: 'maz-mát-iks' },
        { word: 'acceleration', ipa: '/əkˌsel.əˈreɪ.ʃən/', tip: 'ak-se-lo-réi-shon' }
      ],
      script: `Good morning teacher. Today, I am going to talk about Sir Isaac Newton, the founding father of modern science and mathematics.

Isaac Newton was born in England in 1643. During the Great Plague of London in 1665, universities were closed, so Newton returned to his family farm. During this period of isolation, he developed foundational theories that revolutionized humanity's understanding of the universe.

In 1687, Newton published his masterpiece, the "Principia Mathematica." In this book, he formulated the three universal laws of motion and the law of universal gravitation, proving that the force causing an apple to fall from a tree is the exact same force keeping planets in orbit around the Sun. Moreover, he independently invented calculus, which is the mathematical foundation for modern engineering.

In computer science, video game developers and 3D simulation programmers still use Newton's classical laws of physics to program realistic movement, collision detection, and graphical rendering.

Thank you very much.`,
      qa: [
        {
          q: 'What are Newton\'s laws used for in programming today?',
          a: 'Video game physics engines like Unity and Unreal Engine use Newton\'s laws of motion to simulate gravity, vehicle acceleration, and object collisions in real-time.'
        },
        {
          q: 'What mathematical discipline did Newton invent?',
          a: 'He invented calculus (at the same time as Leibniz), which is essential today for machine learning, graphic algorithms, and data science.'
        }
      ]
    },
    {
      id: 'oral-alan-turing',
      name: 'Alan Turing & the Birth of Computing',
      category: 'Padre de la Computación',
      avatar: '💻',
      shortDesc: 'Máquina de Turing, descifrado de Enigma en Bletchley Park, el Test de Turing y fundamentos de IA.',
      facts: {
        'Nacimiento / Muerte': '1912 – 1954 (Londres, Reino Unido)',
        'Hito Bélico': 'Descifró el código naval nazi Enigma en Bletchley Park',
        'Concepto Teórico': 'Turing Machine (modelo matemático universal de computación)',
        'Aporte a IA': 'Turing Test (1950): "¿Pueden pensar las máquinas?"'
      },
      phonetics: [
        { word: 'cryptography', ipa: '/krɪpˈtɑː.ɡrə.fi/', tip: 'krip-tó-gro-fi' },
        { word: 'machine', ipa: '/məˈʃiːn/', tip: 'mo-shíin (suena con sh, no ch)' },
        { word: 'intelligence', ipa: '/ɪnˈtel.ə.dʒəns/', tip: 'in-té-li-dshons' },
        { word: 'theoretical', ipa: '/ˌθiː.əˈret̬.kəl/', tip: 'zi-o-ré-ti-kol' }
      ],
      script: `Good morning teacher. Today, I would like to talk about Alan Turing, who is widely considered the father of theoretical computer science and artificial intelligence.

Alan Turing was born in London in 1912. In 1936, he introduced the concept of a "Universal Turing Machine," a theoretical model that could execute any computable algorithm. This groundbreaking paper established the mathematical foundations for all modern software and programmable computers.

During the Second World War, Turing worked as a chief codebreaker at Bletchley Park. He designed an electromechanical machine called the Bombe, which successfully deciphered encrypted German military communications produced by the Enigma machine. Historians estimate that Turing's cryptanalysis shortened the war by at least two years and saved millions of lives.

In 1950, Turing turned his attention to artificial intelligence and proposed the famous "Turing Test" to evaluate whether a machine could exhibit human-like intelligent behavior. Today, as we discuss AI chatbots like ChatGPT, Turing's foundational question, "Can machines think?", is more relevant than ever.

Thank you very much.`,
      qa: [
        {
          q: 'What was the Turing Test designed to measure?',
          a: 'It was designed to test whether a computer could imitate human conversation so convincingly that an evaluator could not distinguish it from a real human being.'
        },
        {
          q: 'How did Turing save lives during World War II?',
          a: 'He designed electromechanical machines at Bletchley Park to break the German Enigma cipher, allowing the Allies to intercept critical military intelligence.'
        }
      ]
    }
  ]
};
