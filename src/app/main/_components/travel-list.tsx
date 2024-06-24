import { TravelBasicInfoType } from "../../../types/template.types";
import TravelTicket from "./travel-ticket";

type TravelListPropsType = {
  title: string;
  lists: TravelBasicInfoType[];
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
          return <TravelTicket key={ticket.id} {...ticket} />;
        })}
      </div>
    </section>
  );
}
