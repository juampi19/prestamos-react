import React from 'react';

//Podemos hacer destructuring de los props que nos llegan
const Header = ( {titulo} ) => ( 
        <h1>{ titulo }</h1>
    );

 
export default Header;