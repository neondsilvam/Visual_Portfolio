import type {Project} from '../types'
import simpsonReference from '../assets/simpson_reference.jpg'
import modernReference from '../assets/modern_reference.jpg'

export const AnimationProjects: Project[] = [
    {
        id: 'p1',
        title: 'La Familia Amarilla sin derechos de autor',
        description:
            'Este proyecto, inspirado en el formato “Couch Gag”, fusiona las introducciones de dos series de la antigua cadena FOX. Fue realizado únicamente con fines académicos y sin fines comerciales.\n' +
            '\n' +
            'La animación fue desarrollada a lo largo de dos semanas con Adobe Photoshop y Adobe After Effects, como parte de un ejercicio práctico de animación y experimentación creativa.',
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del projecto",
                    description: ["Este es un projecto de 2 semanas, el cual tenia el desafio de combinar dos intros de series conocidas. Debido a este, el desarrollo de este elemento se concentra en experimentar con la animacion, mostrando el potencial visual.", 
                        "Mi objetivo principal era intentar aplicar el diseño original del estilo artistico de 'Los Simpson' al mismo tiempo que poder concervar el rimto accelerado de modern family.", 
                        'Despues de una lluvia de idea, pude desarrollar mas a fondo el concepto para poder empezar la animación', 'Referencias:', 
                        'Groening, M. (Creador). (1989–presente). The Simpsons [Serie de televisión].', 
                        'Levitan, S., & Lloyd, C. (Creadores). (2009–2020). Modern Family [Serie de televisión].'],
                    media: [simpsonReference, modernReference],
                },
                production: {
                    title: "La producción actual",
                    description: ["El processo en si se divido en tres secciones: creación de fondos, animación tradicional y la animación vectorial.",
                        'En primera instancia, la creación de fondos, la cual se refiere a todas las escenas que despues se animarian de forma vectorial con Adobe After Effects. Esto incluyendo las imagenes del abuelo y de las tias.' , 
                        'Dentro de la animación vectorial, me enfoque en un estilo "In between", donde sub dividi cada frame a la mitad, con el fin de poder hacer el movimiento de la familia sentandose lo mas fluido posible.',
                        'Finalmente, la animación vectorial une los clips animados tradicionalmente con loas imagenes estaticas de los fondos. Al mismo tiempo, se configura la linea de tiempo para que esta tengan ese alejamiento progresivo. Para este proceso era importante que las imagenes fueran vectores graficos, para que no cambiara la calidad de la misma durante el proceso.'],
                    media: [],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro del desarrollo del projecto, no se genera unicamente unicamente la animación, sino que la totalidad de la hisotira que se quiere contar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    },
    {
        id: 'p2',
        title: 'Experimento de Rotoscopia',
        description:
            'Este experimento fue desarrollado utilizando la técnica de rotoscopia en Adobe Photoshop, con el objetivo de practicar animación sobre material de archivo.\n' +
            '\n' +
            'Se trabajó a partir de clips de “Spider-Man 3” únicamente con fines educativos y sin fines comerciales. El proyecto fue realizado en una semana como ejercicio de práctica y experimentación técnica.',
        iframeSrc: 'https://www.youtube.com/embed/bazyWtN-WX0',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Conceptos iniciales",
                    description: ["Este fue un ejercicio de corto tiempo, el cual tenia el objetivo de afectar artisticamente un clip de material ya exsistente con el fin de darle un nuevo significado.","Debido a que este tenia un proposito breve y unicamente experimental, la idea no era tanto la planificaicón sino entender la ejecución.", 
                        "Referencias", 
                        "Raimi, S. (Director). (2007). Spider-Man 3 [Film].",
                        "Tesfaye, A. (2019). Blinding Lights [Canción]. En After Hours. XO Records; Republic Records."],
                    media: [""],
                },
                production: {
                    title: "Proceso de creación",
                    description: ["La idea inicial era simplemente hacer un trazo por frame, donde cada uno tuviera un color diferente.",
                        "Por ende, el proceso del mismo se enfocaba en usar un seguimiento 'Frame to frame' con el fin de tener las aciones tan unificadas poisble.",
                        "Tambien cabe resaltar que la animación esta divida entre personajes, fondos, y efectos los cuales tambien se subdividen dentro de animación lineart y de coloreado."],
                    media: [""],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Ya dentro de este ultimo proceso es poder usar premiere y after effects para mejorar la animación, crear el efecto de desfase, y encajar las diferentes capas.",
                        "Tambien retocar el audio y agregar los detalles finales del texto para darle un poco mas de contexto."],
                    media: [""],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    },
    {
        id: 'p3',
        title: 'Deraíz',
        description:
            'Este es un proyecto que hice en colaboración con la Universidad de los Andes. Este tenía el propósito de generar un movimiento artístico de expresión visual, combinando técnicas análogas y digitales. Este fue un trabajo en equipo donde todos teníamos una meta en común y nos organizamos para generar este proyecto. La animación fue hecha en espacios autorizados con grafiti y uniendo todo en Photoshop. Aquí se encuentra la publicación original: ',
        iframeSrc: 'https://drive.google.com/file/d/101m-0jSkYCH9VfXZf97SYLNLjBeLZI6Z/preview',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://www.instagram.com/reel/DKHhPdvN8NO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Planeación del projecto",
                    description: ["Este es facilmente uno de los projectos mas ambisiosos en los que he tenido la oportunidad de trabajar",
                        'Durante este, primero tuvimos el concepto inicial de generar una animación a base de dos ideales opuestos; en este caso, la naturaleza y la industrialización.', 
                        'Tambien queriamos generar una disrupción del sistema, poder generar im impacto del cual se pudiera generar en el espacio publico', 'De ahi el concepto del graffiti y del arte del muralismo.', 
                        'Posterior a este, como era un trabajo en conjunto, nos decidimos a dividir el projecto, cada uno haciendo una pequeña parte de este, para al final unirlo todo en el projecto final.', 
                        'la idea are generar un diseño, el cual conectaria con el de otra persona, haciendo un "Cadaver Esquicito" de la animación.',
                        'Esto incluye hacer pruebas, prototipos, y ensayos de manera digital antes del dia de producción.'],
                    media: [""],
                },
                production: {
                    title: 'Los dias de "Animación"',
                    description: ["Como tal, el proceso se divido en dos fechas: El dia del graffiti y el dia de la conexión.", 
                        'El dia del grafiti, todos nos encontramos en un espacio ya acordado, donde pintabamos en analogo cada uno de los frames, para despues poder tomar las respectivas fotos.', 
                        'Debido a la logica del proceso, si o si tocaba animarlo frame by frame, esto con el fin de poder probar ahi mismo que la fluidez era adecuada.',
                        'Esto se hizo en conjunto con el fin de poder ayudarnos entre nosotros.',
                        'La segunda parte del proceso consistia en unir las fotos dentro del video de cada uno.',
                        'para esto ocupamos photoshop con el fin de poder ajustar las imagenes correctamente, al igual que poder corregir cualquier hueco generado por la camada al hacer coincidir la matriz.',
                        'Esto a traves de puntos de referncia que teniamos puetos en cada frame, para asegurarnos de no dañar la escala en si.',
                        'ACLARACIÓN:',
                        'Los espacios utilizados para este proceso fueron autorizados para el mismo. Agradecimientos a La Universidad de los Andes por permitirmos este espacio.'],
                    media: [""],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro de este proceso, teniamos un administrador del projecto, el cual estaria encargado de unir todas las piezas en su totalidad.",
                        'Por ende, como ninguna de las piezas podia faltar, el trabajo en equipo era indispensable.', 
                        'Todos nos comprometimos a completar y a enviar nuestros clips, los cuales se reflejaron en el producto final.',
                        'Otra compañera estuvo acargo de generar el audio, concluyendo este projecto'],
                    media: [""],
                },
            },
            sectionFooter: "Agradecimentos especiales a La Universidad de los Andes por este projecto.",
        }
    },
    {
        id: 'p4',
        title: 'Camilo y Sofía',
        description:
            'Este es un cortometraje que escribí, produje, dirigí y edité en 2025. Su desarrollo fue un proceso de aproximadamente dos meses, durante los cuales estuve a cargo de la planeación integral del proyecto, la escritura del guion, la organización del casting y todo el proceso de postproducción.\n' +
            '\n' +
            'La realización contó con el apoyo de un asistente de producción, dos actores principales y ocho actores de reparto, consolidando un trabajo colaborativo que permitió materializar la propuesta audiovisual.\n' +
            '\n' +
            'La edición fue realizada en Adobe Premiere Pro, en conjunto con Universidad de los Andes, como parte de un proceso de creación y producción audiovisual que integró dirección, narrativa y ejecución técnica.',
        iframeSrc: 'https://drive.google.com/file/d/1WwlQynzBXN-HRBTu0O6hgMcyh3UD2hig/preview',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p5',
        title: 'Experimento del Cubo Rubik',
        description:
            'Este es un experimento corto que hice con animación de rotoscopia usando Photoshop (sonido externo sin derechos de autor).',
        iframeSrc: 'https://www.youtube.com/embed/8fDgl2y5pW4?si=G0diJ7Bx9-Kbe3uO',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p6',
        title: 'Ihand',
        description:
            'Este es un corto proyecto estilo comercial, el cual replica el estilo de anuncios de marcas tecnológicas. Este promociona el producto ficticio "Ihand", el cual sería un teléfono insertado en la mano. Este se hizo con Adobe Premiere Pro, sin fines de lucro y únicamente con el propósito de aprender. Todo el material usado es libre de derechos de autor.',
        iframeSrc: 'https://drive.google.com/file/d/1_-sBUPp8M_1wnphZo3tSKYjp-P9vuXXH/preview',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p7',
        title: 'All Digital Media & Kommo',
        description:
            'Este es un reel en el cual ayudé a traducir el contenido, dado que el idioma original era inglés. También modifiqué los datos del final del video para que encajaran con la empresa "All Digital Media". Este cambio fue hecho con Adobe Premiere Pro.',
        iframeSrc: 'https://youtube.com/embed/1WuCEfHVqKE?si=Cb7EJZq1qPUohQoi',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p8',
        title: 'All Digital Media & Big Commerce',
        description:
            'Este es un reel en el cual ayudé a traducir el contenido, dado que el idioma original era inglés. También modifiqué los datos del final del video para que encajaran con la empresa "All Digital Media", donde ajusté la transición final en la que se muestran los datos de la compañía y el logo. Esto fue hecho con Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/Bmp48LleZ0E?si=LhpADvwiw_JX4yf-',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p9',
        title: 'Pre Icfes Con Estilo',
        description:
            'Este es un comercial para la institución "Pre Icfes con Estilo", en el cual fui director. Nuestro propósito aquí fue principalmente producir este anuncio tanto para mostrarlo como comercial de YouTube, como también video de introducción para la plataforma institucional. Aquí nos dieron algo de material de archivo, pero el 90% fue grabado y producido por nuestro equipo, el cual estaba conformado por una cinematógrafa, un editor y yo como director.',
        iframeSrc: 'https://www.youtube.com/embed/NBRRBUN4RIo?si=gGZIcidqop_jK5Q7',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p10',
        title: 'Cantar un Velero',
        description:
            'Cortometraje realizado junto a un equipo de tres personas, en el que asumí la dirección y participé activamente en la construcción del guion y la producción.\n' +
            '\n' +
            'La obra presenta la historia de un humilde creador de velas que busca reencontrarse emocionalmente con su hijo, a través de una narrativa íntima que explora la conexión humana y la reconciliación.\n' +
            '\n' +
            'Fue producido en colaboración con Universidad de los Andes.',
        iframeSrc: 'https://www.youtube.com/embed/rDiEsuEZWrU?si=6IV62kOXw4F4L1N_',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p11',
        title: 'Pirata vs Samurai',
        description:
            'Este es un proyecto de rotoscopia en el cual quise experimentar y fue una de mis primeras veces usando Adobe Photoshop. Este fue hecho usando dicho programa en combinación con Adobe Premiere Pro. El sonido fue de stock y me demoré 2 semanas en producirlo entre grabar los fotogramas originales, hacer la rotoscopia y la postproducción.',
        iframeSrc: 'https://www.youtube.com/embed/QvqdybkfV2g?si=iCi8a9ctJ5-mHg9p',
        section: '2022',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p12',
        title: 'SALESmanago y Yandex ADS',
        description:
            'Este fue un proyecto en el que participé como editor, encargado de retocar el video de animación original, agregando logotipos y combinándolos de manera eficiente con las transiciones ya existentes. Además, integré todos los elementos en un corto período de tiempo de forma efectiva. Este proyecto fue editado utilizando Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=kQbA5_IqMW0bBG6G',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p13',
        title: 'AllDigital, SALESmanago y Yandex ADS',
        description:
            'Este es un proyecto en el cual mi rol fue como editor y traductor del video. Para el contenido principal, me encargué de agregar los logotipos de la marca e integrarlos de manera armoniosa con el material ya existente. Además, traduje el video, que originalmente estaba en inglés. Todo el trabajo fue realizado en un corto período de tiempo utilizando Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=QUrFat9nCfqdG1lr',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
]

export const AnimationProjectsEn: Project[] = [
    {
        id: 'p1',
        title: 'The Yellow Family Without Copyright',
        description:
            'This is a "Couch Gag" style project that combines two intro sequences from television series originally aired on the network formerly known as "FOX". The project was created exclusively for educational purposes and without any type of financial compensation. The animation was completed over the course of 2 weeks using Adobe Photoshop and Adobe After Effects.',
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p2',
        title: 'Rotoscoping Experiment',
        description:
            'This project is an experimental rotoscoping exercise created using Adobe Photoshop, with the goal of practicing animation techniques over live-action footage. The project was developed using clips from the feature film "Spider-Man 3" strictly for educational purposes and without any financial compensation. The animation was completed in 1 week using Adobe Photoshop.',
        iframeSrc: 'https://www.youtube.com/embed/bazyWtN-WX0',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p3',
        title: 'Deraíz',
        description:
            'This project was developed in collaboration with the Universidad de los Andes. Its purpose was to create an artistic visual expression movement by combining analog and digital techniques. It was a collaborative team effort where all members worked toward a shared creative objective. The animation was produced in authorized graffiti spaces and later composited in Photoshop. Original publication:',
        iframeSrc: 'https://drive.google.com/file/d/101m-0jSkYCH9VfXZf97SYLNLjBeLZI6Z/preview',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://www.instagram.com/reel/DKHhPdvN8NO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p4',
        title: 'Camilo and Sofia',
        description:
            'This is a short film that I directed and edited in 2025. The production process lasted approximately 2 months, during which I was responsible for planning, script development, casting, and post-production editing. The project was carried out alongside a production assistant, 2 lead actors, and 8 supporting actors. It was edited using Adobe Premiere Pro in collaboration with the Universidad de los Andes.',
        iframeSrc: 'https://drive.google.com/file/d/1WwlQynzBXN-HRBTu0O6hgMcyh3UD2hig/preview',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p5',
        title: 'Rubik’s Cube Experiment',
        description:
            'This is a short experimental rotoscoping animation created using Photoshop, featuring royalty-free external audio.',
        iframeSrc: 'https://www.youtube.com/embed/8fDgl2y5pW4?si=G0diJ7Bx9-Kbe3uO',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p6',
        title: 'Ihand',
        description:
            'This is a short commercial-style project designed to replicate the visual language of technology brand advertisements. The piece promotes the fictional product "Ihand", imagined as a smartphone embedded into the human hand. The project was created using Adobe Premiere Pro exclusively for learning purposes and without commercial intent. All assets used are royalty-free.',
        iframeSrc: 'https://drive.google.com/file/d/1_-sBUPp8M_1wnphZo3tSKYjp-P9vuXXH/preview',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p7',
        title: 'All Digital Media & Kommo',
        description:
            'This reel involved translation and localization work, as the original material was in English. I also modified the final on-screen information to align with the branding and company details of "All Digital Media". The editing adjustments were completed using Adobe Premiere Pro.',
        iframeSrc: 'https://youtube.com/embed/1WuCEfHVqKE?si=Cb7EJZq1qPUohQoi',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p8',
        title: 'All Digital Media & Big Commerce',
        description:
            'This reel involved translation and localization work from the original English version. I also adapted the final information sequence to match the branding requirements of "All Digital Media", including adjustments to the final transition displaying the company logo and corporate details. The project was edited using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/Bmp48LleZ0E?si=LhpADvwiw_JX4yf-',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p9',
        title: 'Pre Icfes Con Estilo',
        description:
            'This commercial was produced for the educational institution "Pre Icfes con Estilo", where I served as director. The primary objective was to create both a YouTube advertisement and an introductory video for the institution’s digital platform. While some archival material was provided, approximately 90% of the footage was filmed and produced by our team, which consisted of a cinematographer, an editor, and myself as director.',
        iframeSrc: 'https://www.youtube.com/embed/NBRRBUN4RIo?si=gGZIcidqop_jK5Q7',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p10',
        title: 'Singing a Sailboat',
        description:
            'This short film was produced in collaboration with a team of 3 people, where I assumed the role of director. The project’s artistic intention was to portray the life of a humble sailmaker attempting to reconnect with his son. The production was carried out in collaboration with the Universidad de los Andes.',
        iframeSrc: 'https://www.youtube.com/embed/rDiEsuEZWrU?si=6IV62kOXw4F4L1N_',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p11',
        title: 'Pirate vs Samurai',
        description:
            'This is a rotoscoping project in which I experimented with animation techniques during one of my first experiences using Adobe Photoshop. The project was created using Photoshop in combination with Adobe Premiere Pro. Stock audio was used, and the full production process took approximately 2 weeks, including recording the original frames, rotoscoping, and post-production.',
        iframeSrc: 'https://www.youtube.com/embed/QvqdybkfV2g?si=iCi8a9ctJ5-mHg9p',
        section: '2022',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p12',
        title: 'SALESmanago and Yandex ADS',
        description:
            'This was a project where I worked as editor, responsible for refining the original animated video by adding logos and integrating them efficiently with the existing transitions. Additionally, I incorporated all elements within a short timeframe in an effective manner. This project was edited using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=kQbA5_IqMW0bBG6G',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p13',
        title: 'AllDigital, SALESmanago and Yandex ADS',
        description:
            'This is a project in which my role was both video editor and translator. For the main content, I was responsible for adding the brand logos and integrating them seamlessly with the existing video material. Additionally, I translated the video, which was originally in English. The entire project was completed within a short timeframe using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=QUrFat9nCfqdG1lr',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                production: {
                    title: "",
                    description: [""],
                    media: [""],
                },
                postproduction: {
                    title: "",
                    description: [""],
                    media: [""],
                },
            },
            sectionFooter: "",
        }
    },
]
