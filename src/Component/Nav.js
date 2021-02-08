import React from 'react';

const Nav = ({ list, onClick }) => {
    console.log("----Nav Component----")
    
    return(
    <ul>
        {list.map((listItem) => {
            return  <li key={listItem.id}  >
                        <a href="#" id={listItem.id} onClick={onClick} >{listItem.title}</a>
                    </li>
        })}
    </ul>
    )
}

export default Nav;