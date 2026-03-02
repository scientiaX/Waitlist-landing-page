import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TermsOfServicePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient" />
      <div className="pointer-events-none absolute inset-0 bg-planet-glow opacity-60 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-cosmic-glow opacity-60 mix-blend-screen" />

      <header
        className="fixed z-50 left-1/2 -translate-x-1/2
                  flex items-center justify-between
                  px-3 py-2 sm:px-4 sm:py-3 rounded-[18px]
                  bg-black/65 backdrop-blur-xl border border-white/10 shadow-2xl
                  max-w-4xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
        style={{ top: "env(safe-area-inset-top, 0.5rem)" }}
      >
        <Link to="/" className="font-bold text-white text-lg sm:text-xl tracking-wide select-none">
          NovaX
        </Link>

        <nav className="flex items-center space-x-1 sm:space-x-1.5">
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Link to="/">
              <span className="hidden sm:inline text-sm font-normal">Home</span>
            </Link>
          </Button>
        </nav>
      </header>

      <main className="relative z-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-emerald-300/80 mb-4">
            LEGAL · TERMS OF SERVICE
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-2">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of NovaX, our
            problem-based learning arena with world simulations and AI mentor.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mb-8">
            This page is a draft scaffold generated from the introduction page. Please review, edit,
            and adapt to your legal needs before using it publicly.
          </p>

          <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-gray-200 leading-relaxed">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using NovaX (including joining the waitlist, exploring demos, or
                interacting with any arenas, simulations, or AI mentor experiences), you agree to be
                bound by these Terms. If you do not agree, you should not use NovaX.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">2. Who NovaX Is For</h2>
              <p>
                NovaX is designed as a learning environment for students, lifelong learners, and
                individuals who want to train problem solving skills. You are responsible for
                ensuring that your use of NovaX complies with local laws, school or campus policies,
                and any age requirements that may apply in your region.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">3. Early Access &amp; Waitlist</h2>
              <p className="mb-2">
                At this stage, NovaX may be available only as a waitlist, limited access demo, or
                experimental environment. By joining the waitlist or requesting access, you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>Agree that features, arenas, and experiences may change frequently.</li>
                <li>Understand that outages, bugs, or resets may occur without prior notice.</li>
                <li>
                  Allow us to contact you using the email you provided for updates related to NovaX.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">4. Use of the Platform</h2>
              <p className="mb-2">
                You agree to use NovaX in a way that aligns with its purpose: a problem-based
                learning arena that simulates worlds and decisions, not a tool for harmful behavior.
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>Bypass security, exploit bugs, or interfere with system stability.</li>
                <li>Use NovaX to generate, practice, or simulate harmful, abusive, or illegal acts.</li>
                <li>
                  Misrepresent yourself, impersonate others, or attempt to reverse engineer core
                  systems.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">5. Learning Data &amp; Experience Logs</h2>
              <p className="mb-2">
                NovaX is built around tracking how you think, decide, and solve problems inside
                simulated worlds. Depending on implementation, this may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>Your actions, choices, and paths taken in simulations.</li>
                <li>Reflections, written responses, and in-arena decisions.</li>
                <li>
                  Progress metrics, capability indicators, or &quot;XP&quot; style representations of your
                  growth.
                </li>
              </ul>
              <p className="mt-2">
                Details about how data is stored, used, and protected should be described in your
                dedicated Privacy Policy page, which is linked from the footer.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">6. No Guarantees of Outcomes</h2>
              <p>
                NovaX aims to make learning feel more like a meaningful, game-like experience, but
                we do not guarantee any specific academic, career, or life outcomes. You are
                responsible for how you apply what you learn and for any decisions you make in the
                real world based on simulations or guidance.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">7. Intellectual Property</h2>
              <p className="mb-2">
                All content on NovaX — including arenas, simulations, storylines, UI, and AI mentor
                behavior — is owned by NovaX (or its licensors) unless otherwise stated. You agree
                not to copy, redistribute, or commercially exploit these materials without
                permission.
              </p>
              <p>
                Where students or users contribute content (for example, reflections or projects),
                you should define clearly in your final version of these Terms how ownership and
                licensing of that content works.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">8. Experimental AI Mentor</h2>
              <p>
                The &quot;superhuman mentor&quot; and AI systems powering NovaX are experimental. They may
                sometimes be inaccurate, incomplete, or produce suggestions that are not suitable
                for your specific context. Always use your own judgment and, where appropriate,
                consult teachers, mentors, or professionals before acting on any advice or feedback
                generated in NovaX.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, NovaX and its team will not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss
                of data, opportunities, or profits arising from your use of or inability to use
                NovaX. You use the platform at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">10. Changes to These Terms</h2>
              <p>
                Because NovaX is actively evolving, we may update these Terms from time to time. If
                we make material changes, we will update the &quot;Last updated&quot; date below and, where
                appropriate, provide additional notice. Your continued use of NovaX after changes
                become effective means you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">11. Contact</h2>
              <p className="mb-2">
                If you have questions about these Terms or how NovaX works, you can contact us at:
              </p>
              <p className="text-gray-200">
                <a href="mailto:novaniansupp@gmail.com" className="underline hover:text-emerald-300">
                  novaniansupp@gmail.com
                </a>
              </p>
            </section>

            <p className="text-xs sm:text-sm text-gray-400 pt-2">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsOfServicePage;

