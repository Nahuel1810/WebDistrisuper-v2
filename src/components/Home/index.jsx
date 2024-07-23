import React from "react";
import pico from "/gralpico.png"
import mdp from "/mdp.png"
export default function Home() {
    return (
        <>
            <div className="bg-blue-100 h-screen flex flex-row items-center justify-between p-24">
                <div className="w-1/2">
                    <h1 className="text-5xl 2xl:text-6xl leading-relaxed 2xl:leading-relaxed">Somos un <strong>mayorista</strong> de <strong>autopartes</strong> orientados a <strong>casas de repuestos automotor, agro e industria</strong></h1>
                </div>
                <div>
                    <div className="h-96 w-96 bg-gray-300"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-24">
                <span className="w-full flex items-center justify-center my-6">
                    <h2 className="text-5xl 2xl:text-6xl leading-relaxed 2xl:leading-relaxed text-center">Nos enfocamos fuertemente en el servicio, calidad y disponibilidad de nuestros productos y en la continua innovación.</h2>
                </span>
                <div className="bg-gray-600 w-10/12 rounded-xl flex flex-row p-20 gap-16 2xl:gap-48 justify-center my-16">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl 2xl:text-6xl font-extrabold text-white">40+</span>
                        <span className=" text-white mt-2 text-xl">Años de experiencia</span>
                    </div>
                    <div className="flex flex-col items-center ">
                        <span className="text-5xl 2xl:text-6xl font-extrabold text-white">400+</span>
                        <span className=" text-white mt-2 text-xl text-center">Pedidos entregados <br />cada día</span>
                    </div>
                    <div className="flex flex-col items-center ">
                        <span className="text-5xl 2xl:text-6xl font-extrabold text-white">4000+</span>
                        <span className=" text-white mt-2 text-xl">Localidades alcanzadas</span>
                    </div>
                </div>
                <div className="flex flex-row gap-20 m-24 items-center">
                    <div>
                        <img src={pico} />
                    </div>
                    <div>
                        <img src={mdp} />
                    </div>

                </div>
                <h3 className="font-extrabold text-gray-300 text-5xl 2xl:text-6xl py-16">NUESTROS PRODUCTOS</h3>
                <div>
                    <span></span>
                    <div className="flex flex-row gap-8">
                        <div className="h-96 w-96 bg-gray-300 rounded-lg"></div>
                        <div className="h-96 w-96 bg-gray-300 rounded-lg"></div>
                        <div className="h-96 w-96 bg-gray-300 rounded-lg"></div>
                    </div>
                    <span></span>
                </div>

            </div>
        </>
    );
}