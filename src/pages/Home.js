// src/pages/Home.js
import React from 'react';
import OverviewSection from '../Components/OverviewSection';
import FeaturesSection from '../Components/FeaturesSection';
import SummarySection from '../Components/SummarySection';

const Home = () => {
  return (
    <div>
      <main>
        <OverviewSection />
        <FeaturesSection />
        <SummarySection />
      </main>
    </div>
  );
};

export default Home;