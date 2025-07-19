import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import axios from "axios";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="
        bg-[#1A1E23] text-white
        pt-[60px] pb-0
        sm:pt-0 sm:pb-0
        px-4 sm:px-8 md:px-16 lg:px-[192px] text-center
      "
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#12F7D6]">Contact</h2>

      <p className="text-md mt-4 text-gray-300">
        I’m currently available for freelance work
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
      >
        <div className="flex flex-col">
          <label className="text-[#12F7D6] mb-1 text-sm md:text-base">Your name *</label>
          <div className="flex items-center border-b border-[#12F7D6]">
            <FaUser className="text-[#12F7D6] mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-[#12F7D6] mb-1 text-sm md:text-base">Your message *</label>
          <div className="flex items-start border-b border-[#12F7D6]">
            <FaCommentDots className="text-[#12F7D6] mr-2 mt-2" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your needs"
              required
              className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
              rows={4}
            ></textarea>
          </div>
        </div>

        <StyledButtonWrapper className="md:col-span-2 text-center">
          <motion.button
            type="submit"
            aria-label="Send Message"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <FaPaperPlane size={24} />
              </div>
            </div>
            <span>Send Message</span>
          </motion.button>
        </StyledButtonWrapper>
      </form>

      <div>
        <Footer />
      </div>
    </section>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  button {
    font-family: inherit;
    font-size: 18px;
    background: #12F7D6;
    color: black;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 9999px; /* fully rounded */
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.5em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }
    to {
      transform: translateY(-0.1em);
    }
  }
`;
