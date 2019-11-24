import React from 'react';
import { Property } from './Property';

const property = {
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 3,
    title: "Modern home in city center",
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