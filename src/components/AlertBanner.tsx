import React from 'react';

interface AlertBannerProps {
  message: string;
  type: 'success' | 'error' | 'warning';
}

const AlertBanner = ({ message, type }: AlertBannerProps) => {
  const getColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return '';
    }
  };

  return (
    <div className={`p-4 rounded ${getColor()} text-white`}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBanner;
