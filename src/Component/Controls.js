import React from 'react';
import styled from 'styled-components';

const StlyedControls = styled.ul`
    width: 100px;
    height: 100px;
    position : absolute;
    right: -150px;
    bottom: 0px;
    background: white;
    border-radius: 10px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25), 0 3px 7px -3px #0000004d;
`
const StyledBtn = styled.button`
    border: none;
    font-size: 22px;
    color: red;
    font-family: "Do Hyeon", sans-serif;
    padding: 0;
    cursor: pointer;
    outline : none;
`


const Controls = ({saveLocal, getList, list, currentValue, controls, onClick}) => {
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
                saveLocal(deleteList);
            } else {
                return;
            }
        }
        
    }

    return (
        <StlyedControls>
            {controls.map(control => {
                return <li key={control.id}><a href="#" onClick={onClick}>{control.title}</a></li>
            })}
            <StyledBtn onClick={handleClickDelete} >Delete</StyledBtn>
        </StlyedControls>
    )
}

export default Controls;