import { createContext, useContext, useState, type ReactNode } from 'react'
import type {Lang, Translations} from '../types'

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Perfil',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      langBtn: 'EN',
    },
    perfil: {
      name: 'Julian D Silva',
      role: 'Editor de video || Animador 2D',
      description:
        'Soy graduado de Universidad de los Andes en Narrativas Digitales, con especialización en Cine, Video, Animación y Computación Visual. Actualmente curso un programa anual enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles. \n \n Cuento con experiencia en el desarrollo de proyectos narrativos y multimedia, integrando áreas como producción audiovisual, animación, programación y contenidos digitales. \n \n En el ámbito audiovisual, he trabajado tanto en proyectos de entretenimiento como comerciales, participando en la producción de animaciones, cortometrajes, grabación y edición de anuncios, entre otros formatos audiovisuales. ',
      tags: ['Photoshop - 4 años', 'Premiere - 5 años', 'Reaper - 4 años', 'Ilustrator - 1 año', 'After Effects - 1 año', 'Final cut - 2 años', 'Stop motion studio - 2 años'],
    },
    proyectos: {
      sections: [
        { id: '2025', label: '2025' },
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
      ],
      aclaration: 'This had been my projects from the last years.',
      projects: [
        {
          id: 'p1',
          title: 'La Familia Amarilla sin derechos de autor',
          description:
              'Este es un projecto estulo "Couche Gag" el cual combina dos intros de series de la cadena anteriormente conocida como "FOX". Estos se hicieron unicamente con proposito educativo y sin ningun tipo de remuneración. Esta fue hecha durante 2 semanas usandos los programas de Adobe Photoshop y Adobe After Effects',
        },
        {
          id: 'p2',
          title: 'Proyecto Beta',
          description: 'Dashboard de analíticas con visualizaciones interactivas. Datos en tiempo real con WebSockets y exportación a CSV.',
        },
        {
          id: 'p3',
          title: 'Proyecto Gamma',
          description:'Experimento con animaciones generativas usando Canvas API y algoritmos de ruido procedural.',
        }
      ]
    },
    contacto: {
      title: 'Infromación de contacto',
      subtitle:
        '¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy disponible para nuevas oportunidades.',
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
  en: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Profile',
      proyectos: 'Projects',
      contacto: 'Contact',
      langBtn: 'ES',
    },
    perfil: {
      name: 'Julian D Silva',
      role: '2D Animator || Video Editor',
      description:
            "I'm a Digital Narratives graduated student and actually I'm doing a Programming for web, games and mobile one year course in the VFS. I had accomplished multiple projects in a variety of areas; including written stories and periodism, podcast and sound design, 2D animation and image design, short film production and edition, web sites coding and design, and performative presentations. \n \n Within the audiovisual area: I have worked for both the entertainment area and the commercial field. I have worked on animations, produced short films, recorded and edited advertisements, among other things.  ",
        tags: ['Photoshop - 4 years', 'Premiere - 5 years', 'Reaper - 4 years', 'Ilustrator - 1 year', 'After Effects - 1 year', 'Final cut - 2 years', 'Stop motion studio - 2 years'],
    },
    proyectos: {
      sections: [
            { id: '2025', label: '2025' },
            { id: '2024', label: '2024' },
            { id: '2023', label: '2023' },
            { id: '2022', label: '2022' },
        ],
        aclaration: 'This had been my projects from the last years.',
        projects: [
            {
                id: 'p1',
                title: 'La Familia Amarilla sin derechos de autor',
                description:
                    'Este es un projecto estulo "Couche Gag" el cual combina dos intros de series de la cadena anteriormente conocida como "FOX". Estos se hicieron unicamente con proposito educativo y sin ningun tipo de remuneración. Esta fue hecha durante 2 semanas usandos los programas de Adobe Photoshop y Adobe After Effects',
            },
            {
                id: 'p2',
                title: 'Proyecto Beta',
                description: 'Dashboard de analíticas con visualizaciones interactivas. Datos en tiempo real con WebSockets y exportación a CSV.',
            },
            {
                id: 'p3',
                title: 'Proyecto Gamma',
                description:'Experimento con animaciones generativas usando Canvas API y algoritmos de ruido procedural.',
            }
        ]
    },
    contacto: {
      title: 'Contact info',
      subtitle:
        "Have a project in mind or just want to say hi? I'm open to new opportunities.",
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
}

interface LangContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
