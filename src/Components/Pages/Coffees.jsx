import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Coffees = () => {
    const data = useLoaderData();

    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) => {
        if (sortBy === 'popularity') {
            // Sort by popularity
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sorted);
        } else if (sortBy === 'rating') {
            // Sort by rating
            const sorted = [...data].sort((a, b) => a.rating-b.rating);
            setCoffees(sorted);
        }
    };

    return (
        <>
            <div className='flex max-md:flex-col justify-between items-center max-md:gap-y-4 px-5 my-10'>
                <div>
                    <h1 className='text-lg font-bold text-gray-700'>Sort Coffees By Popularity & Rating</h1>
                </div>
                <div className='space-x-4'>
                    <button onClick={() => handleSort('popularity')} className='btn btn-warning'>
                        Sort By Popularity
                    </button>
                    <button onClick={() => handleSort('rating')} className='btn btn-warning'>
                        Sort By Rating
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
                <TransitionGroup component={null}>
                    {coffees.map((coffee) => (
                        <CSSTransition key={coffee.id} timeout={500} classNames="fade">
                            <Card coffee={coffee} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </>
    );
};

Coffees.propTypes = {};

export default Coffees;
