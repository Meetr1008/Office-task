import { useState } from "react";
import "./App.css";

function App() {
  const [data, setMyData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setMyData(
        data.map((item) =>
          item.id === currentId ? { ...item, name, email } : item
        )
      );
      setIsEdit(false);
      setCurrentId(null);
    } else {
      setMyData([...data, { id: Math.random(), name, email }]);
    }
    setName("");
    setEmail("");
  };

  const handleDelete = (id) => {
    setMyData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setIsEdit(true);
    setCurrentId(id);
  }
  const handleSerchval = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Hello from meet</h1>
      Search{" "}
      <input type="text" onChange={handleSerchval} value={searchTerm}></input>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">{isEdit ? "Update" : "Submit"}</button>
      </form>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;


