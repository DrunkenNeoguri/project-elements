import { MinusIcon, PlusIcon } from "../../assets/icons/icons";

type CounterPropType = {
  id: string;
  value: number;
  colorTheme: "black" | "white";
  increaseFunc: () => void;
  decreaseFunc: () => void;
  measure?: string;
  buttonStyles?: string;
  viewStyles?: string;
};

export default function Counter(props: CounterPropType) {
  const {
    id,
    value,
    colorTheme = "black",
    measure,
    increaseFunc,
    decreaseFunc,
    buttonStyles,
    viewStyles,
  } = props;

  const spanTheme = {
    black: "border-black ",
    white: "border-white ",
  };

  const handleIncrease = () => {
    increaseFunc();
  };

  const handleDecrease = () => {
    decreaseFunc();
  };

  return (
    <div className="flex mt-1">
      <button
        type="button"
        onClick={handleDecrease}
        className={
          "bg-primary flex justify-center items-center font-medium12 text-primary border-none outline-none p-0 m-0 w-full max-w-[60px] h-11 rounded-l cursor-pointer drop-shadow-[1px_0_1px_#00000064] " +
          buttonStyles
        }
      >
        <MinusIcon />
      </button>
      <span
        id={id}
        className={
          "bg-invalidLight flex justify-center items-center font-medium16 text-black w-full m-0 outline-none box-border border " +
          spanTheme[colorTheme] +
          viewStyles
        }
      >
        {`${value}${measure ?? ""}`}
      </span>
      <button
        type="button"
        onClick={handleIncrease}
        className={
          "bg-primary flex justify-center items-center font-medium12 text-primary border-none outline-none p-0 m-0 w-full max-w-[60px] h-11 rounded-r cursor-pointer drop-shadow-[-1px_0_1px_#00000064] " +
          buttonStyles
        }
      >
        <PlusIcon />
      </button>
    </div>
  );
}
