import { DimdBackground, TransparentBackground } from "../styles/loader";
import { BarSpinner, DotSpinner } from "../styles/spinner";

export function DimdLoader() {
  return (
    <DimdBackground>
      <BarSpinner />
    </DimdBackground>
  );
}

export function TransparentLoader() {
  return (
    <TransparentBackground>
      <DotSpinner />
    </TransparentBackground>
  );
}
