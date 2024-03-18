import "./App.css";
import Todos from "./Todos";
import { useState } from "react";

// function Butn({ value, onMyClick}) {
//   return (
//     <button onClick={onMyClick}
//     style={{'background-color': 'red'}}>
//           value = {value}
//     </button>
//   )
// }

export default function App() {
  const [state, changeState] = useState([]);
  function handleClick (e) {
    // e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control"
            placeholder="Type your todo"
            name="todo"
          />
          <br />
        Let's get some work done!

          <br /> <br />
          <button className="btn btn-outline-success" onClick={handleClick}>
            Add
          </button>
        </form>
      </nav>
      <Todos todosData={state}/>
    </>
  );
}
