import { useEffect, useRef, useState } from "react";

export function useMain() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [componentWidth, setComponentWidth] = useState(0);

  // 아래의 방법으로 컴포넌트의 너비를 구할 수 있음.
  useEffect(() => {
    if (componentRef.current !== null) {
      setComponentWidth(componentRef.current?.offsetWidth);
    }
  }, []);
  return { componentRef, componentWidth, setComponentWidth };
}
