import React from 'react';
import CarCard from '../CarCard/CarCard';

const Home = () => {
    const arrs = [1, 1, 1, 1, 1, 1, 11]
    return (
        <div className="bg-gray-100">
            <div className="grid md:gap-4 mx-2 md:mx-8 my-2 md:my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    arrs.map(arr => <CarCard></CarCard>)

                }
            </div>


        </div>
    );
};

export default Home;