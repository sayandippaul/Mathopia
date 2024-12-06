// var url = "http://localhost:5000";
var url="https://mathopia.onrender.com";

function login(){

    var sid = document.getElementById("sidlogin").value;
    var password = document.getElementById("passlogin").value;
    if(sid=="" || password==""){
        alert("Please fill all the fields");
        return;
    }
    var object={
        sid:sid,
        password:password
    }
 
    fetch(url+"/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(object)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        if(data.status==0){
          alert("Invalid Credentials");
           }
        else{
          localStorage.setItem("student",JSON.stringify(data[0]));
          window.location.reload();
      
        }
        showbuttons();
      

      
        })
        .catch((err) => console.log(err));
    

}
 
function showbuttons(){
  var showbuttons = document.getElementsByClassName("showbutton");
  var hidebuttons = document.getElementsByClassName("hidebutton");

// alert(localStorage.getItem("student"));
  // alert(showbuttons.length);
    if(localStorage.getItem("student")=="null" ||localStorage.getItem("student")==null || localStorage.getItem("student")==undefined){
      for(var i=0;i<showbuttons.length;i++){
        showbuttons[i].style.visibility="hidden";

      }
      
      for(var i=0;i<hidebuttons.length;i++){
        hidebuttons[i].style.visibility="visible";

      }
    }
     else{
        var showbuttons = document.getElementsByClassName("showbuttons");
        for(var i=0;i<showbuttons.length;i++){
            showbuttons[i].style.visibility="visible";

        }
        var hidebuttons = document.getElementsByClassName("hidebutton");
        for(var i=0;i<hidebuttons.length;i++){
            hidebuttons[i].style.visibility="hidden";

        }
    
     }
}
  showbuttons();


  function register(){
    var sid = document.getElementById("sidreg").value;
    var password = document.getElementById("sidpass").value;
    var name = document.getElementById("sidname").value;
    var email = document.getElementById("sidemail").value;
    var phone = document.getElementById("sidphone").value;
    var object={
        sid:sid,
        password:password,
        name:name,
        email:email,
        phone:phone
    }
    fetch(url+"/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(object)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        if(data==0){
          alert("Invalid Credentials or you are already registered");
           }
        else{
          alert("Registered Successfully");
console.log(data);

data.name=name;
data.sid=sid;
data.email=email;
data.phone=phone;
data.password=password;
          localStorage.setItem("student",JSON.stringify(data));

          showbuttons();
          window.location.reload();
          // window.location.href = "/";
        }
        showbuttons();
        })
        .catch((err) => console.log(err));
    

  }

  

