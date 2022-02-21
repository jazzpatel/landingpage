import React from "react";


const HowTo: React.FC = ({ children }) => (
    <React.Fragment>
        {/* <div className="flex overflow-hidden flex-row items-start justify-center w-screen h-screen  pt-4 mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0"> */}
        <div className="p-0 relative top-10 overflow-y-hidden 
                        flex flex-col lg:flex-row w-64 items-start justify-between lg:w-full 
                        lg:bg-white  lg:pt-0 ">

            <div style={{color: 'red'}}>
                <img className="flex  lg:left-auto" src="/assets/images/step1.png" alt="" />
            </div>
            <div>
                <img className="flex  lg:left-auto" src="/assets/images/step2.png" alt="" />
            </div>
            <div>
                <img className="flex lg:left-auto" src="/assets/images/step3.png" alt="" />
            </div>

        </div>


    </React.Fragment>
);

export default HowTo;




