import React from "react";


const Footer: React.FC = ({ children }) => (
    <React.Fragment>

        <div className="ol  mt-10 relative  overflow-y-hidden bg-black text-white
                        flex flex-col lg:flex-row w-full h-full items-left  lg:w-full 
                        lg:bg-black  lg:pt-0 ">


            {/* Display logo with copyright */}
            <img className="ol left  hidden w-48 lg:block  " src="/assets/images/getanicki_logo_transparent.png" alt="" />


            <div className="ol flex flex-col lg:flex-row grow align-center justify-between">
                <div className="ol flex flex-row align-center justify-evenly h-full w-full">
                    <div id="links" className="ol flex flex-col justify-evenly">
                        {/* Categorized columns of links */}
                        <div className="pb-4 text-gray-500 uppercase">Header</div>
                        <div>
                            <a href="/about-us">About Us</a>
                        </div>
                        <div>
                            <a href="/company">Company</a>
                        </div>
                        <div>
                            <a href="/careers">Career</a>
                        </div>

                    </div>
                    <div id="links2" className="ol flex flex-col justify-evenly">
                        {/* Categorized columns of links */}
                        <div>
                            <a href="/about-us">About Us2</a>
                        </div>
                        <div>
                            <a href="/company">Company2</a>
                        </div>
                        <div>
                            <a href="/careers">Career2</a>
                        </div>

                    </div>
                    <div id="links2" className="ol flex flex-col justify-evenly">
                        {/* Categorized columns of links */}
                        <div>
                            <a href="/about-us">About Us2</a>
                        </div>
                        <div>
                            <a href="/company">Company2</a>
                        </div>
                        <div>
                            <a href="/careers">Career2</a>
                        </div>

                    </div>
                </div>
                <div id="newsletter" className="ol">
                    {/* Text field to capture email to join newsletter */}
                    <form className="p-2">
                        <p>Join Our Newsletter</p>
                        <input className="w-80" type="text" placeholder="Enter email address"></input>
                        <input className="ol w-24 h-full border text-center uppercase bg-gray-500" type="submit" value="SUBMIT" />
                        <br />
                        <div className="p-5">
                            <img className="w-10 m-5 inline-block" src="/assets/images/facebook_icon.png" alt=""></img>
                            <img className="w-10 inline-block" src="/assets/images/instagram_icon.png" alt=""></img>
                        </div>

                    </form>

                </div>
            </div>


        </div>

        <div className="ol w-full h-full text-center">
            <p>Copyright &copy; 2022 GetANicki LLC.</p>
            <ul className=" divide-x">
                <li className="inline left mx-5"><a href="/allrights">All rights reserved</a></li>
                <li className="inline left mx-5"><a href="/privacy">Privacy rights and use</a></li>
                <li className="inline left mx-5"><a href="/terms">Terms and conditions</a></li>

            </ul>
        </div>




    </React.Fragment>
);

export default Footer;