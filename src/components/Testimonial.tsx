import React from "react";

type TestimonialProps = {
    text: string
    rating: number
};

/**
 * This represent a single testimonial card with a text description and 
 * customer rating
 * 
 * @param param
 * @returns 
 */
const Testimonial: React.FC<TestimonialProps> = ({ children, text, rating }) => (
    <React.Fragment>
        <div className="testimonial p-5 flex flex-col items-center justify-start w-full mx-1.5 lg:w-96">
            <p className="description italic">
                {text}
            </p>
            <ul className="mt-5 flex flex-row items-center  w-full">
                {
                    Array.from(Array(rating).keys()).map((el, index) => {
                        return (
                            <li key={index}><img className="w-10 bg-white" src="/assets/images/star.png" alt=""></img></li>
                        )
                    })
                }
            </ul>
        </div>

    </React.Fragment>
);

export default Testimonial;

//font-sans text-2xl leading-10 italic text-left text-black-500
