import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UiUxPage from "./components/UiUxPage";
import VisualisasiDataPage from "./components/VisualisasiDataPage";
import BusinessPlanPage from "./components/BusinessPlanPage";
import CompetitionsPage from "./components/CompetitionPage";
import HadiahPage from "./components/HadiahPage";
import CountdownSection from "./components/CountdownSection";
import OurSponsor from "./components/OurSponsor";
import OurPartnership from "./components/OurPartnership";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Ini hanya muncul di homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CountdownSection />
                  <Timeline />
                  <CompetitionsPage />
                  <HadiahPage />
                  <Faq />
                  <OurSponsor />
                  <OurPartnership />
                </>
              }
            />
            {/* Halaman kompetisi individual */}
            <Route path="/ui-ux" element={<UiUxPage />} />
            <Route path="/visualisasi-data" element={<VisualisasiDataPage />} />
            <Route path="/business-plan" element={<BusinessPlanPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
