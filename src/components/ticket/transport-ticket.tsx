import { DomesticIcon } from "../../assets/icons/icons";
import { TravelBasicType } from "../../types/travel.types";
import { TicketTemplate } from "./ticket-template";

export default function TransportTicket(props: TravelBasicType) {
  return (
    <TicketTemplate
      {...props}
      templateConfig={{
        type: "domestic",
        backgroundColor: "bg-secondary",
        icon: <DomesticIcon width={22} height={24} />,
        label: "CHECKINBAG TRANSPORT",
        labelStyle: "text-[7px] leading-[11px]",
        ticketType: "TICKET",
        ticketAlign: "text-left",
      }}
    />
  );
}
