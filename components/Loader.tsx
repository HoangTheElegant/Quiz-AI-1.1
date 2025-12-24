import React from 'react';
import { SpinnerIcon } from './icons';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <SpinnerIcon className="w-8 h-8 animate-spin text-brand-primary" />
    </div>
  );
};

export default Loader;
