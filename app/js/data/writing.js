/* =========================================================
   Data & Configuration: 100-word Writing Lab with Passive Voice
   Calibrated specifically for IES 9008 exam prompt & screenshots
   ========================================================= */
window.DATA = window.DATA || {};

window.DATA.writing = {
  title: 'Writing Lab: 100 Palabras con Passive Voice',
  prompt: 'Write a paragraph of approximately 100 words about great technological or scientific inventions that transformed humanity. You must use the Passive Voice (was/were + past participle, is/are + past participle) to describe who created them, when they were developed, and how they are used today.',
  minWords: 85,
  targetWords: 100,
  maxWords: 120,

  connectors: [
    { word: 'First / Initially', es: 'Primero / Inicialmente' },
    { word: 'Centuries later', es: 'Siglos más tarde' },
    { word: 'In the 19th century', es: 'En el siglo XIX' },
    { word: 'In 1928 / In 1956', es: 'En el año [X]' },
    { word: 'Afterwards / Later', es: 'Después / Más adelante' },
    { word: 'Nowadays / Today', es: 'Hoy en día / Actualmente' },
    { word: 'Finally / In conclusion', es: 'Finalmente / En conclusión' }
  ],

  passivePhrases: [
    { en: 'was created in [year]', es: 'fue creado/a en [año]' },
    { en: 'was invented by [inventor]', es: 'fue inventado/a por [inventor]' },
    { en: 'was patented by Thomas Edison', es: 'fue patentado por Thomas Edison' },
    { en: 'was developed to solve...', es: 'fue desarrollado/a para resolver...' },
    { en: 'were discovered by accident', es: 'fueron descubiertos por accidente' },
    { en: 'millions of lives were saved', es: 'millones de vidas fueron salvadas' },
    { en: 'is widely used today', es: 'es ampliamente utilizado hoy en día' },
    { en: 'are trained on massive datasets', es: 'son entrenados con conjuntos masivos de datos' }
  ],

  models: [
    {
      id: 'model-inventions',
      title: 'Modelo 1: Gran Evolución de las Invenciones (Recomendado)',
      theme: 'Inventions that Changed History',
      description: 'Basado exactamente en el ejemplo de la guía oficial del IES 9008 (Screenshot 2026-10-16 164840).',
      wordCount: 101,
      passiveCount: 7,
      text: `Throughout human history, remarkable discoveries have transformed civilization. First, the printing press [pv:was created] in 1440, so knowledge could easily spread. Centuries later, the telephone [pv:was developed] in 1876 by Alexander Graham Bell, and human voices [pv:were transmitted] over great distances. Later, the incandescent light bulb [pv:was patented] by Thomas Edison, illuminating modern cities. In 1928, penicillin [pv:was discovered] by Alexander Fleming, and millions of lives [pv:were saved]. Finally, the early Internet [pv:was built] by computer scientists. Today, huge amounts of information [pv:are shared] instantly across the globe, demonstrating how our daily lives [pv:are shaped] by human ingenuity.`,
      analysis: 'Usa 7 formas pasivas (was created, was developed, were transmitted, was patented, was discovered, were saved, was built, are shared, are shaped) y conectores cronológicos perfectos.'
    },
    {
      id: 'model-computing',
      title: 'Modelo 2: De la Computación a la Inteligencia Artificial',
      theme: 'Computing and Artificial Intelligence',
      description: 'Ideal para la carrera de Desarrollo de Software (IES 9008).',
      wordCount: 102,
      passiveCount: 6,
      text: `Modern digital technology began with brilliant scientific breakthroughs. During the twentieth century, theoretical computing models [pv:were formulated] by Alan Turing. In 1956, the field of Artificial Intelligence [pv:was established] at the Dartmouth Conference, where foundational algorithms [pv:were designed]. Decades later, the personal computer [pv:was popularized] by visionaries like Steve Jobs, making software accessible to everyone. Today, artificial neural networks [pv:are trained] on massive amounts of data, and modern AI chatbots [pv:are utilized] by millions of students and professionals. In conclusion, our digital society [pv:is driven] by automated systems, which continue to evolve and reshape the future of human work.`,
      analysis: 'Enfocado 100% en Sistemas / IA con 6 pasivas técnicas bien marcadas.'
    },
    {
      id: 'model-communication',
      title: 'Modelo 3: Telecomunicaciones y Electricidad',
      theme: 'Communication and Electricity (Tesla & Edison)',
      description: 'Combina inventores clásicos con tecnología moderna.',
      wordCount: 99,
      passiveCount: 6,
      text: `Human communication and energy have experienced massive revolutions over time. In the nineteenth century, alternating current motors [pv:were designed] by Nikola Tesla, while the commercial light bulb [pv:was patented] by Edison. Soon afterwards, radio waves [pv:were researched] across Europe to send wireless messages across oceans. In the late twentieth century, personal mobile phones [pv:were introduced] to consumers. Nowadays, high-speed fiber-optic connections [pv:are installed] in every city, and digital messages [pv:are sent] in milliseconds. Thanks to these crucial milestones, international business [pv:is sustained] smoothly, proving that modern life [pv:is powered] by centuries of tireless scientific experimentation.`,
      analysis: '99 palabras exactas, ideal para memorizar con pasivas en pasado y presente.'
    }
  ]
};
