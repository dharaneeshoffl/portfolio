import React from 'react'

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5332f3e9-e645-4458-ae42-8fc7a6ae33ec"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>

          <p className="text-gray-300 py-4">
            <br />
            Submit the form below or shoot me an email -
            dharaneeshdharaneesh76@gmail.com
          </p>
        </div>
        <input
          className="bg-[#edeff3] p-2"
          type="text"
          placeholder="Name"
          name="name" required
        />
        <input
          className="my-4 p-2 bg-[#f3f4f8]"
          type="email"
          placeholder="Email"
          name="email" required
        />
        <textarea
          className="bg-[#f0f1f4] p-2"
          name="message"
          rows="10"
          placeholder="Message" required
        ></textarea>
        
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    
    </div>
  );
}
