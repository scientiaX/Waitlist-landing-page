import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { type ReactElement, useRef } from "react";

const IntroductionPage = () => {
  useScrollAnimation();

  const videoDemoRef = useRef<HTMLDivElement>(null);
  const WAITLIST_FORM_URL = "https://tally.so/r/zxDAyZ";
  const YOUTUBE_DEMO_VIDEO_ID = "sga8QDniKls";

  const scrollToVideoDemo = () => {
    videoDemoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      ),
      text: "How It Works",
      to: "/how-it-works",
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
      text: "About Us",
      to: "/about-us",
    },
  ] satisfies Array<{ icon: ReactElement; text: string; to: string }>;

  return (
    <div>
      <header
        className="fixed z-50 left-1/2 -translate-x-1/2
                  flex items-center justify-between
                  px-3 py-2 sm:px-4 sm:py-3 rounded-[18px]
                  bg-black/60 backdrop-blur-lg border border-white/10 shadow-2xl
                  max-w-4xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
        style={{ top: "env(safe-area-inset-top, 0.5rem)" }}
      >
        <div className="font-bold text-white text-lg sm:text-xl tracking-wide select-none">
          NovaX
        </div>

        <nav className="flex items-center space-x-1 sm:space-x-1.5">
          {navItems.map((item, idx) => (
            <Button
              key={idx}
              variant="ghost"
              asChild
              className="flex items-center space-x-1 sm:space-x-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg
                        text-white/90 hover:text-white hover:bg-white/10
                        transition-colors"
            >
              <Link to={item.to}>
                <span className="w-4 h-4">{item.icon}</span>
                <span className="hidden sm:inline text-sm font-normal">
                  {item.text}
                </span>
              </Link>
            </Button>
          ))}
        </nav>
      </header>

      <div className="min-h-screen relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/cosmic-planet-background.jpg)" }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,1)_100%)]" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">
                <span className="bg-gradient-to-r from-cosmic-glow via-cosmic-aurora to-cosmic-sunrise bg-clip-text text-transparent animate-float">
                  NovaX
                </span>
              </h1>
            </div>

            <div className="animate-fade-in [animation-delay:0.5s] opacity-0">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-2 sm:px-4">
                first problem-based learning environment
                <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent"> with world simulations and superhuman mentor</span>
              </p>
            </div>

            <div className="animate-fade-in [animation-delay:1s] opacity-0">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cosmic-glow to-transparent mx-auto" />
            </div>
          </div>

          <div className="absolute bottom-10 right-10 w-32 h-32 bg-cosmic-aurora/10 rounded-full blur-2xl animate-cosmic-glow [animation-delay:2s]" />
          <div className="absolute top-20 right-1/4 w-16 h-16 bg-cosmic-sunrise/15 rounded-full blur-xl animate-float [animation-delay:3s]" />
        </div>
      </div>

      <div className="min-h-screen bg-black text-white flex items-center">
        <div className="w-full px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
              fun like a game.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                light like Duolingo. effective like work.
              </span>
            </h2>

            <div className="mt-10 sm:mt-12">
              <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/assets/cosmic-planet-background.jpg"
                >
                  <source src="/assets/feature-lightning.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                <div className="p-6 sm:p-10">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                    <img
                      src="/assets/fun.png"
                      alt="When effectiveness meets fun"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-10 text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#58CC02]">
                    when effectiveness meets fun
                  </h3>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                    PBL has proven to be effective, but tedious. We make it short, fast, and addictive by cutting it down to many steps, but it's still effective by making you reflect on the experience — like a game.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                <div className="p-6 sm:p-10 text-left md:order-1">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#58CC02]">
                    when complexity becomes intuitive
                  </h3>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                    Complex concepts are broken down into clear micro-steps. You're guided from confusion to understanding through examples, instant feedback, decision impacts, and exercises that feel natural — one screen, one simple step.
                  </p>
                </div>

                <div className="p-6 sm:p-10 order-first md:order-2">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                    <img
                      src="/assets/complex.png"
                      alt="When complexity becomes intuitive"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                <div className="p-6 sm:p-10">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                    <img
                      src="/assets/degrees.png"
                      alt="When degrees lose to capability"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-10 text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#58CC02]">
                    when degrees lose to capability
                  </h3>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                    NovaX measures your problem-solving abilities — regardless of your unique approach. We accurately record every experience you have. No empty claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="flex-1 p-4">
          <div className="max-w-7xl mx-auto">
            <div
              className="max-w-6xl mx-auto pb-8 sm:pb-14 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
            >
              <div className="mb-6 sm:mb-8 md:mb-16 pt-6 sm:pt-8 md:pt-24 px-3 sm:px-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Transform Your Mind<br />
                  <span className="bg-gradient-to-r from-red-500 via-blue-500 to-[#877D2D] bg-clip-text text-transparent">
                    In 10 Minutes
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl text-left">
                  Experience learning from a dynamic world simulation with adaptive AI.
                </p>
                <a
                  href={WAITLIST_FORM_URL}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl text-sm sm:text-base md:text-lg font-semibold hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/20 w-full sm:w-auto inline-block text-center"
                >
                  <span className="bg-gradient-to-r from-[#877D2D] to-[#EFDADA] bg-clip-text text-transparent">
                    Join Waitlist
                  </span>
                </a>
              </div>

              <div className="mb-6 sm:mb-8 md:mb-24 px-3 sm:px-4">
                <div className="space-y-10 sm:space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    <div
                      className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                        Adaptive Dynamic Simulation
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mt-2 max-w-xl">
                        Dynamic simulation flow personalized for you-realtime.
                      </p>
                    </div>

                    <div
                      className="relative w-full aspect-video overflow-hidden rounded-3xl opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/assets/cosmic-planet-background.jpg"
                      >
                        <source src="/assets/scene/dynamic%20arena.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    <div
                      className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                        Personalized Arena
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mt-2 max-w-xl">
                        Arena environments and challenges personalized to your capabilities.
                      </p>
                    </div>

                    <div
                      className="relative w-full aspect-video overflow-hidden rounded-3xl opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/assets/cosmic-planet-background.jpg"
                      >
                        <source src="/assets/scene/arena%20gen.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    <div
                      className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                        Smartest Superhuman
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mt-2 max-w-xl">
                        AI that analyzes and adapts to your responses, how you act and who you are in real time.
                      </p>
                    </div>

                    <div
                      className="relative w-full aspect-video overflow-hidden rounded-3xl opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/assets/cosmic-planet-background.jpg"
                      >
                        <source src="/assets/scene/ai%20analyze%20behavior.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="text-center mb-6 sm:mb-8 md:mb-24 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                data-scroll="fade-up"
              >
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Problem Solving</span> Matters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto px-3 sm:px-4">
                  <div
                    className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                    data-scroll="fade-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-yellow-400 mb-2 sm:mb-3 md:mb-4">
                      WORLD ECONOMIC FORUM
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Problem-solving is the #1 skill needed in the era of automation and AI orchestrations
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                    data-scroll="fade-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-blue-400 mb-2 sm:mb-3 md:mb-4">
                      TOP LINKEDIN SKILL
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Most sought-after skill by employers across all industries
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="text-center opacity-0 transform translate-y-8 transition-all duration-1000 ease-out px-3 sm:px-4"
                data-scroll="fade-up"
              >
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                  Ready to <span className="bg-gradient-to-r from-red-500 via-blue-500 to-yellow-300 bg-clip-text text-transparent">Join Waitlist</span>?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of students and train your problem solving skills collaboratively
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
                  <button
                    className="border border-gray-600 text-gray-300 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 w-full sm:w-auto"
                    onClick={scrollToVideoDemo}
                  >
                    Watch The Introduction Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="flex-1 p-4">
          <div className="max-w-7xl mx-auto">
            <div
              className="max-w-6xl mx-auto pb-8 sm:pb-14 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
            >
              <div className="mb-6 sm:mb-8 md:mb-16 px-3 sm:px-4 text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Track real progress with new credentials that prove what you can solve
                </h1>
                <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl">
                  Thinking patterns + Project portfolio + Decision trees + Capability artifacts
                </p>
              </div>

              <div className="relative">
                <div className="p-0 relative z-10">
                  <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-4 md:px-0">
                    <div
                      className="w-full opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                        <div className="text-left">
                          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-2 sm:mb-3 md:mb-4">
                            AI TRANSCENDENT
                          </h2>
                          <p className="text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                            AI that accesses and analyzes thinking patterns, behavior patterns, decision trees and capability levels.
                          </p>
                        </div>

                        <div className="relative w-full aspect-video overflow-hidden rounded-3xl">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster="/assets/cosmic-planet-background.jpg"
                          >
                            <source src="/assets/feature-progress-tracking.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>

                    <div
                      className="w-full opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                      data-scroll="fade-up"
                      style={{ animationDelay: "0.55s" }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                        <div className="text-left">
                          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-2 sm:mb-3 md:mb-4">
                            GET REAL PROOF OF YOUR CAPABILITIES
                          </h2>
                          <p className="text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                            Credentials that show what problems you solve, how you solve them, and every decision you make — not paper exam degrees.
                          </p>
                        </div>

                        <div className="relative w-full aspect-video overflow-hidden rounded-3xl">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster="/assets/cosmic-planet-background.jpg"
                          >
                            <source src="/assets/feature-progress-tracking.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div
              ref={videoDemoRef}
              className="py-16 sm:py-24 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div
                  className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-3xl shadow-2xl bg-black opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                  data-scroll="fade-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${YOUTUBE_DEMO_VIDEO_ID}?rel=0&modestbranding=1`}
                    title="NovaX Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        id="about-us"
        className="bg-gray-900 text-white py-16 sm:py-20 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        data-scroll="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div
              className="lg:col-span-2 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">NovaX</h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Empowering the next generation of problem solvers and truth seekers with AI-powered learning experiences that adapt to your unique thought.
                </p>
              </div>

              <div className="flex space-x-4">
                <a href="https://tiktok.com/@novax_arena" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@novax-arena" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://x.com/novax_arena" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/scientiax-novax" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://instagram.com/novaxarena" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><a href="mailto:novaniansupp@gmail.com" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div
              className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              data-scroll="fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-800 mt-12 pt-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
            data-scroll="fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 NovaX. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntroductionPage;
