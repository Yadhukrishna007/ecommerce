import React, { useEffect, useState } from "react";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center font-sans">
      <div className="flex justify-center items-center space-x-2">
        {timerComponents.map(({ label, value }, index) => (
          <React.Fragment key={label}>
            <div className="text-3xl font-bold">
              <div className="text-xs mt-1">{label}</div>
              {value.toString().padStart(2, "0")}
            </div>

            {index < timerComponents.length - 1 && (
              <div className="text-3xl font-bold text-red-400 ">:</div>
            )}
          </React.Fragment>
        ))}
      </div>
      {Object.keys(timeLeft).length === 0 && (
        <p className="mt-4 text-red-500">Sale Ended!</p>
      )}
    </div>
  );
};

export default Timer;
