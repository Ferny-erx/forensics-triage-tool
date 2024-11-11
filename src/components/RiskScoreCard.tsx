import React from 'react';

interface RiskScoreCardProps {
  score: number;
}

const RiskScoreCard = ({ score }: RiskScoreCardProps) => {
  const getColor = () => {
    if (score < 3) return 'bg-green-500';
    if (score < 7) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${getColor()}`}>
      <h2 className="text-xl font-semibold">Risk Score</h2>
      <p className="text-4xl font-bold">{score}</p>
    </div>
  );
};

export default RiskScoreCard;
