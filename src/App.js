import React, {useState, useRef} from 'react';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Controls from './Component/Controls';
import Contents from './Component/Contents'

function App() {
  //Nav 
  const [mainTitle, setMainTitle] = useState(
    {
      title : "React",
      text : "CRUD 혼자 만들기"
    } 
  )

  const [ list, setList] = useState([
    {
      title : "HTML",
      text : "HTML is HyperText Markup Language",
      id : 1
    },
    {
      title : "CSS",
      text : "CSS is Cascading Stlye Sheets",
      id : 2    
    },
    {
      title : "Javascript",
      text : "Javascript is for interactive!",
      id : 3
    },
    {
      title : "React",
      text : "React is library of javascript",
      id : 4
    },
  ])
  
  const [id, setId] = useState(5);

  const [controls, setControl] = useState([
    {
      title : "Create",
      id : 1
    },
    {
      title : "Update",
      id : 2
    },
    {
      title : "Delete",
      id : 3
    }
  ])
  const [ currentValue, setCurrentValue ] = useState(1);


  const handleTitleClick = () => {
    setCurrentValue(0);
  }

  const handleNavClick = e => {
    setCurrentValue(e.target.id);
  }

  const handleControlClick = e => {
    setCurrentValue(e.target.innerHTML);
  }

  const handleContentsSubmit = e => {
    e.preventDefault();
    console.log(e)
    const target = e.target;
    const childNodes = target.childNodes;
    let title = childNodes[1].value;
    let text = childNodes[2].value;
    if(childNodes[1].value === "" ){
      return;
    } else {
      const concatList = list.concat({
        title : title,
        text : text,
        id : id,
      })
      setId(id+1)
      setList(concatList);
      setCurrentValue(id);
      childNodes[1].value = "";
      childNodes[2].value = "";
    }
  }

  const handleContentsClick = e => {
    e.preventDefault();
    const target = e.target.parentNode;
    const childNodes = target.childNodes;
    console.log(childNodes)
    let title = childNodes[1].value;
    let text = childNodes[2].value;
    if(childNodes[1].value === "" ){
      return;
    } else {
      const concatList = list.concat({
        title : title,
        text : text,
        id : id,
      })
      setId(id+1)
      setList(concatList);
      setCurrentValue(id);
      childNodes[1].value = "";
      childNodes[2].value = "";
    }
  }


  return (
    <>
      <Header text={mainTitle} onClick={handleTitleClick}/>
      <Nav list={list} onClick={handleNavClick}/>
      <Controls controls={controls} onClick={handleControlClick}/>
      <Contents id={id} mainTitle={mainTitle} list={list} onSubmit={handleContentsSubmit} onClick={handleContentsClick} currentValue={currentValue}/>
    </>
  );
}

export default App;
