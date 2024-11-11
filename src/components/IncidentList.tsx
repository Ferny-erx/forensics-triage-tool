import React, { useEffect, useState } from 'react';
import { fetchIncidents } from '../services/incidentAPI';

interface Incident {
  id: number;
  title: string;
  description: string;
  date: string;
}

const IncidentList = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    fetchIncidents().then(data => setIncidents(data));
  }, []);

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl mb-4">Incident List</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <h3>{incident.title}</h3>
            <p>{incident.description}</p>
            <p className="text-sm text-gray-500">{incident.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;
