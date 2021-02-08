import React from 'react';

const Controls = ({controls, onClick}) => {
    console.log("----Controls Component----")
    return (
        <ul>
            {controls.map(control => {
                return <li key={control.id}><a href="#" onClick={onClick}>{control.title}</a></li>
            })}
        </ul>
    )
}

export default Controls;