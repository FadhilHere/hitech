import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/footer";
import Navbar from './components/navbar';
import Hero from './components/hero';
import Timeline from './components/timeline';
import UiUxPage from './components/UiUxPage';
import VisualisasiDataPage from './components/VisualisasiDataPage';
import BusinessPlanPage from './components/BusinessPlanPage';
import CompetitionsPage from './components/CompetitionPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Timeline/>
        <Router>
        <Routes>
          <Route path="/" element={<CompetitionsPage />} />
          <Route path="/ui-ux" element={<UiUxPage />} />
          <Route path="/visualisasi-data" element={<VisualisasiDataPage />} />
          <Route path="/business-plan" element={<BusinessPlanPage />} />
        </Routes>
      </Router>
      </main>
      <Footer />
    </div>
  );
}


export default App
