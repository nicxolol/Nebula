import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PremiumBanner from "./components/PremiumBanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1492792025886625882&permissions=8&integration_type=0&scope=bot";
  const supportLink = "https://discord.gg/wjtJdsRhcg";

  return (
    <div className="relative min-h-screen bg-[#030305] text-slate-300 selection:bg-indigo-600 selection:text-white" id="nebula-landing-app">
      {/* Dynamic Cosmic Backdrop / Ambient Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-indigo-505/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation bar */}
      <Navbar inviteLink={inviteLink} supportLink={supportLink} />

      {/* Sections of page */}
      <Hero inviteLink={inviteLink} supportLink={supportLink} />
      
      <Features />
      
      <PremiumBanner inviteLink={inviteLink} supportLink={supportLink} />
      
      <FAQ />

      {/* Page footer */}
      <Footer inviteLink={inviteLink} supportLink={supportLink} />
    </div>
  );
}
