
// var url="http://localhost:5000";
var url="https://mathopia.onrender.com";


function login() {
    var username = document.getElementById("adminid").value;
    var password = document.getElementById("password").value;
    if (username == "") {
        document.getElementById("adminid").style.border = "1px solid red";
        alert( "Please enter your Adminid");
        return false;
    }
    if (password == "") {
        document.getElementById("password").style.border = "1px solid red";
        alert( "Please enter your Password");

        return false;
    }
    if (username != "" && password != "") {
        var ds = { adminid: username, password: password };
        fetch(url + "/adminlogin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(ds),
        })
            .then((res) => res.json())
            .then((data) => {
                // window.location.replace("login.js");
                // alert(data);
                if (data != 0) {
                    alert("Welcome admin : "+data[0].name );
                    // console.log(data);
                    localStorage.setItem("admindetails", JSON.stringify(data));
                    window.location.replace("/adminprofile");

                } else {
                    alert("Invalid Adminid or Password");
                }
                // alert("success");
            })
            .catch((err) => console.log(err));
    }




    
  
}