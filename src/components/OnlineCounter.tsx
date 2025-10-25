import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const OnlineCounter = () => {
  const [online, setOnline] = useState(247);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline((prev) => {
        const change = Math.floor(Math.random() * 5) + 1;
        const shouldIncrease = Math.random() > 0.5;
        
        let newValue = shouldIncrease ? prev + change : prev - change;
        
        if (newValue < 230) newValue = 230 + Math.floor(Math.random() * 10);
        if (newValue > 260) newValue = 260 - Math.floor(Math.random() * 10);
        
        setIsIncreasing(newValue > prev);
        
        return newValue;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <span className={`text-3xl font-bold transition-all duration-500 ${
          isIncreasing ? 'text-green-400' : 'text-primary'
        }`}>
          {online}
        </span>
        <div className={`transition-all duration-300 ${isIncreasing ? 'opacity-100' : 'opacity-0'}`}>
          <Icon name="TrendingUp" size={20} className="text-green-400" />
        </div>
      </div>
      <div className="absolute -top-1 -right-1">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
    </div>
  );
};

export default OnlineCounter;
