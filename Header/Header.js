import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className='navbar header'>
        <div className='container'>
            <div className='row'>
                <i className='pointer white-text'></i>
                <div className='h1 light-text' href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps + {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;