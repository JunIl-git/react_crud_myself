import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    height: 350px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const StyledModeTitle = styled.h2`
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
`
const StyledInput = styled.input`
    background: #c8d6e5;
    border: 3px solid #f8c291;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 40px;
    outline: none;
    font-size: 22px;
    &::placeholder {
        font-family: "Do Hyeon", sans-serif;
    }
`

const StyledTextarea = styled.textarea`
    background: #c8d6e5;
    resize: none;
    height: 200px;
    border: 3px solid #f8c291;
    margin-bottom: 20px;
    overflow: auto;
    outline: none;
    font-size: 22px;
    padding: 5px;
    border-radius: 10px;
    &::placeholder {
        font-family: "Do Hyeon", sans-serif;
    }
`

const StyledSubmit = styled.input`
    font-family: "Do Hyeon", sans-serif;
    border: none;
    background-color: #f8c291;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    color : white;
    font-size: 20px;
    margin: 0 auto;
    outline: none;
    cursor: pointer;
    transition: 0.2s all;
    &:active {
        transform: scale(0.9);
    }
`

const Create = ({onClick, onSubmit, mode}) => {
    return(
        <StyledForm onSubmit={onSubmit}>
            <StyledModeTitle>{mode}</StyledModeTitle>
            <StyledInput type="text" placeholder="제목을 입력해주세요!"/>
            <StyledTextarea  placeholder="내용을 입력해주세요!" defaultValue="" ></StyledTextarea>
            <StyledSubmit type="button" value="Submit" onClick={onClick} />
        </StyledForm>
    )
}
export default Create;