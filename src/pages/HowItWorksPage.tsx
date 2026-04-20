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
      bar: "bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600",
      chip: "border-amber-500/35 bg-amber-950/40 text-amber-100/90",
    },
    {
      label: "Step 02",
      title: "Play through real decisions",
      description:
        "Each screen asks you to act, decide, or respond. The world reacts to your choices in real time instead of just marking answers right or wrong.",
      bar: "bg-gradient-to-b from-sky-400 via-cyan-500 to-teal-600",
      chip: "border-cyan-500/35 bg-cyan-950/35 text-cyan-100/90",
    },
    {
      label: "Step 03",
      title: "Reflect with a superhuman mentor",
      description:
        "An AI mentor analyzes how you think — your patterns, trade‑offs, and blind spots — then follow up in real time.",
      bar: "bg-gradient-to-b from-violet-400 via-fuchsia-500 to-rose-600",
      chip: "border-fuchsia-500/35 bg-fuchsia-950/30 text-fuchsia-100/90",
    },
    {
      label: "Step 04",
      title: "Level up & leave traces",
      description:
        "Every attempt is turned into artifacts: decision trees, reflections, and capability signals you can reuse as proof of what you can solve.",
      bar: "bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-800",
      chip: "border-emerald-500/35 bg-emerald-950/35 text-emerald-100/90",
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
    <div className="min-h-screen bg-[#050608] text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-planet-glow opacity-35 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-cosmic-glow opacity-35 mix-blend-soft-light" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 55% at 50% -15%, rgba(251, 191, 36, 0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 30%, rgba(14, 165, 233, 0.1), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(167, 139, 250, 0.08), transparent 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
        }}
      />

      <header
        className="fixed z-50 left-1/2 -translate-x-1/2
                  flex items-center justify-between
                  px-3 py-2 sm:px-4 sm:py-3 rounded-2xl
                  bg-stone-950/80 backdrop-blur-2xl border border-amber-500/15 shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                  max-w-4xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
        style={{ top: "env(safe-area-inset-top, 0.5rem)" }}
      >
        <Link
          to="/"
          className="font-bold text-stone-50 text-lg sm:text-xl tracking-tight select-none font-serif"
        >
          NovaX
        </Link>

        <nav className="flex items-center space-x-1 sm:space-x-1.5">
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors"
          >
            <Link to="/">
              <span className="hidden sm:inline text-sm font-normal">Home</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors"
          >
            <Link to="/about-us">
              <span className="hidden sm:inline text-sm font-normal">About Us</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                      text-stone-950 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 hover:from-amber-100 hover:to-amber-50 border border-amber-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors"
          >
            <Link to="/how-it-works">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1.5 ring-2 ring-amber-400/50" />
              <span className="text-sm font-semibold tracking-tight">How It Works</span>
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
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-3 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/80 via-amber-500/20 to-transparent sm:-left-4"
              />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber-200/70 mb-4 pl-4 sm:pl-5">
                HOW NOVAX WORKS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5 pl-4 sm:pl-5 font-serif tracking-tight">
                From confusion to{" "}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-sky-200 bg-clip-text text-transparent">
                  capability
                </span>{" "}
                in one arena run.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-stone-300/95 leading-relaxed max-w-xl ml-4 sm:ml-5 pl-4 sm:pl-5 border-l border-stone-700/80">
                NovaX is a problem-based learning arena wrapped in game energy. You enter a world, make real decisions,
                get simulated consequences, and walk away with proof of how you think — not just a completed module.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 pl-4 sm:pl-5">
                <Button
                  asChild
                  className="rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-amber-100 to-amber-50 text-stone-900 hover:from-amber-50 hover:to-white shadow-[0_12px_40px_rgba(251,191,36,0.25)] border border-amber-200/60"
                >
                  <a href={WAITLIST_FORM_URL} target="_blank" rel="noreferrer">
                    Join waitlist
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-xl border-stone-600/90 text-stone-200 hover:bg-stone-900/80 hover:text-stone-50 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-stone-950/40"
                >
                  <Link to="/">Back to arena intro</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:translate-y-2">
              <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-amber-500/25 blur-3xl" />
              <div className="absolute -bottom-12 -right-8 w-44 h-44 rounded-full bg-sky-500/20 blur-3xl" />

              <div className="relative rounded-sm border border-stone-600/50 bg-stone-950/70 backdrop-blur-xl p-5 sm:p-6 shadow-[0_28px_90px_rgba(0,0,0,0.65)] before:absolute before:inset-0 before:rounded-sm before:ring-1 before:ring-inset before:ring-amber-500/10 before:pointer-events-none">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/25 rounded-tr-sm" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-stone-500">SESSION SNAPSHOT</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-200/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    REAL‑TIME FEEDBACK
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-[13px] leading-relaxed text-stone-200/95">
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500 mb-2">CORE LOOP</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl font-serif tracking-tight text-stone-50">
                What actually happens when you press &quot;Start arena&quot;
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((step) => (
              <article
                key={step.title}
                className="group relative flex gap-3 sm:gap-4 rounded-lg border border-stone-700/60 bg-gradient-to-b from-stone-900/90 to-stone-950/95 p-4 sm:p-5 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
              >
                <div className={`w-1 shrink-0 rounded-full ${step.bar} opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.12)]`} />
                <div className="relative min-w-0">
                  <div
                    className={`inline-flex items-center gap-2 rounded-md border px-2 py-1 mb-3 ${step.chip}`}
                  >
                    <span className="text-[10px] font-mono tracking-tight">{step.label}</span>
                    <span className="w-px h-3 bg-current opacity-30" />
                    <span className="text-[10px] text-stone-400 group-hover:text-stone-300 transition-colors">
                      Arena flow
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-stone-50">{step.title}</h3>
                  <p className="text-sm sm:text-base text-stone-300/95 leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500 mb-2">SESSION JOURNEY</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl font-serif tracking-tight text-stone-50">
              Before, during, and after an arena run
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {flows.map((flow, i) => (
              <article
                key={flow.phase}
                className={`relative flex flex-col rounded-xl border p-5 sm:p-6 backdrop-blur-md ${
                  i === 1
                    ? "border-sky-500/35 bg-gradient-to-b from-sky-950/50 to-stone-950/90 md:-translate-y-1 shadow-[0_20px_60px_rgba(14,165,233,0.12)]"
                    : "border-stone-700/70 bg-stone-950/60"
                }`}
              >
                <div className="mb-4 pb-3 border-b border-stone-700/50">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500">{flow.phase}</p>
                  <h3 className="text-base sm:text-lg font-semibold mt-2 text-stone-50">{flow.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-stone-300/95 leading-relaxed mb-5 flex-1">{flow.description}</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
                  {flow.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-3 shrink-0 bg-amber-500/80 rounded-[1px]" />
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
          <div className="relative overflow-hidden rounded-xl border border-amber-500/25 bg-gradient-to-br from-stone-900/95 via-stone-950 to-[#0a0a0c] p-5 sm:p-8 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-amber-200/70 mb-2">READY FOR NEXT RUN</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif tracking-tight text-stone-50">
                  One arena a day is enough to slowly rewire how you see problems.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
                  You can start shaping this journey today: be part of the novax journey, try your first arena, feels one
                  core loop, and test it with real students.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 border-amber-400/50 text-amber-100 hover:bg-amber-500/10 hover:text-amber-50 rounded-lg px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium bg-stone-950/50"
                >
                  <a href={WAITLIST_FORM_URL} target="_blank" rel="noreferrer">
                    Join waitlist & get updates
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorksPage;

