import React, {useState, useRef, useEffect} from 'react';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Controls from './Component/Controls';
import Contents from './Component/Contents'

function App() {
  //Nav 
  const [mainTitle, setMainTitle] = useState(
    {
      title : "React ",
      text : "CRUD",
      id : 1
    } 
  )

  const [ list, setList] = useState([]);

  useEffect(() => {
    const loadList = () => {
      const currentList = localStorage.getItem("list");
      if (currentList !== null) {
        const parsedList = JSON.parse(currentList);
        setList(parsedList);
      }
      const currentTitle = localStorage.getItem("title");
      if( currentTitle !== null) {
        const parsedTitle = JSON.parse(currentTitle);
        setMainTitle(parsedTitle);
      }
    }
  loadList();
  },[])

  const [id, setId] = useState(1);
  const [mode, setMode] = useState("");
  const [controls, setControl] = useState([
    {
      title : "Create",
      id : 1
    },
    {
      title : "Update",
      id : 2
    }
  ])
  const [ currentValue, setCurrentValue ] = useState(1);

  const handleTitleClick = () => {
    setCurrentValue(0);
    setMode("");
  }

  const handleNavClick = e => {
    setCurrentValue(e.target.id);
    setMode("");
  }

  const handleControlClick = e => {
    setMode(e.target.innerHTML);
  }


  const handleContentsClick = e => {
    e.preventDefault();
    const target = e.target.parentNode;
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
      saveLocal(concatList);
    }
  }

  const getProps = (item) => {
    setMode("");
    setList(item);
  }

  const getInfo = (item) => {
    setMode("");
    setMainTitle(item)
  }

  const getList = item => {
    setMode("");
    setList(item);
    setCurrentValue(0);
  }

  const saveLocal = (e) => {
    localStorage.setItem("list", JSON.stringify(e));
  }

  const saveTitle = e => {
    localStorage.setItem("title", JSON.stringify(e));
  }
  return (
    <>
      <Header text={mainTitle} onClick={handleTitleClick}/>
      <Nav list={list} onClick={handleNavClick}/>
      <Controls saveLocal={saveLocal} getList={getList} list={list} currentValue={currentValue} controls={controls} onClick={handleControlClick}/>
      <Contents saveTitle={saveTitle} saveLocal={saveLocal} getInfo={getInfo} mainTitle={mainTitle} getProps={getProps} mode={mode} id={id} mainTitle={mainTitle} list={list} onClick={handleContentsClick} currentValue={currentValue}/>
    </>
  );
}

export default App;
