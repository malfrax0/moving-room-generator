import { useState } from "react"
import { Layout, Room } from "../config/layouts";


export interface RoomState {
    room: Room;
    emplacment: string;
    roomId: string;
}

export interface LayerState {
    rooms: RoomState[];
    layout: Layout;
}

export interface RoomsState {
    layers: LayerState[];
}

const useRoomState = () => {
    const [layers, setLayers] = useState<LayerState[]>(() => {
        const state = localStorage.getItem("layers-state");
        if (!state) return [];
        return JSON.parse(state) || [];
    });

    const getLayer = (index: number): LayerState => {
        return layers[index] || { rooms: [] }
    }


}

