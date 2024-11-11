import React from 'react';
import EvidenceUpload from '../components/EvidenceUpload';

const EvidencePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Evidence</h1>
      <EvidenceUpload />
    </div>
  );
};

export default EvidencePage;
