import React from 'react';

const Nav = ({ list, onClick }) => {
    
    return(
    <nav>
        <ul>
            {list.map((listItem) => {
                return  <li key={listItem.id}  >
                            <a href="#" id={listItem.id} onClick={onClick} >{listItem.title}</a>
                        </li>
            })}
        </ul>
    </nav>    
    )
}

export default Nav;