import { useEffect, useState } from 'react';
import { fetchEvidence } from '../services/evidenceAPI';

export const useEvidence = () => {
  const [evidence, setEvidence] = useState([]);

  useEffect(() => {
    fetchEvidence().then(setEvidence);
  }, []);

  return evidence;
};
