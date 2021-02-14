import React from 'react';
import styled from 'styled-components';

const StlyedNav = styled.nav`
    box-sizing: border-box;
    width: 250px;
    height: 500px;
    position: fixed;
    top: 150px;
    left: 0px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
    padding: 30px;
    overflow-y: auto;
    white-space:normal;
    &::-webkit-scrollbar {
        width: 15px;
        background: #f7d6b9;
    }
    &::-webkit-scrollbar-thumb {
        background: #F8C291;
        border-radius: 15px;
    }

`
const StlyedTitle = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`

const StyledList = styled.li`
    margin-bottom: 10px;
`

const Nav = ({ list, onClick }) => {
    
    return(
    <StlyedNav>
        <StlyedTitle>List</StlyedTitle>
        <ul>
            {list.map((listItem) => {
                return  <StyledList key={listItem.id}  >
                            <a href="#" id={listItem.id} onClick={onClick} >{listItem.title}</a>
                        </StyledList>
            })}
        </ul>
    </StlyedNav>    
    )
}

export default Nav;