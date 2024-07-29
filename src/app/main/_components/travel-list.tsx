import Ticket from "../../../components/ticket/ticket";
import { TravelBasicType } from "../../../types/travel.types";

type TravelListPropsType = {
  title: string;
  lists: TravelBasicType[];
};

export default function TravelList(props: TravelListPropsType) {
  const { title, lists } = props;
  return (
    <section className="flex flex-col gap-1 py-3 px-4 w-full box-border">
      <div className="flex justify-between items-center p-0 m-0">
        <h3 className="font-bold18 text-black m-0 p-0">{title}</h3>
      </div>

      <div className="flex flex-col gap-4">
        {lists?.map((ticket) => {
          return <Ticket key={ticket?.id + title} {...ticket} />;
        })}
      </div>
    </section>
  );
}
