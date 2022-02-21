import React from "react";


const Hero: React.FC = ({ children }) => (
    <React.Fragment>
        <div className="ol p-5 pt-0 relative t-0 overflow-y-hidden 
                        flex flex-row items-start justify-center w-full  h-full lg:h-screen
                        lg:bg-white  lg:w-full  lg:pt-0">

            <img className="absolute t-0 left-0 h-full lg:h-vm-100 lg:left-auto" src="/assets/images/hero.jpeg" alt="" />

            <div className=" z-50 top-0 left-0 flex flex-col items-center justify-start font-sans min-h-96  lg:bg-hero lg:bg-cover">
                <div>
                    <img className="w-52" src="/assets/images/getanicki_logo_transparent.png" alt="" />
                </div>
                <div className="ol flex flex-col divide-y-2 sm:divide-y-2 md:divide-x md:divide-y-0  lg:divide-y-0 lg:divide-x md:flex-row lg:flex-row">
                    <span className="p-2 text-4xl font-bold text-center uppercase text-blue-800 lg:mx-auto lg:w-full lg:text-5xl lg:text-gray-100">
                        Local
                    </span>
                    <span className="p-2 text-4xl font-bold text-center uppercase text-blue-800 lg:mx-auto lg:w-full lg:text-5xl lg:text-gray-100">
                        Reliable
                    </span>
                    <span className="p-2 text-4xl font-bold text-center uppercase text-blue-800 lg:mx-auto lg:w-full lg:text-5xl lg:text-gray-100">
                        Delivery
                    </span>
                </div>
                <div>
                    <p className="ol p-10  font-sans text-2xl leading-10 text-center text-white lg:text-white">
                        We pickup and deliver so you don't have to. Value your time and let us do the work.
                    </p>
                </div>
                <div className="ol relative flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                    {/* <button
                        className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
                    >
                        Apple
                    </button>
                    <button
                        className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
                    >
                        Android
                    </button> */}

                    <a className="flex" href="/download">
                        <img className="ol object-contain w-vh-md md:w-vh-md lg:w-md m-w-48 h-auto" src="/assets/images/google-play-store.webp" alt=""></img>
                    </a>

                    <a className="flex" href="/download">
                        <img className="ol object-contain w-vh-md md:w-vh-md lg:w-md m-w-48 h-auto" src="/assets/images/apple-app-store.svg" alt=""></img>
                    </a>

                </div>

            </div>
        </div>





    </React.Fragment>
);

export default Hero;