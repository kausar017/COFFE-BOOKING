
import PropTypes from 'prop-types';
import Bannar from '../Bannar/Bannar';
import Heading from '../Heading/Heading';
import Catagoris from '../Catagoris/Catagoris';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {

    const Catagoryis = useLoaderData();
    console.log(Catagoryis);


    return (
        <div>
            {/* Bannar */}
            <Bannar></Bannar>
            {/* Heading */}
            <Heading title={'Browes Coffees by Catagory'} subTitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum sunt eaque, nulla dolorum non distinctio cumque nemo harum obcaecati.'}></Heading>
            {/* Catagoris tab sectin */}
            <Catagoris Catagoryis={Catagoryis}></Catagoris>

            {/* Dynamic Nested Components */}
            <Outlet></Outlet>

        </div>
    );
};

Home.propTypes = {

};

export default Home;