import React from "react";
import * as LucideIcons from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Service } from "../types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons];

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="relative h-48">
        <img
          src={`https://images.unsplash.com/photo-${service.imageId}?auto=format&fit=crop&q=80`}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-4">{service.description}</p>

        <HashLink
          smooth
          to="/#contact"
          className="text-primary hover:text-accent transition flex items-center space-x-2"
        >
          <span>{service.cta}</span>
          <LucideIcons.ArrowRight className="w-4 h-4" />
        </HashLink>
      </div>
    </div>
  );
};

export default ServiceCard;
