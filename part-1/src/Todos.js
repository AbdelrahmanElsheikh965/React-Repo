import React, { useState } from "react";

export default function Todos({ todos, chg }) {
  
  function deleteTodo(id) {
    chg(todos.filter( (todo) => todo.id !== id ))
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
            <td>{one.todo}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={() => deleteTodo(one.id)}>
                Delete
              </button>
            </td>
            <td>
              <button className="btn btn-outline-primary">
                Mark 
              </button>
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}
