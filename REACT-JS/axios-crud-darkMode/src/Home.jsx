import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Home.css";
function Home() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nextId, setNextId] = useState("6");

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [checked, setChecked] = useState(false);

  const [bg, setBg] = useState("tertiary");
  const [text, setText] = useState("dark");
  const [bgnormal,setBgnormal] = useState("white")
  const [normalText,setNormalText] = useState("black")

  //   useEffect(() => {
  //     getData();
  //   }, [data]);

  //   const getData = async () => {

  //       const res = await axios.get("http://localhost:3034/todo");
  //       console.log(res.data);
  //       setData(res.data);

  //       // if (Array.isArray(res.data)) {
  //       // } else {
  //       //     console.error("API response is not an array:", res.data);
  //       // }

  //   };

  // const getData = async () => {
  //     const response = await axios.get("http://localhost:3034/todo");
  //     setData(response.data);
  //     console.log(response.data)
  // }

  const getData = async () => {
    const response = await axios.get("http://localhost:3034/todo");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  function handlename(e) {
    setName(e.target.value);
  }
  function handleemail(e) {
    setEmail(e.target.value);
  }

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3034/todo/${id}`);
    getData();
    console.log(res.data);
  };

  function handleUpdate(id) {
    setIsEditing(true);
    setCurrentId(id);
    let item = data[id - 1];
    setName(item.name);
    setEmail(item.email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const res1 = await axios.put(`http://localhost:3034/todo/${currentId}`, {
        id: currentId,
        name: name,
        email: email,
      });

      setEmail("");
      setName("");
      setIsEditing(false);
      setCurrentId(null);

      getData();
    } else {
      const res = await axios.post("http://localhost:3034/todo", {
        id: nextId,
        name: name,
        email: email,
      });
      if (res.status) {
        setEmail("");
        setName("");
      }
      getData();
      console.log(data);
    }
  };

  function hanndleCheckbox(e) {
    if (e.target.checked) {
      setBg("dark");
      setText("white");
      setBgnormal("black")
      setNormalText("white")
      setChecked(true)
    } else {
      setBg("tertiary");
      setText("dark");
      setBgnormal("white ")
      setNormalText("black")
      setChecked(false)
    }
  }

  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg bg-${bg}`}>
          <div className="container-fluid">
            <a className={`navbar-brand text-tertiary text-${text}`} href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link active text-${text}`}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${text}`} href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle text-${text}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                </li>
              </ul>

              <div className="form-check form-switch form-check-reverse mt-0 ml-0 mb-0 m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                  onChange={hanndleCheckbox}
                ></input>
                <label
                  className={`form-check-label text-${text}`}
                  for="flexSwitchCheckReverse"
                >
                  {checked?'Disable dark mode':"Enable dark mode"}
                </label>
              </div>

              <form className="d-flex " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div style={{backgroundColor:`${bgnormal}`}}>
      <div className="container w-50 pt-3   " >
        <h3 className="text-center" style={{color:`${normalText}`}}>Crud App Using Axios</h3>
        <form onSubmit={handleSubmit} className="form ">
          <lable className="form-label text-start" style={{color:`${normalText}`}}>Name</lable>
          <br></br>
          <input
            className="border border-secondary form-control mt-2"
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={handlename}
          ></input>
          <br></br>
          <br></br>

          <lable style={{color:`${normalText}`}}>Email</lable>
          <br></br>
          <input
            type="text"
            placeholder="Enter your email..."
            className="form-control mt-2 border border-secondary"
            value={email}
            onChange={handleemail}
          ></input>
          <br></br>
          <br></br>
          <div className="text-end">
            <button type="submit" class="btn btn-success">
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
       </div>
     
<div  style={{backgroundColor:`${bgnormal}`}}>
<div className="container pt-5 pb-4"   >
        <table className="table table-striped  text-center">
          <thead className="table-light">
            <tr class="table table-dark table-striped">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleUpdate(e.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
     
    </>
  );
}

export { Home };
