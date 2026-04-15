import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import IntroductionPage from "@/pages/IntroductionPage";
import AboutUsPage from "@/pages/AboutUsPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
    <h1 className="text-3xl font-bold">{title}</h1>
  </div>
);

const NotAvailablePage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-white/70 text-base sm:text-lg">Not available yet.</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<NotAvailablePage title="Contact" />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/login" element={<Placeholder title="Login" />} />
        <Route path="/pricing" element={<Placeholder title="Pricing" />} />
      </Routes>
    </BrowserRouter>
  );
}
