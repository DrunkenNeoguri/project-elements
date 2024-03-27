import { useLayoutEffect, useState } from "react";
import { firebaseAuth } from "../../../utils/util-firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useMainHeader() {
  const [username, setUsername] = useState<string | null>(
    firebaseAuth.currentUser?.displayName ?? ""
  );

  useLayoutEffect(() => {
    if (!username) {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          setUsername(user.displayName);
        }
      });
    }
  }, []);

  return { username };
}
