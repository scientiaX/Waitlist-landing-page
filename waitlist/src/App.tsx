import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroductionPage from "@/pages/IntroductionPage";

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/how-it-works" element={<NotAvailablePage title="How It Works" />} />
        <Route path="/about-us" element={<NotAvailablePage title="About Us" />} />
        <Route path="/contact" element={<NotAvailablePage title="Contact" />} />
        <Route path="/privacy-policy" element={<NotAvailablePage title="Privacy Policy" />} />
        <Route path="/terms-of-service" element={<NotAvailablePage title="Terms of Service" />} />
        <Route path="/login" element={<Placeholder title="Login" />} />
        <Route path="/pricing" element={<Placeholder title="Pricing" />} />
      </Routes>
    </BrowserRouter>
  );
}
