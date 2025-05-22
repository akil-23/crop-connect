
import React from 'react';
import { Plant, Search, Database, ChartBar } from 'lucide-react';

const Features = () => {
  const featuresData = [
    {
      icon: <Plant className="h-10 w-10 text-crop-green-500" />,
      title: 'Disease Detection',
      description: 'Upload images of your crops to identify diseases using our advanced CNN model.',
    },
    {
      icon: <Search className="h-10 w-10 text-crop-blue-500" />,
      title: 'Crop & Soil Recommendations',
      description: 'Get personalized crop and soil suggestions based on environmental factors.',
    },
    {
      icon: <ChartBar className="h-10 w-10 text-crop-brown-500" />,
      title: 'Progress Tracking',
      description: 'Receive weekly and monthly suggestions based on your farming progress.',
    },
    {
      icon: <Database className="h-10 w-10 text-crop-green-700" />,
      title: 'Data Management',
      description: 'Store and manage all your agricultural data securely in one place.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Crop Connect combines advanced technology with agricultural expertise to provide you with the tools you need for successful farming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
