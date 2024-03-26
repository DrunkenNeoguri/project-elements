import { StCounter } from "../styles/counter";
import { CounterPropType } from "../types/counter";
import PlusIcon from "../../assets/icons/svg-counter-plus-icon.svg?react";
import MinusIcon from "../../assets/icons/svg-counter-minus-icon.svg?react";

export default function Counter(props: CounterPropType) {
  const { id, title, measure, value, colorTheme, increaseFunc, decreaseFunc } =
    props;

  return (
    <StCounter.Wrapper>
      <StCounter.Label htmlFor={id} $colorTheme={colorTheme}>
        {title}
      </StCounter.Label>
      <StCounter.Box>
        <StCounter.Button
          type="button"
          $direction="left"
          onClick={decreaseFunc}
        >
          <MinusIcon />
        </StCounter.Button>
        <StCounter.Viewer id={id} $colorTheme={colorTheme}>
          {`${value}${measure ?? ""}`}
        </StCounter.Viewer>
        <StCounter.Button
          type="button"
          $direction="right"
          onClick={increaseFunc}
        >
          <PlusIcon />
        </StCounter.Button>
      </StCounter.Box>
    </StCounter.Wrapper>
  );
}
