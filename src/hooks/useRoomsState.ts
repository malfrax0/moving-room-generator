import { useState } from "react"

export interface RoomState {
    emplacment: string;
    roomId: string;
}

export interface LayerState {
    rooms: RoomState[];
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

