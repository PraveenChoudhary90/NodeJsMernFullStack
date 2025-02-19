import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./App.css";
import { Myaddtask, DeleteTask, Myeditdata } from "./TodoSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [input, setinput] = useState("");
  const mydata = useSelector((state) => state.todolist.task);
  const dispatch = useDispatch();
  const [workId, setWorkId] = useState("");
  // console.log(mydata)

  const EditTask = (id, work) => {
    setinput(work);
    setWorkId(id);
  };

  const myEditSave = () => {
    console.log(input);
    dispatch(Myeditdata({ id: workId, data: input}));
  };

  let sno = 0;
  const ans = mydata.map((key, index) => {
    sno++;
    return (
      <>
        <tr key={index}>
          <td>{sno}</td>
          <td>{key.work}</td>
          <td
            onClick={() => {
              dispatch(DeleteTask({ id: key.id }));
            }}
          >
            <Button variant="danger">Delete</Button>
          </td>
          <td
            onClick={() => {
              EditTask(key.id, key.work);
            }}
          >
            <Button variant="primary">Update</Button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>Welcome to our todolist</h1>
      Enter the Task:{" "}
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <Button
        variant="success"
        onClick={() => {
          dispatch(Myaddtask({ id: Date.now(), work: input }));
        }}
      >
        Click Add
      </Button>
      <Button variant="info" onClick={myEditSave}>
        {" "}
        Click Edit
      </Button>
      <hr size="6" color="red" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Add Task here</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {ans}
        </thead>
      </Table>
    </>
  );
}

export default App;
