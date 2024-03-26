import {
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

export const convertPersistenceByAutoSignInState = (
  autoSignInState: boolean
) => {
  return autoSignInState ? browserLocalPersistence : browserSessionPersistence;
};
