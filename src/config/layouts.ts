
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
    year: 2022 | 2020 | 2018 | 2016 | 9999 | 9998,
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
            "Lampe de table (Si allumé en 2020 clignote bizarre)",
            "Tapis (Un amas de poussière considerable se dégage du tapis)",
            "Bibliothèque mural (Rien d'intéressant mais cache un passage derrière. Le joueur peut s'en rendre compte en essayant de la bouger)",
            "Tableau au mur (Une carte de l'ukraine - Nécessite un jet d'HISTOIRE)",
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
            },
            {
                year: 9999,
                description: `
                    Le joueur voit devant lui un chien de tindalos.
                    Un test difficle de SAN 6/8. Le chien lui saute dessus et disparait.
                    Reprise de 5 SAN après l'action
                `
            }
        ],
    },
    {
        name: "Cuisine",
        doorDescription: "Une porte moderne en PVC blanc avec des fausses moulures",
        objects: [
            "Réfrigérateur (Dans le freezer un bout de puzzle coincé dans la glace)",
            "Placard à vaisselle",
            "Four (Uniquement allumé en 2020)",
            "Evier (En dessous de l'évier une inscription: La boite n'a plus de jus!)",
            "Table de la cuisine",
            "Chaise",
            "Horloge mural (Affiche 4h18)",
            "Etagère à épice (A l'intérieur d'un des pots une bague étrange avec un symbole bizarre)",
            "Un tableau (Une carte de la France)"
        ],
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
        objects: [
            "Lit superposé (Un petit ours en peluche en mauvaise etat)",
            "Armoir (Il y a une batte de baseball, un gant et une balle)",
            "Petit bureau (Un dessin qui représente la lumière rouge se réflechissant sur 3 mirroirs - test de TOC)",
            "Etagère à livres (Une sorte de cassette pré-enregistré qui dit: Je ne sais plus où je suis, cela change tout le temps, je dois y être depuis des heures, ou seulement quelques minutes...)",
            "Tableau au mur (Représente une carte de l'inde - Nécessite un jet réussit d'HISTOIRE)",
            "Une petite maison de poupée (Chaque joueur semble être représenté par un petit personnage)",
            "Le tapis de jeu (un pot d'argile à cuire)"
        ],
        maxGenerated: 4,
        chance: 4,
        sideStories: [
            {
                year: 2018,
                description: `
                    RIEN
                `
            },
            {
                year: 2020,
                description: `
                    RIEN
                `
            },
            {
                year: 2022,
                description: `
                    Indice pour trouver une pièce de puzzle ?
                `
            }
        ],
    },
    {
        name: "Salle de bain",
        doorDescription: "Une porte avec une vitre obfusqué pour ne pas voir l'intérieur.",
        objects: [
            "Armoire à pharmacie (Contient des bandages x5, des médicaments codeinés x1 et un mélange dans une fiole avec du dépot qui est en réalité un poison à base de sigule)",
            "Baignoire (Jet Difficle - Contient une pièce du puzzle)",
            "Mirroir (Le mirroir est très sale mais une empreinte de main glissant vers le base s'y dessine SAN 0/1)",
            "WC (L'ouverture du reservoir permet de repérer un croquis montrant un petit objet qui cuit dans un four)",
            "Lavabos (Un seche cheveux à pile qui fonctionne)",
            "Etagere à serviettes"
        ],
        maxGenerated: 3,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    RIEN
                `
            },
            {
                year: 2020,
                description: `
                    Lucas cherche dans la salle de bain. Il semble fouiller un peu partout jusqu'à ce que ça main traverse un coin de la façade de la baignoire.
                `
            },
            {
                year: 2022,
                description: `
                    Marc est présent dans la salle de bain. Il cherche dans l'armoire à pharmacie. Il y trouve une fiole qu'il boit. Cela se repete.
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
        objects: [
            "Penderie (Un petit tiroir au fond contient un texte: Une partie de moi est froide alors que l'autre est remplie d'or)",
            "Coiffeuse (Dessus, une boite à bijoux. On y trouve une piece de puzzle sur un jet de TOC)",
            "Valise (des vetements très chiques)",
            "Etagere (Des vetements et robes de bonne qualité",
            "Porte ceinture",
        ],
        maxGenerated: 1,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    On peut voir sophie se coiffer devant le miroire de la coiffeuse.
                    Ensutie elle y met des bijoux.
                `
            },
            {
                year: 2020,
                description: `
                    Lucas est en train de s'habiller avec des vetements chiques qu'il a trouvé dans la valise.
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
            "Tableau au mur (Représente le pérou - Nécessite un jet HISTOIRE)"
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
        objects: [
            "Bureau (Un tiroir qui s'ouvre qui contient des billets d'avions de 2016 pour la norvège, un autre tiroir qui s'ouvre avec la clé)",
            "Bibliotheque (Des livres anciens. Un test de TOC difficle permet de trouver un livre au hasard sur le mythe)",
            "Ordinateur (Ne fonctionne qu'en 2020, un mot de passe 'tindalos' permet de trouver des informations sur un sanctuaire qui serait caché sous un lac.)",
            "Imprimante (Le papier est bourré, le décoincé 'DEX' permet de trouver une pièce du puzzle)",
            "Petit table à côté du fauteille (Un mirroir y est placé)",
            "Tableau au mur (Un tableau représentant l'albanie - test HISTOIRE)",
            "Horloge mural (Indique 4h18)",
            "Etagere (Des objets présentés qui peuvent valoir de l'argent - test d'ESTIMATION ~500euros)"
        ],
        maxGenerated: 2,
        chance: 3,
        sideStories: [
            {
                year: 2018,
                description: `
                    Sophie est assi à côté du fauteille. Elle semble jouer avec quelques choses de rond entre ces doigts qu'elle pose sur la petite table du fauteille avant de partir.
                `
            },
            {
                year: 2020,
                description: `
                    Lucas semble furieux est tape contre l'imprimate. Puis il s'en va en trombe!
                `
            },
            {
                year: 2022,
                description: `
                    Marc est allongé sur le sol, pleurant...
                `
            }
        ],
    },
    {
        name: "Salle à manger",
        doorDescription: "Une rideau qui cache une porte simple des année 1960.",
        objects: [
            "La table à manger (Note à la femme de ménage - Merci de ne pas faire la poussière sur les étagères de la bibliothèque. Les livres y sont précieux.)",
            "Status buste (Un homme avec un monocle avec une plaque en dessous disant `Ambrose Dewart` - Si le joueur veut voir le monocle de plus prêt il découvre un mirroir)",
            "Vessellier",
            "Armoires",
            "Cheminé (Si ils veulent grimpé une chauve-souris les aggresses. Un nid est formé et la cheminé est bouché / Un post-it brulé avec marqué : MDP - **********alos - test de TOC)",
            "Une télévision cassé",
            "Un tapis",
        ],
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
    },
    {
        name: "Mur en pierre",
        chance: 1,
        doorDescription: "Une porte rustique en bois bancale",
        maxGenerated: 4,
        objects: [],
        sideStories: []
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