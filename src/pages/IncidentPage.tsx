import React from 'react';
import IncidentList from '../components/IncidentList';

const IncidentPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Incidents</h1>
      <IncidentList />
    </div>
  );
};

export default IncidentPage;
