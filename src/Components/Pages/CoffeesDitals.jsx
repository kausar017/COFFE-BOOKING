
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import img from '../../assets/nutrition.png'
const CoffeesDitals = () => {
    const data = useLoaderData([])

    const { id } = useParams()

    const [ditals, setditals] = useState({})
    const { name, image, category, origin, rating, popularity, nutrition_info = [], description, making_process, ingredients = [] } = ditals || {}
    useEffect(() => {
        const allDitalsData = data.find(coffee => coffee.id == id)
        setditals(allDitalsData)

    }, [data, id])

    return (
        <div >
            <h1 className='text-2xl'>{ditals.description} </h1>
            <img className='w-full md:h-[600px]' src={image} alt="" />
            <div className='flex flex-row items-center justify-between mx-3'>
                <div>
                    <h3 className='text-2xl font-bold'>{origin}</h3>
                    <div className='font-bold'>
                        <p>Rating: {rating}</p>
                        <p>popularity: {popularity}</p>
                    </div>
                </div>
                <button className='btn btn-warning'>Add to Favarit</button>
            </div>
            <div className='mx-3'>
                <h4>Mailkig Prosess: </h4>
                <p>{making_process}</p>
            </div>
            <div className='md:flex justify-between my-5 mx-3'>
                <div>
                    <div>
                        <h4>Ingredients</h4>
                        <div>
                            {
                                ingredients.map((intgred, id) => <li key={id}>{intgred}</li>)
                            }
                        </div>
                    </div>
                    <div>
                        <h1>nutrition: </h1>
                        <li>{nutrition_info.calories}</li>
                        <li>{nutrition_info.fat}</li>
                        <li>{nutrition_info.carbohydrates}</li>
                        <li>{nutrition_info.protein}</li>
                    </div>
                </div>
                <img className='w-[500px]' src={img} alt="" />
            </div>
        </div>
    );
};

CoffeesDitals.propTypes = {

};

export default CoffeesDitals;