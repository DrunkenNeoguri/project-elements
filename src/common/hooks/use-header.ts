import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "../types/header";
import { throttle } from "lodash-es";
import { isHeaderScrollOverArea } from "../policies/header";

export default function useHeader() {
  const [openState, setOpenState] = useState(false);
  const [activeShadowState, setActiveShadowState] = useState(false);
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

  useEffect(() => {
    const toggleActivateHeaderShadow = () => {
      return setActiveShadowState(isHeaderScrollOverArea(window.scrollY));
    };

    window.addEventListener(
      "scroll",
      throttle(toggleActivateHeaderShadow, 500)
    );
    return () =>
      window.removeEventListener(
        "scroll",
        throttle(toggleActivateHeaderShadow, 500)
      );
  }, []);

  return {
    activeShadowState,
    setActiveShadowState,
    openState,
    activeLeftButton,
    activeRightButton,
    closeSideBar,
  };
}
