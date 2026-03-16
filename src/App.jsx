import { useState, useEffect } from 'react'
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import './App.css'

function App() {

  const [showHero, setShowHero] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  

  useEffect(() => {

    setTimeout(() => setShowHero(true), 200)
    setTimeout(() => setShowMenu(true), 1200)
    
  }, [])

  return (
    <main 
      className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
      {showHero && <Hero />}
      {showMenu && <Menu />}
      <Contact />
    </main>
  )
}

export default App


/* import React from 'react';

const SkillCard = ({ title, description, colorClass, emoji }) => (
  <div className={`p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-t-8 ${colorClass}`}>
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf5e6] text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl mb-6 text-[#4a3f35] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Schön, dass du noch Platz für ein Dessert hast!
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Bevor wir uns bei einem echten Eis in Wien treffen, serviere ich dir hier die digitalen Zutaten meiner Arbeit.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            emoji="🟢"
            title="Pistacchio Code"
            description="React-Komponenten, sauber portioniert und mit Hooks verfeinert. Struktur ist meine wichtigste Zutat."
            colorClass="border-[#d4e4bc]"
          />
          <SkillCard 
            emoji="🟡"
            title="Crema Design"
            description="Pixelgenaue Interfaces mit Liebe zum Detail und System-Denken. 15 Jahre Erfahrung, frisch serviert."
            colorClass="border-[#f3e5ab]"
          />
          <SkillCard 
            emoji="🔴"
            title="Lampone Spirit"
            description="Frische Impulse und reibungslose Collaboration. Ich brenne für Lösungen, die im Team entstehen."
            colorClass="border-[#f2a2ad]"
          />
        </div>
      </main>

      <footer className="bg-white py-24 px-6 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-4 text-[#4a3f35] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Danke für deine Zeit und deinen Appetit auf neue Projekte!
          </h2>
          <p className="text-lg mb-10 text-gray-500 italic">Ich freue mich auf Post von dir.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:hallo@deine-email.at" className="bg-[#4a3f35] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">
              Schreib mir eine Mail
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-[#4a3f35] font-bold border-b-2 border-[#4a3f35]">
              LinkedIn Profil
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} */