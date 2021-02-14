import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
    width : 100px;
    height : 60px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 30px;
`
const StyledSubtitle = styled.p`
    font-size: 22px;
    margin-top: 5px;
`

const Header = ({text, onClick}) => {
    return(
        <StyledHeader onClick={onClick}>
            <a href="#">
              <h1>{text.title}</h1>
            </a>
            <StyledSubtitle>{text.text}</StyledSubtitle>
        </StyledHeader>
    )
}

export default Header;