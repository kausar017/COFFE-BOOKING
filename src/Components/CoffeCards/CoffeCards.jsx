import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../card/Card';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {

    const data = useLoaderData();
    console.log(data);

    const { catagory } = useParams();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        // Filter data by category
        const filteredByCategory = [...data].filter(coffee => coffee.category === catagory);
        setCoffees(filteredByCategory);
    }, [catagory, data]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
            {
                coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} />)
            }
        </div>
    );
};

CoffeeCards.propTypes = {};

export default CoffeeCards;
