import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "../types/header";

export default function useHeader() {
  const [openState, setOpenState] = useState(false);
  const navigate = useNavigate();

  const activeLeftButton = (headerType: HeaderType) => {
    switch (headerType) {
      case "error":
        return navigate(-1);
      default:
        return navigate("/lists/create?step=1");
    }
  };

  const activeRightButton = (headerType: HeaderType) => {
    switch (headerType) {
      case "error":
        return;
      default:
        document.getElementById("root")!.style.overflow = "hidden";
        return setOpenState(true);
    }
  };

  const closeSideBar = () => {
    document.getElementById("root")!.style.overflow = "scroll";
    return setOpenState(false);
  };

  return {
    openState,
    activeLeftButton,
    activeRightButton,
    closeSideBar,
  };
}
