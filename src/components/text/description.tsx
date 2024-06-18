import { hasContextInDescription } from "./description.rules";
import { DescriptionPropType } from "./description.types";

export default function Description(props: DescriptionPropType) {
  const { title, context, color } = props;

  return (
    <div className="flex flex-col gap-[10px] box-border mt-6 mb-2 px-[15px] font-gmarketSans">
      <h2 className="font-bold24 text-black font-gmarketSans">{title}</h2>
      {hasContextInDescription(context) && (
        <span className="font-medium12 text-black font-gmarketSans">
          {context}
        </span>
      )}
    </div>
  );
}
