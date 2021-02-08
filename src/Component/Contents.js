import React from 'react';

const Contents = ({currentValue, mainTitle, list, onSubmit, onClick, id})=> {
    console.log("----Contents Component----")

    const listFilter = list.filter(item => {
        return currentValue == item.id
    })

    if(currentValue === 0){
        return (
            <>
                <h2>{mainTitle.title}</h2>   
                <div>{mainTitle.text}</div>
            </>
        )
    } else if(currentValue === "Create" || currentValue === "Update" || currentValue === "Delete"){
        if(currentValue === "Create"){
            return(
            <form onSubmit={onSubmit}>
                <h2>{currentValue}</h2>
                <input type="text" placeholder="제목을 입력하세요."/>
                <textarea placeholder="description"></textarea>
                <input type="button" value="제출" onClick={onClick} />
            </form>
            )
        } else if(currentValue === "Update"){
            <form onSubmit={onSubmit}>
                <h2>{currentValue}</h2>
                <input type="text" placeholder="제목을 입력하세요."/>
                <textarea placeholder="description"></textarea>
                <input type="button" value="제출" onClick={onClick} />
            </form>
        }
    } else if(parseInt(currentValue) == listFilter[0].id){
        return(
            <div>
                <h2>{listFilter[0].title}</h2>
                <div>{listFilter[0].text}</div>
            </div>
        )        
    }



    
}
export default Contents;