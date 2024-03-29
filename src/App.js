import "./App.css";
import Todos from "./Todos";
import { useState } from "react";

export default function App() {
  const [state, changeState] = useState([{id: 1, todo: "Main Todo", done: true}]);
  const [btnState, changeBtnState] = useState("");

  function handleClick() {
    changeState([... state, { id: state[state.length-1].id+1, todo: btnState, done: true }]);
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
      <Todos todos={state} chg={changeState} />
    </>
  );
}
