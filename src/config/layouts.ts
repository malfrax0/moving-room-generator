
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
    maxGenerated: number,
    chance: number,
    sideStories: SideStory[],
}

export const Rooms: Room[] = [
    {
        name: "Salon",
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
        name: "Chambre",
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
        maxGenerated: 2,
        chance: 3,
        sideStories: [],
    },
    {
        name: "Dressing",
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
        maxGenerated: 3,
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
        name: "Bureau",
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
        name: "Atelier",
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
        name: "Salle de jeux",
        maxGenerated: 1,
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
        name: "Studio",
        maxGenerated: 1,
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