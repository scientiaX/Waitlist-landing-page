import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutUsPage = () => {
  useScrollAnimation();
  const handleUnavailable = () => {
    alert("Not available yet");
  };

  const studentSquad = [
    {
      role: "Founder",
      name: "Nafis",
      tagline: "Are we able to discover a god-level learning method that combines unfalsified credentials?",
      photo: "/assets/senku.jpg",
    },
    {
      role: "Co-Founder",
      name: "Enosh",
      tagline: "How can fun and seriousness coexist? Like a competitive game.",
      photo: "/assets/enosh.png",
    },
  ];

  const questTimeline = [
    {
      label: "Quest 01",
      title: "From Anxiety to Questions",
      description:
        "It started when I (Nafis) studied machine learning and realized that knowledge would become cheaper and we would be replaced — then I asked myself \"Is learning worthless now?\".",
      year: "may 2025",
    },
    {
      label: "Quest 02",
      title: "Gathering Students as a Team",
      description:
        "I found a persistent student (Enosh) in a community, we chatted and we experienced the same concerns. We researched all day, conducted surveys, and experimented to investigate this problem.",
      year: "june 2025",
    },
    {
      label: "Quest 03",
      title: "The Idea Was Born",
      description:
        "We found a real concept, engineered it to make it fun and easy — yet effective. We tested and experimented the prototype on classmates and students.",
      year: "october 2025",
    },
        {
      label: "Quest 04",
      title: "Building an Arena for Everyone",
      description:
        "It's the end of the month, and we've decided to do further research and develop the prototype to an advanced stage, and we plan to bring more students to experience what we're experiencing. The beta test will be open soon for the waitlist.",
      year: "december 2025",
    },
  ];

  const values = [
    {
      title: "Built by Students, for Students",
      description:
        "We ship features we wish existed when we were staring at static textbooks and empty LMS dashboards. Every screen is tested on real late-night brain fog.",
      frame: "border-rose-400/25 shadow-[0_0_0_1px_rgba(251,113,133,0.08)]",
      wash: "from-rose-500/15 via-transparent to-transparent",
    },
    {
      title: "Game Energy, Real Stakes",
      description:
        "We borrow the best from games — feedback, pacing, progression — and wire it into real-world scenarios. No vanity XP, only signals of actual capability.",
      frame: "border-violet-400/25 shadow-[0_0_0_1px_rgba(167,139,250,0.08)]",
      wash: "from-violet-500/15 via-transparent to-transparent",
    },
    {
      title: "Narratives over Notifications",
      description:
        "Instead of spamming you with reminders, we build arcs: seasons, quests, streaks, and role-playing storylines that make you want to come back because the world moved while you were gone.",
      frame: "border-amber-400/30 shadow-[0_0_0_1px_rgba(251,191,36,0.1)]",
      wash: "from-amber-500/18 via-transparent to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0c0a] text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-[0.55]" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-[#1c1410]/90 to-stone-950" />
      <div className="pointer-events-none absolute inset-0 bg-planet-glow opacity-30 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-cosmic-glow opacity-25 mix-blend-soft-light" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(251, 113, 133, 0.12), transparent 55%), radial-gradient(ellipse 60% 45% at 90% 20%, rgba(245, 158, 11, 0.1), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none absolute -right-24 top-40 w-72 h-72 bg-cosmic-aurora/25 blur-3xl rounded-full animate-cosmic-glow" />
      <div className="pointer-events-none absolute -left-20 bottom-32 w-96 h-96 bg-cosmic-sunrise/20 blur-3xl rounded-full animate-float" />

      <header
        className="fixed z-50 left-1/2 -translate-x-1/2
                  flex items-center justify-between
                  px-3 py-2 sm:px-4 sm:py-3 rounded-2xl
                  bg-[#1a1410]/85 backdrop-blur-2xl border border-rose-200/10 shadow-[0_24px_70px_rgba(0,0,0,0.45)]
                  max-w-4xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
        style={{ top: "env(safe-area-inset-top, 0.5rem)" }}
      >
        <Link to="/" className="font-bold text-stone-50 text-lg sm:text-xl tracking-tight select-none font-serif">
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
                      text-stone-900 bg-gradient-to-r from-rose-100 to-amber-50 hover:from-rose-50 hover:to-amber-100 border border-rose-300/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-colors"
          >
            <Link to="/about-us">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5 ring-2 ring-rose-300/60" />
              <span className="text-sm font-semibold tracking-tight">About Us</span>
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
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-rose-200/60 mb-4">
                BUILT BY STUDENTS · FUTURE-FACING
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5 font-serif tracking-tight text-stone-50">
                The arena{" "}
                <span className="bg-gradient-to-r from-rose-200 via-amber-100 to-orange-200 bg-clip-text text-transparent">
                  we couldn&apos;t find
                </span>{" "}
                so we built it.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-stone-300/95 leading-relaxed max-w-xl border-l-2 border-rose-400/35 pl-5">
                NovaX began with a restlessness that AI would make knowledge and learning feel useless, and a question
                that wouldn&apos;t leave us: &quot;why does AI make learning feel as effortless as breathing, while for us,
                learning feels as hard as surviving? what is left for us?&quot;
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  className="rounded-xl font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-stone-100 to-rose-50 text-stone-900 hover:from-white hover:to-rose-100 border border-rose-200/50 shadow-[0_14px_40px_rgba(244,63,94,0.15)]"
                >
                  <Link to="/">Back to arena intro</Link>
                </Button>
                <div className="flex items-center text-xs sm:text-sm text-stone-400">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-400 to-orange-400 border border-stone-900/80 flex items-center justify-center text-[10px] font-semibold text-stone-950">
                      NF
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-600 border border-stone-900/80 flex items-center justify-center text-[10px] font-semibold text-stone-50">
                      EN
                    </div>
                  </div>
                  <span className="max-w-[14rem]">
                    Nafis · Enosh.
                  </span>
                </div>
              </div>  
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-rose-500/25 blur-3xl" />
              <div className="absolute -bottom-10 -right-4 w-36 h-36 rounded-full bg-amber-500/20 blur-3xl" />

              <div className="relative rounded-sm border border-stone-600/60 bg-[#14100d]/90 backdrop-blur-xl p-5 sm:p-6 shadow-[0_28px_90px_rgba(0,0,0,0.55)] rotate-[0.25deg]">
                <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-rose-500/20 via-transparent to-amber-500/10 opacity-60 pointer-events-none" />
                <div className="flex items-center justify-between mb-4 relative">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-stone-500">STUDENT ORIGIN STORY</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-rose-200/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.7)]" />
                    LIVE BUILD
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-[13px] leading-relaxed text-stone-200/95 relative">
                  <p>
                    We kept losing motivation in traditional courses. Not because we hated learning — but because
                    nothing responded when we made a different choice.
                  </p>
                  <p>
                    So we asked: what if &quot;study&quot; felt more like queuing into a cooperative raid? Same effort,
                    but with storylines, worlds, and a mentor that sees how you think — not just what you memorized.
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
          <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-50">
              The student squad behind the arena
            </h2>
            <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-stone-500">
              ROLE · NAME · TAGLINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {studentSquad.map((member, i) => (
              <article
                key={member.name}
                className={`group relative rounded-sm border border-stone-600/50 bg-[#120f0c]/80 backdrop-blur-md p-4 sm:p-5 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-400/35 ${
                  i === 0 ? "sm:rotate-[-0.4deg]" : "sm:rotate-[0.4deg]"
                }`}
              >
                <div className="w-full aspect-square rounded-sm overflow-hidden border border-stone-700/80 bg-stone-900/50 mb-4 shadow-inner ring-1 ring-inset ring-white/5">
                  <img
                    src={member.photo}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-rose-300/80">{member.role}</p>
                  <p className="text-sm font-semibold text-stone-50">{member.name}</p>
                </div>
                <p className="text-xs sm:text-sm text-stone-300/95 leading-relaxed mt-2">{member.tagline}</p>

                <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-rose-200/0 group-hover:ring-rose-300/20 transition-all duration-300" />
              </article>
            ))}
          </div>
        </section>

        {/* Quest timeline */}
        <section
          className="max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500 mb-2">SEASON 0 · ORIGIN QUESTS</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif tracking-tight text-stone-50">
                How a study group turned into a learning arena
              </h2>
            </div>
          </div>

          <div className="relative pl-5 sm:pl-8">
            <div className="absolute left-2 sm:left-3 top-2 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-rose-500/70 via-amber-600/50 to-stone-800/40 shadow-[0_0_24px_rgba(251,113,133,0.25)]" />
            <div className="space-y-10 sm:space-y-12">
              {questTimeline.map((quest, idx) => (
                <div key={quest.title} className="relative flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-3.5 h-3.5 rotate-45 bg-gradient-to-br from-rose-300 to-amber-500 border border-stone-900 shadow-[0_0_12px_rgba(251,191,36,0.45)]" />
                    {idx !== questTimeline.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-amber-500/40 to-transparent mt-2 min-h-[2.5rem]" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="inline-flex items-center gap-2 rounded-md border border-stone-600/70 bg-stone-900/60 px-2.5 py-1 mb-3">
                      <span className="text-[10px] font-mono text-rose-200/90">{quest.label}</span>
                      <span className="w-px h-3 bg-stone-600" />
                      <span className="text-[10px] text-stone-400">{quest.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-50">{quest.title}</h3>
                    <p className="text-sm sm:text-base text-stone-300/95 max-w-2xl leading-relaxed">
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
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500 mb-2">DESIGN PRINCIPLES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl font-serif tracking-tight text-stone-50">
              The rules we use to make learning feel like a game — without losing the seriousness of your future.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {values.map((value) => (
              <article
                key={value.title}
                className={`relative rounded-lg border bg-[#15100c]/90 p-5 sm:p-6 overflow-hidden backdrop-blur-sm ${value.frame}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.wash}`} />
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-stone-50">{value.title}</h3>
                  <p className="text-sm sm:text-base text-stone-300/95 leading-relaxed">{value.description}</p>
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
          <div className="relative overflow-hidden rounded-xl border border-rose-400/20 bg-gradient-to-br from-[#1a1410] via-stone-950 to-[#0c0a08] p-5 sm:p-8 shadow-[0_28px_80px_rgba(0,0,0,0.5)]">
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,rgba(251,113,133,0.2),transparent_55%)]" />
            <div className="relative">
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif tracking-tight text-stone-50">
                  This isn&apos;t our story alone — it&apos;s the arena you step into.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-stone-300/95 leading-relaxed mb-5">
                We&apos;re still students — still learning, still iterating, still wiping on new boss mechanics. NovaX is
                our attempt to make those attempts visible, trackable, and shareable so more people can level up
                together, faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
                  If you&apos;re a student, educator, or just someone obsessed with better ways to think, this platform
                  is a collaborative learning game but on a serious level — not a finished product. Bring your own story in.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 border-rose-400/45 text-rose-100 hover:bg-rose-500/10 hover:text-rose-50 rounded-lg px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium bg-stone-950/40"
                >
                  <a href="mailto:novaniansupp@gmail.com">Write your chapter with us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="max-w-4xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          data-scroll="fade-up"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              onClick={handleUnavailable}
              className="text-xs sm:text-sm text-stone-500 hover:text-stone-100 hover:bg-white/5 rounded-full px-4 py-2 border border-transparent hover:border-stone-700"
            >
              How it works
            </Button>
            <Button
              variant="ghost"
              onClick={handleUnavailable}
              className="text-xs sm:text-sm text-stone-500 hover:text-stone-100 hover:bg-white/5 rounded-full px-4 py-2 border border-transparent hover:border-stone-700"
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              onClick={handleUnavailable}
              className="text-xs sm:text-sm text-stone-500 hover:text-stone-100 hover:bg-white/5 rounded-full px-4 py-2 border border-transparent hover:border-stone-700"
            >
              Terms of Service
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;

