import { useEffect, useState } from 'react';
import './App.css';


//Anything to be written in js should be in curly braces within html code

function App() {
  const [inp, setInp] = useState("")//user se input lene ke liee
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('ITEM')) || [])
  //ye by default hi local storage se fetch krke laa ke deraaa hai..

  useEffect(() => {
    getAlltask()
  }, [])

  // useEffect(() => {

  //   // localStorage.setItem("ITEM", JSON.stringify(arr))

  // }, [arr])
  async function deleteTodo(element) {
    let p = await element.target.parentNode.childNodes[1].innerText
    let id;
    arr.forEach(element => {
      if (element.tas === p)
        id = element._id
    });
    console.log(id);
    let temp = arr.filter(i => i.tas !== p)
    setArr(temp)

    await fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  async function getAlltask() {
    await fetch('http://localhost:3000/task')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setArr(data)
      })
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

        <button className='button-7' onClick={async () => {
          setArr([...arr, inp]); // arr = temp
          // const obj={
          //   tas: inp
          // }
          await fetch(`http://localhost:3000/task`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tas: inp
            })
          })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))


          // console.log(JSON.parse(localStorage.getItem('ITEM')))
          // console.log(arr);
          setInp("")
        }}>Add</button>

        <h1>ToDOs</h1>

        <ul style={{ color: "white" }} className="list" type="none">
          {arr.length === 0 && "No Todos"}
          {/* mere pass sari tasks ki list hai ab usko display krna hai.. */}
          {
            arr.map((ar) => {
              return (
                <li key={Math.random(1000)}>
                  <input id="check" type="checkbox" checked={ar.completed} />
                  <span>{ar.tas || ar}</span>

                  {/* {console.log(ar)} */}
                  <button className="button-62" onClick={(e) => deleteTodo(e)} >Delete</button>
                  <br />
                </li>
              )
            })

          }

        </ul>


      </>
    </div >
  );
}

export default App;
