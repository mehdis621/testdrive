import React, { useState, useEffect, useRef } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import BottomNavBar from './components/BottomNavBar';
import OfflineError from './components/OfflineError';
import Login from './components/Login';

const WEBSITE_URL = "https://test-drive.ir/test-questions-of-the-main-regulations/";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => localStorage.getItem('isLoggedIn') === 'true');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const [canGoBack, setCanGoBack] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const initialLoadCompleted = useRef<boolean>(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleReload = () => {
    if (navigator.onLine) {
      setIsOffline(false);
      setIsLoading(true);
      setIframeKey(prevKey => prevKey + 1);
      setCanGoBack(false);
      initialLoadCompleted.current = false;
    } else {
      setIsOffline(true);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    const handleOnline = () => {
      handleReload();
    };
    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    handleReload();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isLoggedIn]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    if (isOffline) {
      setIsOffline(false);
    }
    if (initialLoadCompleted.current) {
      setCanGoBack(true);
    } else {
      initialLoadCompleted.current = true;
    }
  };
  
  const handleIframeError = () => {
    setIsLoading(false);
    if (!navigator.onLine) {
      setIsOffline(true);
    }
  }

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'آزمون آیین نامه رانندگی',
        text: 'این سایت را برای آمادگی در آزمون آیین نامه رانندگی بررسی کنید!',
        url: WEBSITE_URL,
      }).catch(console.error);
    } else {
      alert('مرورگر شما از قابلیت اشتراک گذاری پشتیبانی نمی کند.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCanGoBack(false);
    initialLoadCompleted.current = false;
  };

  const handleBackClick = () => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.history.back();
      }
    } catch (error) {
      console.error("Error navigating back in iframe:", error);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="w-screen h-screen bg-gray-900 animate-fade-in">
      <main className="relative w-full h-full">
        {isOffline ? (
          <OfflineError onRetry={handleReload} />
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-20">
                <LoadingSpinner />
                <p className="text-white mt-4 text-lg font-sans">در حال بارگذاری...</p>
              </div>
            )}
            <iframe
              ref={iframeRef}
              key={iframeKey}
              src={WEBSITE_URL}
              title="آزمون آیین نامه رانندگی"
              className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation allow-downloads"
            />
          </>
        )}
      </main>
      
      {!isOffline && (
        <BottomNavBar
          onHomeClick={handleReload}
          onShareClick={handleShareClick}
          onExitClick={handleLogout}
          onBackClick={handleBackClick}
          canGoBack={canGoBack}
        />
      )}
    </div>
  );
};

export default App;