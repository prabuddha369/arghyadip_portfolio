import React from 'react';

const ServiceCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="w-full h-full bg-[#010421] border border-gray-300 rounded overflow-hidden shadow-md transition-transform hover:scale-105">
      <img src={imageUrl} alt={`Service: ${title}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-blue-500 font-bold text-lg">{price}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
