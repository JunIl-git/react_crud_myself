import React from 'react';

const Contents = ({currentList, text})=> {
    if(currentList === ""){
        return (
            <div>
                <h2>{text.title}</h2>
                <div>{text.text}</div>
            </div>
        )
    }
}

export default Contents;