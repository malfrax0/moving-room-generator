import { useState } from "react";
import { atom, useRecoilState } from "recoil";

const LOCAL_STORAGE_KEY_PLAYER_STATE = "player-state"

export interface PlayerState {
    name: string;
    roomId?: string;
    floor: number
}

export interface PlayerStates {
    playerStates: PlayerState[];
}

const playerStates = atom<PlayerStates>({
    key: "player-states",
    default: { playerStates: [] },
    effects: [
        ({ setSelf, onSet }) => {
            const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY_PLAYER_STATE)
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }

            onSet((newValue, _, isReset) => {
                isReset
                    ? localStorage.removeItem(LOCAL_STORAGE_KEY_PLAYER_STATE)
                    : localStorage.setItem(LOCAL_STORAGE_KEY_PLAYER_STATE, JSON.stringify(newValue));
            });
        }
    ]
})

export const usePlayerState = () => {
    const [state, setState] = useRecoilState<PlayerStates>(playerStates);

    const { playerStates: players } = state;

    const finalSetPlayerStates = (states: PlayerState[]) => {
        setState({ playerStates: states });
    }

    const updatePlayerState = (name: string, newPlayerState: Partial<Omit<PlayerState, "name">>) => {
        const playerStateIndex = players.findIndex((playerState) => playerState.name === name);
        if (playerStateIndex >= 0) {
            const playerStateCopy = [...players];
            playerStateCopy[playerStateIndex] = {
                ...players[playerStateIndex],
                ...newPlayerState
            };
            finalSetPlayerStates(playerStateCopy);
        }
        else {
            console.warn(`Unable to find player state with ${name}`);
        }
    }

    const addPlayerState = (name: string, newPlayerState: Omit<PlayerState, "name">) => {
        const playerStateIndex = players.findIndex((playerState) => playerState.name === name);
        if (playerStateIndex >= 0) {
            console.warn(`Player state with ${name} already exist.`);
            return false;
        }
        finalSetPlayerStates([...players, { name, ...newPlayerState}]);
        return true;
    }

    return {playerStates: players, addPlayerState, updatePlayerState};
}