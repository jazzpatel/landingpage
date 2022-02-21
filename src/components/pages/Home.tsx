import React from "react";
import HeroSegment from "./segments/HeroSegment";
import HowToSegment from "./segments/HowToSegment";
import OurStorySegment from "./segments/OurStorySegment";
import TestimonialSegment from "./segments/TestimonialSegment";
import BusinessSegment from "./segments/BusinessSegment";
import FooterSegment from "./segments/FooterSegment";

type HomeProps = {
    userName: string;
};
// const Home: React.FC<HomeProps> = ({ children, userName }) => (
//     <React.Fragment>
//         <div className="flex flex-col items-center justify-start font-sans min-h-96 lg:bg-hero lg:bg-cover">
//             {/* <Header /> */}
//             <HeroSegment />
//             <HowToSegment />
//             <TestimonialSegment />
//             <OurStorySegment />
//             {/* <React.Fragment>
//                 <BeAnickiSegment />
//                 <PartnerSegment />
//                 <CommunityReachSegment />
//             </React.Fragment>
//             <CompanyInfoSegment /> */}
//             {children}
//         </div>
//     </React.Fragment>
// );

const Home: React.FC<HomeProps> = ({ children, userName }) => (
    <React.Fragment>
        
            <div className="flex flex-col items-center justify-start lg:bg-cover">
        
                    <HeroSegment />
           
                    <HowToSegment />

                    <TestimonialSegment />

                    <BusinessSegment />

                    <OurStorySegment />

                    <FooterSegment />
                
            </div>
       
    </React.Fragment>
);

export default Home;