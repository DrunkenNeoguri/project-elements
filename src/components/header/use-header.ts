import { useEffect, useState } from "react";
import { throttle } from "lodash-es";
import { usePathname } from "next/navigation";

export default function useHeader() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // ! Remind: 준비물 페이지에서도 사이즈에 따라 다르므로 이 상태로 정말 괜찮은지 생각해봐야함...
  const currentPath = usePathname();
  const isMainPath =
    currentPath === "/main" || currentPath === "/" ? false : true;

  const [shadow, setShadow] = useState(isMainPath);

  // const activeRightButton = (headerType: HeaderType) => {
  //   switch (headerType) {
  //     case "error":
  //       return;
  //     default:
  //       document.body.style.paddingRight = `${
  //         window.innerWidth - document.body.offsetWidth
  //       }px`;
  //       document.body.style.overflowY = "hidden";
  //       return setOpenState(true);
  //   }
  // };

  // const closeSideBar = () => {
  //   document.body.style.paddingRight = "0px";
  //   document.body.style.overflowY = "auto";
  //   return setOpenState(false);
  // };

  useEffect(() => {
    {
      const toggleActivateHeaderShadow = () => {
        return setShadow(window.scrollY > 164 === true);
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
    }
  }, [currentPath]);

  return {
    shadow,
  };
}
