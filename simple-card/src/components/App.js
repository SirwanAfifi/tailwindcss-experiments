import React from 'react';
import { Property } from './Property';

const property = {
    imageUrl: `https://source.unsplash.com/400x300/?home`,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 3,
    title: "Modern executive home in the heart of historic Los Angeles",
    priceInCents: 190000,
    formattedPrice: "$1,900,00",
    reviewCount: 34,
    rating: 4
}

const App = () => {
    return <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
        <Property property={property} />
        <Property property={property} />
        <Property property={property} />
    </div>
};

export default App;