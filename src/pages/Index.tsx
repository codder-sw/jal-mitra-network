
import React from 'react';
import Hero from '../components/Hero';
import WaterCrisisStats from '../components/WaterCrisisStats';
import ImpactFeatures from '../components/ImpactFeatures';
import WaterQualityIndex from '../components/WaterQualityIndex';
import CommunityStories from '../components/CommunityStories';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <WaterCrisisStats />
        <div className="my-12 border-t border-gray-100"></div>
        <WaterQualityIndex />
        <div className="my-12 border-t border-gray-100"></div>
        <CommunityStories />
      </div>
      <ImpactFeatures />
    </div>
  );
};

export default Index;
