import React from 'react';

const Controls = ({controls}) => {
    return (
        <ul>
            {controls.map(control => {
                return <li key={control.id}><a href="#">{control.title}</a></li>
            })}
        </ul>
    )
}

export default Controls;