import React from 'react';
import IncidentList from '../components/IncidentList';
import EvidenceUpload from '../components/EvidenceUpload';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <IncidentList />
      <EvidenceUpload />
    </div>
  );
};

export default Dashboard;
