import React from "react";


const OurStory: React.FC = ({ children }) => (
    <React.Fragment>

        <div className="p-0 pt-10 relative top-10 overflow-y-hidden 
                        flex flex-col lg:flex-col w-full h-full items-center justify-around lg:w-full 
                        lg:bg-white  lg:pt-0 ">
            <img src="/assets/images/ourstory.png" alt=""></img>
            <p style={{ fontFamily: 'Times' }} className="ol p-10 text-gray-500 text-2xl text-left ">

                <br />
                Getanicki was born in the heart of the pandemic.  By busy parents, for busy parents.
                <br />
                It was inspired by an actual mom, and friend, who personifies the go-getter spirit, and leads a determined life of service.  That's who that nicki was for us, and now Getanicki is that for all of our clients.
                <br />
                With the countless crowdsourced apps currently on the market, focusing on specific customer needs while ignoring the big picture, Getanicki takes a holistic view of the customer, providing wraparound services that cover all aspects of the customer's life.
                <br />
                Need help with breakfast this morning?  Getanicki is on their way with bagels and a tub of schmeer.
                <br />
                Need a package or letter shipped out by end of day?  Getanicki is on their way over to grab it.
                <br />
                Need help shopping for groceries, or picking up your curbside order?  Getanicki is only a text away!
                <br />
                And it doesn’t stop there.  Getanicki is powered by an army of nickis, orbiting neighborhoods near and far in service of our nicki network (you!).
                <br />
                In their travels, when they come across unique local businesses, they just can't keep quiet about it, and often put the word out to the network that they've come across something cool that must be tried.  Better yet, they’ll even offer to bring it to you!
                <br />
                This is called a nicki popup, and it's going to expand your world
                <br />
                There isn't a task you can imagine that nicki can't help you out with, and a day of your life that nicki can't help you improve.
                <br />
                So text Getanicki, and get-your-stuff-done, NOW!
                <br />
                Fear not, help is only a text away!
                <br />
            </p>

        </div>





    </React.Fragment>
);

export default OurStory;