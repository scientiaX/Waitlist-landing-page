import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PrivacyPolicyPage = () => {
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
            LEGAL · PRIVACY POLICY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-2">
            This Privacy Policy explains how NovaX collects, uses, and protects information when you
            join the waitlist, explore demos, or interact with our problem-based learning arenas and AI mentor.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mb-8">
            This page is a draft scaffold generated from the introduction page. Please review, edit,
            and adapt together with your legal advisor before using it publicly.
          </p>

          <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-gray-200 leading-relaxed">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">1. Information We Collect</h2>
              <p className="mb-2">
                The information we collect depends on how you interact with NovaX. It may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>
                  <span className="font-semibold">Contact information</span> such as your email address
                  when you join the waitlist or contact us.
                </li>
                <li>
                  <span className="font-semibold">Usage data</span> such as pages visited, buttons clicked,
                  and basic analytics to understand how people explore the arena.
                </li>
                <li>
                  <span className="font-semibold">Learning and interaction data</span> such as choices you
                  make in simulations, reflections you write, or progress indicators (for example, XP-style
                  progress bars).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">2. How We Use Your Information</h2>
              <p className="mb-2">
                We use the information we collect to build and improve NovaX and to communicate with you, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>Operating the waitlist and early access experience.</li>
                <li>Designing better arenas, scenarios, and mentor feedback based on aggregated usage patterns.</li>
                <li>Sending updates about new features, access invites, or changes to our policies.</li>
                <li>Monitoring for abuse, misuse, or technical issues so we can keep the platform stable and safe.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">3. Cookies and Similar Technologies</h2>
              <p>
                NovaX may use cookies or similar technologies to remember preferences, keep sessions active,
                and understand how people navigate the site. In a production deployment, you should provide
                more detail here about what technologies you use and how users can manage their choices.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">4. Data Retention</h2>
              <p>
                We keep your information only for as long as it is needed for the purposes described above,
                or as required by law. In your final version, you should define concrete retention periods
                (for example, how long waitlist emails or simulation logs are stored) based on your policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">5. How We Share Information</h2>
              <p className="mb-2">
                We do not sell your personal information. We may share information in limited ways, such as:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>With service providers that help us run infrastructure, analytics, or email.</li>
                <li>If required by law, regulation, or legal process.</li>
                <li>
                  In connection with a merger, acquisition, or other change in control, in which case we will
                  take steps to continue protecting your data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">6. Student &amp; Young User Considerations</h2>
              <p>
                Because NovaX is designed for students and learners, you should clearly define in your final policy
                how you handle underage users, school accounts, and compliance with applicable regulations (for example,
                COPPA, FERPA, GDPR, or local equivalents). This scaffold does not constitute legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">7. Your Choices &amp; Rights</h2>
              <p className="mb-2">
                Depending on your region, you may have rights over your personal data, such as the ability to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200/90">
                <li>Access or request a copy of certain personal data we hold about you.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Opt out of certain types of communication.</li>
              </ul>
              <p className="mt-2">
                In your final implementation, you should explain the exact process for users to exercise these rights,
                including any forms or email addresses they should use.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">8. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your information from unauthorized
                access, loss, or misuse. No system is perfect, so in your production policy you should describe your
                security approach in more detail and outline what happens in the event of a breach.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">9. Third-Party Links &amp; Integrations</h2>
              <p>
                NovaX may link to or integrate with third-party tools (for example, identity providers, classroom
                platforms, or analytics). Their use of your data is governed by their own policies. You should review
                those policies before using those services through NovaX.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
              <p>
                As NovaX evolves, we may update this Privacy Policy. If we make material changes, we will update the
                &quot;Last updated&quot; date below and, where appropriate, provide additional notice. Your continued
                use of NovaX after changes become effective means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">11. Contact</h2>
              <p className="mb-2">
                If you have questions about this Privacy Policy or how NovaX handles data, you can contact us at:
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

export default PrivacyPolicyPage;

