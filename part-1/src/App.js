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
        {/* <form className="form-inline"> */}
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
        {/* </form> */}
      </nav>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo-Name</th>
          </tr>
        </thead>

        <tbody>
          {state.map((one) => (
            <tr key={one.id}>
              <td scope="row">{one.id}</td>
              <td>{one.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
