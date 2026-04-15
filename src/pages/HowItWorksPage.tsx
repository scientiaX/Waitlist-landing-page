import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksPage = () => {
  useScrollAnimation();

  const WAITLIST_FORM_URL = "https://tally.so/r/zxDAyZ";

  const steps = [
    {
      label: "Step 01",
      title: "Enter the arena",
      description:
        "The system tailors a world simulation that matches your level and field — from everyday decisions to high‑stakes, multi‑step scenarios.",
      accent: "from-cyan-400/80 to-emerald-400/80",
    },
    {
      label: "Step 02",
      title: "Play through real decisions",
      description:
        "Each screen asks you to act, decide, or respond. The world reacts to your choices in real time instead of just marking answers right or wrong.",
      accent: "from-violet-400/80 to-fuchsia-400/80",
    },
    {
      label: "Step 03",
      title: "Reflect with a superhuman mentor",
      description:
        "An AI mentor analyzes how you think — your patterns, trade‑offs, and blind spots — then follow up in real time.",
      accent: "from-amber-400/80 to-rose-400/80",
    },
    {
      label: "Step 04",
      title: "Level up & leave traces",
      description:
        "Every attempt is turned into artifacts: decision trees, reflections, and capability signals you can reuse as proof of what you can solve.",
      accent: "from-sky-400/80 to-indigo-400/80",
    },
  ];

  const flows = [
    {
      phase: "Before a session",
      title: "You pick a quest, not a chapter",
      description:
        "Instead of starting from a PDF or slide deck, you jump into a narrative: a quest with a clear goal, constraints, and context that actually feels alive.",
      items: [
        "Our system adjusts the arena difficulty and theme for you",
        "See what skills the arena will stress‑test",
        "Get a short briefing instead of a long syllabus",
      ],
    },
    {
      phase: "During a session",
      title: "You act, the world responds",
      description:
        "You move through micro‑screens: each one asks for an action, not just a multiple‑choice guess. The environment and characters adapt to every branch you take.",
      items: [
        "Micro decisions stacked into a full scenario",
        "Instant, contextual feedback instead of generic tips",
        "AI mentor tracks how you reason, not just the final move",
      ],
    },
    {
      phase: "After a session",
      title: "You see the map of your thinking",
      description:
        "NovaX turns your run into a visual decision map and short reflection, so improvement feels like upgrading a skill tree — not just finishing homework.",
      items: [
        "Key moments highlighted",
        "Which capabilities improved (e.g., decision-making, communication, prioritization)",
        "How far each capability progressed, with clear before-to-after growth levels",
      ],
    },
  ];

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
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Link to="/about-us">
              <span className="hidden sm:inline text-sm font-normal">About Us</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            <Link to="/how-it-works">
              <span className="w-2 h-2 rounded-full bg-cyan-300 mr-1 animate-ping" />
              <span className="text-sm font-medium">How It Works</span>
            </Link>
          </Button>
        </nav>
      </header>

      <main className="relative z-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr,1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-4">
                HOW NOVAX WORKS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
                From confusion to{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  capability
                </span>{" "}
                in one arena run.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200/90 leading-relaxed max-w-xl">
                NovaX is a problem-based learning arena wrapped in game energy. You enter a world, make real decisions,
                get simulated consequences  , and walk away with proof of how you think — not just a completed module.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  className="bg-white text-black hover:bg-gray-200 font-semibold rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base shadow-lg shadow-cyan-400/30"
                >
                  <a href={WAITLIST_FORM_URL} target="_blank" rel="noreferrer">
                    Join waitlist
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-white/40 text-white hover:bg-white/10 rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  <Link to="/">Back to arena intro</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-cyan-400/40 blur-3xl" />
              <div className="absolute -bottom-10 -right-6 w-40 h-40 rounded-full bg-emerald-400/40 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400">SESSION SNAPSHOT</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                    REAL‑TIME FEEDBACK
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-[13px] leading-relaxed text-gray-100/90">
                  <p>
                    A student enters a &quot;Market Crash&quot; arena. Every choice — who to trust, what to sacrifice,
                    when to wait, how to manage — reshapes the world they&apos;re in.
                  </p>
                  <p>
                    Behind the scenes, NovaX is mapping their decisions, risk tolerance, and reasoning patterns instead
                    of just logging a final score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-2">CORE LOOP</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl">
                What actually happens when you press &quot;Start arena&quot;
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step) => (
              <article
                key={step.title}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 via-black/50 to-black/30 p-5 sm:p-6 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-20 mix-blend-screen`} />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-black/40 px-2.5 py-1 mb-3">
                    <span className="text-[10px] font-mono text-cyan-200">{step.label}</span>
                    <span className="w-1 h-1 rounded-full bg-cyan-300" />
                    <span className="text-[10px] text-gray-200/80">Arena flow</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300/80 mb-2">SESSION JOURNEY</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl">
              Before, during, and after an arena run
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {flows.map((flow) => (
              <article
                key={flow.phase}
                className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-5 sm:p-6 flex flex-col"
              >
                <div className="mb-3">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/80">{flow.phase}</p>
                  <h3 className="text-base sm:text-lg font-semibold mt-1">{flow.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed mb-4">{flow.description}</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  {flow.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="max-w-4xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="rounded-3xl border border-cyan-400/40 bg-black/60 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_24px_80px_rgba(34,211,238,0.25)]">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80 mb-2">READY FOR NEXT RUN</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                One arena a day is enough to slowly rewire how you see problems.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
              <p className="text-xs sm:text-sm text-gray-300 max-w-md">
              You can start shaping this journey today: be part of the novax journey, try your first arena, feels one core loop, and test it with real students.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-cyan-400/60 text-cyan-200 hover:bg-cyan-400/10 rounded-2xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium"
              >
                <a href={WAITLIST_FORM_URL} target="_blank" rel="noreferrer">
                  Join waitlist & get updates
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorksPage;

