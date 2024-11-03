
import PropTypes from 'prop-types';

const Card = ({ coffee }) => {

    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}

    return (
        <div>
            <div className="card card-compact border-2 p-4 h-[500px]">
                <figure>
                    <img
                        className='w-full h-[400px] object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {

};

export default Card;