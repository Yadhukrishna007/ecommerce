import React from "react";
import { service } from "../constants";

const Services = () => {
  return (
    <div className="p-10 flex items-center justify-center gap-10 mb-20">
      {service.map((item, index) => (
        <div className="flex  flex-col gap-2 items-center " key={index}>
          <img src={item.image} alt={item.title} className="size-16" />
          <h1 className="font-bold">{item.title}</h1>
          <h2 className="text-sm">{item.desc}</h2>
        </div>
      ))}
    </div>
  );
};

export default Services;
