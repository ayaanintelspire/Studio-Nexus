import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { studioData } from './data/studioData';
import ServicesStudio from './sections/ServicesStudio';
import AboutStudio from './sections/AboutStudio';
import MethodologyStudio from './sections/MethodologyStudio';
import FooterStudio from './sections/FooterStudio';
import PortfolioStudio from './sections/PortfolioStudio'; 


function App() {
  return (
    <main className="bg-studio-navy min-h-screen">
      <Navbar />
      <Hero data={studioData.hero} />
      <AboutStudio data={studioData.about} />
      <ServicesStudio data={studioData.services} />
      <PortfolioStudio data={studioData.portfolio} />
      <MethodologyStudio data={studioData.methodology} />
      <FooterStudio
        data={studioData.footer}
        socials={studioData.socialLinks} // Pass the social links here
      />  


      {/* We will build the 'Technical Grid' about section next! */}
    </main>
  );
}

export default App;