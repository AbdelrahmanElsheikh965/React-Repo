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
  const [state, changeState] = useState([{id: 1, todo: "Main Todo"}]);
  const [btnState, changeBtnState] = useState("");

  function handleClick(e) {
    changeState([... state, { id: state[state.length-1].id+1, todo: btnState }]);
  }
  
  function handleInputChange(e) {
    changeBtnState(e.target.value)
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
          <input
            className="form-control"
            placeholder="Type your todo"
            onChange={handleInputChange}
            name="todo"
          />
          <br />
          Let's get some work done!
          <br /> <br />
          <button className="btn btn-outline-success" onClick={handleClick}>
            Add
          </button>
      </nav>

      <Todos todos={state} />
    </>
  );
}
