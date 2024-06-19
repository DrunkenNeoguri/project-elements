export function RoundDot() {
  return (
    <div className="my-[100px] mx-auto text-[25px] w-6 h-6 rounded-[50%] relative -indent-96 animate-roundSpin translate-z-0" />
  );
}

export function Bar() {
  return (
    <div className="animate-bar bg-white w-4 h-16 text-white -indent-96 my-[88px] mx-auto relative text-[11px] translate-z-0 z-20 delay-[-0.16s] before:bg-white before:animate-bar before:w-4 before:h-16 before:absolute before:top-0 before:content-[''] before:left-[-6px] before:delay-[-0.32s] after:bg-white after:animate-bar after:w-4 after:h-16 after:absolute after:top-0 after:content-[''] after:left-[6px]" />
  );
}
