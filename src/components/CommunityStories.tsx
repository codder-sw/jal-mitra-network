
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Sample community stories data
const communityStories = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Maharashtra',
    image: '/placeholder.svg',
    story: 'Our village implemented rainwater harvesting systems, increasing groundwater levels by 30% in just one year.',
    impact: 'Water availability increased for 500+ families',
  },
  {
    id: 2,
    name: 'Priya Singh',
    location: 'Karnataka',
    image: '/placeholder.svg',
    story: 'We started a school awareness program, teaching 1,000+ children about water conservation techniques they can practice at home.',
    impact: 'Reduced water usage in community by 20%',
  },
  {
    id: 3,
    name: 'Anand Sharma',
    location: 'Gujarat',
    image: '/placeholder.svg',
    story: 'Switching to drip irrigation saved our farm during the drought and reduced our water consumption by 60%.',
    impact: 'Maintained crop yield while saving water',
  }
];

const CommunityStories: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{t('community.title')}</h2>
        <p className="text-gray-600">{t('community.subtitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communityStories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{story.story}</p>
              <div className="bg-green-50 px-3 py-2 rounded-md text-sm font-medium text-green-800">
                Impact: {story.impact}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CommunityStories;
