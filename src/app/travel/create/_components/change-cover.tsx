import { ReactNode } from "react";

export default function ChangeCover({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full opacity-0 opacity1-100 animate-fadeout  animate-fadein">
      {children}
    </div>
  );
}
