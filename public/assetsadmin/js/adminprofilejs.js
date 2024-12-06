
// var url="http://localhost:5000";
var url="https://mathopia.onrender.com";

  document.getElementById("newnotificationbutton").onclick = function() {
    document.getElementById("showinputnotification").style.display = "block";
    document.getElementById("showinputnotificationbutton").style.display = "block";
    document.getElementById("newnotificationbutton").style.display = "none";


  };
  
  // document.getElementById("showinputnotificationbutton").onclick = function() {
  //   var content = document.getElementById("notificationcontent").value;

  //   if(content == ""){
  //     alert("Please enter notification content");
  //     return;
  //   }


  //   document.getElementById("showinputnotification").style.display = "none";
  //   document.getElementById("showinputnotificationbutton").style.display = "none";
  //   document.getElementById("newnotificationbutton").style.display = "block";



  //    document.getElementById("notificationcontent").value="";

  // };

// var admindetails={
//   "adminid":"1",
//   "name":"Sayandip Paul of Mathopia 0",
//   "about":"Teacher of Mathopia o",
//   "email":"sayandip125@gmail.com 0",
//   "phone":"8777425126",
//   "password":"1234o",
//   "joindate":"2021-07-01"
// };
var admindetails=localStorage.getItem("admindetails");
var admindetails=JSON.parse(admindetails)[0];
console.log(admindetails);
var alladmins=[];


 function fetchal() {


    
  fetch(url+"/showadmin", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    // body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alladmins=data;

      printalladmins(data);

  
  
    })
    .catch((err) => console.log(err));

}



function printalladmins(d){
alladmins=d;
var a="";
for(var i=0;i<alladmins.length;i++){
   a=a+`<hr />
  <div className="media align-items-center">
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpUgC7dkHYV0KD26Ujw5u83EI43dOZqvABg&s"
        className="skill-img"
        style="width: 30px;height: 30px;"
        alt="skill img"
      />
    </div>
    <div className="media-body text-left ml-3">
      <div className="progress-wrapper">
        <p>
          `+alladmins[i].name+` <span className="float-right" />
        </p>
      </div>
    </div>
  </div>
  <hr />
  `;
 }
 document.getElementById("showalladminslist").innerHTML=a;
}






// var allnotification=[
//   {
//     "date":"2021-07-01",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-02",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-03",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-04",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-05",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-06",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-07",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-08",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-09",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   },
//   {
//     "date":"2021-07-10",
//     "content":"Sayandip Paul is the fix for tibulum tincidunt ullamcorper eros."
//   }
// ];


var allnotification=[];
function printallnotification(a){
  allnotification=a;
  var html="";
  for(var i=0;i<allnotification.length;i++){
    html+="<tr>";
    html+="<td>";
    html+="<span class='float-right font-weight-bold'>"+allnotification[i].date+"</span>"+allnotification[i].content;
    html+="</td>";
    html+="</tr>";
  }

if(allnotification.length==0){
  html=html+"No Notification";
}
  document.getElementById("shownotification").innerHTML=html;


  

}




function publish(){
  var content=document.getElementById("notificationcontent").value;
  if(content==""){
    alert("Please enter notification content");
    return;
  }
  var date=new Date();
  var datestring=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  var newnotification={
    "date":datestring,
    "content":content
  };
  
  
  fetch(url+"/Addnotification", { 
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(newnotification)
  })
    .then((res) => res.json())
    .then((data) => {

      console.log(data);
      allnotification.push(newnotification);
  printallnotification(allnotification);
  document.getElementById("notificationcontent").value="";
alert("Notification published successfully");
    })
    .catch((err) => console.log(err));



}



async function fetchall() {
  try {
      var response = await fetch(url + "/shownotification", {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Origin": "*",
          },
      });
      var data = await response.json();
      allnotification=data;
printallnotification(data);



  } catch (error) {
      console.log(error);
  }





  
}

window.fetchal();

window.fetchall();





function printadmindetails(){
  document.getElementById("showadminid").innerHTML=admindetails.adminid;
  document.getElementById("editadminid").value=admindetails.adminid;
  document.getElementById("editname").value=admindetails.name;
  document.getElementById("editabout").value=admindetails.about;
  document.getElementById("showname").innerHTML=admindetails.name;
  document.getElementById("showabout").innerHTML=admindetails.about;
  document.getElementById("showemail").innerHTML=admindetails.email;
  document.getElementById("editemail").value=admindetails.email;
  document.getElementById("showphone").innerHTML=admindetails.phone;
  document.getElementById("editphone").value=admindetails.phone;
  document.getElementById("editpassword").value=admindetails.password;

  document.getElementById("showjoindate").innerHTML=admindetails.joindate;


}
printadmindetails();


document.getElementById("updateadmin").onclick = function updateadmindetails(){
  var r=confirm("Are you sure you want to update the details?");
  if(r==false){
    return;
  }
  var adminid=document.getElementById("editadminid").value;
  var name=document.getElementById("editname").value;
  var about=document.getElementById("editabout").value;
  var email=document.getElementById("editemail").value;
  var phone=document.getElementById("editphone").value;
  var password=document.getElementById("editpassword").value;
   if(name==""){
    alert("Name cannot be empty");
    return;
  }
  if(about==""){
    alert("About cannot be empty");
    return;
  }
  if(email==""){
    alert("Email cannot be empty");
    return;
  }
  if(phone==""){
    alert("Phone cannot be empty");
    return;
  }
  if(password==""){
    alert("Password cannot be empty");
    return;
  }
  admindetails.adminid=adminid;
  admindetails.name=name;
  admindetails.about=about;
  admindetails.email=email;
  admindetails.phone=phone;

  admindetails.password=password;
  printadmindetails();
}


function updateadmin(){
  var r=confirm("Are you sure you want to update the details?");
  if(r==false){
    return;
  }
  var adminid=document.getElementById("editadminid").value;
  var name=document.getElementById("editname").value;
  var about=document.getElementById("editabout").value;
  var email=document.getElementById("editemail").value;
  var phone=document.getElementById("editphone").value;
  var password=document.getElementById("editpassword").value;
   if(name==""){
    alert("Name cannot be empty");
    return;
  }
  if(about==""){
    alert("About cannot be empty");
    return;
  }
  if(email==""){
    alert("Email cannot be empty");
    return;
  }
  if(phone==""){
    alert("Phone cannot be empty");
    return;
  }
  if(password==""){
    alert("Password cannot be empty");
    return;
  }
  admindetails.adminid=adminid;
  admindetails.name=name;
  admindetails.about=about;
  admindetails.email=email;
  admindetails.phone=phone;

  admindetails.password=password;
  var object={
    "adminid":adminid,
    "name":name,
    "about":about,
    "email":email,
    "phone":phone,
    "password":password
  }

  fetch(url+"/updateadmin", { 
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
      printadmindetails();
      alert("Details updated successfully");
    })
    .catch((err) => console.log(err));
  printadmindetails();
}

