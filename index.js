
function Verify() {
  var userRef = "SuperBob@gmail.com";
  var passRef = "12RobotoLove";
  
  var user = document.myform.email.value; 
  var pass = document.myform.pwd.value;
  if ((user==userRef) && (pass==passRef)) {
  alert("Connecion");
  window.open("submit.html");
  } else {
  alert("It's seem you make a mistake...")
  }
};


