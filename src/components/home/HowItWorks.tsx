
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Data',
      description: 'Take photos of your crops or input environmental data like temperature, humidity, soil conditions.'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our machine learning models analyze your data to detect diseases or recommend optimal crops and soil.'
    },
    {
      number: '03',
      title: 'Get Recommendations',
      description: 'Receive detailed insights and actionable recommendations for your specific farming needs.'
    },
    {
      number: '04',
      title: 'Track Progress',
      description: 'Monitor your farm\'s performance over time and get continuous improvement suggestions.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple four-step process to transform your farming practices with data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                <span className="text-5xl font-bold text-crop-green-100 font-heading mb-4">{step.number}</span>
                <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
