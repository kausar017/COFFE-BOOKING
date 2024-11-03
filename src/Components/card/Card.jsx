
import PropTypes from 'prop-types';

const Card = ({ coffee }) => {

    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}

    return (

        <div className="card card-compact border-2 p-4 h-[500px]">
            <figure>
                <img
                    className='w-full h-[400px] object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body font-bold text-gray-600">
                <h3 className='text-lg'>Name: {name}</h3>
                <h4>Catagory: {category}</h4>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popularity: {popularity}</p>
            </div>
        </div>
    );
};

Card.propTypes = {

};

export default Card;