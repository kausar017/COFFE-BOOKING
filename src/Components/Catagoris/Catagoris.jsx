
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Catagoris = ({ Catagoryis }) => {
    // console.log(Catagoryis);
    
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    Catagoryis.map((Catagory) => <NavLink to={`/catagory/${Catagory.category}`} key={Catagory.id} role="tab" className="tab">{Catagory.category}
                    </NavLink>)
                }

            </div>
        </div>
    );
};

Catagoris.propTypes = {

};

export default Catagoris;