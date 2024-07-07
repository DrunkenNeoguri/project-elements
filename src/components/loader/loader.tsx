export function RoundDot() {
  return (
    <div className="my-[100px] mx-auto text-[25px] w-6 h-6 rounded-[50%] relative -indent-96 animate-roundSpin translate-z-0" />
  );
}

export function Bar() {
  return (
    <div className="animate-[scaleHeight_1s_infinite_ease-in-out_-0.16s] text-primary relative font-[11px] bg-primary w-4 h-16 before:content-[''] before:absolute before:top-0 before:left-[-32px] before:bg-primary before:w-4 before:h-16 before:animate-[scaleHeight_1s_infinite_ease-in-out_-0.32s] after:content-[''] after:absolute after:top-0 after:left-[32px] after:bg-primary after:w-4 after:h-16 after:animate-scaleHeight" />
  );
}
