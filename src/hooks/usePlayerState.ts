import { useState } from "react";

const LOCAL_STORAGE_KEY_PLAYER_STATE = "player-state"

export interface PlayerState {
    name: string;
    roomId?: string;
}

export const usePlayerState = () => {
    const [playerStates, setPlayerStates] = useState<PlayerState[]>(() => {
        const savedPlayerState = localStorage.getItem(LOCAL_STORAGE_KEY_PLAYER_STATE);
        if (!savedPlayerState) return [];
        return JSON.parse(savedPlayerState) || [];
    })

    const finalSetPlayerStates = (states: PlayerState[]) => {
        setPlayerStates(states);
        localStorage.setItem(LOCAL_STORAGE_KEY_PLAYER_STATE, JSON.stringify(states));
    }

    const updatePlayerState = (name: string, newPlayerState: Partial<Omit<PlayerState, "name">>) => {
        const playerStateIndex = playerStates.findIndex((playerState) => playerState.name === name);
        if (playerStateIndex >= 0) {
            const playerStateCopy = [...playerStates];
            playerStateCopy[playerStateIndex] = {
                ...playerStates[playerStateIndex],
                ...newPlayerState
            };
            finalSetPlayerStates(playerStateCopy);
        }
        else {
            console.warn(`Unable to find player state with ${name}`);
        }
    }

    const addPlayerState = (name: string, newPlayerState: Omit<PlayerState, "name">) => {
        const playerStateIndex = playerStates.findIndex((playerState) => playerState.name === name);
        if (playerStateIndex >= 0) {
            console.warn(`Player state with ${name} already exist.`);
            return false;
        }
        finalSetPlayerStates([...playerStates, { name, ...newPlayerState}]);
        return true;
    }

    return {playerStates, addPlayerState, updatePlayerState};
}