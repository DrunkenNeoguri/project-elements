import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHeader() {
  const [openState, setOpenState] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const moveToCreateList = () => {
    return navigate("/lists/create?step=1");
  };

  const openSideBar = () => {
    document.getElementById("root")!.style.overflow = "hidden";
    return setOpenState(true);
  };

  const closeSideBar = () => {
    document.getElementById("root")!.style.overflow = "scroll";
    return setOpenState(false);
  };

  return {
    openState,
    openSideBar,
    closeSideBar,
    moveToCreateList,
    containerRef,
  };
}
