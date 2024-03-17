import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { MdPlace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";


import { getLinkFromText } from '@/utils';

export const EventCard = ({ event }) => {

  const posibleLink = event?.link || getLinkFromText(event.description);
  const date = event?.date || format(new Date(event.scheduled_start_time), 'MMMM dd, yyyy - h:mm aa', { locale: es });
  const location = event?.place || event?.entity_metadata?.location;
  const isOnline = location?.includes('http')
  const locationText = isOnline ? 'Online' : location;
  const link = isOnline ? locationText : posibleLink;

  return (
    <article key={event.name} className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2">
      <h4 className="font-bold min-h-[54px]">{event.name}</h4>
      {locationText ? <div className="flex items-center gap-2">
        <MdPlace className='text-secondary' />
        <span>{locationText}</span>
      </div> : <BlankSpace />}
      {date ? <div className="flex items-center gap-2">
        <FaCalendar className='text-secondary' />
        <span className="capitalize">{date}</span>
      </div> : <BlankSpace />}
      {link && (
        <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href={link}
          target="_blank"
          rel="noreferrer">
          <FiArrowUpLeft className='text-2xl' />
          <span>
            Ver evento
          </span>
        </Link>
      )}
    </article>
  );
}

const BlankSpace = () => <div className="w-full h-7" />