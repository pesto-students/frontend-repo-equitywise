// src/pages/Home.js
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import OverviewSection from '../components/OverviewSection';
import FeaturesSection from '../components/FeaturesSection';
import SummarySection from '../components/SummarySection';

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