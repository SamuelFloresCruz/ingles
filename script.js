const navLinks = [
  ["index.html", "Home", "Inicio"],
  ["about.html", "About Us", "Sobre nosotros"],
  ["future-technologies.html", "AI Technologies", "Tecnologías de IA"],
  ["tech-vocabulary.html", "AI Vocabulary", "Vocabulario de IA"],
  ["grammar-corner.html", "Grammar Corner", "Gramática"],
  ["reading-corner.html", "Reading Corner", "Lectura"],
  ["listening-corner.html", "Listening Corner", "Escucha"],
  ["speaking-corner.html", "Speaking Corner", "Expresión oral"],
  ["writing-corner.html", "Writing Corner", "Escritura"],
  ["gallery.html", "Gallery", "Galería"],
  ["resources.html", "Resources", "Recursos"],
  ["references.html", "References", "Referencias"]
];

const vocabularyItems = [
  {
    number: "01",
    word: "Algorithm",
    meaningEs: "Algoritmo",
    definitionEn: "A finite sequence of well-defined instructions used to solve a problem or perform a computation.",
    definitionEs: "Secuencia finita de instrucciones bien definidas utilizada para resolver un problema o realizar un cálculo.",
    exampleEn: "Hard problems often require advanced algorithms to be solved efficiently.",
    exampleEs: "Los problemas difíciles a menudo requieren algoritmos avanzados para resolverse de manera eficiente."
  },
  {
    number: "02",
    word: "Reliability",
    meaningEs: "Confiabilidad",
    definitionEn: "The ability of code or a system to work correctly and consistently without unexpected failures.",
    definitionEs: "Capacidad de un código o sistema para funcionar correcta y consistentemente sin fallas inesperadas.",
    exampleEn: "The study evaluated the reliability of ChatGPT-generated solutions in Java and Python.",
    exampleEs: "El estudio evaluó la confiabilidad de las soluciones generadas por ChatGPT en Java y Python."
  },
  {
    number: "03",
    word: "Optimization",
    meaningEs: "Optimización",
    definitionEn: "The process of improving code so it uses resources more effectively and produces better results.",
    definitionEs: "Proceso de mejorar código para usar recursos de forma más efectiva y producir mejores resultados.",
    exampleEn: "Compiler optimization can improve generated code when problems become more complex.",
    exampleEs: "La optimización del compilador puede mejorar el código generado cuando los problemas se vuelven más complejos."
  },
  {
    number: "04",
    word: "Complexity",
    meaningEs: "Complejidad",
    definitionEn: "A measure of how difficult a problem is to solve, often classified as easy, medium, or hard.",
    definitionEs: "Medida de cuán difícil es resolver un problema, clasificada a menudo como fácil, media o difícil.",
    exampleEn: "The study analyzed ChatGPT's performance across problems of varying complexity.",
    exampleEs: "El estudio analizó el rendimiento de ChatGPT en problemas de diferente complejidad."
  },
  {
    number: "05",
    word: "Maintainability",
    meaningEs: "Mantenibilidad",
    definitionEn: "The ease with which software can be modified, corrected, or improved over time.",
    definitionEs: "Facilidad con la que un software puede modificarse, corregirse o mejorarse a lo largo del tiempo.",
    exampleEn: "The lack of documentation reduces the maintainability of AI-generated code.",
    exampleEs: "La falta de documentación reduce la mantenibilidad del código generado por IA."
  },
  {
    number: "06",
    word: "Recursion",
    meaningEs: "Recursividad",
    definitionEn: "A programming technique in which a function calls itself to solve smaller instances of a problem.",
    definitionEs: "Técnica de programación en la que una función se llama a sí misma para resolver instancias más pequeñas de un problema.",
    exampleEn: "Solutions to hard problems may involve advanced techniques such as recursion.",
    exampleEs: "Las soluciones a problemas difíciles pueden implicar técnicas avanzadas como la recursividad."
  },
  {
    number: "07",
    word: "Refactoring",
    meaningEs: "Refactorización",
    definitionEn: "The process of restructuring existing code without changing its external behavior, in order to improve its quality.",
    definitionEs: "Proceso de reestructurar código existente sin cambiar su comportamiento externo, con el fin de mejorar su calidad.",
    exampleEn: "ChatGPT was tested on its refactoring capabilities to improve code quality.",
    exampleEs: "ChatGPT fue evaluado en su capacidad de refactorización para mejorar la calidad del código."
  },
  {
    number: "08",
    word: "Correctness",
    meaningEs: "Corrección",
    definitionEn: "The degree to which a program produces the expected and accurate output for given inputs.",
    definitionEs: "Grado en que un programa produce la salida esperada y precisa para determinadas entradas.",
    exampleEn: "The researchers evaluated the correctness of ChatGPT-generated solutions on LeetCode.",
    exampleEs: "Los investigadores evaluaron la corrección de las soluciones generadas por ChatGPT en LeetCode."
  },
  {
    number: "09",
    word: "Prompt",
    meaningEs: "Instrucción",
    definitionEn: "The natural language input given to an AI model to instruct it to generate a specific response or code.",
    definitionEs: "Entrada en lenguaje natural que se proporciona a un modelo de IA para indicarle que genere una respuesta o código específico.",
    exampleEn: "A sample prompt structure was used to generate Java code for each LeetCode problem.",
    exampleEs: "Se utilizó una estructura de instrucción de ejemplo para generar código Java para cada problema de LeetCode."
  },
  {
    number: "10",
    word: "Queue",
    meaningEs: "Cola",
    definitionEn: "A linear data structure that follows the First-In-First-Out (FIFO) principle for adding and removing elements.",
    definitionEs: "Estructura de datos lineal que sigue el principio de primero en entrar, primero en salir (FIFO).",
    exampleEn: "The dataset included easy, medium, and hard problems involving queues.",
    exampleEs: "El conjunto de datos incluyó problemas fáciles, medios y difíciles relacionados con colas."
  },
  {
    number: "11",
    word: "Stack",
    meaningEs: "Pila",
    definitionEn: "A linear data structure that follows the Last-In-First-Out (LIFO) principle for adding and removing elements.",
    definitionEs: "Estructura de datos lineal que sigue el principio de último en entrar, primero en salir (LIFO).",
    exampleEn: "Easy problems often involve manipulating well-known structures like stacks.",
    exampleEs: "Los problemas fáciles a menudo implican manipular estructuras conocidas como las pilas."
  },
  {
    number: "12",
    word: "Graph",
    meaningEs: "Grafo",
    definitionEn: "A data structure consisting of nodes connected by edges, used to represent relationships between objects.",
    definitionEs: "Estructura de datos formada por nodos conectados por aristas, utilizada para representar relaciones entre objetos.",
    exampleEn: "Medium problems often involve working with graphs and trees.",
    exampleEs: "Los problemas de dificultad media a menudo implican trabajar con grafos y árboles."
  },
  {
    number: "13",
    word: "Heap",
    meaningEs: "Montón",
    definitionEn: "A region of memory used for dynamic memory allocation, where objects and data are stored during a program's execution. Unlike the stack, data in the heap remains in memory until it is explicitly released by the program or automatically removed by a garbage collector, allowing it to persist for as long as needed.",
    definitionEs: "Región de memoria utilizada para la asignación dinámica de memoria, donde se almacenan objetos y datos durante la ejecución de un programa. A diferencia de la pila (stack), los datos del montón (heap) permanecen en memoria hasta que el programa los libera explícitamente o un recolector de basura los elimina automáticamente, permitiendo que existan durante el tiempo que sea necesario.",
    exampleEn: "A game creates a new player object and stores it in the heap so it can remain available until the player leaves the game.",
    exampleEs: "Un videojuego crea un nuevo objeto para representar a un jugador y lo almacena en el montón (heap) para que permanezca disponible hasta que el jugador salga del juego."
  },
  {
    number: "14",
    word: "Hash",
    meaningEs: "Hash",
    definitionEn: "A data structure or function that maps keys to values for highly efficient lookup and storage.",
    definitionEs: "Estructura o función de datos que asocia claves con valores para una búsqueda y almacenamiento muy eficientes.",
    exampleEn: "The first testing category included problems involving hash tables.",
    exampleEs: "La primera categoría de pruebas incluyó problemas relacionados con tablas hash."
  },
  {
    number: "15",
    word: "Vulnerability",
    meaningEs: "Vulnerabilidad",
    definitionEn: "A weakness in code or a system that could be exploited to compromise its security.",
    definitionEs: "Debilidad en el código o en un sistema que podría explotarse para comprometer su seguridad.",
    exampleEn: "The study by Khoury et al. highlighted specific security vulnerabilities in generated code.",
    exampleEs: "El estudio de Khoury et al. destacó vulnerabilidades de seguridad específicas en el código generado."
  },
  {
    number: "16",
    word: "Transformer",
    meaningEs: "Transformador",
    definitionEn: "A deep learning architecture that processes sequential data using attention mechanisms, forming the basis of most modern LLMs.",
    definitionEs: "Arquitectura de aprendizaje profundo que procesa datos secuenciales mediante mecanismos de atención, base de la mayoría de los LLM modernos.",
    exampleEn: "The architecture of LLMs is often based on transformer models.",
    exampleEs: "La arquitectura de los LLM suele basarse en modelos transformadores."
  },
  {
    number: "17",
    word: "Token",
    meaningEs: "Token",
    definitionEn: "A unit of text, such as a word or subword, that a language model processes or predicts one at a time.",
    definitionEs: "Unidad de texto, como una palabra o subpalabra, que un modelo de lenguaje procesa o predice de una en una.",
    exampleEn: "Codex is designed to predict the next token in a sequence when generating code.",
    exampleEs: "Codex está diseñado para predecir el siguiente token en una secuencia al generar código."
  },
  {
    number: "18",
    word: "Data",
    meaningEs: "Datos",
    imageAliases: ["Conjunto"],
    definitionEn: "Raw facts, figures, or information that can be collected, stored, processed, and analyzed to produce meaningful insights or support decision-making. Data can be in the form of numbers, text, images, audio, or other types of information.",
    definitionEs: "Conjunto de hechos, cifras o información sin procesar que puede recopilarse, almacenarse, procesarse y analizarse para obtener información útil o apoyar la toma de decisiones. Los datos pueden presentarse en forma de números, texto, imágenes, audio u otros tipos de información.",
    exampleEn: "The application collects user data to generate reports and improve system performance.",
    exampleEs: "La aplicación recopila datos de los usuarios para generar informes y mejorar el rendimiento del sistema."
  },
  {
    number: "19",
    word: "Compiler",
    meaningEs: "Compilador",
    definitionEn: "A program that translates source code into machine-executable instructions, checking it for syntax errors.",
    definitionEs: "Programa que traduce el código fuente a instrucciones ejecutables por la máquina, verificando errores de sintaxis.",
    exampleEn: "Compile errors occur during the compiler's translation phase.",
    exampleEs: "Los errores de compilación ocurren durante la fase de traducción del compilador."
  },
  {
    number: "20",
    word: "Syntax",
    meaningEs: "Sintaxis",
    definitionEn: "The set of rules that define the correct structure and form of statements in a programming language.",
    definitionEs: "Conjunto de reglas que definen la estructura y forma correctas de las instrucciones en un lenguaje de programación.",
    exampleEn: "Compile errors are typically related to syntax issues or type mismatches.",
    exampleEs: "Los errores de compilación suelen estar relacionados con problemas de sintaxis o incompatibilidad de tipos."
  },
  {
    number: "21",
    word: "Semantics",
    meaningEs: "Semántica",
    definitionEn: "The meaning behind the structure of code, describing what a program actually does when it runs.",
    definitionEs: "Significado detrás de la estructura del código, que describe lo que realmente hace un programa al ejecutarse.",
    exampleEn: "Generated code can be syntactically correct but semantically flawed.",
    exampleEs: "El código generado puede ser sintácticamente correcto pero semánticamente defectuoso."
  },
  {
    number: "22",
    word: "Variable",
    meaningEs: "Variable",
    definitionEn: "A named storage location in a program that holds a value which can change during execution.",
    definitionEs: "Ubicación de almacenamiento con nombre en un programa que contiene un valor que puede cambiar durante la ejecución.",
    exampleEn: "The generated code showed no unused variables in either language.",
    exampleEs: "El código generado no mostró variables no utilizadas en ninguno de los dos lenguajes."
  },
  {
    number: "23",
    word: "Loop",
    meaningEs: "Bucle",
    definitionEn: "A control structure that repeats a block of code until a specified condition is met.",
    definitionEs: "Estructura de control que repite un bloque de código hasta que se cumple una condición determinada.",
    exampleEn: "Solutions to array problems often rely on a simple loop to traverse the elements.",
    exampleEs: "Las soluciones a problemas de arreglos suelen depender de un bucle simple para recorrer los elementos."
  },
  {
    number: "24",
    word: "Iteration",
    meaningEs: "Iteración",
    definitionEn: "A single repetition of a process, such as one pass through a loop or one step of an algorithm.",
    definitionEs: "Una sola repetición de un proceso, como un paso a través de un bucle o un paso de un algoritmo.",
    exampleEn: "After some iteration, ChatGPT-3.5 was able to produce more secure code.",
    exampleEs: "Tras algunas iteraciones, ChatGPT-3.5 pudo producir código más seguro."
  },
  {
    number: "25",
    word: "Debugging",
    meaningEs: "Depuración",
    definitionEn: "The process of finding and fixing errors or defects in a computer program.",
    definitionEs: "Proceso de encontrar y corregir errores o defectos en un programa de computadora.",
    exampleEn: "Social media discussions about ChatGPT often covered debugging scenarios.",
    exampleEs: "Las discusiones en redes sociales sobre ChatGPT a menudo trataban sobre escenarios de depuración."
  },
  {
    number: "26",
    word: "Testing",
    meaningEs: "Prueba",
    definitionEn: "The process of executing a program to verify that it behaves correctly and meets requirements.",
    definitionEs: "Proceso de ejecutar un programa para verificar que se comporta correctamente y cumple con los requisitos.",
    exampleEn: "LeetCode's integrated testing suite benchmarked solutions against predefined test cases.",
    exampleEs: "El sistema de pruebas integrado de LeetCode evaluó las soluciones frente a casos de prueba predefinidos."
  },
  {
    number: "27",
    word: "Security",
    meaningEs: "Seguridad",
    definitionEn: "The protection of a system or code against unauthorized access, damage, or exploitation.",
    definitionEs: "Protección de un sistema o código contra el acceso no autorizado, daños o explotación.",
    exampleEn: "ChatGPT-3.5 required oversight to ensure secure coding practices.",
    exampleEs: "ChatGPT-3.5 requirió supervisión para garantizar prácticas de codificación seguras."
  },
  {
    number: "28",
    word: "Robustness",
    meaningEs: "Robustez",
    definitionEn: "The ability of a program to handle unexpected inputs or conditions without failing.",
    definitionEs: "Capacidad de un programa para manejar entradas o condiciones inesperadas sin fallar.",
    exampleEn: "The generated code often lacks the robustness needed for real-world deployment.",
    exampleEs: "El código generado a menudo carece de la robustez necesaria para su despliegue en el mundo real."
  },
  {
    number: "29",
    word: "Memory",
    meaningEs: "Memoria",
    definitionEn: "The system resource used to store data while a program is running.",
    definitionEs: "Recurso del sistema utilizado para almacenar datos mientras un programa se ejecuta.",
    exampleEn: "Python solutions generally consumed less memory than Java.",
    exampleEs: "Las soluciones en Python generalmente consumieron menos memoria que las de Java."
  },
  {
    number: "30",
    word: "Efficiency",
    meaningEs: "Eficiencia",
    definitionEn: "The ability of a program to achieve its goal while minimizing the use of resources such as time and memory.",
    definitionEs: "Capacidad de un programa para lograr su objetivo minimizando el uso de recursos como el tiempo y la memoria.",
    exampleEn: "Java demonstrated higher runtime efficiency across all difficulty levels.",
    exampleEs: "Java demostró una mayor eficiencia en tiempo de ejecución en todos los niveles de dificultad."
  }
];

const vocabularyImageFiles = {
  Algorithm: "assets/vocabulary/algoritmo.jpeg",
  Reliability: "assets/vocabulary/Confiabilidad.jpeg",
  Optimization: "assets/vocabulary/Optimizacion.jpeg",
  Complexity: "assets/vocabulary/Complejidad.jpeg",
  Maintainability: "assets/vocabulary/Mantenibilidad.jpeg",
  Recursion: "assets/vocabulary/Recursividad.jpeg",
  Refactoring: "assets/vocabulary/Refactorizacion.jpeg",
  Correctness: "assets/vocabulary/Correccion.jpeg",
  Prompt: "assets/vocabulary/Instruccion.jpeg",
  Queue: "assets/vocabulary/cola.jpeg",
  Stack: "assets/vocabulary/pila.jpeg",
  Graph: "assets/vocabulary/grafo.jpeg",
  Heap: "assets/vocabulary/monton.jpeg",
  Hash: "assets/vocabulary/Hash.jpeg",
  Vulnerability: "assets/vocabulary/Vulnerabilidad.jpeg",
  Transformer: "assets/vocabulary/Transformador.jpeg",
  Token: "assets/vocabulary/Token.jpeg",
  Data: "assets/vocabulary/Conjunto.jpeg",
  Compiler: "assets/vocabulary/Compilador.jpeg",
  Syntax: "assets/vocabulary/Sintaxis.jpeg",
  Semantics: "assets/vocabulary/semantica.jpeg",
  Variable: "assets/vocabulary/variable.jpeg",
  Loop: "assets/vocabulary/bucle.jpeg",
  Iteration: "assets/vocabulary/iteracion.jpeg",
  Debugging: "assets/vocabulary/depuracion.jpeg",
  Testing: "assets/vocabulary/prueba.jpeg",
  Security: "assets/vocabulary/seguridad.jpeg",
  Robustness: "assets/vocabulary/robustez.jpeg",
  Memory: "assets/vocabulary/memoria.jpeg",
  Efficiency: "assets/vocabulary/eficiencia.jpeg"
};

function buildHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="AI GPT home">
      <span class="brand-mark">AI</span>
      <span><strong>AI GPT</strong><small>English Team Hub</small></span>
    </a>
    <button class="translate-toggle" type="button" aria-label="Translate page to Spanish" data-lang="en">ES</button>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
    <nav class="site-nav" aria-label="Main navigation">
      ${navLinks.map(([href, label]) => `<a href="${href}" data-en="${label}">${label}</a>`).join("")}
    </nav>
  `;
}

function setActiveLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
}

function initMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initGlossarySearch() {
  const input = document.querySelector("#glossarySearch");
  const cards = document.querySelectorAll(".vocab-card");
  if (!input || !cards.length) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const term = card.dataset.term || "";
      card.hidden = Boolean(query) && !text.includes(query) && !term.includes(query);
    });
  });
}

function initVocabularyExplorer() {
  const modal = document.querySelector("#vocabModal");
  const list = document.querySelector("#glossary");
  if (!modal || !list) return;

  const image = document.querySelector("#vocabModalImage");
  const number = document.querySelector("#vocabModalNumber");
  const title = document.querySelector("#vocabModalTitle");
  const subtitle = document.querySelector("#vocabModalSubtitle");
  const meaning = document.querySelector("#vocabModalMeaning");
  const definitionEn = document.querySelector("#vocabModalDefinitionEn");
  const definitionEs = document.querySelector("#vocabModalDefinitionEs");
  const exampleEn = document.querySelector("#vocabModalExampleEn");
  const exampleEs = document.querySelector("#vocabModalExampleEs");
  let activeCard = null;
  const preloadedImageSources = new Set();

  function normalizeImageName(value) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function getVocabularyImageSources(item) {
    const directSource = vocabularyImageFiles[item.word];
    const names = [
      item.meaningEs,
      item.meaningEs.toLowerCase(),
      normalizeImageName(item.meaningEs),
      ...(item.imageAliases || []),
      item.word,
      item.word.toLowerCase(),
      normalizeImageName(item.word)
    ].filter(Boolean);
    const uniqueNames = [...new Set(names)];
    const extensions = ["png", "jpg", "jpeg", "webp"];

    const folders = ["assets/images/vocabulary", "assets/vocabulary"];

    const fallbackSources = folders.flatMap((folder) =>
      uniqueNames.flatMap((name) =>
        extensions.map((extension) => `${folder}/${name}.${extension}`)
      )
    );

    return directSource
      ? [directSource, ...fallbackSources.filter((source) => source !== directSource)]
      : fallbackSources;
  }

  function preloadVocabularyImage(item) {
    const source = vocabularyImageFiles[item.word];
    if (!source || preloadedImageSources.has(source)) return;
    preloadedImageSources.add(source);
    const preloadImage = new Image();
    preloadImage.decoding = "async";
    preloadImage.src = encodeURI(source);
  }

  function preloadVocabularyImages() {
    vocabularyItems.forEach(preloadVocabularyImage);
  }

  function setVocabularyImage(item) {
    if (!image) return;
    const media = image.closest(".vocab-modal-media");
    const sources = getVocabularyImageSources(item);
    let index = 0;

    media?.classList.remove("has-image");
    image.hidden = false;
    image.alt = `${item.word} / ${item.meaningEs}`;
    image.onload = () => {
      media?.classList.add("has-image");
    };
    image.onerror = () => {
      index += 1;
      media?.classList.remove("has-image");
      if (index < sources.length) {
        image.src = encodeURI(sources[index]);
      } else {
        image.hidden = true;
        image.removeAttribute("src");
      }
    };
    image.src = encodeURI(sources[index]);
  }

  function renderVocabularyList() {
    const fragment = document.createDocumentFragment();

    vocabularyItems.forEach((item, index) => {
      const button = document.createElement("button");
      const numberSpan = document.createElement("span");
      const wordSpan = document.createElement("span");

      button.className = "vocab-card";
      button.type = "button";
      button.dataset.vocabIndex = String(index);
      button.dataset.term = [
        item.word,
        item.meaningEs,
        item.definitionEn,
        item.definitionEs,
        item.exampleEn,
        item.exampleEs
      ].join(" ").toLowerCase();
      button.setAttribute("aria-label", `Open ${item.word} vocabulary detail`);

      numberSpan.className = "vocab-number";
      numberSpan.textContent = item.number;
      wordSpan.className = "vocab-word";
      wordSpan.textContent = item.word;

      button.append(numberSpan, wordSpan);
      fragment.appendChild(button);
    });

    list.replaceChildren(fragment);
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (activeCard) activeCard.focus();
  }

  function openItem(item, card) {
    activeCard = card;
    if (number) number.textContent = item.number;
    if (title) title.textContent = item.word;
    if (subtitle) subtitle.textContent = item.meaningEs;
    if (meaning) meaning.textContent = `EN: ${item.word} | ES: ${item.meaningEs}`;
    if (definitionEn) definitionEn.textContent = item.definitionEn;
    if (definitionEs) definitionEs.textContent = item.definitionEs;
    if (exampleEn) exampleEn.textContent = item.exampleEn;
    if (exampleEs) exampleEs.textContent = item.exampleEs;

    setVocabularyImage(item);
    modal.hidden = false;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".vocab-modal-close")?.focus();
  }

  renderVocabularyList();

  const schedulePreload = () => preloadVocabularyImages();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(schedulePreload, { timeout: 1500 });
  } else {
    window.setTimeout(schedulePreload, 500);
  }

  list.addEventListener("click", (event) => {
    const card = event.target.closest(".vocab-card");
    if (!card) return;
    const item = vocabularyItems[Number(card.dataset.vocabIndex)];
    if (item) openItem(item, card);
  });

  list.addEventListener(
    "pointerenter",
    (event) => {
      const card = event.target.closest(".vocab-card");
      if (!card) return;
      const item = vocabularyItems[Number(card.dataset.vocabIndex)];
      if (item) preloadVocabularyImage(item);
    },
    true
  );

  list.addEventListener("focusin", (event) => {
    const card = event.target.closest(".vocab-card");
    if (!card) return;
    const item = vocabularyItems[Number(card.dataset.vocabIndex)];
    if (item) preloadVocabularyImage(item);
  });

  modal.querySelectorAll("[data-close-vocab]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function initAccordions() {
  document.querySelectorAll(".accordion-item button").forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });
}

const people = {
  samuel: {
    initials: "SF",
    image: "assets/images/samuel-avatar.png",
    imageAlt: {
      en: "Animated portrait of Samuel Flores Cruz",
      es: "Retrato animado de Samuel Flores Cruz"
    },
    en: {
      name: "Samuel Flores Cruz",
      career: "Systems Engineering",
      course: "English Technical II",
      interest: "Artificial intelligence for learning and productivity.",
      bioTitle: "Autobiography",
      bioOne: "My name is Samuel Flores Cruz. I am 21 years old and was born on March 9, 2005. I speak two languages, Spanish and Quechua, and lead a fairly quiet life, free from major upheavals, which is exactly how I like it.\n\nMy family consists of three people: my dad, my mom, and myself. My mother works at the municipal government office, and my father is a bricklayer; occasionally, I join him at construction sites to lend a hand when extra help is needed.\n\nI am currently in my seventh semester of Systems Engineering at the Domingo Savio Private University (UPDS). Mathematics has always been my favorite subject since my school days; I had a knack for it and enjoyed solving problems. Conversely, language-related subjects were never my strong suit; they were the ones I liked the least. In general, I prefer subjects that require logic and reasoning over those based on rote memorization or heavy theory.\n\nAs for personal preferences, there are a few things I tend to avoid: I dislike getting up early or leaving the house unless it is necessary. I prefer staying in a quiet, familiar environment rather than constantly going out. My hobbies reflect this preference, playing video games, sleeping, and watching anime, since they are activities I can enjoy without leaving home. Interestingly, the exact opposite was true during my childhood and adolescence: I really enjoyed going out and staying active.\n\nIn short, I am someone who values a quiet routine, prioritizing simplicity and familiarity over constant hustle and bustle; my studies, my family, and my hobbies form the pillars of my daily life.",
      bioTwo: "I am learning English because many AI tools, tutorials, articles, and technical documents are written in English. Improving this skill helps me understand technology better and communicate my ideas in a professional way.",
      bioThree: "In this portfolio, I share activities, vocabulary, grammar practice, readings, multimedia resources, and reflections about artificial intelligence."
    },
    es: {
      name: "Samuel Flores Cruz",
      career: "Ingenieria de Sistemas",
      course: "Ingles Tecnico II",
      interest: "Inteligencia artificial para el aprendizaje y la productividad.",
      bioTitle: "Autobiografia",
      bioOne: "Mi nombre es Samuel Flores Cruz. Tengo 21 anos y naci el 9 de marzo de 2005. Hablo dos idiomas, espanol y quechua, y llevo una vida bastante tranquila, libre de grandes cambios, que es exactamente como me gusta.\n\nMi familia esta formada por tres personas: mi papa, mi mama y yo. Mi madre trabaja en la alcaldia, y mi padre es albanil; ocasionalmente, lo acompano a obras de construccion para ayudarlo cuando se necesita apoyo extra.\n\nActualmente estoy en el septimo semestre de Ingenieria de Sistemas en la Universidad Privada Domingo Savio (UPDS). Las matematicas siempre han sido mi materia favorita desde mis dias de colegio; tenia facilidad para ellas y disfrutaba resolver problemas. Por el contrario, las materias relacionadas con lenguaje nunca fueron mi punto fuerte; eran las que menos me gustaban. En general, prefiero las materias que requieren logica y razonamiento sobre aquellas basadas en la memorizacion o mucha teoria.\n\nEn cuanto a mis preferencias personales, hay algunas cosas que suelo evitar: no me gusta levantarme temprano ni salir de casa a menos que sea necesario. Prefiero quedarme en un ambiente tranquilo y familiar en lugar de salir constantemente. Mis pasatiempos reflejan esta preferencia: jugar videojuegos, dormir y ver anime, ya que son actividades que puedo disfrutar sin salir de casa. Curiosamente, durante mi ninez y adolescencia ocurria todo lo contrario: realmente disfrutaba salir y mantenerme activo.\n\nEn resumen, soy una persona que valora una rutina tranquila, priorizando la simplicidad y la familiaridad sobre el movimiento constante; mis estudios, mi familia y mis pasatiempos forman los pilares de mi vida diaria.",
      bioTwo: "Estoy aprendiendo ingles porque muchas herramientas, tutoriales, articulos y documentos tecnicos sobre IA estan escritos en ingles. Mejorar esta habilidad me ayuda a comprender mejor la tecnologia y comunicar mis ideas de manera profesional.",
      bioThree: "En este portafolio comparto actividades, vocabulario, practica de gramatica, lecturas, recursos multimedia y reflexiones sobre inteligencia artificial."
    }
  },
  rodrigo: {
    initials: "RH",
    image: "assets/images/Rodrigo-Foto.jpeg",
    fallbackImage: "assets/images/rodrigo-avatar.png",
    imageAlt: {
      en: "Photo of Rodrigo Heredia Morante",
      es: "Foto de Rodrigo Heredia Morante"
    },
    en: {
      name: "Rodrigo Heredia Morante",
      career: "Systems Engineering",
      course: "English Technical II",
      interest: "Technology, programming, and artificial intelligence for solving practical problems.",
      bioTitle: "My Professional Autobiography",
      bioOne: "My name is Rodrigo Heredia Morante. I am 22 years old, and I was born on February 19 in Bolivia. I am currently studying Systems Engineering because I enjoy technology, innovation, and solving problems through computers and software.\n\nI am a responsible, hardworking, and motivated person. I always try to learn new skills and improve my knowledge. I like working both independently and as part of a team, and I believe that communication and responsibility are important for achieving good results.\n\nMy goal is to become a successful systems engineer and contribute to the development of technological solutions that help people and businesses. I am especially interested in programming, robotics, and new technologies.\n\nIn my free time, I enjoy exercising, playing video games, and learning about technology. These activities help me stay motivated and continue developing my skills.\n\nI believe that learning English is essential for my professional future because it allows me to communicate with people from different countries, access international information, and create better career opportunities. I am excited to continue improving my English and achieving my academic and professional goals."
    },
    es: {
      name: "Rodrigo Heredia Morante",
      career: "Ingenieria de Sistemas",
      course: "Ingles Tecnico II",
      interest: "Tecnologia, programacion e inteligencia artificial para resolver problemas practicos.",
      bioTitle: "Mi autobiografia profesional",
      bioOne: "Mi nombre es Rodrigo Heredia Morante. Tengo 22 anos y naci el 19 de febrero en Bolivia. Actualmente estudio Ingenieria de Sistemas porque disfruto la tecnologia, la innovacion y resolver problemas mediante computadoras y software.\n\nSoy una persona responsable, trabajadora y motivada. Siempre trato de aprender nuevas habilidades y mejorar mis conocimientos. Me gusta trabajar tanto de manera independiente como en equipo, y creo que la comunicacion y la responsabilidad son importantes para lograr buenos resultados.\n\nMi objetivo es convertirme en un ingeniero de sistemas exitoso y contribuir al desarrollo de soluciones tecnologicas que ayuden a las personas y a las empresas. Estoy especialmente interesado en la programacion, la robotica y las nuevas tecnologias.\n\nEn mi tiempo libre disfruto hacer ejercicio, jugar videojuegos y aprender sobre tecnologia. Estas actividades me ayudan a mantenerme motivado y a seguir desarrollando mis habilidades.\n\nCreo que aprender ingles es esencial para mi futuro profesional porque me permite comunicarme con personas de diferentes paises, acceder a informacion internacional y crear mejores oportunidades laborales. Estoy emocionado por seguir mejorando mi ingles y alcanzar mis metas academicas y profesionales."
    }
  },
  michel: {
    initials: "MO",
    image: "assets/images/michel-avatar.png",
    imageAlt: {
      en: "Animated portrait of Michel Daniel Oporto Valencia",
      es: "Retrato animado de Michel Daniel Oporto Valencia"
    },
    en: {
      name: "Michel Daniel Oporto Valencia",
      career: "Systems Engineering",
      course: "English Technical II",
      interest: "Electronics, technology, video games, and learning through the internet.",
      bioTitle: "Autobiography",
      bioOne: "Hello, my name is Mitchel Daniel Oporto Valencia. I was born on February 22, 2006, in Cochabamba. I have two brothers and one sister: I have a younger brother who is currently in school, an older brother who is studying Systems Engineering at UPDS, and an older sister who works at an institute as an English tutor.\n\nMy family and I are always connected online; we often chat in our Telegram group. We all love and take great care of our little cat, Daysi, and on rare occasions, we spend time together playing in a Minecraft world.\n\nAt school, I participated in a singing contest. I enjoyed my Mathematics class, I became friends with many teachers, and there were very few times when I didn't turn in my homework.\n\nMy hobbies include browsing the internet, playing video games, looking at circuit diagrams online to learn more, visiting classmates from the institute where I studied Electronics, and occasionally solving Rubik's cubes."
    },
    es: {
      name: "Michel Daniel Oporto Valencia",
      career: "Ingenieria de Sistemas",
      course: "Ingles Tecnico II",
      interest: "Electronica, tecnologia, videojuegos y aprendizaje mediante internet.",
      bioTitle: "Autobiografia",
      bioOne: "Hola, mi nombre es Mitchel Daniel Oporto Valencia. Naci el 22 de febrero de 2006 en Cochabamba. Tengo dos hermanos y una hermana: tengo un hermano menor que actualmente esta en el colegio, un hermano mayor que estudia Ingenieria de Sistemas en la UPDS y una hermana mayor que trabaja en un instituto como tutora de ingles.\n\nMi familia y yo siempre estamos conectados en linea; a menudo conversamos en nuestro grupo de Telegram. Todos queremos y cuidamos mucho a nuestra pequena gata, Daysi, y en raras ocasiones pasamos tiempo juntos jugando en un mundo de Minecraft.\n\nEn el colegio participe en un concurso de canto. Disfrutaba mi clase de Matematicas, me hice amigo de muchos profesores y fueron muy pocas las veces en que no entregue mi tarea.\n\nMis pasatiempos incluyen navegar por internet, jugar videojuegos, mirar diagramas de circuitos en linea para aprender mas, visitar a companeros del instituto donde estudie Electronica y, ocasionalmente, resolver cubos de Rubik."
    }
  }
};

let selectedPerson = localStorage.getItem("selectedPerson") || "samuel";

function getCurrentLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "es" || urlLang === "en") return urlLang;
  return localStorage.getItem("siteLanguage") || "en";
}

function isEnglishOnlyPage() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  return ["gallery.html", "references.html", "tech-vocabulary.html"].includes(current);
}

function renderPersonProfile(lang = getCurrentLanguage()) {
  const profile = people[selectedPerson] || people.samuel;
  selectedPerson = people[selectedPerson] ? selectedPerson : "samuel";
  if (!profile) return;
  const englishText = profile.en;
  const translatedText = profile[lang === "es" ? "es" : "en"];
  const text = { ...englishText, ...translatedText };
  Object.entries(text).forEach(([key, value]) => {
    if (!value) text[key] = englishText[key];
  });
  const fields = {
    personName: text.name,
    personInitials: profile.initials,
    personCareer: text.career,
    personCourse: text.course,
    personInterest: text.interest,
    personBioTitle: text.bioTitle,
    personBioOne: text.bioOne,
    personBioTwo: text.bioTwo,
    personBioThree: text.bioThree
  };

  Object.entries(fields).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });

  const photo = document.getElementById("personPhoto");
  if (photo) {
    photo.onerror = () => {
      if (profile.fallbackImage && photo.src !== profile.fallbackImage) {
        photo.src = profile.fallbackImage;
      }
    };
    photo.src = profile.image;
    photo.alt = profile.imageAlt?.[lang === "es" ? "es" : "en"] || text.name;
  }

  document.querySelectorAll(".person-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.person === selectedPerson);
  });
}

function initPersonSelector() {
  const buttons = document.querySelectorAll(".person-button");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedPerson = button.dataset.person || "samuel";
      localStorage.setItem("selectedPerson", selectedPerson);
      renderPersonProfile();
    });
  });

  renderPersonProfile();
}

const spanishText = {
  "Home": "Inicio",
  "About Me": "Sobre mi",
  "About Us": "Sobre nosotros",
  "Our Team": "Nuestro equipo",
  "AI Technologies": "Tecnologias de IA",
  "AI Vocabulary": "Vocabulario de IA",
  "Grammar Corner": "Gramatica",
  "Reading Corner": "Lectura",
  "Listening Corner": "Escucha",
  "Speaking Corner": "Expresion oral",
  "Writing Corner": "Escritura",
  "Gallery": "Galeria",
  "Resources": "Recursos",
  "References": "Referencias",
  "Welcome to": "Bienvenido a",
  "Welcome to the Artificial Intelligence English Hub.": "Bienvenido al Hub de Ingles sobre Inteligencia Artificial.",
  "AI GPT": "IA GPT",
  "AI": "IA",
  "English Team Hub": "Hub de Ingles en Equipo",
  "FutureTech English Hub home": "Inicio de FutureTech English Hub",
  "Futuristic technology scene with human and robotic hands": "Escena de tecnologia futurista con manos humana y robotica",
  "Project introduction": "Introduccion del proyecto",
  "Intelligence Lab": "Laboratorio de Inteligencia",
  "This is our digital portfolio for English Technical II. Here we share our learning journey, projects, and activities about artificial intelligence and its impact on the future.": "Este es nuestro portafolio digital para Ingles Tecnico II. Aqui compartimos nuestro proceso de aprendizaje, proyectos y actividades sobre inteligencia artificial y su impacto en el futuro.",
  "Explore Our Site": "Explorar nuestro sitio",
  "About This Site": "Sobre este sitio",
  "AI GPT is a team digital portfolio created to practice English through artificial intelligence topics in technical and academic contexts.": "AI GPT es un portafolio digital grupal creado para practicar ingles mediante temas de inteligencia artificial en contextos tecnicos y academicos.",
  "Our Goals": "Nuestros objetivos",
  "Improve our English skills.": "Mejorar nuestras habilidades en ingles.",
  "Learn technical vocabulary about AI.": "Aprender vocabulario tecnico sobre IA.",
  "Communicate ideas about intelligent systems.": "Comunicar ideas sobre sistemas inteligentes.",
  "Develop digital and academic competencies.": "Desarrollar competencias digitales y academicas.",
  "What You'll Find Here": "Que encontraras aqui",
  "Vocabulary and grammar resources.": "Recursos de vocabulario y gramatica.",
  "Reading, listening, speaking, and writing activities.": "Actividades de lectura, escucha, speaking y escritura.",
  "Projects, infographics, and reflections about AI.": "Proyectos, infografias y reflexiones sobre IA.",
  "Systems Engineering Student": "Estudiante de Ingenieria de Sistemas",
  "English Technical II": "Ingles Tecnico II",
  "Passionate about artificial intelligence, innovation, and learning.": "Apasionado por la inteligencia artificial, la innovacion y el aprendizaje.",
  "Team Members": "Integrantes del equipo",
  "Samuel Flores Cruz": "Samuel Flores Cruz",
  "Rodrigo Heredia Morante": "Rodrigo Heredia Morante",
  "Michel Daniel Oporto Valencia": "Michel Daniel Oporto Valencia",
  "1. Samuel Flores Cruz": "1. Samuel Flores Cruz",
  "2. Rodrigo Heredia Morante": "2. Rodrigo Heredia Morante",
  "3. Michel Daniel Oporto Valencia": "3. Michel Daniel Oporto Valencia",
  "Project Name": "Nombre del proyecto",
  "Objective:": "Objetivo:",
  "Build a digital portfolio to organize English activities, AI vocabulary, grammar topics, multimedia projects, and semester references.": "Construir un portafolio digital para organizar actividades de ingles, vocabulario de IA, temas de gramatica, proyectos multimedia y referencias del semestre.",
  "Build a collaborative digital portfolio to organize our English activities, AI vocabulary, grammar topics, multimedia projects, and semester references.": "Construir un portafolio digital colaborativo para organizar nuestras actividades de ingles, vocabulario de IA, temas de gramatica, proyectos multimedia y referencias del semestre.",
  "Group Members:": "Integrantes:",
  "Samuel Flores Cruz, Rodrigo Heredia Morante, and Michel Daniel Oporto Valencia.": "Samuel Flores Cruz, Rodrigo Heredia Morante y Michel Daniel Oporto Valencia.",
  "Career:": "Carrera:",
  "Systems Engineering.": "Ingenieria de Sistemas.",
  "University:": "Universidad:",
  "Add your university name here.": "Agrega aqui el nombre de tu universidad.",
  "Quick Access": "Acceso rapido",
  "Portfolio Pages": "Paginas del portafolio",
  "Artificial Intelligence": "Inteligencia Artificial",
  "Future Technologies": "Tecnologias futuras",
  "Tech Vocabulary": "Vocabulario tecnico",
  "ARTIFICIAL INTELLIGENCE | Home": "INTELIGENCIA ARTIFICIAL | Inicio",
  "AI GPT | About Me": "IA GPT | Sobre mi",
  "AI GPT | About Us": "IA GPT | Sobre nosotros",
  "AI GPT | AI Technologies": "IA GPT | Tecnologias de IA",
  "AI GPT | AI Vocabulary": "IA GPT | Vocabulario de IA",
  "AI GPT | Grammar Corner": "IA GPT | Gramatica",
  "AI GPT | Reading Corner": "IA GPT | Lectura",
  "AI GPT | Listening Corner": "IA GPT | Escucha",
  "AI GPT | Speaking Corner": "IA GPT | Expresion oral",
  "AI GPT | Writing Corner": "IA GPT | Escritura",
  "AI GPT | Gallery": "IA GPT | Galeria",
  "AI GPT | Resources": "IA GPT | Recursos",
  "AI GPT | References": "IA GPT | Referencias",
  "AI GPT home": "Inicio de IA GPT",
  "Translate page to Spanish": "Traducir pagina al espanol",
  "Translate page to English": "Traducir pagina al ingles",
  "Open navigation": "Abrir navegacion",
  "Main navigation": "Navegacion principal",
  "About Me": "Sobre mi",
  "Meet our three-member team and read each member's autobiography for the English Technical II portfolio.": "Conoce a nuestro grupo de tres integrantes y lee la autobiografia de cada miembro para el portafolio de Ingles Tecnico II.",
  "We are a group of three students": "Somos un grupo de tres estudiantes",
  "We are Samuel Flores Cruz, Rodrigo Heredia Morante, and Michel Daniel Oporto Valencia. Together, we created this digital portfolio to practice English, share our personal stories, and connect our learning with technology and artificial intelligence.": "Somos Samuel Flores Cruz, Rodrigo Heredia Morante y Michel Daniel Oporto Valencia. Juntos creamos este portafolio digital para practicar ingles, compartir nuestras historias personales y conectar nuestro aprendizaje con la tecnologia y la inteligencia artificial.",
  "Select a Member": "Selecciona un integrante",
  "Select a member": "Selecciona un integrante",
  "Activity 1": "Actividad 1",
  "Read Samuel's autobiography for the English Technical II portfolio.": "Lee la autobiografia de Samuel para el portafolio de Ingles Tecnico II.",
  "Autobiography": "Autobiografia",
  "My name is ____________________. I am a university student in the Systems Engineering career. I am interested in artificial intelligence because it helps people solve problems, make predictions, automate tasks, and create new opportunities.": "Mi nombre es ____________________. Soy estudiante universitario de la carrera de Ingenieria de Sistemas. Me interesa la inteligencia artificial porque ayuda a las personas a resolver problemas, hacer predicciones, automatizar tareas y crear nuevas oportunidades.",
  "I am learning English because it is important for my academic and professional future. Many AI documents, tutorials, programming resources, and international projects use English, so improving this skill helps me become a better student and future professional.": "Estoy aprendiendo ingles porque es importante para mi futuro academico y profesional. Muchos documentos de IA, tutoriales, recursos de programacion y proyectos internacionales usan ingles, por eso mejorar esta habilidad me ayuda a ser mejor estudiante y futuro profesional.",
  "In this portfolio, I will publish my activities, vocabulary, grammar practice, readings, multimedia resources, and reflections. My goal is to show my progress during the semester and connect English with artificial intelligence.": "En este portafolio publicare mis actividades, vocabulario, practica de gramatica, lecturas, recursos multimedia y reflexiones. Mi objetivo es mostrar mi progreso durante el semestre y conectar el ingles con la inteligencia artificial.",
  "Personal Photo": "Foto personal",
  "Personal photo": "Foto personal",
  "Photo space": "Espacio para foto",
  "Place your photo here manually when ready.": "Coloca tu foto aqui manualmente cuando este lista.",
  "Add photo": "Agregar foto",
  "Samuel's personal photo placeholder": "Espacio para la foto personal de Samuel",
  "Selected Member": "Integrante seleccionado",
  "Career": "Carrera",
  "Course": "Materia",
  "AI Interest": "Interes en IA",
  "Choose a Member": "Elige un integrante",
  "Choose a team member": "Elige un integrante",
  "Select whose information you want to see.": "Selecciona de quien quieres ver la informacion.",
  "Team Project": "Proyecto de equipo",
  "This page belongs to a three-person portfolio about Artificial Intelligence.": "Esta pagina pertenece a un portafolio de tres personas sobre Inteligencia Artificial.",
  "Canva Banner": "Banner de Canva",
  "Futuristic technology banner": "Banner de tecnologia futurista",
  "Definitions and predictions about artificial intelligence and future innovations.": "Definiciones y predicciones sobre inteligencia artificial e innovaciones futuras.",
  "Machine Learning": "Aprendizaje Automatico",
  "Machine learning is a branch of AI that allows computer systems to learn patterns from data and improve their performance without being programmed step by step.": "El aprendizaje automatico es una rama de la IA que permite a los sistemas aprender patrones a partir de datos y mejorar su rendimiento sin ser programados paso a paso.",
  "Prediction:": "Prediccion:",
  "Machine learning will be used to personalize education, detect diseases earlier, and improve smart services.": "El aprendizaje automatico se usara para personalizar la educacion, detectar enfermedades mas temprano y mejorar servicios inteligentes.",
  "Natural Language Processing": "Procesamiento del Lenguaje Natural",
  "Natural language processing is an AI field that helps computers understand, generate, and translate human language.": "El procesamiento del lenguaje natural es un campo de la IA que ayuda a las computadoras a entender, generar y traducir lenguaje humano.",
  "Chatbots and translators will become more natural, accurate, and useful for global communication.": "Los chatbots y traductores seran mas naturales, precisos y utiles para la comunicacion global.",
  "Computer Vision": "Vision por Computadora",
  "Computer vision allows machines to interpret images and videos, recognizing objects, people, movement, and visual patterns.": "La vision por computadora permite a las maquinas interpretar imagenes y videos, reconociendo objetos, personas, movimiento y patrones visuales.",
  "Computer vision will support autonomous vehicles, security systems, medical diagnosis, and industrial quality control.": "La vision por computadora apoyara vehiculos autonomos, sistemas de seguridad, diagnostico medico y control de calidad industrial.",
  "Glossary": "Glosario",
  "Technical words with definitions, images, and example sentences related to artificial intelligence.": "Palabras tecnicas con definiciones, imagenes y oraciones de ejemplo relacionadas con inteligencia artificial.",
  "Search word": "Buscar palabra",
  "Type a technology word": "Escribe una palabra de tecnologia",
  "Definition:": "Definicion:",
  "Example:": "Ejemplo:",
  "Technology that allows machines to learn, reason, and make decisions.": "Tecnologia que permite a las maquinas aprender, razonar y tomar decisiones.",
  "Artificial intelligence can help doctors analyze medical images.": "La inteligencia artificial puede ayudar a los doctores a analizar imagenes medicas.",
  "Algorithm": "Algoritmo",
  "A set of instructions that a computer follows to solve a problem or complete a task.": "Un conjunto de instrucciones que una computadora sigue para resolver un problema o completar una tarea.",
  "The algorithm recommends videos based on user preferences.": "El algoritmo recomienda videos segun las preferencias del usuario.",
  "Dataset": "Conjunto de datos",
  "A collection of information used to train or test an AI model.": "Una coleccion de informacion usada para entrenar o probar un modelo de IA.",
  "A large dataset can improve the accuracy of a machine learning model.": "Un conjunto de datos grande puede mejorar la precision de un modelo de aprendizaje automatico.",
  "Neural Network": "Red Neuronal",
  "An AI model inspired by the human brain that recognizes complex patterns.": "Un modelo de IA inspirado en el cerebro humano que reconoce patrones complejos.",
  "A neural network can identify objects in a photograph.": "Una red neuronal puede identificar objetos en una fotografia.",
  "Key grammar topics with rules and artificial intelligence examples.": "Temas clave de gramatica con reglas y ejemplos de inteligencia artificial.",
  "Future Simple": "Futuro Simple",
  "Structure:": "Estructura:",
  "Examples:": "Ejemplos:",
  "will + base verb.": "will + verbo base.",
  "will + base verb. Example: AI will transform many professions.": "will + verbo base. Ejemplo: La IA transformara muchas profesiones.",
  "Artificial intelligence will become a normal part of manufacturing, banking, retail, and transportation.": "La inteligencia artificial se convertira en una parte normal de la manufactura, la banca, el comercio minorista y el transporte.",
  "Companies will use AI for supply chains, customer service, and healthcare diagnostics.": "Las empresas usaran la IA para cadenas de suministro, atencion al cliente y diagnosticos de salud.",
  "The software segment will hold almost 45% of the AI market by 2026.": "El segmento de software tendra casi el 45% del mercado de IA para 2026.",
  "New processors will become faster and more efficient in the next few years.": "Los nuevos procesadores seran mas rapidos y eficientes en los proximos anos.",
  "Systems engineers will design and maintain digital infrastructure with AI tools.": "Los ingenieros de sistemas disenaran y mantendran infraestructura digital con herramientas de IA.",
  "Going To": "Going To",
  "Grammar": "Gramatica",
  "am/is/are going to + verb.": "am/is/are going to + verbo.",
  "am/is/are going to + verb. Example: We are going to create an AI presentation.": "am/is/are going to + verbo. Ejemplo: Vamos a crear una presentacion sobre IA.",
  "The global AI market is going to grow from about $539 billion in 2026 to more than $3 trillion by 2033.": "El mercado global de IA va a crecer de aproximadamente 539 mil millones de dolares en 2026 a mas de 3 billones de dolares para 2033.",
  "Data center power consumption is going to nearly double by 2030.": "El consumo de energia de los centros de datos casi se va a duplicar para 2030.",
  "Hardware companies are going to invest heavily in energy planning.": "Las empresas de hardware van a invertir mucho en planificacion energetica.",
  "Cloud providers are going to improve chip design and infrastructure efficiency.": "Los proveedores de nube van a mejorar el diseno de chips y la eficiencia de la infraestructura.",
  "AI is going to change how engineers create and maintain digital systems.": "La IA va a cambiar la forma en que los ingenieros crean y mantienen sistemas digitales.",
  "Modal Verbs": "Verbos Modales",
  "Use:": "Uso:",
  "can, should, must, may.": "can, should, must, may.",
  "can, should, must, may. Example: Developers must use AI responsibly.": "can, should, must, may. Ejemplo: Los desarrolladores deben usar la IA responsablemente.",
  "AI can recognize images and make decisions using algorithms and machine learning.": "La IA puede reconocer imagenes y tomar decisiones usando algoritmos y aprendizaje automatico.",
  "Companies should use AI responsibly in customer service and healthcare diagnostics.": "Las empresas deberian usar la IA responsablemente en atencion al cliente y diagnosticos de salud.",
  "Data centers must manage electricity consumption carefully as AI grows.": "Los centros de datos deben gestionar cuidadosamente el consumo de electricidad a medida que crece la IA.",
  "New processors may help AI systems become faster and more efficient.": "Los nuevos procesadores pueden ayudar a que los sistemas de IA sean mas rapidos y eficientes.",
  "Systems engineers should understand both software and hardware requirements for AI.": "Los ingenieros de sistemas deberian comprender los requisitos de software y hardware para la IA.",
  "Present Perfect": "Presente Perfecto",
  "have/has + past participle.": "have/has + participio pasado.",
  "have/has + past participle. Example: AI has changed digital communication.": "have/has + participio pasado. Ejemplo: La IA ha cambiado la comunicacion digital.",
  "Artificial intelligence has changed how companies analyze information.": "La inteligencia artificial ha cambiado la forma en que las empresas analizan informacion.",
  "Machine learning has helped software copy some aspects of human thinking.": "El aprendizaje automatico ha ayudado al software a copiar algunos aspectos del pensamiento humano.",
  "The demand for GPUs and TPUs has increased because AI needs powerful hardware.": "La demanda de GPUs y TPUs ha aumentado porque la IA necesita hardware potente.",
  "Cloud providers have invested in data centers to support AI services.": "Los proveedores de nube han invertido en centros de datos para apoyar servicios de IA.",
  "AI has become an important tool for healthcare, retail, banking, and transportation.": "La IA se ha convertido en una herramienta importante para la salud, el comercio minorista, la banca y el transporte.",
  "Passive Voice": "Voz Pasiva",
  "be + past participle. Example: Data is processed by an AI model.": "be + participio pasado. Ejemplo: Los datos son procesados por un modelo de IA.",
  "Articles": "Articulos",
  "Articles, summaries, and translations about artificial intelligence.": "Articulos, resumenes y traducciones sobre inteligencia artificial.",
  "Article 1": "Articulo 1",
  "Article 2": "Articulo 2",
  "Article 3": "Articulo 3",
  "Topic:": "Tema:",
  "Summary:": "Resumen:",
  "Translation:": "Traduccion:",
  "Artificial intelligence in education.": "Inteligencia artificial en la educacion.",
  "AI tools can personalize learning and support teachers.": "Las herramientas de IA pueden personalizar el aprendizaje y apoyar a los docentes.",
  "Ethics in artificial intelligence.": "Etica en la inteligencia artificial.",
  "Responsible AI requires privacy, fairness, and transparency.": "La IA responsable requiere privacidad, equidad y transparencia.",
  "AI in daily life.": "IA en la vida diaria.",
  "Intelligent systems are present in search engines, maps, assistants, and recommendations.": "Los sistemas inteligentes estan presentes en buscadores, mapas, asistentes y recomendaciones.",
  "Add the team Spanish translation here.": "Agrega aqui la traduccion al espanol del equipo.",
  "Audio and Video": "Audio y video",
  "Videos, podcasts, notes, and listening reflections about AI.": "Videos, podcasts, notas y reflexiones de escucha sobre IA.",
  "Video": "Video",
  "Podcast": "Podcast",
  "AI Video": "Video de IA",
  "AI Podcast Episode": "Episodio de podcast sobre IA",
  "Add a video link, main vocabulary, and listening summary about artificial intelligence.": "Agrega un enlace de video, vocabulario principal y resumen de escucha sobre inteligencia artificial.",
  "Oral Practice": "Practica oral",
  "Videos, recordings, and presentations about artificial intelligence.": "Videos, grabaciones y presentaciones sobre inteligencia artificial.",
  "Video Presentation": "Presentacion en video",
  "Upload or link the team's oral presentation about an artificial intelligence topic.": "Sube o enlaza la presentacion oral del equipo sobre un tema de inteligencia artificial.",
  "Voice Recording": "Grabacion de voz",
  "Add an audio recording about AI and a short pronunciation self-evaluation.": "Agrega una grabacion de audio sobre IA y una breve autoevaluacion de pronunciacion.",
  "Class Presentation": "Presentacion en clase",
  "Include slides, script, and teacher feedback about the team's AI presentation.": "Incluye diapositivas, guion y retroalimentacion del docente sobre la presentacion de IA del equipo.",
  "Written Work": "Trabajo escrito",
  "Paragraphs, essays, reports, and reflections about AI.": "Parrafos, ensayos, reportes y reflexiones sobre IA.",
  "Paragraph": "Parrafo",
  "Reflection": "Reflexion",
  "Essay": "Ensayo",
  "Report": "Informe",
  "Artificial intelligence is important because it helps people analyze information, automate tasks, and solve complex problems. In the future, AI tools will become more intelligent and accessible.": "La inteligencia artificial es importante porque ayuda a las personas a analizar informacion, automatizar tareas y resolver problemas complejos. En el futuro, las herramientas de IA seran mas inteligentes y accesibles.",
  "During this semester, we have practiced English through artificial intelligence topics. We have learned that vocabulary, grammar, reading, and speaking are connected skills.": "Durante este semestre, hemos practicado ingles mediante temas de inteligencia artificial. Hemos aprendido que el vocabulario, la gramatica, la lectura y el speaking son habilidades conectadas.",
  "Add our essay about artificial intelligence, education, ethics, machine learning, or automation.": "Agrega nuestro ensayo sobre inteligencia artificial, educacion, etica, aprendizaje automatico o automatizacion.",
  "Add our report with title, objective, development, conclusion, and references.": "Agrega nuestro reporte con titulo, objetivo, desarrollo, conclusion y referencias.",
  "Add podcast title, source, new words, and a team reflection about AI.": "Agrega el titulo del podcast, fuente, palabras nuevas y una reflexion grupal sobre IA.",
  "Visual Work": "Trabajo visual",
  "Infographics, banners, posters, and team visuals about artificial intelligence.": "Infografias, banners, posters y recursos visuales del equipo sobre inteligencia artificial.",
  "Artificial intelligence banner": "Banner de inteligencia artificial",
  "Artificial Intelligence Banner": "Banner de inteligencia artificial",
  "Infographic": "Infografia",
  "AI Vocabulary Infographic": "Infografia de vocabulario de IA",
  "Poster": "Poster",
  "Responsible AI Poster": "Poster de IA responsable",
  "Team": "Equipo",
  "Learning Tools": "Herramientas de aprendizaje",
  "Dictionaries, videos, web pages, and digital tools for English and AI topics.": "Diccionarios, videos, paginas web y herramientas digitales para ingles y temas de IA.",
  "Definitions, pronunciation, and examples.": "Definiciones, pronunciacion y ejemplos.",
  "English learner definitions and grammar support.": "Definiciones para estudiantes de ingles y apoyo gramatical.",
  "Practice activities for English learners.": "Actividades de practica para estudiantes de ingles.",
  "Digital tool for banners, posters, and infographics.": "Herramienta digital para banners, posters e infografias.",
  "Introductory resources about artificial intelligence.": "Recursos introductorios sobre inteligencia artificial.",
  "Bibliography": "Bibliografia",
  "Bibliography used during the semester.": "Bibliografia utilizada durante el semestre.",
  "References List": "Lista de referencias",
  "Add your articles, videos, podcasts, and class materials here.": "Agrega aqui tus articulos, videos, podcasts y materiales de clase.",
  "Technology brings ideas closer to reality.": "La tecnologia acerca las ideas a la realidad.",
  "Vocabulary grows through practice.": "El vocabulario crece con la practica.",
  "Grammar gives structure to ideas.": "La gramatica da estructura a las ideas.",
  "Reading builds technical understanding.": "La lectura construye comprension tecnica.",
  "Listening improves fluency and pronunciation.": "La escucha mejora la fluidez y la pronunciacion.",
  "Speaking turns knowledge into communication.": "Hablar convierte el conocimiento en comunicacion.",
  "Writing organizes thought.": "La escritura organiza el pensamiento.",
  "Visuals make learning memorable.": "Los recursos visuales hacen memorable el aprendizaje.",
  "Good resources support independent learning.": "Los buenos recursos apoyan el aprendizaje independiente.",
  "References keep academic work transparent.": "Las referencias hacen transparente el trabajo academico.",
  "“The best way to predict the future is to invent it.” - Alan Kay": "\"La mejor manera de predecir el futuro es inventarlo.\" - Alan Kay"
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let originalTitle = document.title;

function walkTextNodes(root, callback) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(".site-header")) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(".person-profile")) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(".example-list")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(callback);
}

function applyTranslatedAttributes(lang) {
  document.querySelectorAll("[placeholder], [alt], [aria-label], [title]").forEach((element) => {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, {
        placeholder: element.getAttribute("placeholder"),
        alt: element.getAttribute("alt"),
        ariaLabel: element.getAttribute("aria-label"),
        title: element.getAttribute("title")
      });
    }

    const originals = originalAttributes.get(element);
    [
      ["placeholder", "placeholder"],
      ["alt", "alt"],
      ["ariaLabel", "aria-label"],
      ["title", "title"]
    ].forEach(([key, attribute]) => {
      const original = originals[key];
      if (!original) return;
      if (lang === "es" && spanishText[original]) {
        element.setAttribute(attribute, spanishText[original]);
      } else if (lang === "en") {
        element.setAttribute(attribute, original);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === "es" ? "es" : "en";
  document.title = lang === "es" && spanishText[originalTitle] ? spanishText[originalTitle] : originalTitle;
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const match = navLinks.find(([href]) => href === link.getAttribute("href"));
    if (match) link.textContent = lang === "es" ? match[2] : match[1];
  });

  const brandTitle = document.querySelector(".brand strong");
  const brandSubtitle = document.querySelector(".brand small");
  if (brandTitle) brandTitle.textContent = lang === "es" ? "IA GPT" : "AI GPT";
  if (brandSubtitle) brandSubtitle.textContent = lang === "es" ? "Hub de Ingles en Equipo" : "English Team Hub";

  walkTextNodes(document.body, (node) => {
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const original = originalText.get(node);
    const trimmed = original.trim();
    if (lang === "es" && spanishText[trimmed]) {
      node.textContent = original.replace(trimmed, spanishText[trimmed]);
    } else if (lang === "en") {
      node.textContent = original;
    }
  });

  applyTranslatedAttributes(lang);

  const button = document.querySelector(".translate-toggle");
  if (button) {
    button.dataset.lang = lang;
    button.textContent = lang === "es" ? "EN" : "ES";
    button.setAttribute("aria-label", lang === "es" ? "Traducir pagina al ingles" : "Translate page to Spanish");
  }

  renderPersonProfile(lang);
}

function initTranslation() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const saved = urlLang === "es" || urlLang === "en" ? urlLang : localStorage.getItem("siteLanguage") || "en";
  const button = document.querySelector(".translate-toggle");
  if (!button) return;

  if (isEnglishOnlyPage()) {
    document.documentElement.lang = "en";
    button.hidden = true;
    return;
  }

  button.addEventListener("click", () => {
    const nextLang = button.dataset.lang === "es" ? "en" : "es";
    localStorage.setItem("siteLanguage", nextLang);
    applyLanguage(nextLang);
  });

  applyLanguage(saved);
}

buildHeader();
setActiveLink();
initMenu();
initVocabularyExplorer();
initGlossarySearch();
initAccordions();
initPersonSelector();
initTranslation();
