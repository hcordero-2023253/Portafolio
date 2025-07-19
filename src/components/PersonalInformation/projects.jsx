import AgendaImg from "../../assets/Agenda.png";
import AguaComunImg from "../../assets/AguaComun.png";
import BlogEstudiantilImg from "../../assets/BlogEstudiantil.png";
import RediseñoImg from "../../assets/Rediseño.png";
import HotelImg from "../../assets/Hotel.png";
import LimaeImg from "../../assets/Limae.png";

export const projects = [
  {
    name: 'AgendaWeb',
    description: 'Página de gestión de contactos con autenticación',
    image: AgendaImg,
    repositories: [
      {
        type: 'fullstack',
        url: 'https://github.com/MauriciOliva/AgendaWeb.git'
      }
    ],
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'AguaComun',
    description: 'Sistema para gestión comunitaria de agua potable en Guatemala. Incluye gestión de usuarios, pagos y reportes . Proyecto en equipo.',
    image: AguaComunImg,
    repositories: [
      {
        type: 'frontend',
        url: 'https://github.com/ndelacruz-2023048/AguaComun_Frontend.git'
      },
      {
        type: 'backend',
        url: 'https://github.com/ndelacruz-2023048/AguaComun_Backend.git'
      }
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
    teamProject: true
  },
  {
    name: 'BlogEstudiantil',
    description: 'Blog para estudiantes con creación y comentarios de publicaciones, no tiene autenticación de usuarios pero permite interacción entre usuarios para que se puedan comunicar y comentar libremente. ',
    image: BlogEstudiantilImg,
    repositories: [
      {
        type: 'frontend',
        url: 'https://github.com/MauriciOliva/BlogEstudiantilFrontend.git'
      },
      {
        type: 'backend',
        url: 'https://github.com/MauriciOliva/BlogEstudiantilBackend.git'
      }
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript']
  },
  {
    name: 'Rediseño Kinal',
    description: 'Rediseño de sitio web para centro educativo Kinal. Incluye diseño responsivo y mejoras de usabilidad, buscando un enfoque más moderno y accesible.',
    image: RediseñoImg,
    repositories: [
      {
        type: 'frontend',
        url: 'https://github.com/MauriciOliva/Redise-oKinal.git'
      }
    ],
    tags: ['HTML', 'CSS']
  },
  {
    name: 'Sistema Hotelero',
    description: 'Sistema de gestión hotelera con reservas y servicios. Incluye autenticación y gestión de usuarios. Proyecto en equipo.',
    image: HotelImg,
    repositories: [
      {
        type: 'frontend y backend',
        url: 'https://github.com/ndelacruz-2023048/Sistema-gestion-hotelera.git'
      },
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
    teamProject: true
  },
  {
    name: 'Limae',
    description: 'Es una pagina web de gestión y prevencion contra la violecia entre compañeros, esto con el fin de ayudar a los estudiantes a prevenir la violencia entre compañeros. Trabajo en equipo(Vista de usuario). ',
    image: LimaeImg,
    repositories: [
        {
            type: 'frontend',
            url: 'https://github.com/ndelacruz-2023048/Limae_Frontend.git'
        },
        {
            type: 'backend',
            url: 'https://github.com/ndelacruz-2023048/Limae_Backend.git'
        },
    ]
  }
];