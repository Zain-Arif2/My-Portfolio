import React, { useEffect } from "react";
import Header from "../components/Header"; // Header ka path check kar lein
import Footer from "../components/Footer"; // Footer ka path check kar lein

export default function TermsOfService() {
  // Page load hone par top par scroll karne ke liye
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
            Terms &amp; Guidelines
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-ink tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-muted-dim mb-10">
            Last Updated: July 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-muted/90 border-t border-white/10 pt-8">
            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and viewing this portfolio website, you agree to comply with and be bound by these Terms of Service. These terms apply to all visitors, clients, and inquiries.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                2. Intellectual Property
              </h2>
              <p>
                All original portfolio design, layout, written content, code snippets, and branding elements showcased on this site belong to Zain Arif unless otherwise credited. Client project examples remain the property of their respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                3. Service Engagements
              </h2>
              <p>
                Discussions, proposals, or communications initiated through this website do not constitute a binding contract. Formal freelance or contractual engineering services are subject to a separate written agreement outlining scope, deliverables, and terms.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                4. Disclaimer &amp; Limitation of Liability
              </h2>
              <p>
                This website and its content are provided on an "as-is" basis for informational and portfolio display purposes. While reasonable efforts are made to ensure accuracy and continuous availability, no guarantees are provided regarding uninterrupted uptime or error-free site function.
              </p>
            </div>

            <div>
              <h2 className="text-ink font-display font-semibold text-lg mb-2">
                5. Updates to Terms
              </h2>
              <p>
                These terms may be updated periodically to reflect changes in services or site features. Continued use of the website following any modifications signifies acceptance of the revised terms.
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