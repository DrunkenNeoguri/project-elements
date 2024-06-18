import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "./header.types";
import { throttle } from "lodash-es";
import { isHeaderScrollOverArea } from "../../common/policies/header";

export default function useHeader() {
  const [openState, setOpenState] = useState(false);
  const [activeShadowState, setActiveShadowState] = useState(false);
  const navigate = useNavigate();

  const activeLeftButton = (headerType: HeaderType) => {
    switch (headerType) {
      case "error":
        return navigate(-1);
      default:
        return navigate("/lists/create");
    }
  };

  const activeRightButton = (headerType: HeaderType) => {
    switch (headerType) {
      case "error":
        return;
      default:
        document.body.style.paddingRight = `${
          window.innerWidth - document.body.offsetWidth
        }px`;
        document.body.style.overflowY = "hidden";
        return setOpenState(true);
    }
  };

  const closeSideBar = () => {
    document.body.style.paddingRight = "0px";
    document.body.style.overflowY = "auto";
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
