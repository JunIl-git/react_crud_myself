import React from 'react';

const Header = ({text, onClick}) => {
    return(
        <header onClick={onClick}>
            <a href="#">
              <h1>{text.title}</h1>
            </a>
            <p>{text.text}</p>
        </header>
    )
}

export default Header;