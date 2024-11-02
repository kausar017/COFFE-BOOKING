
import PropTypes from 'prop-types';

const Heading = ({title, subTitle}) => {
    return (
        <div className='flex flex-col items-center justify-center text-center my-8 leading-10'>
            <h1 className='text-5xl font-bold text-gray-700'>{title}</h1>
            <p className='max-w-[900px]'>{subTitle}</p>
        </div>
    );
};

Heading.propTypes = {
    
};

export default Heading;