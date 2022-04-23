import React from 'react';



const About = () => {
  return(
    <div name="about" className="w-full h-screen bg-gradient-to-tr from-blue-800 to-purple-800">
      <div className="flex flex-col mx-auto justify-center items-center text-center max-w-[1000px]">
        <h1 className="font-bold text-3xl mt-40">About Me</h1>
        <p className="text-white mt-6 p-4 font-bold">
        My name is Daniel Casmir, i'm an Undergraduate Nigerian Citizen,
        i'm a student of the National Open University of Nigeria. I
        started learning React JS two years ago and i've become fond of
        it, i'm able to use it with tailwind css, mongodb, firebase and some API's, i enjoy
        building software with react because of it's intuitiveness and
        simplicity, I hope this portfolio will land me a sustainable job
        thank you.
        </p>
      </div>
    </div>
  );
}

export default About;
