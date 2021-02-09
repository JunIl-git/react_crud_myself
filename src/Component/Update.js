import React from 'react';

const Update = ({list, handleTitleUpdate, currentValue, mainTitle, mode, listFilter, onClickUpdate}) => {
    if(currentValue === 0){
        return (
            <div>
                <h2>{mode}</h2>
                <input name="title" type="text" defaultValue={mainTitle.title} placeholder="제목을 입력하세요."/>
                <textarea name="text" placeholder="description" defaultValue={mainTitle.text}></textarea>
                <input type="button" value="Submit" onClick={handleTitleUpdate} />
            </div>
        )
    }else {
        if(list[0] === undefined){
            return null;
        }
        return (
            <div>
                <h2>{mode}</h2>
                <input type="text" defaultValue={list[0] === undefined ? null : listFilter[0].title} placeholder="제목을 입력하세요."/>
                <textarea placeholder="description" defaultValue={list[0] === undefined ? null : listFilter[0].text}></textarea>
                <input type="button" value="Submit" onClick={onClickUpdate} />
            </div>
        )
    }
    
}

export default Update;