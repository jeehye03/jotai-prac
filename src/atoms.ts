import { atom } from "jotai";

const baseCount = atom(0);

export const countAtom = atom(
    (get) => get(baseCount),
    (_get,set) => {
        set(baseCount, (c) => c + 1) ; 
    }
);