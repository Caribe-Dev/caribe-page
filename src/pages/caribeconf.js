import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { useState } from "react";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
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
                <Layout className="flex items-center flex-col z-1 relative pt-[100px] md:pt-[140px]">
                    <h2 className="flex justify-center text-xl md:text-[48px] gap-3 text-tertiary font-bold">
                        <span>🇨🇴 Barranquilla, Colombia</span>
                    </h2>
                    <h1 className="text-tertiary text-center text-[40px] md:text-[100px] max-w-[800px] mt-5 md:mt-10 leading-[95%]">CaribeConf 2025</h1>
                    <p className="mt-[20px] text-[25px] text-tertiary text-center max-w-xl">Nuestra primera conferencia con speakers nacionales e internacionales. Inscríbete para ser el primero en enterarte de los avances de nuestra primera conf.</p>
                    <div className='flex justify-center pt-5'>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <form onSubmit={onSubmit}>
                            <input type="email" name="email" placeholder="Email..."
                                className="bg-background border text-tertiary text-[20px] text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <button
                                className='text-tertiary text-[20px] justify-center items-center rounded-2xl bg-secondary px-[60px] py-[10px] font-bold hover:opacity-90'
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                </Layout>
            </section>
        </>
    )
};

export default home
