import React from 'react';
import Create from './Create';
import Update from './Update';

const Contents = ({saveLocal, getInfo, currentValue, mainTitle, list, onSubmit, onClick, mode, getProps, id })=> {
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
        }
        
    }
    
    if(mode === ""){
        if(currentValue === 0){
            return (
                <article>
                    <h2>{mainTitle.title}</h2>   
                    <div>{mainTitle.text}</div>
                </article>
            )
        } else {
            return(
                <div>
                    <h2>{list[0] == undefined ? null :listFilter[0].title}</h2>
                    <div>{list[0] == undefined ? null : listFilter[0].text}</div>
                </div>
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