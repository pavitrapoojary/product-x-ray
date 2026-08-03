import React from 'react';

interface CompanyLogoProps {
  name: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, className = 'w-10 h-10' }) => {
  const normName = name.toLowerCase().trim();

  // Custom vector rendering of company logos for a highly premium, offline-capable UI.
  switch (normName) {
    case 'zomato':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#cb202d] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85c-1.2 0-2.4-.5-3.2-1.4C36.4 71.9 20 51.5 20 37.1 20 22.2 32.2 10 47.1 10c6.6 0 12.8 2.4 17.6 6.8 4.8-4.4 11-6.8 17.6-6.8C97.2 10 109.4 22.2 109.4 37.1c0 14.4-16.4 34.8-26.8 46.5-.8.9-2 1.4-3.2 1.4H50z" transform="scale(0.8) translate(12, 12)" />
          </svg>
        </div>
      );
    case 'swiggy':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#fc8019] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 stroke-white fill-none stroke-[8]" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M65 20C55 20 45 35 45 45s15 15 15 25-15 15-20 15" />
            <circle cx="58" cy="72" r="4" fill="white" />
          </svg>
        </div>
      );
    case 'cred':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#09090b] text-white font-black border border-slate-850 overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 stroke-white fill-none stroke-[6]" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50h60M35 30l15 20-15 20M65 30L50 50l15 20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'paytm':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#00b9f5] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-[10px] font-extrabold tracking-tighter text-white">paytm</span>
        </div>
      );
    case 'zepto':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#522b90] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-base font-black italic text-white font-serif">z</span>
        </div>
      );
    case 'blinkit':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#ffc72c] text-black font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-[10px] font-black tracking-tight text-black">blinkit</span>
        </div>
      );
    case 'zerodha':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#387ed1] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L15 50l35 35 35-35z" />
          </svg>
        </div>
      );
    case 'groww':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#00d09c] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 stroke-white fill-none stroke-[8]" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 70c10-25 25-45 45-45s20 20 20 45" />
            <circle cx="50" cy="40" r="6" fill="white" />
          </svg>
        </div>
      );
    case 'figma':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-black overflow-hidden shadow-sm p-1.5 ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25 a12.5 12.5 0 0 1 25 0 a12.5 12.5 0 0 1 -25 0" fill="#F24E1E"/>
            <path d="M25 50 a12.5 12.5 0 0 1 25 0 a12.5 12.5 0 0 1 -25 0" fill="#A259FF"/>
            <path d="M25 75 a12.5 12.5 0 0 1 25 0 a12.5 12.5 0 1 1 -25 0" fill="#1ABC9C"/>
            <path d="M50 50 a12.5 12.5 0 0 1 25 0 a12.5 12.5 0 0 1 -25 0" fill="#18A0FB"/>
            <path d="M50 25 a12.5 12.5 0 0 1 25 0 a12.5 12.5 0 0 1 -25 0" fill="#FF7262"/>
          </svg>
        </div>
      );
    case 'stripe':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#635bff] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-base font-extrabold tracking-tighter">s</span>
        </div>
      );
    case 'notion':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-white border border-slate-200 text-black font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-base font-bold font-mono">N</span>
        </div>
      );
    case 'spotify':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#1db954] text-black overflow-hidden p-1.5 shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 35 Q50 25 75 35" stroke="black" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M30 48 Q50 39 70 48" stroke="black" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M35 61 Q50 53 65 61" stroke="black" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );
    case 'airbnb':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#ff5a5f] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 stroke-white fill-none stroke-[6]" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15c-15 0-25 15-25 30 0 10 5 15 10 20s15 15 15 20c0-5 10-15 15-20s10-10 10-20c0-15-10-30-25-30z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="45" r="5" fill="white" />
          </svg>
        </div>
      );
    case 'uber':
    case 'uber india':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-black text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-xs font-bold tracking-tight">Uber</span>
        </div>
      );
    case 'netflix':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-black text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-sm font-black text-[#e50914] font-serif">N</span>
        </div>
      );
    case 'slack':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#4a154b] text-white font-black overflow-hidden shadow-sm p-1 ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="10" fill="#36C5F0" />
            <circle cx="65" cy="35" r="10" fill="#2EB67D" />
            <circle cx="35" cy="65" r="10" fill="#ECB22E" />
            <circle cx="65" cy="65" r="10" fill="#E01E5A" />
          </svg>
        </div>
      );
    case 'zoom':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#2d8cff] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="30" width="45" height="40" rx="8" />
            <path d="M60 40l25-12v44L60 60z" />
          </svg>
        </div>
      );
    case 'canva':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#00c4cc] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-sm font-extrabold italic tracking-tighter">C</span>
        </div>
      );
    case 'whatsapp':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#25d366] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15c-19.3 0-35 15.7-35 35 0 6.2 1.6 12 4.4 17L20 80l13.5-4.4c4.8 2.6 10.3 4.1 16.5 4.1 19.3 0 35-15.7 35-35S69.3 15 50 15z" />
          </svg>
        </div>
      );
    case 'tinder':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#fe3c72] to-[#ff7854] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.5 85c-15.8 0-28.5-12.7-28.5-28.5 0-9.8 4.9-18.4 12.3-23.5.5-.3.9-.1 1 .4.2.8.5 2 .8 3.5.6 2.8 1.8 5 3.5 6.7.2.2.4.2.6 0 1.2-1.3 2.7-3.8 3.5-7.5 1-4.8.4-10.4-1.9-16.7-.2-.6 0-1.1.5-1.3.5-.2 1.1 0 1.4.5C47.8 25 53 33 55.5 42c.1.4.5.7.9.6.4-.1.7-.5.6-.9-.3-1.1-.5-2.2-.6-3.3 0-.5.3-.9.8-.8.3.1.6.3.7.6 1.8 4.7 4.1 8 6.8 9.9.2.1.4.1.5-.1.8-1 1.8-2.6 2.8-4.8.3-.6.9-.9 1.5-.6.5.2.7.8.6 1.4-1.6 6.8-2 12.6-1.1 17.5.3 1.6 1.1 3.2 2.3 4.7 1.8 2.2 3 4.8 3.6 7.6C75.2 73 66.8 85 48.5 85z" />
          </svg>
        </div>
      );
    case 'duolingo':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#58cc02] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="45" r="10" />
            <circle cx="65" cy="45" r="10" />
            <circle cx="35" cy="45" r="4" fill="#58cc02" />
            <circle cx="65" cy="45" r="4" fill="#58cc02" />
            <path d="M30 65q20 15 40 0" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );
    case 'flipkart':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#2874f0] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-xs font-black tracking-tight text-white">Flipkart</span>
        </div>
      );
    case 'nykaa':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#fc2779] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-xs font-extrabold tracking-tighter text-white">Nykaa</span>
        </div>
      );
    case 'boat':
      return (
        <div className={`rounded-xl flex items-center justify-center bg-[#ff0000] text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-xs font-extrabold tracking-tight text-white">boAt</span>
        </div>
      );
    default:
      return (
        <div className={`rounded-xl flex items-center justify-center bg-teal-600 text-white font-black overflow-hidden shadow-sm ${className}`}>
          <span className="text-sm font-bold uppercase">{name.substring(0, 2)}</span>
        </div>
      );
  }
};
