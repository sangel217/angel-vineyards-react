import React from 'react';
import PropTypes from 'prop-types';

function Wine(props) {
    return (
        <div>
            <h3>View our available Wines on Tap!</h3>
            <ul>
                <li>
                    <h4>{props.name}</h4>
                    <p>{props.type}</p>
                    <p>{props.ABV}%</p>
                    <p>&#x24 {props.price}</p>
                </li>
            </ul>
        </div>
    );
}

Wine.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ABV: PropTypes.number.isRequired,
    price: PropTypes.float.isRequired
}

export default Wine;