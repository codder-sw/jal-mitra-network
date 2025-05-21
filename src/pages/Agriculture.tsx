
import React from 'react';

const Agriculture = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Sustainable Agriculture</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Agriculture is the largest consumer of freshwater in India, accounting for over 80% of water usage. Our sustainable agriculture resources help farmers implement water-efficient practices while maintaining crop yields.
        </p>
        
        <div className="bg-soil/5 p-6 rounded-lg my-6">
          <h2 className="text-xl font-semibold mb-4">Drought-Resistant Farming Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Drip Irrigation</h3>
              <p className="text-gray-600">Saves up to 60% water compared to flood irrigation by delivering water directly to plant roots.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Mulching</h3>
              <p className="text-gray-600">Reduces evaporation, suppresses weeds, and improves soil health.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Drought-Resistant Crops</h3>
              <p className="text-gray-600">Varieties that require less water and can withstand dry periods.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Rainwater Harvesting</h3>
              <p className="text-gray-600">Collecting and storing rainwater for irrigation during dry periods.</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600">
          Our network connects farmers with agricultural experts who provide guidance on implementing these techniques based on local conditions and available resources.
        </p>
      </div>
    </div>
  );
};

export default Agriculture;
