// src/pages/Home.js
import React from 'react';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import OverviewSection from '../Components/OverviewSection';
import FeaturesSection from '../Components/FeaturesSection';
import SummarySection from '../Components/SummarySection';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <OverviewSection />
        <FeaturesSection />
        <SummarySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;