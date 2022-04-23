import React from 'react';



const Contact = () => {
  return(
    <div name="contact" className="w-full h-screen bg-[#0a192f] mt-20">


    <div className="mt-20 grid md:grid-cols-2 p-4">
      <div className="my-6">
        <h1 className="font-bold text-white text-2xl border-b-3 border-pink-600">Contact Me</h1>
        <p className="text-white font-bold">Don't forget to send me an email ugbongcaz@gmail.com</p>
      </div>


      <div className="md: my-6">
        <form method="POST" action="https://getform.io/f/78346995-e41a-43d5-bab8-c154250166bb" className="flex flex-col mb-4">
          <input type="text" name="fullname" Placeholder="Full Name"
          className="mb-4 p-2 rounded-lg hover:bg-[#ccd6f6]"/>

          <input type="text" name="email" Placeholder="Email"
          className="p-2 rounded-lg hover:bg-[#ccd6f6]"/>

          <textarea name="message" placeholder="Message" cols="34" rows="10" className="mt-4 p-2 rounded-lg hover:bg-[#ccd6f6]">
          </textarea>

          <button className="text-pink-800 font-bold border-2 border-pink-800 p-4 mt-4 items-center mx-auto rounded-xl hover:text-white hover:bg-pink-800 hover:border-none">
            Submit
          </button>
        </form>
      </div>
    </div>



    </div>
  );
}

export default Contact;
