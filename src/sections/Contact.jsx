import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import axios from "axios";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaClock, FaCheckCircle, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#09090b] pt-24 sm:pt-32 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      
      {/* Ambient Radial Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-[1140px] text-center relative z-10">
        
        {/* Availability & Header */}
        <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
          Let's talk about your <span className="text-gradient-accent">project</span>.
        </h2>
        <p className="text-muted text-base sm:text-lg mt-4 max-w-[620px] mx-auto leading-relaxed">
          Have a web application, SaaS idea, or project in mind? Send me a message and I will get back to you shortly.
        </p>

        

        {/* Form Container */}
        <div className="max-w-3xl mx-auto mt-14 rounded-[32px] border border-white/10 bg-white/[0.025] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl text-left">
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-ink font-display font-medium mb-2 text-xs uppercase tracking-wider">
                Full Name <span className="text-teal-400">*</span>
              </label>
              <div className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-1.5 focus-within:border-teal-400 focus-within:bg-white/10 transition-all duration-300">
                <FaUser className="text-teal-400 shrink-0 text-sm" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="bg-transparent py-2.5 w-full focus:outline-none text-ink placeholder:text-muted-dim text-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-ink font-display font-medium mb-2 text-xs uppercase tracking-wider">
                Email Address <span className="text-teal-400">*</span>
              </label>
              <div className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-1.5 focus-within:border-teal-400 focus-within:bg-white/10 transition-all duration-300">
                <FaEnvelope className="text-teal-400 shrink-0 text-sm" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-transparent py-2.5 w-full focus:outline-none text-ink placeholder:text-muted-dim text-sm"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-ink font-display font-medium mb-2 text-xs uppercase tracking-wider">
                Project Details <span className="text-teal-400">*</span>
              </label>
              <div className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-2 focus-within:border-teal-400 focus-within:bg-white/10 transition-all duration-300">
                <FaCommentDots className="text-teal-400 shrink-0 mt-3 text-sm" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project, goals, and required features..."
                  required
                  className="bg-transparent py-2 w-full focus:outline-none text-ink placeholder:text-muted-dim text-sm leading-relaxed"
                  rows={5}
                ></textarea>
              </div>
            </div>

            {/* Submit Action */}
            <StyledButtonWrapper className="md:col-span-2 text-center">
              <motion.button
                type="submit"
                disabled={submitting}
                aria-label="Send Message"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <FaPaperPlane size={18} />
                  </div>
                </div>
                <span>{submitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </StyledButtonWrapper>

            {/* Form Footer Note */}
            <div className="md:col-span-2 text-center text-xs text-muted-dim flex items-center justify-center gap-2 font-mono">
              <FaCheckCircle className="text-teal-400" />
              <span>Clear communication &amp; direct developer support</span>
            </div>

          </form>

        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  button {
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    background: linear-gradient(135deg, #10b981 0%, #22d3ee 100%);
    color: #04120f;
    padding: 0.9em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 12px 32px -10px rgba(16, 185, 129, 0.4);
    width: 100%;
    max-width: 320px;
  }

  button span {
    display: block;
    margin-left: 0.6em;
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
    transform: translateX(0.5em) rotate(25deg) scale(1.1);
  }

  button:active {
    transform: scale(0.98);
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