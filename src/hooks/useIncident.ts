import { useEffect, useState } from 'react';
import { fetchIncidents } from '../services/incidentAPI';

export const useIncident = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents().then(setIncidents);
  }, []);

  return incidents;
};
