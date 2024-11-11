export const getSeverityColor = (severity: number): string => {
    if (severity < 3) return 'text-green-500';
    if (severity < 7) return 'text-yellow-500';
    return 'text-red-500';
  };
  