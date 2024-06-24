import { User } from "firebase/auth";
import { atom } from "jotai";

const initialValue = null;

export const userInfoAtom = atom<User | null>(initialValue);
