import React from "react";

export default function Todos({todos}) {
  
  return (

    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo-Name</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((one) => (
            <tr key={one.id}>
              <td scope="row">{one.id}</td>
              <td>{one.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>

  );
}
