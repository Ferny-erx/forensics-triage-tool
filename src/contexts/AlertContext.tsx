import React, { createContext, useContext, useState } from 'react';

interface AlertContextType {
  alert: string | null;
  showAlert: (message: string) => void;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<string | null>(null);

  const showAlert = (message: string) => setAlert(message);
  const clearAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, showAlert, clearAlert }}>
      {children}
      {alert && (
        <div className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded shadow">
          {alert}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useAlert must be used within AlertProvider');
  return context;
};
