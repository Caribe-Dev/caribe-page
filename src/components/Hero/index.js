import { Layout } from '@/components/Layout';

import { EventCard } from '../EventCard/EventCard';
import SunImage from '../../../public/images/sun.svg';
import CloudsImage from '../../../public/images/clouds.svg';
import HighWaveImage from '../../../public/images/high-wave.svg';
import SmallWaveImage from '../../../public/images/small-wave.svg';
import LeftPalmsImage from '../../../public/images/left-palms.svg';
import RightPalmsImage from '../../../public/images/right-palms.svg';
import LeftMountainImage from '../../../public/images/left-mountain.svg';
import RightMountainImage from '../../../public/images/right-mountain.svg';

export function Hero({ events = [] }) {
  const hasEvents = Boolean(events.length)

  return (
    <section className="min-h-[75vh] md:min-h-screen bg-primary-hero relative">
      <div className="hidden md:flex absolute justify-center top-[30%] md:top-0 left-0 right-0 w-full">
        <CloudsImage className="w-[100%]" />
      </div>
      <div className="absolute flex justify-center top-[30%] md:top-10% left-0 right-0 w-full">
        <CloudsImage className="w-[100%]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <HighWaveImage className="w-[100%] h-[130px] md:h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <SmallWaveImage className="w-[100%] h-[120px] md:h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <SunImage className="w-[80%] md:w-[50%]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex w-full">
        <LeftMountainImage className="w-[50%] md:w-[40%]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-end w-full">
        <RightMountainImage className="w-[50%] md:w-[52%]" />
      </div>
      <div className="absolute flex justify-start -bottom-[20%] left-0 right-0 w-full z-1">
        <LeftPalmsImage className="w-[30%] z-[1] md:w-[22%]" />
      </div>
      <div className="absolute flex justify-end -bottom-[20%] left-0 right-0 w-full z-1">
        <RightPalmsImage className="w-[25%] z-[1] md:w-[22%]" />
      </div>
      <Layout className="flex items-center flex-col z-1 relative pt-[100px] md:pt-[140px]">
        <h2 className="flex justify-center text-xl md:text-[48px] gap-3 text-tertiary font-bold">
          <span>🇨🇴 Barranquilla, Colombia</span>
        </h2>
        <h1 className="text-tertiary text-center text-[40px] md:text-[100px] max-w-[800px] mt-5 md:mt-10 leading-[95%]">CaribeDev</h1>
        <p className="mt-[20px] text-[25px] text-tertiary text-center max-w-xl">Conectamos talentos que impulsan el futuro digital, somos una comunidad de comunidades del Caribe Colombiano para el mundo.</p>
        {
          hasEvents ? (
            <div className="z-30 w-11/12 m-auto my-8 max-w-7xl md:w-full">
              <h3 className="mt-8 mb-2 text-3xl font-extrabold text-center">Próximos eventos</h3>
              <section className='flex flex-wrap justify-center w-full gap-2'>
                {events.map((event) => <EventCard key={event.id} event={event} />)}
              </section>
            </div>
          ) : (
            <div className="z-30 my-8">
              <h3 className="mt-8 mb-2 text-3xl font-extrabold text-center">Sin eventos por ahora</h3>
            </div>
          )
        }
      </Layout>
    </section>
  );
}
