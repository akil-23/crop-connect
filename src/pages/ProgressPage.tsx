
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Progress from '@/components/progress/Progress';

const ProgressPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Progress />
      </main>
      <Footer />
    </div>
  );
};

export default ProgressPage;
