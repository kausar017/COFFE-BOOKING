import PropTypes from 'prop-types';
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import Card from '../card/Card';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {

    const data = useLoaderData();

    const { catagory } = useParams();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (catagory) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === catagory);
            setCoffees(filteredByCategory);
        } else {
            setCoffees(data.slice(0, 6))
        }

    }, [catagory, data]);   

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 p-3'>
                {
                    coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} />)
                }
            </div>
            <Link to={`/Coffees`}><button className='btn btn-warning ml-3'>View All</button></Link>
        </>
    );
};

CoffeeCards.propTypes = {};

export default CoffeeCards;
