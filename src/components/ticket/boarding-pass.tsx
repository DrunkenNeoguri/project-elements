'use client';
import { TravelBasicType } from '../../types/travel.types';
import { ForeignIcon } from '../../assets/icons/icons';
import { TicketTemplate } from './ticket-template';

export default function BoardingPass(props: TravelBasicType) {
  return (
    <TicketTemplate
      {...props}
      templateConfig={{
        type: 'foreign',
        backgroundColor: 'bg-primary',
        icon: <ForeignIcon width={24} height={24} />,
        label: 'CHECKINBAG AIRLINE',
        labelStyle: 'text-[8px] leading-[12px]',
        ticketType: 'BOARDING PASS',
        ticketAlign: 'text-center',
      }}
    />
  );
}
