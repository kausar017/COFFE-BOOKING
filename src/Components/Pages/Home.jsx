
import PropTypes from 'prop-types';
import Bannar from '../Bannar/Bannar';
import Heading from '../Heading/Heading';

const Home = props => {
    return (
        <div>
           {/* Bannar */}
           <Bannar></Bannar>
           {/* Heading */}
           <Heading title={'Browes Coffees by Catagory'} subTitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum sunt eaque, nulla dolorum non distinctio cumque nemo harum obcaecati.'}></Heading>
           {/* Catagoris tab sectin */}
           {/* Dynamic Nested Components */}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;