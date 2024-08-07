import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Slider from "../Slider";

export default function Home() {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <>
            <div style={{ backgroundImage: `url(/fondos/fondo-home.webp)` }} className="h-screen flex flex-col lg:flex-row lg:gap-0 items-center gap-16 lg:justify-between px-8 lg:p-24 bg-cover" id="inicio">
                <div className="w-full lg:w-1/2 pt-32 sm:pt-0">
                    <h1 className="text-white text-3xl lg:text-5xl leading-snug lg:leading-snug 2xl:leading-snug lg:mt-0">
                        Somos <strong>mayorista</strong> de <strong>autopartes</strong> orientados a <strong>casas de repuestos automotor, agro e industria</strong>
                    </h1>
                </div>
                <div className="w-3/5 lg:mt-0 lg:w-1/2">
                    <Slider />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-6 lg:p-16">
                <span className="w-full flex items-center justify-center my-3">
                    <h2 className="text-center text-primary text-xl lg:text-5xl leading-snug 2xl:leading-snug lg:leading-snug lg:px-16 text-balance">
                        Nos enfocamos fuertemente en el <strong>servicio</strong>, <strong>calidad</strong> y <strong>disponibilidad</strong> de nuestros productos y en la contínua <strong>innovación</strong>.
                    </h2>
                </span>
                <div className="bg-secondary w-full lg:w-11/12 rounded-xl flex flex-col lg:flex-row p-8 lg:p-16 gap-8 lg:gap-20 2xl:gap-24 justify-center my-8 lg:mt-16 mb-12">
                    <div className="flex flex-col items-center" ref={ref}>
                        {inView && (
                            <>
                                <span className="text-5xl 2xl:text-8xl md:text-7xl font-extrabold text-white">
                                    <CountUp end={40} duration={3.5} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl">Años de Experiencia</span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        {inView && (
                            <>
                                <span className="text-5xl 2xl:text-8xl md:text-7xl font-extrabold text-white">
                                    <CountUp end={800} duration={3.5} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl text-center text-balance">Pedidos Entregados por día</span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        {inView && (
                            <>
                                <span className="text-5xl 2xl:text-8xl md:text-7xl font-extrabold text-white">
                                    <CountUp end={4100} duration={3.5} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl">Localidades Alcanzadas</span>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}
