import { mobileServices, frontendServices, backendServices, fullstackServices } from "@/data/services";
import ServiceItem from "./service-item";

const Services = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-300">Services</h2>

      <div className="space-y-6">
        <div className="space-y-6">
          {mobileServices.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>

        <div className="space-y-6">
          {frontendServices.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>

        <div className="space-y-6">
          {backendServices.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>

        <div className="space-y-6">
          {fullstackServices.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
