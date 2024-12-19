AOS.init({
    duration: 1200, // Duración de la animación en milisegundos
    easing: 'ease', // Tipo de transición
    once: true, // Si debe ocurrir solo una vez
  });
  
  //objeto de texto a traducir 
  const translations = {
    en: {
        textmenu: "Explore More",
        homemenu: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact Me",
        titleinfo: "JUNIOR FULL STACK DEVELOPER",
        shortd: "\"Every mistake is a firm step toward victory.\"",
        description1: "I am a web developer with experience in HTML, CSS, JavaScript, and Bootstrap. Additionally, I am an artist passionate about contemporary dance, seeking to merge art and technology to create innovative projects.",
        checkcv: "Check my CV",
        download: "Download",
        profilep: "Professional Profile",
        description2: "I am currently developing my knowledge in programming, focusing on creating innovative digital solutions. My ability to learn quickly allows me to adapt to new tools and languages, tackling technological challenges with agility and commitment.",
        profilec: "Creative Profile",
        description3: "At the same time, my training in dance has taught me to be disciplined, creative, and a team player—skills that I also apply in the technological field. My interest lies in merging these two worlds, exploring how technology can enhance artistic expression and vice versa. I aim to grow in areas such as web development and process automation, always with a focus on creativity, innovation, and collaborative work.",
        seemore: "See More",
    },
    es: {
        textmenu: "Explorar Más",
        homemenu: "Inicio",
        about: "Acerca De Mí",
        projects: "Proyectos",
        contact: "Contáctame",
        titleinfo: "DESARROLLADORA JUNIOR FULL STACK",
        shortd: "\"Cada error es un paso firme hacia el triunfo.\"",
        description1: " Soy desarrolladora web con experiencia en HTML, CSS, JavaScript y Bootstrap. Además, soy artista apasionada por la danza contemporánea, buscando fusionar el arte y la tecnología para crear proyectos innovadores. ",
        checkcv: "Revisa mi CV",
        download: "Descargar",
        profilep: "Perfil profesional",
        description2: "Actualmente, estoy desarrollando mis conocimientos en programación, con un enfoque en la creación de soluciones digitales innovadoras. Mi capacidad para aprender rápidamente me permite adaptarme a nuevas herramientas y lenguajes, enfrentando desafíos tecnológicos con agilidad y compromiso.",
        profilec : "Perfil Creativo",
        description3 : "Al mismo tiempo, mi formación en danza me ha enseñado a ser disciplinada, creativa y a trabajar en equipo, habilidades que también aplico en el ámbito tecnológico. Mi interés radica en poder fusionar estos dos mundos, explorando cómo la tecnología puede potenciar la expresión artística y viceversa. Busco desarrollarme en campos como el desarrollo web y la automatización de procesos, siempre con un enfoque que valore la creatividad, la innovación y el trabajo colaborativo.",
        seemore : "Ver Más",
    },
    it: {
        textmenu: "Esplora di Più",
        homemenu: "Home",
        about: "Chi Sono",
        projects: "Progetti",
        contact: "Contattami",
        titleinfo: "SVILUPPATORE FULL STACK JUNIOR",
        shortd: "\"Ogni errore è un passo deciso verso la vittoria.\"",
        description1: "Sono una sviluppatrice web con esperienza in HTML, CSS, JavaScript e Bootstrap. Inoltre, sono un'artista appassionata di danza contemporanea, cercando di unire arte e tecnologia per creare progetti innovativi.",
        checkcv: "Controlla il mio CV",
        download: "Scarica",
        profilep: "Profilo Professionale",
        description2: "Attualmente sto sviluppando le mie conoscenze di programmazione, con un focus sulla creazione di soluzioni digitali innovative. La mia capacità di apprendere rapidamente mi consente di adattarmi a nuovi strumenti e linguaggi, affrontando le sfide tecnologiche con agilità e impegno.",
        profilec: "Profilo Creativo",
        description3: "Allo stesso tempo, la mia formazione nella danza mi ha insegnato a essere disciplinata, creativa e a lavorare in squadra, competenze che applico anche nell'ambito tecnologico. Il mio interesse risiede nell'unire questi due mondi, esplorando come la tecnologia possa potenziare l'espressione artistica e viceversa. Punto a crescere in campi come lo sviluppo web e l'automazione dei processi, sempre con un approccio che valorizzi la creatività, l'innovazione e il lavoro collaborativo.",
        seemore: "Vedi di Più",
    },
    fr: {
        textmenu: "Explorer Plus",
        homemenu: "Accueil",
        about: "À Propos de Moi",
        projects: "Projets",
        contact: "Contactez-moi",
        titleinfo: "DÉVELOPPEUSE FULL STACK JUNIOR",
        shortd: "\"Chaque erreur est un pas ferme vers la victoire.\"",
        description1: "Je suis développeuse web avec de l'expérience en HTML, CSS, JavaScript et Bootstrap. En outre, je suis une artiste passionnée par la danse contemporaine, cherchant à fusionner l'art et la technologie pour créer des projets innovants.",
        checkcv: "Consultez mon CV",
        download: "Télécharger",
        profilep: "Profil Professionnel",
        description2: "Actuellement, je développe mes connaissances en programmation, avec un accent sur la création de solutions numériques innovantes. Ma capacité à apprendre rapidement me permet de m'adapter à de nouveaux outils et langages, en affrontant les défis technologiques avec agilité et engagement.",
        profilec: "Profil Créatif",
        description3: "Parallèlement, ma formation en danse m'a appris à être disciplinée, créative et à travailler en équipe, des compétences que j'applique également dans le domaine technologique. Mon intérêt réside dans la fusion de ces deux mondes, en explorant comment la technologie peut enrichir l'expression artistique et vice versa. Je vise à évoluer dans des domaines tels que le développement web et l'automatisation des processus, toujours avec une approche valorisant la créativité, l'innovation et le travail collaboratif.",
        seemore: "Voir Plus",
    },
    
    
  };
  
  // array de id no traducidos
  const nonTranslatableIds = [
     'offcanvasDarkNavbar',
      'languageSelector',
     
  ];
  
  // cambiar idioma
  document.getElementById("languageSelector").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value; // Obtiene el idioma seleccionado
    applyTranslations(selectedLanguage); // Aplica las traducciones
  });
  
  function applyTranslations(language) {
    const elements = document.querySelectorAll("[id]"); // Obtiene todos los elementos con IDs
    elements.forEach((element) => {
        const key = element.id; // Usa el ID como clave
        
        
        if (nonTranslatableIds.includes(key)) {
            return; // Si es un ID que esta en el array de no traducir lo ignora 
        }
        
        if (translations[language][key]) {
            console.log(`Cambiando el texto de ${key} a: ${translations[language][key]}`);
            // Solo traduce el contenido textual, no afecta imágenes ni videos
            if (element.tagName === "IMG" || element.tagName === "VIDEO") {
                return; 
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
  }

  
  
  
