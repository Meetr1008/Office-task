function asidefun() {
  const a = document.getElementById("divaside");
 
  a.style.visibility = "visible";
}

const arr = [];

function firstthree(id) {
  const obj1 = {
    id: 1,
    name: "Dipak",
    email: `dipak@gmail.com`,
    num: `9393989493`,
    gender: `Male`,
  };
  const obj2 = {
    id: 2,
    name: "Mukesh",
    email: `mukesh@gmail.com`,
    num: `9393989493`,
    gender: `Male`,
  };
  const obj3 = {
    id: 3,
    name: "Sagar",
    email: `sagar@gmail.com`,
    num: `9393989493`,
    gender: `Female`,
  };
  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);

 

  const tbod = document.getElementById("tb"); 

  const td1 = document.createElement("tr");
  td1.setAttribute("id", `${obj1.id}`);

  td1.innerHTML = `<td>${obj1.name}</td>
    <td>${obj1.email}</td>
    <td>${obj1.num}</td>
    <td>${obj1.gender}</td>
    <td> <input type="button"  class="btntable" onclick="edit(${obj1.id})"  value="Edit" ></td>
    <td> <input type="button" class="btntable" value="Delete" onclick = "dlt(${obj1.id})" ></td>`;

  const td2 = document.createElement("tr");
  td2.setAttribute("id", `${obj2.id}`);
  td2.innerHTML = `<td>${obj2.name}</td>
     <td>${obj2.email}</td>
     <td>${obj2.num}</td>
     <td>${obj2.gender}</td>
     <td> <input type="button"  class="btntable" onclick="edit(${obj2.id})"  value="Edit" ></td>
     <td> <input type="button" class="btntable" value="Delete" onclick = "dlt(${obj2.id})" ></td>`;

  const td3 = document.createElement("tr");
  td3.setAttribute("id", `${obj3.id}`);
  td3.innerHTML = `<td>${obj3.name}</td>
     <td>${obj3.email}</td>
     <td>${obj3.num}</td>
     <td>${obj3.gender}</td>
     <td> <input type="button"  class="btntable" onclick="edit(${obj3.id})"  value="Edit" ></td>
     <td> <input type="button" class="btntable" value="Delete" onclick = "dlt(${obj3.id})" ></td>`;

  tbod.appendChild(td1); 
  tbod.appendChild(td2);
  tbod.appendChild(td3);
}

firstthree(); 


let count = 0;
let selectrow = null;

function save() {
  const a11 = document.getElementById("divaside");

  const a = document.getElementById("name1").value;
  const b = document.getElementById("email1").value;
  const c = document.getElementById("num").value;
  const d = document.querySelectorAll(".genderr")

    


  //   const r2 = document.getElementById("gen1");
  const atpo = b.indexOf("@");
  const dotpo = b.lastIndexOf(".");
  if (a == "" || a == null) {
    alert("please enter your name");
    return false;
  } else if (b == null || b == "") {
    alert("please enter your email");
    return false;
  } else if (c == null || c == "") {
    alert("please enter the number atleast");
    return false;
  } else if (c.length < 10 || c.length > 10) {
    alert("please enter the valid length of number");
    return false;
  }
  //   if (d.checked == true) {
  //     console.log(d.value);

  //   } else {
  //     alert("please select the gender option"
  //     return false;
  //   }

  if (atpo < 1 || dotpo < atpo + 6 || dotpo + 3 >= email1.length) {
    alert("Please enter a correct  email");
    return false;
  } else {
    a11.style.visibility = "hidden";
  }

  if (selectrow !== null) {
    const index = arr.findIndex((item) => item.id === selectrow);



    if (index !== -1) {
      arr[index].name = a;
      arr[index].email = b;
      arr[index].num = c;
      // const d = document.querySelectorAll(".genderr")
      // arr[index].gender = d;
  //  console.log(d[0].value)
      if(d[1].checked){
        console.log("if")
        console.log(d[1].value)
        arr[index].gender =d[1].value
      }
      else {
        console.log(d[0].value)
        console.log("hello")
        arr[index].gender = "Male"
      }

      const t1 = document.getElementById(selectrow);

      t1.innerHTML = `<td>${arr[index].name}</td>
          <td>${arr[index].email}</td>
          <td>${arr[index].num}</td>
          <td>${arr[index].gender}</td>
          <td> <input type="button"  class="btntable"  value="Edit" onclick="edit('${selectrow}')" ></td>
          <td> <input type="button" class="btntable" value="Delete" onclick="dlt('${selectrow}')" ></td>`;

      selectrow = null;

      console.log(arr);
      return;
    }
  }




  const obj = {
    id: `${count}`,
    name: `${a}`,
    email: `${b}`,
    num: `${c}`,
    gender: ``,

  };
if(d[0].checked){
  obj.gender = d[0].value
}else if(d[1].checked){
  obj.gender = d[1].value
}



  arr.push(obj);
  count++;

  const t = document.createElement("tr");
  t.setAttribute("id", `${obj.id}`);

  t.innerHTML = `<td>${obj.name}</td>
      <td>${obj.email}</td>
      <td>${obj.num}</td>
      <td>${obj.gender}</td>
      <td> <input type="button" class="btntable" value="Edit" onclick="edit('${obj.id}')" class="edit"></td>
      <td> <input type="button" class="btntable" value="Delete" onclick="dlt(${obj.id})"  class="dlt"></td>`;

  const table = document.getElementById("tb");
  table.appendChild(t);
  console.log(arr);
}

function edit(id) {
  const showform = document.getElementById("divaside");
  showform.style.visibility = "visible";
  selectrow = id;
  const index = arr.findIndex((item) => item.id === id);

  if (index !== -1) {
    document.getElementById("name1").value = arr[index].name;
    document.getElementById("email1").value = arr[index].email;
    document.getElementById("num").value = arr[index].num;
    // document.getElementById("gen").value = arr[index].gender;



    let btn = document.querySelectorAll(`input[name = "gender"]`);
    btn.forEach(e =>{
      if(e.value == arr[index].gender){
        e.checked = true;
      }
      else{
        e.checked = false;
      }
    })
    

  }
}

function dlt(id) {


  const index = arr.findIndex((item) => item.id === id);

  if (index !== -1) {
    arr.splice(index, 1);
    document.getElementById(id).remove();
  }

  console.log(arr);
}

function serch() {
  const searchTerm = document.getElementById("serch").value.toLowerCase();
  console.log(arr);
  arr.forEach((e) => {
    const row = document.getElementById(e.id);
    console.log(row);

    const name = e.name.toLowerCase();
    if (name.includes(searchTerm)) {
      console.log("yes you are a right");
      row.style.display = "";
      row.style.color = "red";
    } else {
      console.log("wrong");
      row.style.display = "none";
      row.style.color = "black";
    }
    console.log(e.name);
  });

}


