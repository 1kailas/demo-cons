/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import QualityBlogSection from './components/QualityBlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Track window scroll heights to highlight high-end sticky headers
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['hero-section', 'about', 'services', 'projects', 'contact'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          const offsetHeight = el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            const mappedSection = sectionId === 'hero-section' ? 'home' : sectionId;
            setCurrentSection(mappedSection);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    let targetId = section === 'home' ? 'hero-section' : section;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-slate-100 selection:bg-[#FF3E00] selection:text-white">
      {/* Sticky Header */}
      <Navbar currentSection={currentSection} onNavigate={handleNavigation} />

      {/* Main content sections layout */}
      <main>
        {/* Hero & Interactive Configurator */}
        <Hero onNavigate={handleNavigation} />

        {/* Company History & Roots metrics */}
        <AboutSection />

        {/* Custom Bento Glazing Services */}
        <ServicesSection />

        {/* Portfolio Filter Showcase */}
        <ProjectsSection />

        {/* Featured Editorial Ad block */}
        <QualityBlogSection />

        {/* Contact Form & Radar Coordinates */}
        <ContactSection />
      </main>

      {/* Modern Footer with quick routes */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

