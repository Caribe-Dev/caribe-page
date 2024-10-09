import Image from "next/image";
import Link from "next/link";

/* Imports Principales*/
import { EventCard } from "@/components/EventCard/EventCard";
import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Community } from "@/components/Community";
import { Avatar } from "@/components/Avatar";
import { Sponsors } from "@/components/Sponsors";

import allCommunities from "@/all-communities";
import allOrganizers from "@/all-organizers";
import allSponsors from "@/all-sponsors";

/* Imports Secundarios */
import SunImage from '../../../public/images/sun.svg';
import CloudsImage from '../../../public/images/clouds.svg';
import HighWaveImage from '../../../public/images/high-wave.svg';
import SmallWaveImage from '../../../public/images/small-wave.svg';
import LeftPalmsImage from '../../../public/images/left-palms.svg';
import RightPalmsImage from '../../../public/images/right-palms.svg';
import LeftMountainImage from '../../../public/images/left-mountain.svg';
import RightMountainImage from '../../../public/images/right-mountain.svg';
import { MdPlace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";
import ReflectedSunImage from "/public/images/reflected-sun.svg";
import ReflectedClouldsImage from "/public/images/reflected-cloulds.svg";
import GreenBlockImage from "/public/images/green-block.svg";

const { communities } = allCommunities;
const { organizers } = allOrganizers;
const { sponsors } = allSponsors;

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const HacktoberFest = ({ events = [] }) => {
  const hasEvents = Boolean(events.length)

  return (
    <>
      <Seo
        title='Caribe Dev | Hacktober Fest'
        description='Caribe Dev, la comunidad para los desarrolladores del Caribe Colombiano.'
        image={`${DOMAIN}/images/caribe-dev-hero.png`} />
      <section className="min-h-[75vh] md:min-h-screen bg-primary-hero relative">
        <div className="hidden md:flex absolute justify-center top-[30%] md:top-0 left-0 right-0 w-full">
          <CloudsImage className="w-[100%]" />
        </div>
        <div className="absolute flex justify-center top-[30%] md:top-10% left-0 right-0 w-full">
          <CloudsImage className="w-[100%]" />
        </div>
        <div className="absolute flex justify-center bottom-0 left-0 right-0 w-full">
          <HighWaveImage className="w-[100%] h-[130px] md:h-auto" />
        </div>
        <div className="absolute flex justify-center bottom-0 left-0 right-0 w-full">
          <SmallWaveImage className="w-[100%] h-[120px] md:h-auto" />
        </div>
        <div className="absolute flex justify-center bottom-0 left-0 right-0 w-full">
          <SunImage className="w-[80%] md:w-[50%]" />
        </div>
        <div className="absolute flex bottom-0 left-0 right-0 w-full">
          <LeftMountainImage className="w-[50%] md:w-[40%]" />
        </div>
        <div className="absolute flex justify-end bottom-0 left-0 right-0 w-full">
          <RightMountainImage className="w-[50%] md:w-[52%]" />
        </div>
        <div className="absolute flex justify-start -bottom-[20%] left-0 right-0 w-full">
          <LeftPalmsImage className="w-[30%] z-[1] md:w-[22%]" />
        </div>
        <div className="absolute flex justify-end -bottom-[20%] left-0 right-0 w-full">
          <RightPalmsImage className="w-[25%] z-[1] md:w-[22%]" />
        </div>
        <Layout className="flex items-center flex-col z-1 relative pt-[100px] md:pt-[140px]">

          <h1 className="text-tertiary text-center text-[40px] md:text-[100px] max-w-[800px] mt-5 md:mt-10 leading-[95%]">HacktoberFest®</h1>
          <h2 className="text-[#FFC175] text-center text-[40px] md:text-[20px] max-w-[800px] mt-5 md:mt-1 leading-[95%]">
            Presentado por <a className="text-[#FFC175] text-center text-[40px] md:text-[20px] max-w-[800px] mt-5 md:mt-1 leading-[95%]" href="https://www.avvy.co/" target="_blank">Avvy</a>, <a className="text-[#FFC175] text-center text-[40px] md:text-[20px] max-w-[800px] mt-5 md:mt-1 leading-[95%]" href="https://www.feanware.com" target="_blank">Feanware</a> y <a className="text-[#FFC175] text-center text-[40px] md:text-[20px] max-w-[800px] mt-5 md:mt-1 leading-[95%]" href="https://fundacioncodigoabierto.com/" target="_blank">Código Abierto</a>
          </h2>
          <p className="mt-[25px] text-[25px] text-tertiary text-center max-w-xl">¡Únete a este evento global y contribuye a proyectos de <u>Código Abierto</u> internacionales y locales!</p>
          <br></br>
          <br></br>
          <article className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2">
            <h4 className="font-bold">HacktoberFest 2024 Barranquilla</h4>
            <br></br>
            <div className="flex items-center gap-2 w-full">
              <MdPlace className='text-secondary' />
              <span className='truncate flex-1' title="Barranquilla">Universidad del Norte</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className='text-secondary' />
              <span className="capitalize">Octubre 26, 2024 - 8:30 AM</span>
            </div>
            <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
              target="_blank"
              rel="noreferrer">
              <FiArrowUpLeft className='text-2xl' />
              <span>
                Ver evento
              </span>
            </Link>
          </article>
          <br></br>
          <br></br>
        </Layout>
      </section>
      <section
        id='communities'
        className='bg-secondary-hero relative -mt-[20px] md:-mt-[34px] pb-[30px]'
      >
        <div className='absolute flex justify-center top-0 left-0 right-0 w-full'>
          <ReflectedSunImage className='w-[76%] md:w-[49%]' />
        </div>
        <div className='md:flex absolute justify-center md:top-0 left-0 right-0 w-full'>
          <ReflectedClouldsImage className='w-[100%] z-0' />
        </div>
        
        <Layout className='relative md:pt-16'>
        <h2 id='organizers' className='text-[35px] md:text-[60px] mt-20 text-tertiary'>
            Sponsors
          </h2>
          <section className="flex flex-wrap justify-center items-center pt-[50px]">
            {sponsors.map((sponsor) => <Sponsors key={sponsor.website} {...sponsor} />)}
          </section>
          <h2 id='organizers' className='text-[35px] md:text-[45px] mt-20 text-tertiary'>
            ¿Qué es HacktoberFest?
          </h2>
          <p className="text-tertiary font-medium mt-[20px] text-[30px] md:text-[23px] max-w-[1000px] w-full">
            Es un evento organizado por Avvy, Feanware y Fundación Código Abierto con diferentes aliados alrededor del mundo para que los amantes de la tecnología conozcamos y aportemos al código abierto. <br></br> <br></br>
            Este año IEEE Student Branch Universidad del Norte e Innova se alían con estos grandes para así traerles <span className="text-[#FFC175]">HacktoberFest® Barranquilla</span>, la idea de este evento es difundir la importancia del Open Source en el mundo de la programación.<br></br><br></br>
            La dinamica es simple, entre más Pull Request hagas a repositorios de código abierto, más premios puedes ganar, HacktoberFest Global estará dando insignias digitales este año, mientras que aquí en Barranquilla podrás llevarte Swag local, reconocimientos y nuevos amigos mientras ganas experiencia en programación. <br></br>
          </p>
          <div className='flex flex-wrap justify-center items-center pt-[50px]'>
            <section className="flex flex-wrap justify-center gap-4 pt-6 md:pt-0">

            </section>
          </div>
          <h2 id='organizers' className='text-[35px] md:text-[45px] mt-20 text-tertiary'>
            Repositorios HacktoberFest®
          </h2>
          <div className='flex flex-wrap justify-center items-center pt-[50px]'>
            <div className="my-8 z-30">
              <h3 className="text-[#f98a65] font-extrabold text-2xl mt-1 mb-1 text-center italic">Sin repositorios por el momento.</h3>
            </div>
            {/* <article id="repo01" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article>
            <article id="repo02" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2 mx-4">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article>
            <article id="repo03" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article>
            <article id="repo04" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2 mx-4">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article>
            <article id="repo05" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article>
            <article id="repo06" className="bg-tertiary max-w-xs w-full p-4 rounded-lg gap-2 flex flex-col items-start my-2 mx-4">
              <h4 className="font-bold">caribe-hackathon-repo</h4>
              <h4 className="md:text-[16px] text-dark">💻 Descripción breve del repositorio</h4>
              <br></br>
              <Link className='flex items-center justify-start text-secondary hover:text-secondary/60 transition-all font-bold' href="https://www.eventbrite.co/e/hacktoberfest-2024-barranquilla-tickets-1037869705227?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer">
                <FiArrowUpLeft className='text-2xl' />
                <span>
                  Ver repositorio
                </span>
              </Link>
            </article> */}
          </div>
        </Layout>
      </section>
    </>
  );
}

export default HacktoberFest;