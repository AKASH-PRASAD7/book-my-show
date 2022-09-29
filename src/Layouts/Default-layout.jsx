import React from 'react';
import NavBar from '../Components/NavBar';

const Defaultlayout = (Component) => (...props) => {
    return (
        <div>
            <NavBar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default Defaultlayout;