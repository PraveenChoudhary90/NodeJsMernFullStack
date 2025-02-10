import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const Search = () => {
  const [val, setVal] = useState([]);
  const [name, setName] = useState("");

  const Searchdata = () => {
    const api = "http://localhost:8000/employee/searchdata";
    axios
      .post(api, { name: name })
      .then((res) => {
        setVal(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("There ia error", error);
      });
    console.log(name);
  };

  const ans = val.map((key, index) => {
    return (
      <tr key={index}>
        <td>{key.name}</td>
        <td>{key.empno}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
      </tr>
    );
  });

  return (
    <>
      <h1> Employee Search page</h1>
      Emplyee Name :{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={Searchdata}>Search data</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee No</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
          {ans}
        </thead>
      </Table>
    </>
  );
};
export default Search;
