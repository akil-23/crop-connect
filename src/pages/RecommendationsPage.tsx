
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Recommendations from '@/components/recommendations/Recommendations';

const RecommendationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
};

export default RecommendationsPage;
