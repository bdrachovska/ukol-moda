import React from 'react';
import './style.css';



const Header= ({title, description}) => {

	return (
<div className='header'>
<h2  className='header__title'>{title}</h2>
<p className='header__description'>{description}</p>
</div>
	)
};



export default Header;