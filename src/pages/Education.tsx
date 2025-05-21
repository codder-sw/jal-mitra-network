
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const resources = [
    {
      title: 'Water Conservation Guide for Students',
      description: 'Interactive lessons on water conservation practices for students of all ages.',
      tags: ['Students', 'Interactive']
    },
    {
      title: 'Classroom Activities',
      description: 'Hands-on activities for teachers to engage students in water conservation topics.',
      tags: ['Teachers', 'Activities']
    },
    {
      title: 'Water Audit Toolkit',
      description: 'Tools and guidelines for conducting water audits in schools and communities.',
      tags: ['Advanced', 'Toolkit']
    },
    {
      title: 'Interactive Water Cycle',
      description: 'Visual guide to understanding the water cycle and human impact.',
      tags: ['Visual', 'Beginner']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Education Resources</h1>
      
      <p className="text-gray-600 mb-6">
        Education is key to creating lasting change in water conservation practices. Our resources are designed for students, teachers, and communities to learn about water issues and solutions.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Educational Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-water/5 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Water Conservation Quiz</h2>
        <p className="mb-4">Test your knowledge about water conservation and learn ways to reduce your water footprint.</p>
        <button className="bg-water hover:bg-water/90 text-white font-medium py-2 px-4 rounded-md">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Education;
