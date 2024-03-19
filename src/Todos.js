import React from "react";

export default function Todos({ todos, chg }) {

  function deleteTodo(id) {
    chg(todos.filter((todo) => todo.id !== id));
  }

  function markTodo(id) {
    /**
     *  you should never mutate the state directly. Instead,
     *  you should create a new array with the updated values 
     *  And then use the setter function (setTodos in your case) to update the state.
     */
    const newTodos = todos.slice(); // slice with no arguments copies the array.

    const targetTodoIndex = todos.findIndex( todo => todo.id === id);
    newTodos[targetTodoIndex].done = false;

    chg(todos = newTodos);
  } 

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Todo-Name</th>
          <th scope="col">Delete</th>
          <th scope="col">Mark as done ✅</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((one) => (
          <tr key={one.id}>
            <td scope="row">{one.id}</td>
            <td style={ (one.done ? {"textDecoration" : ""} : {"textDecoration" : "line-through"}) }>{one.todo}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteTodo(one.id)}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                className="btn btn-outline-primary"
                onClick={() => markTodo(one.id)}
              >
                Mark
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
