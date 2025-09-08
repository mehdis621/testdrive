import React from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, fontSize, onFontSizeChange }) => {
  if (!isOpen) {
    return null;
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFontSizeChange(parseInt(e.target.value, 10));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div
        className="bg-gray-800 text-white rounded-lg shadow-2xl p-6 w-11/12 max-w-sm animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="settings-title" className="text-2xl font-bold">تنظیمات</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="بستن تنظیمات"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <label htmlFor="font-size-slider" className="block text-gray-300 mb-2">
            اندازه نمایش: <span className="font-semibold text-blue-400">{fontSize}%</span>
          </label>
          <input
            id="font-size-slider"
            type="range"
            min="50"
            max="200"
            step="5"
            value={fontSize}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            aria-label={`اندازه نمایش ${fontSize}%`}
          />
           <p className="text-xs text-gray-500 pt-2">
            این تنظیم، اندازه کلی محتوای سایت را تغییر می‌دهد تا خوانایی بهتری داشته باشد.
          </p>
        </div>

        <div className="mt-8 text-right">
            <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
                بستن
            </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
