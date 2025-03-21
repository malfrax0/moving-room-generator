
export enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

export interface Link {
    direction: Direction,
    emplacmentIdA: number,
    emplacmentIdB: number
}

export interface Emplacment {
    x: number,
    y: number,
    width: number,
    height: number,    
}

export interface Layout {
    emplacments: Emplacment[],
    onlyOn0: boolean,
    notOn0: boolean
}

export interface SideStory {
    year: number,
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
        sideStories: [],
    },
    {
        name: "Cuisine",
        maxGenerated: 2,
        chance: 2,
        sideStories: [],
    },
    {
        name: "Chambre",
        maxGenerated: 4,
        chance: 4,
        sideStories: [],
    },
    {
        name: "Salle de bain",
        maxGenerated: 3,
        chance: 3,
        sideStories: [],
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
        sideStories: [],
    },
    {
        name: "Bibliothèque",
        maxGenerated: 3,
        chance: 2,
        sideStories: [],
    },
    {
        name: "Bureau",
        maxGenerated: 2,
        chance: 3,
        sideStories: [],
    },
    {
        name: "Salle à manger",
        maxGenerated: 2,
        chance: 2,
        sideStories: [],
    },
    {
        name: "Séjour",
        maxGenerated: 2,
        chance: 2,
        sideStories: [],
    },
    {
        name: "Cave",
        maxGenerated: 1,
        chance: 1,
        sideStories: [],
    },
    {
        name: "Grenier",
        maxGenerated: 1,
        chance: 1,
        sideStories: [],
    },
    {
        name: "Atelier",
        maxGenerated: 2,
        chance: 2,
        sideStories: [],
    },
    {
        name: "Salle de sport",
        maxGenerated: 1,
        chance: 1,
        sideStories: [],
    },
    {
        name: "Salle de jeux",
        maxGenerated: 1,
        chance: 1,
        sideStories: [],
    },
    {
        name: "Studio",
        maxGenerated: 1,
        chance: 1,
        sideStories: [],
    }
];