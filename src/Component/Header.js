import React from 'react';

const Header = ({text}) => {
    console.log(text)
    return(
        <>
            <a href="#">
              <h1>{text.title}</h1>
            </a>
            <p>{text.text}</p>
        </>
    )
}

export default Header;