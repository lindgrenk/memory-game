//libraries
import React, { PropTypes } from 'react';

import pokeball from '../../img/logo/logo.png';


// decides if game image should be faced up or down
const Card = props => {
	let image = "";

	if (props.open === false) {
		image = pokeball;
	} else {
		image = props.image;
	}

	return (
		<div className="App-card" onClick={props.onFlip}>
			<img src={image} />
		</div>
	)
}

export default Card;
