import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FormInput from "../Inputs/FormInput";

const sucursales = [
    { name: 'General Pico', url: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.480591243464!2d-63.760555599999996!3d-35.66516670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzU0LjYiUyA2M8KwNDUnMzguMCJX!5e0!3m2!1ses!2sar!4v1716828693068!5m2!1ses!2sar' },
    { name: 'Mar del Plata', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.957702961075!2d-57.577296999999994!3d-37.978116400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d915200904f5%3A0x9b514aadda08fa90!2sCHS%2C%2011%20de%20Septiembre%205957%2C%20B7604%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716828727814!5m2!1ses!2sar' },
    { name: 'El talar (GBA)', url: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3288.9371309345483!2d-58.6646828!3d-34.4791191!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sar!4v1716828741260!5m2!1ses!2sarS' },

];

export default function Contact() {
    const [selectedSucursal, setSelectedSucursal] = useState(sucursales[0].url);

    const handleSucursalChange = (event) => {
        const selected = sucursales.find(sucursal => sucursal.name === event.target.value);
        setSelectedSucursal(selected.url);
    };


    return (
        <section id="contacto">
            <div className="bg-base flex flex-col items-center md:px-12 md:pt-16">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="hidden w-1/2 md:w-2/5 rounded-lg md:flex justify-center items-center md:items-start md:justify-start pt-10 md:pt-0">
                        <img width="80%" height="auto" src="/rodamiento.png" />
                    </div>
                    <div className="w-full md:w-4/5 flex flex-col gap-4 relative">
                        <h2 className="2xl:text-6xl md:text-5xl text-3xl text-secondary text-center text-balance md:text-left font-bold w-full 2xl:leading-tight md:leading-tight leading-tight pt-10 md:pt-3">
                            Comunicate con nosotros
                        </h2>
                        <form className="w-full md:w-4/5 space-y-2 px-8 md:px-0">
                            <FormInput type="text" placeholder="Nombre y Apellido" />
                            <FormInput type="email" placeholder="E-mail" />
                            <FormInput type="text" placeholder="Teléfono (opcional)" />
                            <div>
                                <label className='font-semibold'>Mensaje</label>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-secondary"
                                ></textarea>
                            </div>
                        </form>
                        <div className="w-auto absolute bottom-4 right-10">
                            <button className="bg-secondary hover:scale-105 transition-transform text-white py-3 px-6 font-bold shadow-md rounded active:bg-sky-500"><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </div>
                </div>




                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 w-full mb-8 md:mt-24 mt-8">
                        <h1 className="text-xl md:text-5xl font-bold text-gray-700">Encontranos en: </h1>
                        <div className="relative inline-block">
                            <select
                                className="focus:bg-white bg-gray-100/70 py-3 px-16 border border-secondary text-secondary rounded outline-secondary appearance-none"
                                onChange={handleSucursalChange}
                            >
                                {sucursales.map((sucursal) => (
                                    <option key={sucursal.name} value={sucursal.name}>
                                        {sucursal.name}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-2 md:right-6 flex items-center px-2 pointer-events-none">
                                <FontAwesomeIcon icon={faChevronDown} className="text-secondary" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-96 md:h-[400px]">
                        <iframe
                            src={selectedSucursal}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

