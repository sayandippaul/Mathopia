
  // var url="http://localhost:5000";
  var url="https://mathopia.onrender.com";

  
  
  
  
  function toggleDiv(divId) {
    var divs = document.querySelectorAll('.divshow');
    var buttons = document.querySelectorAll('.buttonshow');

    divs.forEach(function (div) {
      if (div.id === divId) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });

    buttons.forEach(function (button) {
      if (button.id === 'btn' + divId) {
        button.classList.remove('btn-light');
        button.classList.add('btn-primary');
      } else {
        button.classList.remove('btn-primary');
        button.classList.add('btn-light');
      }
    });
  }


  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        // backgroundColor: "blue",
        borderColor: "white",
        label: "No of exams",
        fontColor: "white",

        borderWidth: 1,

        data: yValues
      }]
    },
    options: {
      indexAxis: 'y', // Change to horizontal bars (change to 'x' for vertical bars)
      legend: {
        labels: {
          fontColor: 'white' // Changing the color of labels
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white",

          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "white",
          }
        }],
      }
    }
  });



  // create batch

  var input = document.getElementById('cnobatchesperweek');

  input.addEventListener('input', function() {
    // Get the current value of the input box
    var inputValue = input.value;
    showmultiplebatches(inputValue);
});


  function showmultiplebatches(a){
    // var a=document.getElementById("cnobatchesperweek").value;
    console.log(a);    
    var b=``;
    if(a<=0){
      a=1;
    }
    for(var i=1;i<=a;i++){
      console.log(i);    b=b+`
              <div class="form-row col-12">
                
                <div class="form-group col-lg-5">
                  <label for="cbday`+i+`">Batch Day`+i+`</label>
                <select id="cbday`+i+`" class="form-control col-12" >
                  <option selected>Monday</option>
                  <option>tuesday</option>
                  <option>wednesday</option>
                  <option>thursday</option>
                  <option>friday</option>
                  <option>saturday</option>
                  <option>sunday</option>
                </select>
              </div>

                <div class="form-group col-lg-3">
                  <label for="inputCity">Starting Time</label>
                  <input type="time" required class="form-control" id="starttime`+i+`">
                </div>
                <div class="form-group col-lg-4">
                  <label for="inputZip">Ending Time</label>
                  <input type="time" required class="form-control" id="endtime`+i+`">
                </div>
              </div><hr><hr>
              `;
    }
    document.getElementById("showmultiplebatchescreate").innerHTML=b;

  }


  function createbatch(e){
e.preventDefault();

var confirm = window.confirm("Are you sure you want to create this batch?");
if (!confirm) {
return;




}


    var bname=document.getElementById("cbname").value;
    // var bid=document.getElementById("cbid").value;
    // var bid="b10";
    var bid=localStorage.getItem("lastbid");

    var a=document.getElementById("cnobatchesperweek").value;
    var batch=[];
    for(var i=1;i<=a;i++){
      var bday=document.getElementById("cbday"+i).value;
      var btime=document.getElementById("starttime"+i).value+"-"+document.getElementById("endtime"+i).value;
      var bid = "b" + (parseInt(bid.substring(1)) + i );
      localStorage.setItem("lastbid", bid);
     
      batch.push({
        "bid": bid,
        "bname": bname,
        "bday": bday,
        "btime": btime
      });
    }
    console.log(batch);
    // batches.push(batch);
    // printallbatches(batches);

   for(var i=0;i<batch.length;i++){
    // uploadbatch(batch[i]);
    fetch(url+"/Addcourse", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(batch[i]),
    })
      .then((res) => res.json())
      .then((data) => {
        // window.location.replace("login.js");
        // alert(data);
        if (data != 0) {
          alert("Course Added");
          if(i==batch.length){
            alert("Batch Created");
            window.location.reload();
          }


          
        } else {
          alert("course already exist");
        }
        // alert("success");
      })
      .catch((err) => console.log(err));


    
   }
// window.location.reload();      

  }

  function uploadbatch(t){
    

  }

  // edit batch


//   var batches=[
//     {
//         "bid": "b1",
//         "bname": "bsc Batch 1",
//         "bday": "Monday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b2",
//         "bname": "bsc Batch 2",
//         "bday": "Tuesday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b3",
//         "bname": "btech Batch 1",
//         "bday": "Wednesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b4",
//         "bname": "btech Batch 2",
//         "bday": "Thursday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b5",
//         "bname": "Class-XI Batch 1",
//         "bday": "Friday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b6",
//         "bname": "Class-XI Batch 2",
//         "bday": "Saturday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b7",
//         "bname": "Class-XII Batch 1",
//         "bday": "Sunday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b8",
//         "bname": "Class-XII Batch 2",
//         "bday": "Monday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b9",
//         "bname": "aptitude Batch 1",
//         "bday": "Tuesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b10",
//         "bname": "unacademy Batch 1",
//         "bday": "Wednesday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b11",
//         "bname": "vedantu Batch 1",
//         "bday": "Thursday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b12",
//         "bname": "jee Batch 1",
//         "bday": "Friday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b13",
//         "bname": "wbjee Batch 1",
//         "bday": "Saturday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b14",
//         "bname": "wbjee Batch 2",
//         "bday": "Sunday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b15",
//         "bname": "aptitude Batch 2",
//         "bday": "Monday",
//         "btime": "12-14"
//     }
// ]



var batches = [];




  



  // for(var i=0;i<allstudents.length;i++){

  // }


  
  

// var allstudents = [
//     {
//         "sid": "s-1",
//         "name": "Sneha Sharma",
//         "email": "sneha.sharma@example.com",
//         "phone": "9876543211",
//         "password": "sneha123",
//         "batch": [
//             {
//                 "bid": "b10",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             }
//         ]
//     },
//     {
//         "sid": "s-2",
//         "name": "Rahul Kapoor",
//         "email": "rahul.kapoor@example.com",
//         "phone": "9876543212",
//         "password": "rahul456",
//         "batch": [
//             {
//                 "bid": "b11",
//                 "bname": "btech",
//                 "day": "Thursday",
//                 "time": "16-18"
//             },
//             {
//                 "bid": "b10",
//                 "bname": "Class-XI Batch 2",
//                 "day": "Saturday",
//                 "time": "21-22"
//             },
//             {
//                 "bid": "b11",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             }
//         ]
//     },
//     {
//         "sid": "s-3",
//         "name": "Anjali Singh",
//         "email": "anjali.singh@example.com",
//         "phone": "9876543213",
//         "password": "singh789",
//         "batch": [
//             {
//                 "bid": "b9",
//                 "bname": "aptitude",
//                 "day": "Tuesday",
//                 "time": "12-14"
//             },
//             {
//                 "bid": "b11",
//                 "bname": "vedantu",
//                 "day": "Thursday",
//                 "time": "19-21"
//             }
//         ]
//     },
//     {
//         "sid": "s-4",
//         "name": "Vikram Patel",
//         "email": "vikram.patel@example.com",
//         "phone": "9876543214",
//         "password": "vikram123",
//         "batch": [
//             {
//                 "bid": "b13",
//                 "bname": "wbjee",
//                 "day": "Saturday",
//                 "time": "7-9"
//             }
//         ]
//     },
//     {
//         "sid": "s-5",
//         "name": "Priya Gupta",
//         "email": "priya.gupta@example.com",
//         "phone": "9876543215",
//         "password": "priya456",
//         "batch": [
//             {
//                 "bid": "b2",
//                 "bname": "aptitude",
//                 "day": "Tuesday",
//                 "time": "18-20"
//             },
//             {
//                 "bid": "b5",
//                 "bname": "Class-XI Batch 1",
//                 "day": "Friday",
//                 "time": "19-21"
//             }
//         ]
//     },
//     {
//         "sid": "s-6",
//         "name": "Rohit Sharma",
//         "email": "rohit.sharma@example.com",
//         "phone": "9876543216",
//         "password": "rohit789",
//         "batch": [
//             {
//                 "bid": "b7",
//                 "bname": "Class-XII Batch 1",
//                 "day": "Sunday",
//                 "time": "7-9"
//             }
//         ]
//     },
//     {
//         "sid": "s-7",
//         "name": "Suman Das",
//         "email": "suman.das@example.com",
//         "phone": "9876543217",
//         "password": "suman123",
//         "batch": [
//             {
//                 "bid": "b15",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "12-14"
//             },
//             {
//                 "bid": "b3",
//                 "bname": "btech",
//                 "day": "Wednesday",
//                 "time": "12-14"
//             }
//         ]
//     },
//     {
//         "sid": "s-8",
//         "name": "Kavya Reddy",
//         "email": "kavya.reddy@example.com",
//         "phone": "9876543218",
//         "password": "kavya456",
//         "batch": [
//             {
//                 "bid": "b10",
//                 "bname": "unacademy",
//                 "day": "Wednesday",
//                 "time": "16-18"
//             }
//         ]
//     },
//     {
//         "sid": "s-9",
//         "name": "Amit Kumar",
//         "email": "amit.kumar@example.com",
//         "phone": "9876543219",
//         "password": "amit789",
//         "batch": [
//             {
//                 "bid": "b8",
//                 "bname": "Class-XII Batch 2",
//                 "day": "Monday",
//                 "time": "10-11"
//             },
//             {
//                 "bid": "b12",
//                 "bname": "jee",
//                 "day": "Friday",
//                 "time": "21-22"
//             }
//         ]
//     },
//     {
//         "sid": "s-10",
//         "name": "Shreya Singh",
//         "email": "shreya.singh@example.com",
//         "phone": "9876543220",
//         "password": "shreya123",
//         "batch": [
//             {
//                 "bid": "b14",
//                 "bname": "wbjee",
//                 "day": "Sunday",
//                 "time": "10-11"
//             }
//         ]
//     },
//     {
//         "sid": "s-11",
//         "name": "Aryan Shah",
//         "email": "aryan.shah@example.com",
//         "phone": "9876543221",
//         "password": "aryan456",
//         "batch": [
//             {
//                 "bid": "b1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             }
//         ]
//     },
//     {
//         "sid": "s-12",
//         "name": "Neha Verma",
//         "email": "neha.verma@example.com",
//         "phone": "9876543222",
//         "password": "neha789",
//         "batch": [
//             {
//                 "bid": "b2",
//                 "bname": "aptitude",
//                 "day": "Tuesday",
//                 "time": "18-20"
//             }
//         ]
//     },
//     {
//         "sid": "s-13",
//         "name": "Raj Patel",
//         "email": "raj.patel@example.com",
//         "phone": "9876543223",
//         "password": "raj123",
//         "batch": [
//             {
//                 "bid": "b3",
//                 "bname": "btech",
//                 "day": "Wednesday",
//                 "time": "12-14"
//             }
//         ]
//     },
//     {
//         "sid": "s-14",
//         "name": "Ananya Singh",
//         "email": "ananya.singh@example.com",
//         "phone": "9876543224",
//         "password": "ananya456",
//         "batch": [
//             {
//                 "bid": "b4",
//                 "bname": "btech",
//                 "day": "Thursday",
//                 "time": "16-18"
//             }
//         ]
//     },
//     {
//         "sid": "s-15",
//         "name": "Aditya Sharma",
//         "email": "aditya.sharma@example.com",
//         "phone": "9876543225",
//         "password": "aditya123",
//         "batch": [
//             {
//                 "bid": "b5",
//                 "bname": "Class-XI Batch 1",
//                 "day": "Friday",
//                 "time": "19-21"
//             }
//         ]
//     }
// ];
var allstudents=[];
async function fetchall() {


    
  fetch(url+"/showcourses", {
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
  
      batches = data;
  printallbatches(data);
  
    })
    .catch((err) => console.log(err));


 
  fetch(url+"/showstudent", {
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
         
          setallstudents(data);
          console.log(data);
    
      })
      .catch((err) => console.log(err));
    
      
      


        
        
        
        
  
    

}
fetchall();




function setallstudents(data) {
  console.log(batches);
  for(var i=0;i<data.length;i++){
      for(var k=0;k<data[i].batch.length;k++){
          var details={"bid":"","bname":"","bday":"","btime":""}
          for(var j=0;j<batches.length;j++){
          if(data[i].batch[k]==batches[j].bid){
              details.bid=batches[j].bid;
              details.bname=batches[j].bname;
              details.bday=batches[j].bday;
              details.btime=batches[j].btime;
              data[i].batch[k]=details;
          }

          }
      }
  }

  allstudents=data;


  printallstudentsoption();
printallstudents(data);
printallbatches(batches);



}



function sortObjectsByName(objects) {
  return objects.sort((a, b) => {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}


allstudents=sortObjectsByName(allstudents);
                            
    // print all batches
function printallbatches(b){
    batches=b;
    var a=``;
for(var i=0;i<batches.length;i++){
  var b=getEnrolledStudentsCount(batches[i].bid);
    a=a+`<tr>
                              <th scope="row">`+batches[i].bid+`</th>
                              <td>`+batches[i].bname+`</td>
                              <td>`+batches[i].bday+` `+batches[i].btime+`</td>
                              <td>`+b+`</td>
                              <td><a class="btn btn-warning"  onclick="editbatch('`+batches[i].bid+`')">Edit now</a></td>
                              <td><a class="btn btn-success"  onclick="view('`+batches[i].bid+`')">students list</a></td>
                            </tr>
`;
    }
    a=a+`<tr>`;

    document.getElementById("showbatchesoptionedit").innerHTML=a;

}
function getEnrolledStudentsCount(batchId) {
    var count = 0;
    for (var i = 0; i < allstudents.length; i++) {
        var student = allstudents[i];
        for (var j = 0; j < student.batch.length; j++) {
  console.log(student.batch[j].bid,batchId);

            if (student.batch[j].bid === batchId) {
                count++;
            }
        }
    }
    return count;
}
function printallstudentsoption(){
  var options = `<option class="btn btn-dark" selected value="0"> No Student Selected</option>`;
  for (var i = 0; i < allstudents.length; i++) {
    var student = allstudents[i];
    options += `<option class="btn btn-dark" value="${student.sid}"> ${student.name}</option>`;
  }
      document.getElementById("selectstudenttoadd").innerHTML=options;
}





function searchObjects() {
  console.log("hit");
  var objects = batches;
  var searchPhrase = document.getElementById("searchapprove").value;
  // Convert the search phrase to lowercase for case-insensitive search
  var searchLower = searchPhrase.toLowerCase();

  // Filter the objects based on the search criteria
  var searchResults = objects.filter(object => {
    // Convert batch name, day, and time to lowercase for case-insensitive search
    var batchNameLower = object.bname.toLowerCase();
    var batchDayLower = object.bday.toLowerCase();
    var batchTimeLower = object.btime.toLowerCase();

    // Check if the search phrase is present in batch name, day, or time
    return batchNameLower.includes(searchLower) || batchDayLower.includes(searchLower) || batchTimeLower.includes(searchLower);
  });

  // return searchResults;
  // batches = searchResults;
  // if(searchPhrase==""){
  //     approvelist=mainapprovelist;
  // }

  printallbatches(searchResults);
}

function editbatch(batchId) {
  // Get the batch details based on the batchId
  var batch = batches.find(function(item) {
    return item.bid === batchId;
  });

  // con.log(batch);
  // Check if the batch exists
  if (batch) {
    // Set the display of div editbatch to block
    document.getElementById("editbatch").style.display = "block";
  document.getElementById("viewbatchstudents").style.display = "none";

    // Fill the inputs with the batch details
    document.getElementById("batchIdInput").value = batch.bid;
    document.getElementById("batchNameInput").value = batch.bname;
    document.getElementById("batchDayInput").value = batch.bday;
    document.getElementById("batchTimeInput").value = batch.btime;
  }


   document.getElementById("editbatch").focus();

  // Focus on the div
  
   
}

function editsavebatch(){
  var editbid= document.getElementById("batchIdInput").value;
  var editbname= document.getElementById("batchNameInput").value;
  var editbday= document.getElementById("editbatchday").value;
  var editbstime= document.getElementById("batchstimeInput").value;
  var editbetime= document.getElementById("batchetimeInput").value;
  var btimeedit="";
  if(editbetime=="" || editbstime==""){
    btimeedit=batch.btime;
  }
  else{
    btimeedit=editbstime+"-"+editbetime;
  }
  // console.log(editbid+editbname+editbday+editbstime+editbetime);
  var editbatchobj={
    bid:editbid,
    bname:editbname,
    bday:editbday,
    btime:btimeedit,
    
  }
  fetch(url+"/editbatch", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(editbatchobj),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.replace("login.js");
      // alert(data);
            alert("Batch Details Updated");
            window.location.reload();
    })
    .catch((err) => console.log(err));





}



function addstudenttobatch(){
  var sidtoadd=document.getElementById("selectstudenttoadd").value;
  if(sidtoadd==0){
    alert("NO STUDENT SELECTED");
    return ;
  }
  fetch(url+"/addstudenttobatch", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({bid:nowbid,sid:sidtoadd}),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.replace("login.js");
      // alert(data);
            alert(data.message);
            window.location.reload();
    })
    .catch((err) => console.log(err));



}




function removestudent(sid){
  fetch(url+"/removestudentfrombatch", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({bid:nowbid,sid:sid}),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.replace("login.js");
      // alert(data);
            alert(data.message);
            window.location.reload();
    })
    .catch((err) => console.log(err));


}

var nowbid="";

function view(batchId) {
  nowbid=batchId;
  var myDiv = document.getElementById("viewbatchstudents");

  // Focus on the div
  myDiv.focus();
   
  
  document.getElementById("editbatch").style.display = "none";
  document.getElementById("viewbatchstudents").style.display = "block";



  var allstudents1= allstudents;
    
        allstudents1= allstudents1.filter(student => {
        // Check if the student has the provided batch ID in any of their batches
        return student.batch.some(batch => batch.bid === batchId);
    });

    

    printallstudents(allstudents1);
}

function printallstudents(allstudents) 
{
    var a=``;
    for (var i = 0; i < allstudents.length; i++) {
        var student = allstudents[i];
        a += `<tr>`;
          a += `<td>${student.sid}</td>`;
        a += `<td>${student.name}</td>`;
       a+=` <td><button class="btn btn-danger" onclick="removestudent('`+student.sid+`')">Remove Form Batch</button></td>`;

        a += `</tr>`;
    }
        


    document.getElementById("showstudentlist").innerHTML=a;

}


