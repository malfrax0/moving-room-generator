
export const PLAYER_COLORS = [
  "#2980b9",
  "#8e44ad",
  "#27ae60",
  "#f39c12",
  "#c0392b",
]

export interface Link {
    emplacmentIdA: number,
    emplacmentIdB: number
}

export interface Emplacment {
    x: number,
    y: number,
    width: number,
    height: number,
    noGeneration?: boolean,
    name?: string
}

export interface Layout {
    emplacments: Emplacment[],
    links: Link[],
    onlyOn0: boolean,
    notOn0: boolean
}

export interface SideStory {
    year: 2022 | 2020 | 2018 | 2016,
    description: string
}

export interface Room {
    name: string,
    doorDescription: string,
    objects: string[],
    maxGenerated: number,
    chance: number,
    sideStories: SideStory[],
}

export const Rooms: Room[] = [
    {
        name: "Salon",
        doorDescription: "Une double porte en bois massif",
        objects: [
            "Cheminée (Brique amovible qui contient des dessins de chien de Tindalos)",
            "Canapé",
            "Table basse (Un tiroir à double fond qui contient une sorte de recette pour faire disparaitre le mauvais oeil)",
            "Lampe de table (Si allumé clignote bizarre)",
            "Tapis (Un amas de poussière considerable se dégage du tapis)",
            "Bibliothèque mural (Rien d'intéressant mais cache un passage derrière. Le joueur peut s'en rendre compte en essayant de la bouger)",
            "Tableau au mur (La vue d'un gigantesque lac qui semble illuminé par le fond.)",
            "Horloge de grand-père (L'horloge semble cassé et sur 4h18)",
            "Fauteil",
            "Vase décoratif (Très ancien, surement de valeur)"
        ],
        maxGenerated: 1,
        chance: 4,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Cuisine",
        doorDescription: "Une porte moderne en PVC blanc avec des fausses moulures",
        objects: [],
        maxGenerated: 2,
        chance: 2,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Chambre d'enfant",
        doorDescription: "Une porte rustique classique avec BONJOUR écrit en lettre coloré",
        objects: [],
        maxGenerated: 4,
        chance: 4,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Salle de bain",
        doorDescription: "Une porte avec une vitre obfusqué pour ne pas voir l'intérieur.",
        objects: [],
        maxGenerated: 3,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Toilettes",
        doorDescription: "Une simple porte en bois moderne clair",
        objects: [],
        maxGenerated: 2,
        chance: 3,
        sideStories: [],
    },
    {
        name: "Dressing",
        doorDescription: "Une porte coulissante en PVC blanc et grise",
        objects: [],
        maxGenerated: 1,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Bibliothèque",
        doorDescription: "Une porte noir moulé datant des annés 1700 avec des vitreaux verts et gris.",
        objects: [
            "Étagères à livre (Le livre avec le dessin de la clé)",
            "Table (Le tiroir contient une lettre expliquant `Assurez-vous que l'horloge du salon, qui est toujours parfaitement réglée, serve de référence pour synchroniser toutes les autres horloges de la maison. Il est impératif que chaque pendule affiche l'heure exacte, afin de maintenir l'harmonie temporelle essentielle à notre demeure.`)",
            "Fauteil de lecture (Très mal assis)",
            "Lampe de bureau",
            "Globe terrestre (Solution de l'énigme si les conditions sont réuni)",
            "Table basse",
            "Tapis",
            "Echelle (Permet d'accèder à une boite en haut de l'étagère contenant une pièce du puzzle)",
            "Tableau au mur (La peinture d'une colonne dans un fond marain)"
        ],
        maxGenerated: 3,
        chance: 2,
        sideStories: [
            {
                year: 2018,
                description: `
**Bibliothèque - 2018**

Sophie Martineau est présente dans la pièce.

Elle semble chercher quelques choses.

Il y a un livre dans la bibliothèque qui est caché derrière de faux livre. **Un test très difficle de TOC permet de le trouver directement.**

Le joueur pourra essayer de déchiffrer les mouvements de Sophie via un test de psychologie. Il pourras voir qu’a plusieurs moments ca main passe à travers le mobilier.
Si le joueur déduit que les meubles ne sont peut être plus au même endroit que l’illusion lui permettra un jet de TOC normal pour trouver le bouquin.
                `
            },
            {
                year: 2020,
                description: `
**Bibliothèque - 2020**

Personne dans la bibliothèque, mais il y a une horloge qui semble fonctionner mais qui n’est pas à l’heure.

Mettre les aiguilles sur 4h18 ouvre un compartiment contenant une parchemin déchiré.
                `
            },
            {
                year: 2022,
                description: `
**Bibliothèque - 2022**

Marc dans la bibliothèque.
Les joueurs pourront voir qu’il essaie de reconstruire quelques choses sur une des tables. Impossible d’en savoir plus.
                `
            }
        ],
    },
    {
        name: "Bureau",
        doorDescription: "Une porte en bois sombre avec une poignée en or.",
        objects: [],
        maxGenerated: 2,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Salle à manger",
        doorDescription: "Une rideau qui cache une porte simple des année 1960.",
        objects: [],
        maxGenerated: 2,
        chance: 2,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Séjour",
        doorDescription: "Une porte en deux battants en PVC noir.",
        objects: [],
        maxGenerated: 2,
        chance: 2,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    },
    {
        name: "Grande chambre",
        objects: [],
        maxGenerated: 1,
        doorDescription: "Une porte en chène avec une moulure en losange.",
        chance: 1,
        sideStories: [
            {
                year: 2018,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2020,
                description: `
                    DESCRIPTION
                `
            },
            {
                year: 2022,
                description: `
                    DESCRIPTION
                `
            }
        ],
    }
];

export const commonEmplacments: Emplacment[] = [
    {
        x: 0,
        y: -150,
        width: 100,
        height: 400,
        name: "Couloir principal",
        noGeneration: true
    },
    {
        x: -200,
        y: -150,
        width: 200,
        height: 100,
        name: "Couloir secondaire",
        noGeneration: true
    },
    {
        x: -100,
        y: 150,
        width: 100,
        height: 100,
        name: "Escalier",
        noGeneration: true
    },
]

const commonLinks: Link[] = [
    {
        emplacmentIdA: 0,
        emplacmentIdB: 2
    }
]

export const Layouts: Layout[] = [
    {
        emplacments: [
            ...commonEmplacments,
            {
                x: 100,
                y: -150,
                width: 200,
                height: 200,
                name: "Piece A"
            },
            {
                x: 100,
                y: 50,
                width: 200,
                height: 200,
                name: "Piece B"
            },
            {
                x: -200,
                y: -50,
                width: 200,
                height: 200,
                name: "Piece C"
            },
            {
                x: -200,
                y: -300,
                width: 250,
                height: 150,
                name: "Piece D"
            },
            {
                x: 50,
                y: -300,
                width: 250,
                height: 150,
                name: "Piece E"
            },
            {
                x: -350,
                y: -200,
                width: 150,
                height: 250,
                name: "Piece F"
            }
        ],
        links: [
            ...commonLinks,
            {
                emplacmentIdA: 0,
                emplacmentIdB: 3
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 4
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 5
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 6
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 7
            },
            {
                emplacmentIdA: 8,
                emplacmentIdB: 1
            },
            {
                emplacmentIdA: 8,
                emplacmentIdB: 5
            }
        ],
        onlyOn0: true,
        notOn0: false
    },
    {
        emplacments: [
            ...commonEmplacments,
            {
                x: 100,
                y: -150,
                width: 200,
                height: 150,
                name: "Piece A"
            },
            {
                x: 100,
                y: 0,
                width: 200,
                height: 150,
                name: "Piece B"
            },
            {
                x: -200,
                y: -50,
                width: 200,
                height: 200,
                name: "Piece C"
            },
            {
                x: -200,
                y: -300,
                width: 130,
                height: 150,
                name: "Piece D"
            },
            {
                x: 50,
                y: -300,
                width: 250,
                height: 150,
                name: "Piece E"
            },
            {
                x: -350,
                y: -200,
                width: 150,
                height: 250,
                name: "Piece F"
            },
            {
                x: -70,
                y: -300,
                width: 120,
                height: 150,
                name: "Piece G"
            },
            {
                x: 100,
                y: 150,
                width: 200,
                height: 100,
                name: "Piece H"
            },
        ],
        links: [
            ...commonLinks,
            {
                emplacmentIdA: 0,
                emplacmentIdB: 3
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 4
            },
            {
                emplacmentIdA: 1,
                emplacmentIdB: 5
            },
            {
                emplacmentIdA: 1,
                emplacmentIdB: 6
            },
            {
                emplacmentIdA: 3,
                emplacmentIdB: 7
            },
            {
                emplacmentIdA: 8,
                emplacmentIdB: 1
            },
            {
                emplacmentIdA: 8,
                emplacmentIdB: 6
            },
            {
                emplacmentIdA: 9,
                emplacmentIdB: 0
            },
            {
                emplacmentIdA: 10,
                emplacmentIdB: 0
            },
            {
                emplacmentIdA: 10,
                emplacmentIdB: 4
            }
        ],
        onlyOn0: false,
        notOn0: false
    },
    {
        emplacments: [
            ...commonEmplacments,
            {
                x: 100,
                y: -150,
                width: 100,
                height: 100,
                name: "Piece A"
            },
            {
                x: 100,
                y: -50,
                width: 100,
                height: 100,
                name: "Piece B"
            },
            {
                x: 100,
                y: 50,
                width: 100,
                height: 100,
                name: "Piece C"
            },
            {
                x: -50,
                y: -300,
                width: 200,
                height: 150,
                name: "Piece D"
            },
            {
                x: -100,
                y: 20,
                width: 100,
                height: 130,
                name: "Piece E"
            },
            {
                x: -200,
                y: -50,
                width: 200,
                height: 70,
                name: "Piece F"
            },
            {
                x: 100,
                y: 150,
                width: 100,
                height: 100,
                name: "Piece G"
            },
        ],
        links: [
            ...commonLinks,
            {
                emplacmentIdA: 0,
                emplacmentIdB: 3
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 4
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 5
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 6
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 7
            },
            {
                emplacmentIdA: 8,
                emplacmentIdB: 1
            },
            {
                emplacmentIdA: 9,
                emplacmentIdB: 0
            },
        ],
        onlyOn0: false,
        notOn0: false
    },
    {
        emplacments: [
            ...commonEmplacments,
            {
                x: -50,
                y: -250,
                width: 150,
                height: 100,
                name: "Piece A"
            },
            {
                x: 100,
                y: -50,
                width: 100,
                height: 300,
                name: "Piece B"
            },
            {
                x: -200,
                y: -50,
                width: 200,
                height: 150,
                name: "Piece C"
            },
        ],
        links: [
            ...commonLinks,
            {
                emplacmentIdA: 0,
                emplacmentIdB: 3
            },
            {
                emplacmentIdA: 0,
                emplacmentIdB: 4
            },
            {
                emplacmentIdA: 1,
                emplacmentIdB: 5
            }
        ],
        onlyOn0: false,
        notOn0: false
    }
];