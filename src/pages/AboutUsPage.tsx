import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutUsPage = () => {
  useScrollAnimation();

  const studentSquad = [
    {
      role: "World Builder",
      name: "Alya (Mock)",
      tagline: "Turns late-night what-ifs into simulated worlds.",
      photo: "/assets/work.png",
    },
    {
      role: "Systems Architect",
      name: "Rafi (Mock)",
      tagline: "Obsessed with how tiny decisions change entire outcomes.",
      photo: "/assets/fun.png",
    },
  ];

  const questTimeline = [
    {
      label: "Quest 01",
      title: "From Homework to World-Building",
      description:
        "We were just students stuck in endless theory, craving something that felt like actually touching reality — so we started prototyping worlds instead of worksheets.",
      year: "Year 1",
    },
    {
      label: "Quest 02",
      title: "Turning Confusion into a Game Loop",
      description:
        "Every time we got stuck, we wrote down the moment of confusion and turned it into a step in a simulation. Confusion stopped being a bug and became the core game mechanic.",
      year: "Year 2",
    },
    {
      label: "Quest 03",
      title: "Building an Arena for Everyone",
      description:
        "Friends from completely different majors tried the early arenas. It worked. Problem solving felt less like exam panic — more like a boss fight you actually want to retry.",
      year: "Year 3",
    },
  ];

  const values = [
    {
      title: "Built by Students, for Students",
      description:
        "We ship features we wish existed when we were staring at static textbooks and empty LMS dashboards. Every screen is tested on real late-night brain fog.",
      accent: "from-emerald-400/80 to-cyan-400/80",
    },
    {
      title: "Game Energy, Real Stakes",
      description:
        "We borrow the best from games — feedback, pacing, progression — and wire it into real-world scenarios. No vanity XP, only signals of actual capability.",
      accent: "from-violet-400/80 to-fuchsia-400/80",
    },
    {
      title: "Narratives over Notifications",
      description:
        "Instead of spamming you with reminders, we build arcs: seasons, quests, and storylines that make you want to come back because the world moved while you were gone.",
      accent: "from-amber-400/80 to-rose-400/80",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-cosmic-gradient" />
      <div className="pointer-events-none absolute inset-0 bg-planet-glow opacity-60 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-cosmic-glow opacity-60 mix-blend-screen" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -right-24 top-40 w-64 h-64 bg-cosmic.aurora/40 blur-3xl rounded-full animate-cosmic-glow" />
      <div className="pointer-events-none absolute -left-16 bottom-0 w-80 h-80 bg-cosmic.sunrise/35 blur-3xl rounded-full animate-float" />

      {/* Header */}
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
                      text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            <Link to="/about-us">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1 animate-ping" />
              <span className="text-sm font-medium">About Us</span>
            </Link>
          </Button>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        {/* Hero */}
        <section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-emerald-300/80 mb-4">
                BUILT BY STUDENTS · FUTURE-FACING
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
                The arena{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  we couldn&apos;t find
                </span>{" "}
                so we built it.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200/90 leading-relaxed max-w-xl">
                NovaX started as a group chat full of screenshots, failed attempts, and late-night questions like
                &quot;why doesn&apos;t learning feel like unlocking a new map?&quot;. We didn&apos;t want another course.
                We wanted a world that reacts when you think differently.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  className="bg-white text-black hover:bg-gray-200 font-semibold rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base shadow-lg shadow-emerald-400/30"
                >
                  <Link to="/">Back to arena intro</Link>
                </Button>
                <div className="flex items-center text-xs sm:text-sm text-gray-300/80">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 border border-black/60 flex items-center justify-center text-[10px] font-semibold">
                      S1
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 border border-black/60 flex items-center justify-center text-[10px] font-semibold">
                      S2
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 border border-black/60 flex items-center justify-center text-[10px] font-semibold">
                      S3
                    </div>
                  </div>
                  <span className="max-w-[14rem]">
                    Mock founding squad · real student problems. Replace with your own crew later.
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-emerald-400/40 blur-3xl" />
              <div className="absolute -bottom-10 -right-4 w-32 h-32 rounded-full bg-cyan-400/40 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400">STUDENT ORIGIN STORY</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    LIVE BUILD
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-[13px] leading-relaxed text-gray-100/90">
                  <p>
                    We kept losing motivation in traditional courses. Not because we hated learning — but because
                    nothing responded when we made a different choice.
                  </p>
                  <p>
                    So we asked: what if &quot;study&quot; felt more like queuing into a cooperative raid? Same effort,
                    but with storylines, worlds, and a mentor that sees how you think — not just what you memorized.
                  </p>
                  <p className="text-gray-400/90">
                    This page is a mock narrative scaffold. Swap the names, story beats, and visuals with your real
                    journey when you&apos;re ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student squad */}
        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              The student squad behind the arena
            </h2>
            <span className="hidden sm:inline text-xs font-mono text-gray-400">
              ROLE · NAME (MOCK) · TAGLINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {studentSquad.map((member) => (
              <article
                key={member.name}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 hover:border-emerald-400/70 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/30 mb-4">
                  <img
                    src={member.photo}
                    alt={`${member.name} profile mock`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/90">{member.role}</p>
                  <p className="text-sm font-semibold">{member.name}</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">{member.tagline}</p>
                <p className="mt-3 text-[11px] text-gray-400">
                  Replace with your real team members, portraits, and mini origin stories.
                </p>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] transition-all duration-300" />
              </article>
            ))}
          </div>
        </section>

        {/* Quest timeline */}
        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80 mb-2">SEASON 0 · ORIGIN QUESTS</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                How a study group turned into a learning arena
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm">
              Use this as a narrative spine. Each quest is a chapter of your journey — from frustration to prototype to
              something other students can actually log into.
            </p>
          </div>

          <div className="relative pl-4 sm:pl-6">
            <div className="absolute left-1 sm:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-emerald-400/40 to-transparent" />
            <div className="space-y-8 sm:space-y-10">
              {questTimeline.map((quest, idx) => (
                <div key={quest.title} className="relative flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_0_4px_rgba(0,0,0,0.75)]" />
                    {idx !== questTimeline.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-cyan-400/60 to-transparent mt-1" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2.5 py-1 mb-3">
                      <span className="text-[10px] font-mono text-cyan-200">{quest.label}</span>
                      <span className="w-1 h-1 rounded-full bg-cyan-300" />
                      <span className="text-[10px] text-gray-200/80">{quest.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{quest.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200/90 max-w-2xl leading-relaxed">
                      {quest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values / design principles */}
        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300/80 mb-2">DESIGN PRINCIPLES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl">
              The rules we use to make learning feel like a game — without losing the seriousness of your future.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => (
              <article
                key={value.title}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-black/20 p-5 sm:p-6 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.accent} opacity-20 mix-blend-screen`} />
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed mb-4">{value.description}</p>
                  <p className="text-[11px] text-gray-300/80">
                    This is placeholder copy. Rewrite these as your own non-negotiable rules for how your platform
                    treats students.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* XP meter / closing */}
        <section
          className="max-w-4xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="rounded-3xl border border-emerald-400/40 bg-black/60 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_24px_80px_rgba(16,185,129,0.25)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-2">PLAYER 1 · YOU</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  This isn&apos;t our story alone — it&apos;s the arena you step into.
                </h2>
              </div>
              <div className="w-full md:w-64">
                <div className="flex items-center justify-between text-[11px] text-gray-300 mb-1.5">
                  <span>Problem Solving XP (mock)</span>
                  <span className="text-emerald-300 font-mono">72%</span>
                </div>
                <div className="h-2 rounded-full bg-emerald-900/40 overflow-hidden">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400" />
                </div>
                <p className="mt-1 text-[10px] text-gray-400">
                  Replace this with your own metrics, proof-of-work, or student stats.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed mb-5">
              We&apos;re still students — still learning, still iterating, still wiping on new boss mechanics. NovaX is
              our attempt to make those attempts visible, trackable, and shareable so more people can level up
              together, faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
              <p className="text-xs sm:text-sm text-gray-300 max-w-md">
                If you&apos;re a student, educator, or just someone obsessed with better ways to think, this platform
                is a co-op game — not a finished product. Bring your own story in.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-emerald-400/60 text-emerald-200 hover:bg-emerald-400/10 rounded-2xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium"
              >
                <a href="mailto:novaniansupp@gmail.com">Write your chapter with us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;

