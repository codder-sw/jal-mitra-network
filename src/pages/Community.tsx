
import React from 'react';
import CommunityStories from '../components/CommunityStories';
import { Card, CardContent } from '@/components/ui/card';

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      
      <p className="text-gray-600 mb-6">
        Our growing community of water conservation advocates spans across India, from rural villages to urban centers. Together, we're making a difference in how water resources are managed and protected.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
        <CommunityStories />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Impact Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="text-4xl font-bold text-water">250+</h3>
              <p className="text-sm text-gray-600 mt-2">Communities Engaged</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="text-4xl font-bold text-water">10M+</h3>
              <p className="text-sm text-gray-600 mt-2">Liters Saved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="text-4xl font-bold text-water">15K+</h3>
              <p className="text-sm text-gray-600 mt-2">Farmers Supported</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="text-4xl font-bold text-water">500+</h3>
              <p className="text-sm text-gray-600 mt-2">School Programs</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Join The Movement</h2>
        <div className="bg-water/5 p-6 rounded-lg">
          <p className="mb-4">Take the pledge to conserve water and become part of our growing community of water stewards.</p>
          <form className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent"
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent"
                  placeholder="Your email" 
                />
              </div>
            </div>
            <button type="submit" className="bg-water hover:bg-water/90 text-white font-medium py-2 px-4 rounded-md">
              Take the Pledge
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Community;
