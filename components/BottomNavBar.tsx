import React, { useState } from 'react';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const ExitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

interface BottomNavBarProps {
  onHomeClick: () => void;
  onShareClick: () => void;
  onExitClick: () => void;
  onBackClick: () => void;
  onSettingsClick: () => void;
  canGoBack: boolean;
}

const ActionButton = ({
  onClick,
  label,
  children,
  delay,
  isOpen,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  delay: number;
  isOpen: boolean;
}) => (
    <div className={`flex items-center justify-start w-full transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
         style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        <button
            onClick={onClick}
            className="flex-shrink-0 bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={label}
        >
            {children}
        </button>
        <span className={`bg-gray-700 text-white text-sm rounded-md px-3 py-1 ml-4 whitespace-nowrap shadow-md transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              style={{ transitionDelay: `${delay + 50}ms`, transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            {label}
        </span>
    </div>
);


const BottomNavBar: React.FC<BottomNavBarProps> = ({ onHomeClick, onShareClick, onExitClick, onBackClick, onSettingsClick, canGoBack }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    const handleAction = (action: () => void) => {
        action();
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-2 left-2 z-50">
            <div className="relative flex flex-col-reverse items-start space-y-4 space-y-reverse">
                {/* Main FAB */}
                <button
                    onClick={toggleMenu}
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform duration-300 z-10"
                    aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
                    aria-expanded={isOpen}
                >
                    <div
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                    >
                        <PlusIcon />
                    </div>
                </button>

                {/* Action Buttons Container */}
                <div
                    className={`flex flex-col items-start space-y-4 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {canGoBack && (
                        <ActionButton onClick={() => handleAction(onBackClick)} label="بازگشت" delay={200} isOpen={isOpen}>
                            <BackIcon />
                        </ActionButton>
                    )}
                    <ActionButton onClick={() => handleAction(onExitClick)} label="خروج" delay={150} isOpen={isOpen}>
                        <ExitIcon />
                    </ActionButton>
                    <ActionButton onClick={() => handleAction(onSettingsClick)} label="تنظیمات" delay={100} isOpen={isOpen}>
                        <SettingsIcon />
                    </ActionButton>
                    <ActionButton onClick={() => handleAction(onShareClick)} label="اشتراک گذاری" delay={50} isOpen={isOpen}>
                        <ShareIcon />
                    </ActionButton>
                    <ActionButton onClick={() => handleAction(onHomeClick)} label="صفحه آغازین" delay={0} isOpen={isOpen}>
                        <HomeIcon />
                    </ActionButton>
                </div>
            </div>
        </div>
    );
};

export default BottomNavBar;