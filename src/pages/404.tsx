import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`mb-6 w-full bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text pt-[12rem] text-center text-4xl font-bold text-transparent transition-all duration-1000 md:text-6xl lg:text-7xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      404
    </div>
  );
}
