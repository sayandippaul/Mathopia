var url="http://localhost:5000";
 
    function newadmission(){
       
        if(document.getElementById('name').value == ''){
            alert('Please Enter Your Name');
            return false;
        }
        if(document.getElementById('email').value == ''){
            alert('Please Enter Your Email');
            return false;
        }
        if(document.getElementById('contact').value == ''){
            alert('Please Enter Your Contact');
            return false;
        }
        if(document.getElementById('message').value == ''){
            alert('Please Enter Your message or Description about your batch');
            return false;
        }

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var message = document.getElementById('message').value;
        var ds = {
            name: name,
            email: email,
            phone: contact,
            text:message

        }
        console.log(ds);
        fetch(url+"/Addadmission", {
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
                 
                alert("You Have Successfully Applied For This Institution.");
          window.location.reload();
        
        
              } else {
                alert("You have already applied earlier.");
              }
              // alert("success");
            })
            .catch((err) => console.log(err));
        
        
       }