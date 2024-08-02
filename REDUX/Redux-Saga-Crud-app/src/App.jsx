import { useState, useEffect, Suspense } from "react";
import "./App.css";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getFetchData, getAddData,getDeleteData,getEditData,} from "./Counter/dataSlice";
import { table } from "console";

function App() {
  const selectTextRef = useRef(null);
  const dispatch = useDispatch();

  const mySagaData = useSelector((state) => state.sagaData.data);

  useEffect(() => {
    dispatch(getFetchData());
  }, []);

  console.log("my saga data are=>>>", mySagaData);

  const generateUniqueId = () => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let uniqueId = "";
    for (let i = 0; i < 5; i++) {
      uniqueId += str.charAt(Math.floor(Math.random() * str.length));
    }
    return uniqueId;
  }
  const [formData, setFormData] = useState({
    id: generateUniqueId(),
    name: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id) => {
    console.log("deleted");
    dispatch(getDeleteData(id));
    dispatch(getFetchData());
  };

  const handleEdit = (item) => {
    
    setFormData(item);
    selectTextRef.current.select();
    setIsEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      try {
        dispatch(getEditData(formData));
        console.log("Edited successfully");
        setIsEdit(false);
      } catch (error) {
        console.error("Error editing data:", error);
      }
    } else {
      const newFormData = {
        ...formData,
        id: generateUniqueId(),
      };
      dispatch(getAddData(newFormData));
      console.log("Added successfully");
    }
    dispatch(getFetchData());
    setFormData({ id: generateUniqueId(), name: "" });
  };

  return (
    <>
      <tabel style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {mySagaData.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>
                <button onClick={() => handleEdit(e)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </tabel>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          ref={selectTextRef}
          type="text"
          value={formData.name} // Add value to bind input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;



