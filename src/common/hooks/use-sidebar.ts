import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth } from "../../utils/util-firebase";
import { signOut } from "firebase/auth";
import { FormEvent, useState } from "react";

export default function useSidebar() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryStringForSearchTravelData = (
    e: FormEvent,
    onClose: () => void
  ) => {
    e.preventDefault();
    if (formInput.trim() !== "") {
      searchParams.set("search", formInput);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }

    return onClose();
  };

  const signOutAndMoveToSignIn = () => {
    signOut(firebaseAuth);
    return navigate("/users/signin");
  };
  return {
    formInput,
    setFormInput,
    setQueryStringForSearchTravelData,
    signOutAndMoveToSignIn,
  };
}
