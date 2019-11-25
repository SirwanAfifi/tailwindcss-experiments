import React from 'react';

const Property = ({ property }) => {
    return <div className="bg-white m-4 border rounded-lg overflow-hidden">
        <img src={`${property.imageUrl}&${Math.random()}`} alt={property.imageAlt} />
        <div className="p-2">
            <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {property.beds} beds &bull; {property.baths} baths
            </div>
            <h4 className="font-semibold text-lg">{property.title}</h4>
            <div>
                {property.formattedPrice}
                <span className="text-gray-600 text-sm">/ wk</span>
            </div>
            <div className="mt-4">
                {property.rating}/5 stars
                <span className="text-gray-600 text-sm"> (base on {property.reviewCount} reviews)</span>
            </div>
        </div>
    </div>
};

export { Property };