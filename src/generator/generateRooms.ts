import { commonEmplacments, Layout, Layouts, Room, Rooms } from "../config/layouts";
import { v7 } from "uuid";

export interface RoomState {
    room: Room;
    emplacment: number;
    roomId: string;
    story?: {
        key: string,
        year: number,
        description: string
    }
}

export interface LayerState {
    rooms: RoomState[];
    layout: Layout;
}

export interface RoomsState {
    layers: LayerState[];
}

export interface GenerateRoomsOptions {
    lockedRooms: Room[];
    frozenRooms: RoomState[];
    floor: number;
    hasStory: (key: string) => boolean;
}

export function generateRooms({ lockedRooms, frozenRooms, floor, hasStory }: GenerateRoomsOptions): LayerState | null {
    const usableLayouts = Layouts.filter((layout) => {
        if (layout.notOn0 && floor === 0) return false;
        if (layout.onlyOn0 && floor !== 0) return false;
        return true;
    });
    const layout = usableLayouts[Math.floor(Math.random() * usableLayouts.length)];
    const usableRooms = Rooms.map<Room>((room) => {
        const lockedRoomsWithType = lockedRooms.filter((lockedRoom) => lockedRoom.name === room.name);
        return {
            ...room,
            maxGenerated: Math.max(room.maxGenerated - lockedRoomsWithType.length, 0),
        };
    }).filter((room) => room.maxGenerated > 0);

    const usableRoomsWeighted: Room[] = [];
    usableRooms.forEach((room) => {
        for (let i = 0; i < room.chance; i++) {
            usableRoomsWeighted.push(room);
        }
    });

    const newRooms: RoomState[] = [];

    for (let i = 0; i < commonEmplacments.length; i++) {
        newRooms.push({
            emplacment: i,
            roomId: `COMMON-${i}`,
            room: {
                name: commonEmplacments[i].name || "Emplacment",
                maxGenerated: 0,
                chance: 0,
                sideStories: [],
            },
        });
    }
    const roomToGenerateCount = layout.emplacments.length - commonEmplacments.length;
    const uniqueNumbers = new Set<number>();
    let maxTry = 50;
    const realFrozenRooms = frozenRooms.filter((room) => !room.roomId.startsWith('COMMON-'))
    while (uniqueNumbers.size < realFrozenRooms.length) {
        uniqueNumbers.add(Math.floor(Math.random() * roomToGenerateCount));
        maxTry--;
        if (maxTry <= 0) {
            return null;
        }
    }
    const uniqueNumbersArray = Array.from(uniqueNumbers);

    for (let i = 3; i < layout.emplacments.length; i++) {
        const idx = uniqueNumbersArray.findIndex((v) => v === i - 3);
        if (idx >= 0) {
            newRooms.push({
                ...realFrozenRooms[idx],
                emplacment: i
            });
            continue;
        }
        const room = usableRoomsWeighted[Math.floor(Math.random() * usableRoomsWeighted.length)];
        
        let story: RoomState['story'] = undefined;
        const storiesAvailable = room.sideStories.filter((story) => !hasStory(`${room.name}-${story.year}`));
        
        if (storiesAvailable.length) {
            const choosenStory = storiesAvailable[Math.floor(Math.random() * storiesAvailable.length)];
            story = {
                key: `${room.name}-${choosenStory.year}`,
                ...choosenStory
            }
        }

        newRooms.push({
            emplacment: i,
            roomId: v7(),
            room,
            story
        });
    }

    return {
        rooms: newRooms,
        layout,
    };
}