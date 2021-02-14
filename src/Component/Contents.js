import React from 'react';
import Create from './Create';
import Update from './Update';
import styled from 'styled-components';

const StyledContentArticle = styled.article `
    height: 350px;
    margin-top: 30px;
`

const StyledContentsTitle = styled.h2`
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
    border: 3px solid #f8c291;
    border-radius:10px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 15px;
        background: #f7d6b9;
    }
    &::-webkit-scrollbar-thumb {
        background: #F8C291;
        border-radius: 15px;
    }
`

const StlyedContentsText = styled.div`
    
    height: 200px;
    padding: 20px;
    overflow-y: auto;
    white-space:pre-wrap;
    border: 3px solid #f8c291;
    border-radius: 10px;
    &::-webkit-scrollbar {
        width: 15px;
        background: #f7d6b9;
    }
    &::-webkit-scrollbar-thumb {
        background: #F8C291;
        border-radius: 15px;
    }
`

const Contents = ({ saveTitle, saveLocal, getInfo, currentValue, mainTitle, list, onSubmit, onClick, mode, getProps, id })=> {
    const listFilter = list.filter(item => {
        return currentValue == item.id
    })
    
    const handleClickUpdate = e => {
        if(mode === "" && currentValue === 1 && list[0] === undefined){
            return;
        } else{
            e.preventDefault();
            const target = e.target.parentNode;
            const childNodes = target.childNodes;
            let title = childNodes[1].value;
            let text = childNodes[2].value;  
            const listItem = {
                title : title,
                text : text,
                id : listFilter[0].id
            }

            if(title === ""){
                return;
            }else {
                let listCopy = list.concat();
                listCopy[list.indexOf(listFilter[0])] = listItem;
                getProps(listCopy);
                saveLocal(listCopy);
            }
        }
    }

    const handleTitleUpdate = e => {
        e.preventDefault();
        const target = e.target.parentNode;
        const childNodes = target.childNodes;
        let title = childNodes[1].value;
        let text = childNodes[2].value;
        if(title === ""){
            return;
        } else {
            const changeTitle = {
                ...mainTitle,
                [childNodes[1].name] : title,
                [childNodes[2].name] : text 
            }
            getInfo(changeTitle);
            saveTitle(changeTitle);
        }
        
    }
    
    if(mode === ""){
        if(currentValue === 0){
            return (
                <StyledContentArticle>
                    <StyledContentsTitle>{mainTitle.title}</StyledContentsTitle>   
                    <StlyedContentsText>{mainTitle.text}</StlyedContentsText>
                </StyledContentArticle>
            )
        } else {
            return(
                <StyledContentArticle>
                    <StyledContentsTitle>{list[0] == undefined ? null :listFilter[0].title}</StyledContentsTitle>
                    <StlyedContentsText>{list[0] == undefined ? null : listFilter[0].text}</StlyedContentsText>
                </StyledContentArticle>
            )        
        }
    } else if(mode === "Create" || mode === "Update" || mode === "Delete"){
        if(mode === "Create"){
            return(
                <Create mode={mode} onSubmit={onSubmit} onClick={onClick}></Create>
            )
        } else if(mode === "Update"){
            return(
                <Update list={list} handleTitleUpdate={handleTitleUpdate} currentValue={currentValue} mainTitle={mainTitle} getProps={getProps} onClickUpdate={handleClickUpdate} mode={mode} listFilter={listFilter} onClick={onClick}></Update>
            )
        }
    }
}
export default Contents;