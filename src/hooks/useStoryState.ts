import { atom, useRecoilState } from "recoil";

const STORY_STATE_KEY = "story-state"

const storyState = atom<string[]>({
    key: STORY_STATE_KEY,
    default: [],
    effects: [
        ({setSelf, onSet}) => {
            const savedValue = localStorage.getItem(STORY_STATE_KEY)
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }
            
            onSet((newValue, _, isReset) => {
                isReset
                ? localStorage.removeItem(STORY_STATE_KEY)
                : localStorage.setItem(STORY_STATE_KEY, JSON.stringify(newValue));
            });
        }
    ]
})

export const useStoryState = () => {
    const [state, setState] = useRecoilState<string[]>(storyState);

    const hasStory = (storyKey: string) => {
        return state.includes(storyKey);
    }

    const validateStory = (storyKey: string) => {
        if (!hasStory(storyKey)) {
            setState([...state, storyKey]);
        }
    }
    
    const unvalidateStory = (storyKey: string) => {
        const storyIndex = state.findIndex((s) => s === storyKey);
        if (storyIndex > -1) {
            const newState = [...state];
            newState.splice(storyIndex, 1);
            setState(newState);
        }
    }

    return {
        hasStory,
        validateStory,
        unvalidateStory
    }
}