import React, { useState } from "react";
import fetchData from "./fetch";
import sorting from "./sort";

function Todos() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = useState("completed");
  const [random, setRandom] = useState(false);
  const [sortDown, setSortDown] = useState(false);
  const sortingType = (e) => {
    const { id } = e.target;
    setRandom(false);
    setSortDown((state) => !state);
    setValue(id);
  };
  const { data, loading, error } = fetchData(`users/${user.id}/todos`);
  return (
    <>
      <div className="container">
        <h3 className="h3 border  ">Todo list</h3>
        <table class="table">
          <thead className="thead-light">
            <tr>
              <th  onClick={sortingType} id="id" scope="col">
                Id
              </th>
              <th onClick={sortingType} id="title" scope="col">
                title
              </th>
              <th onClick={sortingType} id="completed" scope="col">
                completed
              </th>
              <th  onClick={() => setRandom(!random)} name="random"  scope="col">
                random
              </th>
            </tr>
          </thead>

          {sorting(data, value, sortDown, random).map((e, i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.title}</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={e.completed}
                      />
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Todos;
