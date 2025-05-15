import React from "react";
import { Service } from "@/data/services";

const ServiceItem = ({ service }: { service: Service }) => {
  return (
    <div className="text-gray-300 space-y-2">
      {service.title && <h3 className="text-xl font-bold">{service.title}</h3>}
      {service.subtitle && <h3 className="text-md font-bold">{service.subtitle}</h3>}
      <p className="text-sm">{service.description}</p>
      <p>{service.basePrice}</p>
      <ul className="list-disc pl-5">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;
