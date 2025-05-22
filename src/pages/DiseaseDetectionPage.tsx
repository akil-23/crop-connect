
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiseaseDetection from '@/components/disease-detection/DiseaseDetection';

const DiseaseDetectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DiseaseDetection />
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseDetectionPage;
