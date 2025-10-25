const ChristmasLights = () => {
  const lights = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'][i % 5],
    delay: i * 0.1
  }));

  return (
    <div className="absolute top-0 left-0 right-0 h-1 overflow-visible pointer-events-none z-10">
      <div className="relative w-full h-full">
        <svg className="absolute top-0 left-0 w-full h-8" preserveAspectRatio="none">
          <path
            d="M0,4 Q25,8 50,4 T100,4 T150,4 T200,4 T250,4 T300,4 T350,4 T400,4 T450,4 T500,4 T550,4 T600,4 T650,4 T700,4 T750,4 T800,4 T850,4 T900,4 T950,4 T1000,4 T1050,4 T1100,4 T1150,4 T1200,4 T1250,4 T1300,4 T1350,4 T1400,4 T1450,4 T1500,4 T1550,4 T1600,4 T1650,4 T1700,4 T1750,4 T1800,4 T1850,4 T1900,4 T1950,4 T2000,4"
            stroke="#2d2d2d"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        
        {lights.map((light, index) => (
          <div
            key={light.id}
            className="absolute animate-pulse"
            style={{
              left: `${(index / lights.length) * 100}%`,
              top: '0px',
              animationDelay: `${light.delay}s`,
              animationDuration: '1.5s'
            }}
          >
            <div
              className="w-3 h-4 rounded-b-full shadow-lg"
              style={{
                backgroundColor: light.color,
                boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
