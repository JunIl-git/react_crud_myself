function App() {
  
  const [ list, setList] = useState([
    {
      title : "HTML",
      text : "HTML is HyperText Markup Language"
    },
    {
      title : "CSS",
      text : "CSS is Cascading Stlye Sheets"     
    },
    {
      title : "Javascript",
      text : "Javascript is for interactive!"
    },
  ])


  return (
    <>
        <header>
          <a href="#">
            <h1>WEB</h1>
          </a>
          <p>CRUD 혼자 만들기</p>
        </header>
      

      <Nav/>

      <Controls/>

      <Contents/>
    </>
  );
}

export default App;
