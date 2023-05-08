import { useEffect, useState } from 'react';
import './App.css';


//Anything to be written in js should be in curly braces within html code

function App() {
  const [inp, setInp] = useState("")//user se input lene ke liee
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('ITEM'))|| [])

  useEffect(()=>{
    
      localStorage.setItem("ITEM",JSON.stringify(arr))
    
  },[arr])
  function deleteTodo(element)
  {
    let p=element.target.parentNode.childNodes[1].innerText
    let temp = arr.filter(i => i!==p)
    setArr(temp)
    console.log(arr)
    console.log(JSON.parse(localStorage.getItem('ITEM')))
    // console.log(element.target.parentNode.childNodes)
  }
  return (
    <div className="App">
      <>
        <h1>This is my todo list</h1>
        {/* <button placeholder='Enter your task'>Enter your task</button> */}
        <input className='inp' type="text" value={inp} onChange={(e) => {
          setInp(e.target.value)
        }} placeholder='Enter your task '></input>
        <br />

        <button className='button-7' onClick={() => {
          setArr([...arr,inp]); // arr = temp
          console.log(JSON.parse(localStorage.getItem('ITEM')))
          // console.log(arr);
          setInp("")
        }}>Add</button>

        <h1>ToDOs</h1>
        
        <ul style={{color:"white"}} className="list" type="none">
          {arr.length===0 && "No Todos"}
          {/* mere pass sari tasks ki list hai ab usko display krna hai.. */}
          {
            arr.map((ar) => {
              return (
                <li key={Math.random(1000)}>
                  <input id="check" type="checkbox" checked={ar.completed}/>
                  <span>{ar}</span>
                  
                  {/* {console.log(ar)} */}
                  <button className="button-62" onClick={(e)=>deleteTodo(e)} >Delete</button>
                  <br/>
                </li>
              )
            })

          }

        </ul>


      </>
    </div>
  );
}

export default App;
