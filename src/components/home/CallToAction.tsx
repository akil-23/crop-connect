
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-crop-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-crop-green-50 text-lg mb-8">
            Join thousands of farmers who are using Crop Connect to improve their yields, 
            reduce losses from diseases, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-crop-green-700 hover:bg-crop-green-50 px-8 py-6 text-lg">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-crop-green-700 px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
