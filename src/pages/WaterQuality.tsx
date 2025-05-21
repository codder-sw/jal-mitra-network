
import React from 'react';
import WaterQualityIndex from '../components/WaterQualityIndex';

const WaterQuality = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Water Quality</h1>
      <WaterQualityIndex />
      
      <div className="mt-8">
        <p className="text-gray-600 mb-4">
          Monitoring water quality is essential for ensuring the health and safety of communities. Our Water Quality Index (WQI) provides real-time data on water quality in different regions across India.
        </p>
        
        <div className="bg-water/5 p-6 rounded-lg my-6">
          <h2 className="text-xl font-semibold mb-4">Understanding Water Quality Index</h2>
          <p className="mb-4">The Water Quality Index is a composite measure that indicates the overall quality of water in a specific region. It takes into account various parameters such as:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>pH levels</li>
            <li>Dissolved oxygen</li>
            <li>Biochemical oxygen demand</li>
            <li>Total coliform bacteria</li>
            <li>Nitrates and phosphates</li>
            <li>Turbidity</li>
            <li>Total dissolved solids</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WaterQuality;
