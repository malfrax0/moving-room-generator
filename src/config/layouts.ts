
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
            "Table basse (Un tiroir à double fond qui contient une sorte de recette pour faire disparaitre le mauvais oeil dans un langage religieux. Plus proche de croyance que de vérité)",
            "Lampe de table (Si allumé en 2020 clignote bizarre)",
            "Tapis (Un amas de poussière considerable se dégage du tapis)",
            "Bibliothèque mural (Rien d'intéressant mais cache un passage derrière. Le joueur peut s'en rendre compte en essayant de la bouger)",
            "Tableau au mur (Une carte de l'ukraine)",
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
Vous observez la femme faire les cent pas dans le salon, son visage marqué par une anxiété palpable. Ses mouvements sont erratiques, trahissant une nervosité extrême. Soudain, elle se dirige vers la bibliothèque, ses yeux fixés sur un point précis. À votre grande surprise, elle traverse la bibliothèque comme si elle n'était qu'une illusion, disparaissant de votre vue. Vous réalisez que quelque chose d'anormal se passe ici.
                `
            },
            {
                year: 2020,
                description: `
L'homme se tient debout, son regard fixé sur l'horloge du salon. Il semble hypnotisé par les aiguilles, comme si le temps lui-même avait une signification particulière pour lui. Après un moment, il sort un petit carnet de sa poche et griffonne quelques notes avec une précision méticuleuse. Vous vous demandez ce qu'il peut bien écrire avec autant de concentration.                `
            },
            {
                year: 2022,
                description: `
Dans un coin du salon, un enfant est recroquevillé, ses yeux écarquillés de terreur. Il semble paralysé par la peur, incapable de bouger ou de parler. Vous ressentez une profonde empathie pour lui, mais aussi une inquiétude grandissante quant à la cause de sa terreur.                `
            },
            {
                year: 9999,
                description: `
Vous vous figez, pétrifié, en voyant devant vous un Chien de Tindalos, une créature cauchemardesque aux angles impossibles et aux crocs acérés.
La simple vision de cette abomination impose un test difficile de Santé Mentale (SAN 6/10), mettant à l'épreuve votre résistance psychique face à l'horreur indicible.
Sans hésitation, le Chien de Tindalos bondit sur vous, ses mouvements défiant les lois de la physique, avant de disparaître aussi soudainement qu'il est apparu, laissant derrière lui une sensation de malaise persistant.
Après cette rencontre traumatisante, vous pouvez récupérer 5 points de SAN, vous permettant de reprendre vos esprits et de continuer votre exploration, bien que marqué par cette expérience terrifiante.
Cette épreuve renforce votre détermination à percer les mystères de cet univers lovecraftien, tout en soulignant les dangers omniprésents qui guettent les imprudents.
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
Vous observez la femme s'affairer dans la cuisine, ses mouvements rapides et précis. Elle ouvre le four, et vous remarquez qu'il est réglé à une température élevée de 220 degrés. Avec une expression déterminée, elle y place un objet mystérieux avant de refermer la porte du four. Vous vous demandez ce qu'elle peut bien cuire à une telle température.                `
            },
            {
                year: 2020,
                description: `
L'homme se tient devant le réfrigérateur, fouillant parmi les restes pour se préparer un petit repas. Après avoir rassemblé quelques ingrédients, il se tourne vers le freezer. Lorsqu'il l'ouvre, son expression change brusquement, passant de la nonchalance à la surprise, voire à l'horreur. Avant que vous puissiez réagir, il disparaît soudainement, comme aspiré par une force invisible.
                `
            },
            {
                year: 2022,
                description: `
L'enfant se tient devant le freezer, ses petites mains s'efforçant d'ouvrir la porte. Il semble désespéré, ses efforts pour accéder à quelque chose à l'intérieur étant visiblement entravés par sa taille et sa force limitée. Vous ressentez une urgence à l'aider, mais aussi une appréhension quant à ce qu'il pourrait y avoir dans le freezer.                `
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
                year: 2022,
                description: `
                    En entrant dans la chambre d'enfant, vous êtes frappé par l'atmosphère étrangement silencieuse et oppressante. L'enfant est assis à une petite table, concentré sur une feuille de papier. Il dessine avec une intensité troublante, utilisant des crayons noirs et rouges. Ses mouvements sont précis, presque rituel, mais il est impossible de distinguer clairement ce qu'il dessine. Les formes et les lignes semblent se tordre et se déformer sous vos yeux, comme si elles défiaient les lois de la géométrie.
                `
            },
            {
                year: 9999,
                description: `
En pénétrant dans la chambre d'enfant, une atmosphère lourde et oppressante vous enveloppe.
Vous entendez une respiration lourde et saccadée provenant de sous le lit.
Le son est inhumain, comme si quelque chose de monstrueux se tapissait dans l'ombre.
Votre cœur bat à tout rompre alors que vous vous approchez lentement du lit, prêt à affronter l'inconnu.
Si le joueur regarde: test de POU difficile SAN 1/1d6 -  Le chien de Tindalos sort et attaque le joueur avant de disparaitre. sinon paralisie
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
Vous entrez dans la salle de bain, une pièce étroite et mal éclairée, où l'air est chargé d'une humidité oppressante. L'homme est déjà là, ses mouvements frénétiques trahissent une urgence palpable. Il fouille chaque recoin, ouvrant les armoires, déplaçant les objets, comme s'il cherchait quelque chose de vital.                    Il semble fouiller un peu partout jusqu'à ce que ça main traverse un coin de la façade de la baignoire.
Test de Perception: En regardant de plus prêt, on peut voir que la main de l'homme passe à travers la baignoire en bas à gauche.
                `
            },
            {
                year: 2022,
                description: `
Vous entrez dans la salle de bain et trouvez l'enfant debout sur la pointe des pieds, fouillant dans l'armoire à pharmacie. Il semble chercher quelque chose de spécifique, ses petites mains tremblant légèrement. Soudain, il saisit une fiole contenant un liquide sombre et la porte à ses lèvres, buvant son contenu d'un trait. Vous observez, horrifié, alors que l'enfant répète ce rituel morbide, comme si le temps se répété.                `
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
La femme se tient devant le miroir de la coiffeuse, brossant ses cheveux avec soin. Elle prend son temps, chaque coup de brosse est précis et délibéré. Une fois satisfaite de sa coiffure, elle ouvre un petit coffret à bijoux et commence à se parer de colliers, bracelets et boucles d'oreilles.
                `
            },
            {
                year: 2020,
                description: `
L'homme se tient devant un miroir en pied, ajustant méticuleusement une chemise de soie qu'il vient de sortir d'une valise ouverte à ses pieds. Il enfile ensuite un pantalon parfaitement repassé et une veste assortie, chaque mouvement empreint d'une certaine dignité.                `
            },
            {
                year: 2022,
                description: `
                    L'enfant est assis par terre, entouré de vêtements éparpillés, feuilletant un vieux livre d'images avec une fascination intense. Il semble complètement absorbé par les pages jaunies, murmurant des mots inaudibles tout en tournant les pages.
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

La femme Martineau est présente dans la pièce.

Elle semble chercher quelques choses.

Il y a un livre dans la bibliothèque qui est caché derrière de faux livre. **Un test très difficle de TOC permet de le trouver directement.**

Le joueur pourra essayer de déchiffrer les mouvements de La femme via un test de psychologie. Il pourras voir qu’a plusieurs moments ca main passe à travers le mobilier.
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

L'enfant dans la bibliothèque.
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
La femme est assise à côté du fauteuil, ses doigts jouant distraitement avec un objet rond. Elle le pose délicatement sur la petite table près du fauteuil avant de se lever et de quitter la pièce sans un mot. L'objet brille faiblement sous la lumière tamisée, attirant votre attention.                `
            },
            {
                year: 2020,
                description: `
Vous entrez dans le bureau, une pièce silencieuse perturbée uniquement par le bourdonnement de l'imprimante. L'homme, visiblement furieux, frappe du poing contre la machine, ses traits déformés par la colère. Après un dernier coup violent, il se redresse brusquement et quitte la pièce en trombe, laissant derrière lui un silence pesant et une imprimante endommagée.                `
            }
        ],
    },
    {
        name: "Salle à manger",
        doorDescription: "Une rideau qui cache une porte simple des année 1960.",
        objects: [
            "La table à manger (Note à moi même - Ne pas laisser la femme de ménage faire la poussière sur les étagères de la bibliothèque. Les livres y sont précieux.)",
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
La femme se tient près de l'âtre, ses mains tendues vers les flammes pour se réchauffer. Soudain, son visage pâlit et ses yeux s'écarquillent de terreur. Elle jette un regard affolé autour d'elle, comme si elle avait vu quelque chose d'invisible pour vous. Sans un mot, elle se précipite hors de la pièce, laissant derrière elle un silence perturbé uniquement par le crépitement du feu.                `
            },
            {
                year: 2020,
                description: `
L'homme est assis à la table, penché sur un vieux carnet, sa plume grattant frénétiquement le papier. Il semble complètement absorbé par ce qu'il écrit, ses épaules voûtées et son visage dissimulé par l'ombre. Après quelques instants, il déchire la page du carnet, la plie soigneusement et la glisse dans une enveloppe qu'il cache sous un livre ancien posé sur la table. Il se lève ensuite et quitte la pièce sans un regard en arrière.                `
            }
        ],
    },
    {
        name: "Séjour",
        doorDescription: "Une porte en deux battants en PVC noir.",
        objects: [
            "Canapé",
            "Table basse",
            "Télévision",
            "Tapis",
            "Bibliothèque murale",
            "Tableau au mur",
            "Horloge (Affiche 4h18)",
            "Vase (A l'intérieur se cache un bout de puzzle)",
            "Petit bureau (Une petite note est caché parmis beaucoup d'autre. `J'ai réparer temporairement le miroir de la chambre pour que l'éclat ne ce voit plus. Peut être faudrait-il le faire remplacer depuis le temps ?`)"
        ],
        maxGenerated: 2,
        chance: 2,
        sideStories: [
            {
                year: 2018,
                description: `
                    Scène : Le Séjour

Vous entrez dans le séjour, une pièce faiblement éclairée où l'air est chargé d'une tension palpable. La femme est assise au bureau, sa plume grattant frénétiquement le papier. Elle semble absorbée par son écriture, ses yeux fixés sur les pages qui se remplissent de symboles étranges et de mots en langues anciennes. Soudain, elle s'arrête, levant la tête comme si elle sentait une présence. Elle fini par sortir de la pièce.
                `
            },
            {
                year: 2022,
                description: `
L'enfant, visiblement maladroit, trébuche et renverse un vase posé sur une table basse. Le vase se brise en mille morceaux, éparpillant des débris de porcelaine sur le sol. Au lieu de ramasser les fragments, l'enfant semble captivé par quelque chose de petit parmi les débris. Il se penche, le ramasse avec précaution et l'examine avec curiosité, oubliant complètement le désordre qu'il a causé.                `
            },
            {
                year: 9999,
                description: `Un froid glacial envahit la pièce, et vous sentez une présence maléfique se rapprocher. Des grattements se font entendre... Vous réalisez avec horreur que c'est un chien de Tindalos. Ca formes grotesque et anguleuse apparait et disparait dans les coins sombres de la pièce, leurs yeux brillants de malveillance. Test de SAN 1d4/1d10. Le chien fonce et donne un coup de griffe escquivable. Mais cette fois le joueur semble se réveiller avec une douleur au ventre.. Il y voit des entailles pas trop profonde. -1pv`
            }
        ],
    },
    {
        name: "Grande chambre",
        objects: [
            "Lit",
            "Table de chevet (Un monocle transparant sur la table de chevet)",
            "Tableau",
            "Valise (Une représentation d'un plongeur sous la forme d'une petite figurine de plomb)",
            "Petit bureau",
            "Armoire",
            "Tableau",
            "Horloge (Affiche 4h18)",
            "Miroir (Un petit miroir rond se trouve dans le coin du miroir - test de TOC)"
        ],
        maxGenerated: 1,
        doorDescription: "Une porte en chène avec une moulure en losange.",
        chance: 1,
        sideStories: [
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