import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import SunImage from '../../public/images/sun.svg';
import CloudsImage from '../../public/images/clouds.svg';
import HighWaveImage from '../../public/images/high-wave.svg';
import SmallWaveImage from '../../public/images/small-wave.svg';
import LeftPalmsImage from '../../public/images/left-palms.svg';
import RightPalmsImage from '../../public/images/right-palms.svg';
import LeftMountainImage from '../../public/images/left-mountain.svg';
import RightMountainImage from '../../public/images/right-mountain.svg';

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const home = () => {
    const [isSend, SetIsSend] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            await fetch('/api/newsletter-conf', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        } catch (error) {
            setError(error.message);
            console.error(error);
            SetIsSend(false);
        } finally {
            SetIsSend(true);
            setIsLoading(false);

        }
    }

    return (
        <>
            <Seo
                title='Caribe Dev'
                description='Caribe Dev, la comunidad para los desarrolladores del Caribe Colombiano.'
                image={`${DOMAIN}/images/caribe-dev-hero.png`}
            />
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
                <div className="absolute flex justify-start -bottom-[20%] left-0 right-0 w-full z-0">
                    <LeftPalmsImage className="w-[30%] z-[1] md:w-[22%]" />
                </div>
                <div className="absolute flex justify-end -bottom-[20%] left-0 right-0 w-full z-0">
                    <RightPalmsImage className="w-[25%] z-[1] md:w-[22%]" />
                </div>
                <Layout className="flex items-center flex-col z-1 relative pt-[100px] md:pt-[140px]">
                    <h2 className="flex justify-center text-xl md:text-[48px] gap-3 text-tertiary font-bold">
                        <span>🇨🇴 Barranquilla, Colombia</span>
                    </h2>
                    <h1 className="text-tertiary text-center text-[40px] md:text-[100px] max-w-[800px] mt-5 md:mt-10 leading-[95%]">CaribeConf 2025</h1>
                    <p className="mt-[20px] text-[25px] text-tertiary text-center max-w-xl">Nuestra primera conferencia con speakers nacionales e internacionales. Inscríbete para ser el primero en enterarte de los avances de nuestra primera conf.</p>
                    <div className='flex justify-center pt-5 mb-5'>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <form onSubmit={onSubmit}>
                            <div className="flex bg-tertiary rounded items-center border-b border-teal-500 py-2 px-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="email" name="email" />
                                <button className="flex-shrink-0 text-tertiary bg-secondary text-white py-1 px-2 rounded" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                    {!isSend || <div className="bg-secondary md:block border-t-4 border-teal-500 rounded-b text-gray px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                            <div>
                                <p className="font-bold">¡Te estaremos avisando!</p>
                                <p className="text-sm">Cualquier novedad respecto a nuestra conf te estaremos informando por correo.</p>
                            </div>
                        </div>
                    </div>}
                </Layout>
            </section>
        </>
    )
};

export default home
