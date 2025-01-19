import React, { useEffect, useState } from "react";
import { EmployData } from "./EmployData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    setData(EmployData);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    {
      if (dt !== undefined) {
        setUpdate(true);
        setId(id);
        setFirstName(dt[0].firstName);
        setLastName(dt[0].lastName);
        setAge(dt[0].age);
      }
    }
  };
  const handleDlete = (id) => {
    if (id > 0) {
      if (window.confirm("Are You sure to Dlete This Item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handelSave = (e) => {
    e.preventDefault();

    const dt = [...data];
    const newObj = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    dt.push(newObj);
    setData(dt);
    handleClear();
  };
  const handleClear = () => {
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setUpdate(false);
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    setData(dt);
    handleClear();
  };
  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div>
          <label style={{ marginRight: "15px" }}>
            First Name :{" "}
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="Enter Your First Name"
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :{" "}
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Your Last Name"
              value={lastName}
            />
          </label>
        </div>
        <div>
          <label style={{ marginLeft: "20px" }}>
            Age :{" "}
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Your Age"
              value={age}
            />
          </label>
        </div>
        <div>
          {!update ? (
            <button
              onClick={(e) => handelSave(e)}
              className="btn btn-primary m-3"
            >
              Save
            </button>
          ) : (
            <button onClick={handleUpdate} className="btn btn-primary m-3">
              Update
            </button>
          )}

          <button onClick={handleClear} className="btn btn-danger m-2">
            Clear
          </button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr.no</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>age</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="btn btn-primary m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDlete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
