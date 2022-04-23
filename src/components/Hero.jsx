import React from 'react';
import cassyImg from '../assets/cassy.jpg';
import {BsLinkedin} from 'react-icons/bs';



const Hero = () => {
    return(
        <div name="home" className="w-full h-screen bg-gradient-to-tr from-purple-800 to-pink-500">
            <div className="flex flex-col justify-center items-center">
                <img src={cassyImg} alt="/"
                className="block mx-auto mt-20 max-h-[35%] md:mx-auto rounded-full w-40"/>
            </div>

            <div className="text-[#0a192f] mt-5">
                <h1 className="font-bold text-4xl text-center justify-center">Hi, I'm Daniel Casmir</h1>
                <p className="font-bold text-center pt-3">I'm a React Developer</p>
                <p className="text-center mt-2">
                I Design Websites with React JS, currently im building
                    responsive full stack web applications with react,
                    and also Web3 blockchain apps with solidty.
                </p>
            </div>
            {/* Button div */}
            <div className="flex justify-center items-center text-center mx-auto my-5">
              <div>
              <button className="md:font-semibold md:text-xl text-sm bg-white rounded-full border border-black border-xl hover:uppercase hover:font-bold hover:px-10 duration-200 mr-4 p-2">
                Get Resume
              </button>
              </div>

              <div className="flex bg-black items-center px-2 rounded-full hover:px-12 duration-200">
              <button className="font-semibold text-xl p-2 rounded-full text-white">
                <a href="https://www.linkedin.com/in/daniel-ugbong-8955b7229/">follow</a>
              </button>
              <BsLinkedin className="text-white" size={20}/>
              </div>
            </div>

        </div>
    );
}

export default Hero;
