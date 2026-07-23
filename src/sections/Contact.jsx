import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaCommentDots, 
  FaCheckCircle 
} from "react-icons/fa"; // Vite automatic tree-shaking ke sath standard import

function Contact() {
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
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
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
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-[140px] transform-gpu" />

      <div className="mx-auto max-w-[1140px] text-center relative z-10">
        
        {/* Header */}
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

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4 mb-2">
              <motion.button
                type="submit"
                disabled={submitting}
                aria-label="Send Message"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full max-w-[320px] py-3.5 px-8 flex items-center justify-center font-semibold text-[15px] text-[#04120f] bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-[16px] shadow-[0_12px_32px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.6)] transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-70"
              >
                <div className="group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform duration-300">
                  <FaPaperPlane className="text-base group-hover:rotate-[25deg] transition-transform duration-300" />
                </div>
                <span className="ml-2.5 transition-all duration-300">
                  {submitting ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
            </div>

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

export default memo(Contact);