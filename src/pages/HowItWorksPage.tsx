import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WAITLIST_FORM_URL = "https://tally.so/r/zxDAyZ";

const steps = [
  {
    label: "Step 01",
    title: "Enter a living arena",
    description:
      "NovaX starts with a short mission brief, then shapes the simulation around your field, level, and decision context.",
    metric: "03 min",
    metricLabel: "briefing",
  },
  {
    label: "Step 02",
    title: "Make real decisions",
    description:
      "You choose actions under pressure. The world responds to timing, trade-offs, priorities, and how clearly you explain the move.",
    metric: "12+",
    metricLabel: "branches",
  },
  {
    label: "Step 03",
    title: "Reflect with the mentor",
    description:
      "The AI mentor reads your reasoning pattern and follows up with pointed questions instead of generic right-or-wrong feedback.",
    metric: "1:1",
    metricLabel: "review",
  },
  {
    label: "Step 04",
    title: "Leave with proof",
    description:
      "Every run becomes a capability artifact: decision traces, before-after growth, and evidence of what you can actually solve.",
    metric: "4",
    metricLabel: "signals",
  },
];

const journey = [
  {
    phase: "Before",
    title: "A quest replaces the chapter",
    description:
      "You choose a challenge with constraints, stakes, and a reason to care. The session opens with enough context to act fast.",
    items: ["Personalized arena difficulty", "Skill signals made visible", "Short mission brief"],
  },
  {
    phase: "During",
    title: "The world reacts to your moves",
    description:
      "Each screen asks for action. Consequences stack into a scenario that tests how you reason when the answer is not obvious.",
    items: ["Branching micro-decisions", "Contextual mentor prompts", "Scenario state that changes"],
  },
  {
    phase: "After",
    title: "Your thinking becomes readable",
    description:
      "NovaX turns the run into a map of choices, missed paths, and capability growth that can be discussed or shared.",
    items: ["Decision map", "Growth summary", "Reusable capability artifact"],
  },
];

const feedbackRows = [
  ["Input", "Prioritize the supplier risk before discount pressure"],
  ["World", "Cash flow stabilizes, but customer trust drops for 2 turns"],
  ["Mentor", "You protected operations while under-explaining the customer cost"],
];

const HowItWorksPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen overflow-hidden bg-[#0F1117] text-[#E8E4D9]">
      <ResponsiveHeader className="rounded-[18px] border-white/10 bg-[rgb(15_17_23/0.66)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]" />

      <main className="relative">
        <section className="relative min-h-screen overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
          <img
            src="/assets/cosmic-planet-background.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,23,0.96)_0%,rgba(15,17,23,0.72)_48%,rgba(15,17,23,0.96)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,rgba(15,17,23,0),#0F1117)]" />

          <div
            className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl grid-cols-1 items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]"
            data-scroll="fade-up"
          >
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase text-[#9DA3B4]">How NovaX works</p>
              <h1 className="nova-display text-4xl font-semibold leading-[1.05] text-[#E8E4D9] sm:text-5xl md:text-6xl">
                From confusion to{" "}
                <span className="nova-gradient-text nova-gradient-process">capability</span> in one arena run.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-[#E8E4D9]/78 sm:text-lg">
                NovaX turns problem-based learning into a responsive world. You enter a scenario, make decisions,
                observe consequences, then leave with a readable trace of how you think.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-lg bg-[#D97757] px-6 text-[15px] font-medium text-[#E8E4D9] hover:bg-[#D97757]/90"
                >
                  <a href={WAITLIST_FORM_URL} target="_blank" rel="noreferrer">
                    Join waitlist
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-lg border border-[#1C2030] bg-[#0F1117] px-6 text-[15px] font-medium text-[#E8E4D9] hover:bg-[#1C2030] hover:text-[#E8E4D9]"
                >
                  <Link to="/">Back to intro</Link>
                </Button>
              </div>
            </div>

            <aside className="rounded-[12px] border border-[#333849] bg-[#1C2030]/88 p-5 backdrop-blur-md sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="nova-mono text-xs text-[#9DA3B4]">ARENA RUN</p>
                  <h2 className="nova-display mt-2 text-2xl font-medium text-white">Market crash simulation</h2>
                </div>
                <span className="nova-mono rounded-lg border border-[#333849] bg-[#0F1117] px-3 py-2 text-xs text-[#E8E4D9]">
                  live
                </span>
              </div>

              <div className="space-y-3">
                {feedbackRows.map(([label, value]) => (
                  <div key={label} className="rounded-[10px] border border-[#333849] bg-[#0F1117] p-4">
                    <p className="nova-mono mb-2 text-xs text-[#9DA3B4]">{label}</p>
                    <p className="text-sm leading-[1.6] text-[#E8E4D9]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#333849] pt-5">
                {["risk", "clarity", "pace"].map((signal, index) => (
                  <div key={signal}>
                    <p className="nova-mono text-xl text-white">{index === 0 ? "82" : index === 1 ? "71" : "4.2s"}</p>
                    <p className="mt-1 text-xs text-[#9DA3B4]">{signal}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" data-scroll="fade-up">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-medium uppercase text-[#9DA3B4]">Core loop</p>
              <h2 className="nova-display text-3xl font-medium leading-[1.15] text-white sm:text-4xl">
                Four moves, one readable capability signal.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.title} className="rounded-[12px] border border-[#333849] bg-[#1C2030] p-5">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span className="nova-gradient-text nova-gradient-technical text-xs font-semibold">
                      {step.label}
                    </span>
                    <div className="text-right">
                      <p className="nova-mono text-sm text-[#E8E4D9]">{step.metric}</p>
                      <p className="text-xs text-[#9DA3B4]">{step.metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-[#E8E4D9]/72">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" data-scroll="fade-up">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-medium uppercase text-[#9DA3B4]">Session journey</p>
              <h2 className="nova-display text-3xl font-medium leading-[1.15] text-white sm:text-4xl">
                Before, during, and after the arena.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {journey.map((item, index) => (
                <article
                  key={item.phase}
                  className={`rounded-[12px] border p-5 ${
                    index === 1
                      ? "border-[#1C2030] bg-[#0F1117]"
                      : "border-[#333849] bg-[#1C2030]"
                  }`}
                >
                  <p className="nova-mono text-xs text-[#9DA3B4]">{item.phase}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-[#E8E4D9]/72">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.items.map((line) => (
                      <li key={line} className="flex items-start gap-3 text-sm text-[#E8E4D9]/78">
                        <span className="mt-2 h-px w-5 shrink-0 bg-[#9DA3B4]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" data-scroll="fade-up">
          <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[12px] border border-white/10 bg-white text-[#0F1117] md:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="mb-3 text-xs font-medium uppercase text-[#555D6D]">What you keep</p>
              <h2 className="nova-display text-3xl font-medium leading-[1.15] sm:text-4xl">
                Proof that explains the path, not only the score.
              </h2>
              <p className="mt-5 text-base leading-[1.6] text-[#343945]">
                After each run, NovaX records the moments that matter: what you chose, how you acted, what changed, how you explained
                it, and which capability improved.
              </p>
              <Button
                asChild
                className="mt-7 h-12 rounded-lg bg-[#0F1117] px-6 text-[15px] font-medium text-[#E8E4D9] hover:bg-[#1C2030]"
              >
                <Link to="/about-us">Meet the builders</Link>
              </Button>
            </div>
            <div className="min-h-[280px] bg-[#0F1117]">
              <img
                src="/assets/capability-proof-abstract.png"
                alt="Abstract NovaX capability path in a dark spatial environment"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorksPage;
