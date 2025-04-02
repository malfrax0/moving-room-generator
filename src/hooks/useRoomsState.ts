import React from "react";
import { atom, useRecoilState } from "recoil";
import { generateRooms, LayerState, RoomsState, RoomState } from "../generator/generateRooms";
import { usePlayerState } from "./usePlayerState";

const ROOMS_STATE_KEY = "rooms-state";

const roomsState = atom<RoomsState>({
    key: "rooms-state",
    default: { layers: [] },
    effects: [
        ({setSelf, onSet}) => {
            const savedValue = localStorage.getItem(ROOMS_STATE_KEY)
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }
            
            onSet((newValue, _, isReset) => {
                isReset
                ? localStorage.removeItem(ROOMS_STATE_KEY)
                : localStorage.setItem(ROOMS_STATE_KEY, JSON.stringify(newValue));
            });
        }
]
})

export const useRoomsState = () => {
    const { playerStates } = usePlayerState();
    const [state, setState] = useRecoilState<RoomsState>(roomsState);

    const { layers } = state;

    const getLayer = (index: number): LayerState | null => {
        return layers[index] || null
    }

    const setLayer = (index: number, layer: LayerState) => {
        if (index < 0 || index >= layers.length) {
            console.error("Index out of bounds", index, layers.length);
            return;
        }
        setState((curVal) => {
            const newLayers = [...curVal.layers];
            newLayers[index] = layer;
            return { layers: newLayers };
        });
    }

    const addLayer = (layer: LayerState) => {
        setState((curVal) => {
            return { layers: [...curVal.layers, layer] };
        });
    }

    const removeLayer = (index: number) => {
        if (layers.length === 1) {
            console.error("Can't remove last layer");
            return;
        }
        setState((curVal) => {
            const newLayers = [...curVal.layers];
            newLayers.splice(index, 1);
            return { layers: newLayers };
        });
    }

    const generateLayer = (floor: number, add: boolean = false) => {
        if (!add) {
            const layer = getLayer(floor);
            if (!layer) {
                console.error("Layer don't exists", floor);
                return;
            }
        }
        const newLayer = generateRooms({
            lockedRooms: layers.flatMap((layer, index) => {
                if (index === floor) return [];
                return layer.rooms.map(({ room }) => room)
            }),
            frozenRooms: layers[floor].rooms.filter((room) => {
                return playerStates.some((playerState) => playerState.roomId === room.roomId);
            }),
            floor
        });
        if (newLayer === null) {
            console.error("New layer impossible.");
            return;
        }
        add ? addLayer(newLayer) : setLayer(floor, newLayer);
    }

    const findRoomById = (roomId: string) => {
        let foundRoom: RoomState | null = null;
        let foundFloor: number = 0;

        layers.forEach((layer, index) => {
            const room = layer.rooms.find((room) => room.roomId === roomId);
            if (room) {
                foundRoom = room;
                foundFloor = index;
            }
        });

        return {
            foundRoom,
            foundFloor
        } as {
            foundRoom: RoomState | null,
            foundFloor: number
        }
    }

    return {
        layers,
        getLayer,
        setLayer,
        addLayer,
        generateLayer,
        removeLayer,
        findRoomById,
    }
}

