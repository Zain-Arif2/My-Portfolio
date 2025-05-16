import React from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer'

import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section
    id="contact"
    className="
      bg-[#1A1E23] text-white
      pt-[60px] pb-[0px]    /* mobile top & bottom */
      sm:pt-0               /* sm top padding 0 */
      sm:pb-[0px]          /* keep bottom 60px on sm, change if needed */
      px-4 sm:px-8 md:px-16 lg:px-[192px] text-center
    "
  >
  

      <h2 className="text-3xl md:text-5xl font-bold text-[#12F7D6]">Contact</h2>

      <p className="text-md mt-4 text-gray-300">
        I’m currently available for freelance work
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 mb-2.5 border border-[#12F7D6] text-[#12F7D6] px-4 md:px-6 py-2 rounded-lg hover:bg-[#12F7D6] hover:text-gray-900 transition"
      >
        Send Me A Message
      </motion.button>

      <form className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="flex flex-col">
          <label className="text-[#12F7D6] mb-1 text-sm md:text-base">Your name *</label>
          <div className="flex items-center border-b border-[#12F7D6]">
            <FaUser className="text-[#12F7D6] mr-2" />
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#12F7D6] mb-1 text-sm md:text-base">Your email *</label>
          <div className="flex items-center border-b border-[#12F7D6]">
            <FaEnvelope className="text-[#12F7D6] mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-[#12F7D6] mb-1 text-sm md:text-base">Your message *</label>
          <div className="flex items-start border-b border-[#12F7D6]">
            <FaCommentDots className="text-[#12F7D6] mr-2 mt-2" />
            <textarea
              placeholder="Enter your needs"
              className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
              rows={4}
            />
          </div>
        </div>

        <div className="md:col-span-2 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#12F7D6] mb-15 mt-15 text-black px-6 md:px-8 py-3 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-[#12F7D6] transition"
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </section>
  );
};


