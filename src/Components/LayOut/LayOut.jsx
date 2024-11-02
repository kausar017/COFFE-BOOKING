
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* OutLIne / Dynamic section*/}
            <div className='min-h-[calc(100vh-232px)] container mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

LayOut.propTypes = {

};

export default LayOut;