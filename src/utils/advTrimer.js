import React, { useEffect, useState } from "react";

const AdvTimer = ({ targetDate }) => {
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
    <div className=" font-sans">
      <div className="flex justify-start items-center space-x-2 w-full">
        {timerComponents.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center -space-y-[1px] justify-center  bg-white text-black  size-14 rounded-full"
          >
            <div className="text-sm font-bold">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>
      {Object.keys(timeLeft).length === 0 && (
        <p className="mt-4 text-red-500">Sale Ended!</p>
      )}
    </div>
  );
};

export default AdvTimer;
