import React from 'react';
import reactImg from '../assets/react.png';
import tailImg from '../assets/tailwind.png';
import fireImg from '../assets/firebase.png';



const Skills = () => {
    return(
        <div name="skills" className="w-full h-screen grid md:grid-cols-3 bg-[#0a192f] justify-center items-center gap-2 mt-[-20]">

            {/* Desc 1 */}
            <div className="px-4 py-3 border border-pink-600 rounded-md mt-4 ml-4 mr-4">
                <div className="">
                    {/* logo div */}
                    <img src={reactImg} alt="/" className="w-20 justify-center"/>
                </div>
                <div>
                    <p className="font-bold text-white text-center">
                        I was never an expert in Javascript, but who needs to be anyway
                        i started learning React JS last year from youtube videos and
                        live streams and it's very flexible and intuitive. It lets you
                        use lots of APIs and SaaS to make your website stand
                        which i could never do with pure javascript.
                    </p>
                </div>
            </div>

             {/* Desc 2 */}
             <div className="px-4 py-3 border border-pink-600 rounded-md ml-4 mr-4">
                <div>
                    {/* logo div */}
                    <img src={tailImg} alt="/" className="w-20"/>
                </div>
                <div>
                    <p className="font-bold text-white text-center">
                        I've been learning CSS3 but i could never grasp it. It took me
                        months to under basic styling, but when i tried learning tailwind css
                        it took me a week to understand 70% of it.
                    </p>
                </div>
            </div>

             {/* Desc 3 */}
             {/*<div className="px-4 py-3 border border-pink-600 rounded-md ml-4 mr-4">
                <div>
                    <img src={fireImg} alt="/" className="w-20"/>
                </div>
                <div>
                    <p className="font-bold text-white text-center">
                        I started using firebase as my backend after using mySQL for my
                        php backends. i find firebase to be one of the best google products,
                        i'm still not very good but it's easy to add to my react Websites.
                    </p>
                </div>
            </div>*/}



        </div>

    );
}

export default Skills
