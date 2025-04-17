import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/footer";
import Navbar from './components/navbar';
import Hero from './components/hero';
import Timeline from './components/timeline';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Timeline/>
      </main>
      <Footer />
    </div>
  );
}


export default App
