import React from 'react';

const Nav = ({ list }) => {
    console.log("----Nav Component----")
    
    return(
    <ul>
        {list.map((listItem) => {
            return  <li key={listItem.id}>
                        <a href="#">{listItem.title}</a>
                    </li>
        })}
    </ul>
    )
}

export default Nav;