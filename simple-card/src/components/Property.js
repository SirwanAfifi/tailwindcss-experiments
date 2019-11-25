import React from 'react';

const Property = ({ property }) => {
    return <div className="bg-white m-4 border rounded-lg overflow-hidden">
        <img src={`${property.imageUrl}&${Math.random()}`} alt={property.imageAlt} />
        <div className="p-6">
            <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {property.beds} beds &bull; {property.baths} baths
            </div>
            <h4 className="font-semibold text-lg leading-tight truncate">{property.title}</h4>
            <div className="mt-1">
                {property.formattedPrice}
                <span className="text-gray-600 text-sm">/ wk</span>
            </div>
            <div className="mt-4">
                <span className="text-teal-600 font-semibold">{property.rating}/5 stars</span>
                <span className="text-gray-600 text-sm"> (based on {property.reviewCount} reviews)</span>
            </div>
        </div>
    </div>
};

export { Property };