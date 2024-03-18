import React from "react";

export default function Todos(data) {
  return (

    <table class="table">
      <thead>

        <tr>
          <th scope="col">#</th>
          <th scope="col">Todo-Name</th>
        </tr>

      </thead>

      <tbody>

        {data.todosData.map((one) => (
          <tr>
            <td scope="row">{one.id}</td>
            <td>{one.name}</td>
          </tr>
        ))}

      </tbody>
    </table>

  );
}
