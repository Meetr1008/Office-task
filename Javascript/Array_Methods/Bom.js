// //alert
// function myfun() {
//   alert("hello world");
// }
// //confirm
// function con() {
//   let a = confirm("are you doing work or not");
//   if (a == true) {
//     alert("wow greate");
//   } else {
//     alert("why you not done work ");
//   }
// }
// // prompt
// function promp() {
//   const a = prompt("give me the anything in my input box");
//   alert("my name is " + a);
// }
// //open
function open1() {
  open("https://www.youtube.com/");
}
// //close

function close1() {
  close();
}

// //settimeout

// function settime() {
//   setTimeout(function () {
//     alert("hello how r u");
//   }, 2000);
// }

//    function settime1() {
//   myvar= setTimeout(function () {
//   confirm("are ok with this ????");
//   }, 3000);
// }
// function clear(){
//     clearTimeout(myvar)
// }

// //innerwidth
// function innwid() {
//   alert(innerWidth);
// }

// function innheih(){
//     alert(innerHeight)
// }

// //move method to current winndow

// function open1() {
//  const  a = open("https://www.youtube.com/","" ,"width=200 , height=300")
//   }
//   function moveto(){
//     a.moveTO()
//   }

//   //back

  function forw1(){
    history.forward()
  }
  

  function back1(){
    window.history.back()
  }
//   function go1(){
//     window.history.go(1)
//   }
function setinter() {
  const a = setInterval(timer, 1000);
  function timer() {
    console.log("hello world");
  }
  setTimeout(stop, 5000);
  function stop() {
    clearInterval(a);
    console.log("your interval has been stopped");
  }
  
}
setinter();

//   function clearint(){
//     clearInterval(a)
//   }

//   function ck(){
//     (setTimeout(timer,3000))
//  }

//  function timer(){
//      alert("hello world")
//  }

//  function back3(){
//   history.forward()
//  }
