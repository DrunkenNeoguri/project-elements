import { ThreeDotsIcon } from "../../assets/icons/icons";

type CategoryPropType = {
  name: string;
  color: string;
  state?: "custom" | "read";
};

export default function Category(props: CategoryPropType) {
  const { name, color, state = "read" } = props;

  const categoryStyle = {
    mainColor: "bg-paletteColor" + color,
    subColor: "bg-paletteSubColor" + color,
    state: state === "custom" ? "" : "mr-3",
  };
  return (
    <div
      className={
        "flex justify-start items-center w-full h-11 pl-3 py-[10px] rounded " +
        categoryStyle.mainColor
      }
    >
      <span className="font-bold18 text-white ">{name}</span>

      <div className={"flex ml-auto " + categoryStyle.state}>
        <div
          className={
            "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " + categoryStyle.subColor
          }
        />
        <div
          className={
            "ml-auto mr-3 skew-x-[-16deg] w-2 h-11 " + categoryStyle.subColor
          }
        />
      </div>

      {state === "custom" && (
        <button
          type="button"
          className="w-7 h-7 rounded mr-2 bg-transparent flex justify-center items-center"
        >
          <ThreeDotsIcon />
        </button>
      )}
    </div>
  );
}
