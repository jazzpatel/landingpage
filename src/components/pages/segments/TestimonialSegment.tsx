import React from "react";
import Testimonial from "../../Testimonial";

const TestimonialSegment: React.FC = ({ children }) => (
    <React.Fragment>
        <div className="mx-10 my-5 top-10 overflow-y-hidden overflow-x-hidden
                        flex flex-col lg:flex-row w-full h-full items-center justify-around lg:w-screen 
                        lg:bg-white  lg:pt-0 ">
            <div>
                <Testimonial text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "} rating={5} />
            </div>
            {/* <div className="hidden lg:block"> */}
            <div>
                <Testimonial text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "} rating={4} />
            </div>

        </div>


    </React.Fragment>
);

export default TestimonialSegment;