import React from 'react';

const Controls = ({getList, list, currentValue, controls, onClick}) => {
    const listFilter = list.filter(item => {
        return currentValue == item.id
    })

    const handleClickDelete = () => {
        if(list[0] === undefined || currentValue === 0){
            return null;
        } else {
            const cf = window.confirm(`${listFilter[0].title}을 삭제하시겠습니까?`);
            if(cf === true){
                const deleteList = list.filter(item => {
                    return parseInt(currentValue) !== item.id
                })
                console.log(typeof(currentValue))
                console.log(deleteList);
                getList(deleteList);
            } else {
                return;
            }
        }
        
    }

    return (
        <ul>
            {controls.map(control => {
                return <li key={control.id}><a href="#" onClick={onClick}>{control.title}</a></li>
            })}
            <button onClick={handleClickDelete} >Delete</button>
        </ul>
    )
}

export default Controls;