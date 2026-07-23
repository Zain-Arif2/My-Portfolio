import React, { useEffect } from "react";
import Header from "../components/Header"; // Header ka path check kar lein
import Footer from "../components/Footer"; // Footer ka path check kar lein

export default function PrivacyPolicy() {
  // Page navigate hone par top scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#09090b] text-[#f4f4f6] min-h-screen flex flex-col justify-between">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="relative pt-32 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex-grow">
        {/* Ambient Radial Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-[140px]" />

        <div className="max-w-[840px] mx-auto relative z-10">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
            Legal Overview
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-ink tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-muted-dim mb-10">
            Last Updated: July 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-muted/90 border-t border-white/10 pt-8">
            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                1. Overview
              </h2>
              <p>
                Your privacy is important. This Privacy Policy outlines how personal information is collected, used, and safeguarded when you interact with this portfolio website or get in touch via the contact form.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                2. Information Collected
              </h2>
              <p className="mb-2">
                Information is only collected when directly provided by you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-dim font-mono text-xs pl-2">
                <li>Contact Form Data: Full name, email address, and message content.</li>
                <li>Technical Data: Basic browser analytics or server logs used solely for performance monitoring and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                3. How Information is Used
              </h2>
              <p>
                Submitted details are exclusively used to respond to inquiries, discuss potential software development projects, and provide relevant client support. Your information is never sold, rented, or shared with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                4. Cookies and Analytics
              </h2>
              <p>
                This website uses minimal standard technologies to ensure efficient site performance and security. No persistent tracking cookies or invasive third-party ad networks are active on this platform.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                5. Contact &amp; Data Inquiries
              </h2>
              <p>
                If you have any questions regarding how your data is handled or wish to request the removal of any submitted messages, please reach out directly via the contact form on the home page.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}