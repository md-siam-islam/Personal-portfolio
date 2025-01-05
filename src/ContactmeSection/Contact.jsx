import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";

import contactLotti from "../assets/image/contact.json"



const Contact = () => {



    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fmtrsfq', 'template_rxtspho', form.current, {
            publicKey: 'HXzr3CyYljuDyQSVi',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div id="contact" className="my-20 border-b-2">
      <div class="bg-gray-900 text-white py-16 px-8 rounded-3xl">
        <h2 class="text-4xl font-bold text-center mb-12">Contact <span className="text-[#0A3981]">Me</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-6">Send me a message</h3>
            <form ref={form} onSubmit={sendEmail} class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" 
                  rows="4"
                  class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-[#0A3981] hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-6 text-center">Get in <span className="text-[#0A3981]">Touch</span></h3>

            <div className="flex items-center justify-center">
              <Lottie className="w-60 h-64" animationData={contactLotti} loop={true}></Lottie>
            </div>
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="w-8 h-8 flex items-center justify-center bg-[#0A3981] rounded-full text-white mr-4">
                  <FaLocationDot />
                </span>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li class="flex items-center">
                <span class="w-8 h-8 flex items-center justify-center bg-[#0A3981] rounded-full text-white mr-4">
                  <MdEmail />
                </span>
                <span>mdsiamislam663@gmail.com</span>
              </li>
              <li class="flex items-center">
                <span class="w-8 h-8 flex items-center justify-center bg-[#0A3981] rounded-full text-white mr-4">
                  <MdCall></MdCall>
                </span>
                <span>+880 1761617765</span>
              </li>
              <li class="flex items-center">
                <span class="w-8 h-8 flex items-center justify-center bg-[#0A3981] rounded-full text-white mr-4">
                  💬
                </span>
                <span>WhatsApp: +880 1951737356</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
