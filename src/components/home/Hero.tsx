
import React from 'react';
import { Link } from 'react-router-dom';
import { Plant, Search, Database, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-crop-green-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-crop-green-800 mb-6">
              Your Smart Farming Companion
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Enhance your agricultural productivity with AI-powered crop disease detection, 
              personalized recommendations, and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-crop-green-600 hover:bg-crop-green-700 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-crop-green-600 text-crop-green-600 hover:bg-crop-green-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] bg-[url('https://images.unsplash.com/photo-1592982537447-7440770faae9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl shadow-xl"></div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg animate-fade-in transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-crop-green-100 p-3 rounded-full">
                  <Plant className="h-6 w-6 text-crop-green-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900">Crop Health</h3>
                  <p className="text-gray-500 text-sm">98% Healthy</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-crop-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
