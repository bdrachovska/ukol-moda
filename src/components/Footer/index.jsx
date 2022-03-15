import React from 'react';
import './style.css';

const Footer= ({year, author}) => {

	return (
<div className='footer'>
<h2  className='footer__copyright footer__disclosure'>{year} {author}</h2>
</div>
	)
};

export default Footer