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

const Update = ({list, handleTitleUpdate, currentValue, mainTitle, mode, listFilter, onClickUpdate}) => {
    if(currentValue === 0){
        return (
            <StyledForm>
                <StyledModeTitle>{mode}</StyledModeTitle>
                <StyledInput name="title" type="text" defaultValue={mainTitle.title} placeholder="제목을 입력하세요."/>
                <StyledTextarea name="text" placeholder="description" defaultValue={mainTitle.text}></StyledTextarea>
                <StyledSubmit type="button" value="Submit" onClick={handleTitleUpdate} />
            </StyledForm>
        )
    }else {
        if(list[0] === undefined){
            return null;
        }
        return (
            <StyledForm>
                <StyledModeTitle>{mode}</StyledModeTitle>
                <StyledInput type="text" defaultValue={list[0] === undefined ? null : listFilter[0].title} placeholder="제목을 입력하세요."/>
                <StyledTextarea placeholder="description" defaultValue={list[0] === undefined ? null : listFilter[0].text}></StyledTextarea>
                <StyledSubmit type="button" value="Submit" onClick={onClickUpdate} />
            </StyledForm>
        )
    }
    
}

export default Update;