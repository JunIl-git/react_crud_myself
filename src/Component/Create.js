import React from 'react';

const Create = ({onClick, onSubmit, mode}) => {
    return(
        <form onSubmit={onSubmit}>
            <h2>{mode}</h2>
            <input type="text" placeholder="제목을 입력하세요."/>
            <textarea placeholder="description" defaultValue="" ></textarea>
            <input type="button" value="Submit" onClick={onClick} />
        </form>
    )
}
export default Create;