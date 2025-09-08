import React from 'react';

const WifiOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l1.414 1.414m-9.9 9.9l1.414-1.414M1 1l22 22m-9-9a4 4 0 100-5.656 4 4 0 000 5.656zm-4.242-4.242a8 8 0 000 11.314M17.657 17.657a8 8 0 00-11.314 0" />
  </svg>
);


interface OfflineErrorProps {
  onRetry: () => void;
}

const OfflineError: React.FC<OfflineErrorProps> = ({ onRetry }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-8 z-30 text-center">
      <WifiOffIcon />
      <h1 className="text-2xl font-bold mt-6 mb-2">اتصال به اینترنت برقرار نیست</h1>
      <p className="text-gray-400 mb-8">
        لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.
      </p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
        aria-label="تلاش مجدد برای اتصال"
      >
        تلاش مجدد
      </button>
    </div>
  );
};

export default OfflineError;
