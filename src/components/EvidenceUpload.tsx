import React, { useState } from 'react';

const EvidenceUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log('Uploading:', file.name);
      // Implement actual upload logic here
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl mb-4">Upload Evidence</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default EvidenceUpload;
