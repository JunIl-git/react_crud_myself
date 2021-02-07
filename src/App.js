import React, {useState} from 'react';
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
  const [ currentNumber, setCurrentNumber ] = useState(1);


  return (
    <>
      <Header text={mainTitle}/>
      <Nav list={list}/>
      <Controls controls={controls}/>
      <Contents text={mainTitle} list={list} currentNumber={currentNumber}/>
    </>
  );
}

export default App;
