function onsubmit1(event) {
  event.preventDefault();
  const fname = document.form.fname.value;
  const lname = document.form.lname.value;
  const pass = document.form.password.value;
  const cpass = document.form.cpassword.value;
  const number1 = document.form.number.value;
  const name3 = document.form.name2.value;
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
    alert("please enter the pass length correct");
    return false;
  } else if (cpass !== pass) {
    alert("please enter the same password");
    return false;
  } else if (isNaN(number1)) {
    alert("please enter the number");
    return false;
  }
  if (name3 == null || name3 == "") {
    const a = (document.getElementById("demo").innerHTML =
      "<img src = 'unchecked.jpeg ' /> ");
    return false;
  } else {
    const a = (document.getElementById("demo").innerHTML =
      "<img src = 'th.jpeg' />");
  }
  if (atpo < 1 || dotpo < atpo + 6 || dotpo + 3 >= email.length) {
    alert("please enter thee coreect mail id");
    return false;
  }
}



