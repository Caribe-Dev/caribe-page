import Link from 'next/link';
import { MdPlace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";

import { getLinkFromText, formatDefaultDate } from '@/utils';

export const EventCard = ({ event }) => {
  const { title, location, startAt } = event || {};

  const link = getLinkFromText(event.description);
  const date = startAt?.dateTime ? formatDefaultDate(new Date(startAt?.dateTime)) : ''
  const isOnline = location?.includes('http')
  const locationText = isOnline ? 'Online' : location;

  return (
    <article className="flex flex-col items-start w-full max-w-xs gap-2 p-4 my-2 rounded-lg shadow-md bg-tertiary">
      <h4 className="font-bold">{title}</h4>
      {locationText ? (
          <div className="flex items-center w-full gap-2">
            <MdPlace className='text-secondary' />
            <span className='flex-1 truncate' title={locationText}>{locationText}</span>
          </div>
        ) :
        <BlankSpace />
      }
      {
        date ? (
          <div className="flex items-center gap-2">
            <FaCalendar className='text-secondary' />
            <span className="capitalize">{date}</span>
          </div>
        ) :
        <BlankSpace />
      }
      {link && (
        <Link className='flex items-center justify-start font-bold transition-all text-secondary hover:text-secondary/60' href={link}
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
