import React from 'react';

const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C20.7 10.6 21 10.1 21 9.5v-1c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v1c0 .6.3 1.1.5 1.4C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></path>
        <circle cx="7" cy="17" r="2"></circle>
        <circle cx="17" cy="17" r="2"></circle>
        <path d="M4.5 11.5L6 9h12l1.5 2.5"></path>
    </svg>
);


interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center text-white z-50 animate-fade-in text-center p-8">
            <div className="animate-fade-in-down" style={{ animationDelay: '100ms' }}>
                <CarIcon />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                آزمون آیین نامه رانندگی
            </h1>
            <p className="text-gray-400 mb-10 max-w-md animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                به اپلیکیشن جامع آزمون‌های رانندگی خوش آمدید. برای شروع روی دکمه زیر کلیک کنید.
            </p>
            <button
                onClick={onLogin}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: '700ms' }}
                aria-label="ورود به برنامه"
            >
                ورود به برنامه
            </button>
        </div>
    );
};

export default Login;