//login functions 

function signUp(){
  let user = document.getElementById("name").value;
  let pass = document.getElementById("pass2").value;
  localStorage.setItem("user",user);
  localStorage.setItem("pass",pass);
  alert("Signup Sucess");

}

function logIn(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("pass1").value;
  
  if(user=== localStorage.getItem("user") && pass===localStorage.getItem("pass")){
    alert("Login Sucess");
    window.location.href = "dashboard.html";
  }
  else {
    alert("Invalid Credentials");
    }

}

function Exit(){
  if(confirm("DO you want to exit")){
    window.close();
  }
}

function showProfile(){
  let user = localStorage.getItem("user");
  document.getElementById("user").innerText=user;
  alert("Logged in as: "+ user)
}
