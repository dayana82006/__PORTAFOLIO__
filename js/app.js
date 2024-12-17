AOS.init({
    duration: 1200, // Duración de la animación en milisegundos
    easing: 'ease', // Tipo de transición
    once: true, // Si debe ocurrir solo una vez
  });
  
  //objeto de texto a traducir 
  const translations = {
    en: {
        textmenu: "Explore more",
        homemenu: "Home",
        about: "About me",
        projects: "Projects",
        contact: "Contact me",
        titleinfo: "FULL STACK DEVELOPER JUNIOR",
        shortd: "\"Mistakes are the path to victory\"",
        description1: "I am a young woman in training with a solid foundation in both technology as in dance, which allows me to integrate creativity and technical skills in multidisciplinary projects.",
        checkcv: "Check my CV",
        download: "Download",
        profilep: "Professional Profile",
        description2: "Currently, I am developing my knowledge in programming, with a focus on creating innovative digital solutions. My ability to learn quickly allows me to adapt to new tools and languages, facing technological challenges with agility and commitment.",
        profilec : "Creative Profile",
        description3 : "At the same time, my dance training has taught me to be disciplined, creative, and to work as a team, skills that I also apply in the technological field. My interest lies in being able to merge these two worlds, exploring how technology can enhance artistic expression and vice versa. I am looking to develop myself in fields such as web development and process automation, always with an approach that values creativity, innovation, and collaborative work.",
      },
    es: {
        textmenu: "Explorar más",
        homemenu: "Inicio",
        about: "Acerca de mí",
        projects: "Proyectos",
        contact: "Contáctame",
        titleinfo: "DESARROLLADORA JUNIOR FULL STACK",
        shortd: "\"Los errores son el camino a la victoria\"",
        description1: "Soy una joven en formación con una sólida base tanto en tecnología como en danza, lo que me permite integrar creatividad y habilidades técnicas en proyectos multidisciplinarios.",
        checkcv: "Revisa mi CV",
        download: "Descargar",
        profilep: "Perfil profesional",
        description2: "Actualmente, estoy desarrollando mis conocimientos en programación, con un enfoque en la creación de soluciones digitales innovadoras. Mi capacidad para aprender rápidamente me permite adaptarme a nuevas herramientas y lenguajes, enfrentando desafíos tecnológicos con agilidad y compromiso.",
        profilec : "Perfil Creativo",
        description3 : "Al mismo tiempo, mi formación en danza me ha enseñado a ser disciplinada, creativa y a trabajar en equipo, habilidades que también aplico en el ámbito tecnológico. Mi interés radica en poder fusionar estos dos mundos, explorando cómo la tecnología puede potenciar la expresión artística y viceversa. Busco desarrollarme en campos como el desarrollo web y la automatización de procesos, siempre con un enfoque que valore la creatividad, la innovación y el trabajo colaborativo.",
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