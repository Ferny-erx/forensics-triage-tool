import React from 'react';
import RiskScoreCard from '../components/RiskScoreCard';

const RiskAssessmentPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Risk Assessment</h1>
      <RiskScoreCard score={6} />
    </div>
  );
};

export default RiskAssessmentPage;
