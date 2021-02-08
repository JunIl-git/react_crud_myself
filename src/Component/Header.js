import React from 'react';

const Header = ({text, onClick}) => {
    console.log("----Header Component---")
    return(
        <div onClick={onClick}>
            <a href="#">
              <h1>{text.title}</h1>
            </a>
            <p>{text.text}</p>
        </div>
    )
}

export default Header;