function setcook(event) {
  event.preventDefault();

  const fname = document.form.fname.value;
  const lname = document.form.lname.value;
  const pass = document.form.password.value;
  const cpass = document.form.cpassword.value;
  const number1 = document.form.number.value;

  const email = document.form.email.value;
  const atpo = email.indexOf("@");
  const dotpo = email.lastIndexOf(".");

  if (fname == "" || fname == null) {
    alert("please enterfirst the name");
    return false;
  } else if (lname == null || lname == "") {
    alert("plese entr the last name");
    return false;
  } else if (pass.length < 6) {
    alert("please enter the Minimum length of pass:7");
    return false;
  } else if (cpass !== pass) {
    alert("please enter the same password");
    return false;
  } else if (isNaN(number1) || number1 == "") {
    alert("please enter valid phone number");
    return false;
  } else if (number1.length < 10 || number1.length > 10) {
    alert("please enter the valid length of phone number");
    return false;
  }

  if (atpo < 1 || dotpo < atpo + 6 || dotpo + 3 >= email.length) {
    alert("Please enter a email");
    return false;
  }

  console.log("document.cookie :>> ", document.cookie);

  const radiofirst = document.getElementById("radio1");
  const radiosec = document.getElementById("radio2");

  
     if(radiofirst.checked==true&&radiosec.checked==true){
      alert("please select only one option")
      return false;

     }
  else if (radiofirst.checked == true) {
    console.log(radiofirst.value);
  } else if (radiosec.checked == true) {
    console.log(radiosec.value);}

    
  else {
    alert("please select atleast one gender option");
    return false;
  }
  const checkbox = document.getElementById("check");
  const checkbox1 = document.getElementById("check1");
  const checkbox2 = document.getElementById("check2");
  if (checkbox.checked == true) {
    console.log("");
  } else if (checkbox1.checked == true) {
    console.log(checkbox1.value);
  } else if (checkbox2 == true) {
    console.log(checkbox2.value);
  } else {
    alert("please select at least one hobby option");
    return false;
  }

  const info = document.getElementById("email").value + document.getElementById("pass").value;

  document.cookie = info;
  b = document.cookie;
  window.location.pathname = "/loginpage.html";
}

function getcook() {
  console.log(document.cookie);
}

function dlt() {
  document.cookie = "max-age=0" + ";expires= Friday , 19 April 2024 05:31:40;";

  alert("cookie hs been deleted");
}
function loginpage() {
  window.location.pathname = "/loginpage.html";
}



window.history.forward();
function noback()
{
    window.history.forward();
}



// window.history.back()
// function noback(){
//   window.history.back()
// }
// window.location.pathname = '/homepage.html'
