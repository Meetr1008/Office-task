import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data1, setData1] = useState([]);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [nextid, setNextid] = useState("6");

  const [currentId,setCurrentId] = useState(null)

  function handlename(e) {
    setName(e.target.value);
  }

  function handleemail(e) {
    setemail(e.target.value);
  }

  let api = "http://localhost:3031/users";
  useEffect(() => {
    const fetchApiDAta = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);

      setData1(data);
    };

    fetchApiDAta(api);
  }, [data1]);

  const handlesubmit = async (e) => {
    // console.log(nextid)

    if(isEditing){

      e.preventDefault();
      const response = await fetch(`http://localhost:3031/users/${currentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ id: currentId, name: name, email: email }),
      });
      console.log(response);
      setISEditing(false)
      setCurrentId(null)
      setName("")
      setemail("")
  

let p = new Promise((resolve,reject)=>{
  resolve("your pizza has been orderd")
})




    }else{

    

    e.preventDefault();
    const response = await fetch("http://localhost:3031/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ id: nextid, name: name, email: email }),
    });
    console.log(response);}
  };

  function handleDlt(id) {
    fetch(`http://localhost:3031/users/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((response) => {
        console.warn(response);
      });
    });

    // fetch(`http://localhost:3031/users/${id}` , {
    //   method : 'DELETE',

    // })
  }

  const [isEditing, setISEditing] = useState(false);

  function handleUpdate(id) {
    setISEditing(true);
  setCurrentId(id)
  let item = data1[id-1]
  console.log(item)
  setName(item.name)
  setemail(item.email)

  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users data</h1>
      <div className="div-section">
        <form onSubmit={handlesubmit}>
          <lable className="lable">Name:</lable> <br></br>
          <input
            type="text"
            value={name}
            className="input-field"
            onChange={handlename}
          ></input>
          <br></br>
          <lable className="lable">Email:</lable>
          <br></br>
          <input
            type="text"
            value={email}
            className="input-field"
            onChange={handleemail}
          ></input>
          <br></br>
          <button type="submit">{isEditing ? "Update" : "Add"}</button>
        </form>
      </div>

      <table>
        <tr>
          <th>NO.</th>
          <th>Name</th>
          <th>Email</th>
          <th colSpan={2}>Action</th>
        </tr>

        {data1.map((e, i) => {
          return (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleDlt(e.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleUpdate(e.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <br></br>
    </>
  );
}

export default App;
