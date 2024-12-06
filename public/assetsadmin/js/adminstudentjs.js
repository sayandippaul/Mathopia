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
//statistics

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



    var batches = [],allstudents=[],approvelist=[],mainapprovelist=[];
var mainallstudents=[];


    
    async function fetchall() {
        try {
            var response = await fetch(url + "/showcourses", {
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
            printbatches(data);

        } catch (error) {
            console.log(error);
        }





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
                mainallstudents=data;
          
            })
            .catch((err) => console.log(err));
          
          
          



            fetch(url+"/showadmission", {
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
                   
                    approvelist=data;
                    mainapprovelist=data;
                    printapprovelist(data);
            
              
                })
                .catch((err) => console.log(err));
              
              
              
              
        
          

    }
    fetchall();
    // function setdata(data) {
    //     // alert("data");

    //     ();

    //     // console.log(batches);

    // }
    

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



printallstudents();

    }








// async function fetchall(){

//     await fetch(url+"/showcourses", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//         "Access-Control-Allow-Origin": "*",
//       },
//       // body: JSON.stringify(user)
//     })
//       .then((res) => res.json())
//       .then((data) => {
//           batches = data;
//         // console.log(batches);
    
//       })
//       .catch((err) => console.log(err));
//     }

 
    
    // async function fetchall(){
    //     await fetch(url+"/showcourses", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Headers": "Content-Type",
    //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //       // body: JSON.stringify(user)
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //           batches = data;
    //         // console.log(batches);
    //       })
    //       .catch((err) => console.log(err));
    // }



//     //add new student
//     var batches=[
//     {
//         "bid": "b-1",
//         "bname": "bsc Batch 1",
//         "bday": "Monday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-2",
//         "bname": "bsc Batch 2",
//         "bday": "Tuesday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-3",
//         "bname": "btech Batch 1",
//         "bday": "Wednesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b-4",
//         "bname": "btech Batch 2",
//         "bday": "Thursday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b-5",
//         "bname": "Class-XI Batch 1",
//         "bday": "Friday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b-6",
//         "bname": "Class-XI Batch 2",
//         "bday": "Saturday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b-7",
//         "bname": "Class-XII Batch 1",
//         "bday": "Sunday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-8",
//         "bname": "Class-XII Batch 2",
//         "bday": "Monday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-9",
//         "bname": "aptitude Batch 1",
//         "bday": "Tuesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b-10",
//         "bname": "unacademy Batch 1",
//         "bday": "Wednesday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b-11",
//         "bname": "vedantu Batch 1",
//         "bday": "Thursday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b-12",
//         "bname": "jee Batch 1",
//         "bday": "Friday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b-13",
//         "bname": "wbjee Batch 1",
//         "bday": "Saturday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-14",
//         "bname": "wbjee Batch 2",
//         "bday": "Sunday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-15",
//         "bname": "aptitude Batch 2",
//         "bday": "Monday",
//         "btime": "12-14"
//     }
// ]



function printbatches(data){
    // console.log(batches);
    
    batches = data;

var a="";
    for(var i=0;i<batches.length;i++){
        a=a+`<label class="form-check-label col-lg-5 btn btn-light  m-2 "  for="`+batches[i].bid+`">
                                        <input class="form-check-input " onclick="handleCheckboxChange(this)" type="checkbox" value="`+batches[i].bid+`" id="`+batches[i].bid+`">
                                        `+batches[i].bname+`-`+batches[i].bday+`-`+batches[i].btime+`
                                    </label>
                                    `;
    }
    document.getElementById("showbatchesincreate").innerHTML=a;
}
// printbatches();

var selectedBatches = [];

        // Function to handle checkbox change event
        function handleCheckboxChange(event) {
            console.log(event);
            var batchId = event.value; // Get the value (batch ID) of the selected checkbox

            // If the checkbox is checked, add the batch ID to the selectedBatches array
            if (event.checked) {
                selectedBatches.push(batchId);
            } else {
                // If the checkbox is unchecked, remove the batch ID from the selectedBatches array
                var index = selectedBatches.indexOf(batchId);
                if (index !== -1) {
                    selectedBatches.splice(index, 1);
                }
            }

            console.log(selectedBatches);
        }



        document.getElementById("scdate").value= new Date().toISOString().slice(0, 10);
        var lastsid=localStorage.getItem("lastsid");
        if(lastsid==null){
            lastsid="s-0";
        }
        // extraxt s-1 to 1
        var sid=lastsid.split("-")[1];
        sid=parseInt(sid)+1;
        document.getElementById("scsid").value="s-"+sid;
        sid="s-"+sid;
// document.getElementById("scsid").value= localStorage.getItem("adminid");


function addnewstudent() {
    // Extract values from form fields

    var studentId = document.getElementById("scsid").value;
    var todayDate = document.getElementById("scdate").value;
    var studentName = document.getElementById("scname").value;
    var phoneNumber = document.getElementById("scphone").value;
    var emailId = document.getElementById("scemail").value;

    // Check if any of the previous variables are undefined or null
    if (!studentId || !todayDate || !studentName || !phoneNumber || !emailId) {
        alert("Please fill in all the details.");
        return null;
    }
    // get batch details from the id of the selectedbatches

    var details=[],adddetails=[];
    for(var i=0;i<selectedBatches.length;i++){
        for(var j=0;j<batches.length;j++){
            if(selectedBatches[i]==batches[j].bid){
                details.push(batches[j].bname+"-"+batches[j].bday+"-"+batches[j].btime);
                adddetails.push(batches[j].bid);
            }
        }
    }

    // Create object with extracted values
    var ds = {
        sid: studentId,
        username: studentName,
        phone: phoneNumber,
        email: emailId,
        batch: details

    }; var dsnew = {
        sid: studentId,
        username: studentName,
        phone: phoneNumber,
        email: emailId,
        batch: adddetails

    };
// console.log(ds);


function sendmail() {
    fetch(url+"/sendmailreg", {
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
      .then((data) => { })
      .catch((err) => console.log(err));
  }


  
  
  fetch(url+"/Addstudent", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dsnew),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.replace("login.js");
      // alert(data);
      if (data != 0) {
        sendmail();
        localStorage.setItem("lastsid", studentId);
         
        selectedBatches = [];
        alert("student added for registration");
  window.location.reload();


      } else {
        alert("email already exists");
      }
      // alert("success");
    })
    .catch((err) => console.log(err));

    // return ds;
}







// functions in approve students section
// approvlist object
// var approvelist = [
//     {
//         "name": "John_Smith",
//         "email": "john_smith@example.com",
//         "text": "Hi,_i_am_John._I_want_to_study_in_the_JEE_batch_",
//         "date": "2024-03-24",
//         "aid": "a-1"
//     },
//     {
//         "name": "Emma_Johnson",
//         "email": "emma_johnson@example.com",
//         "text": "Hello,_i_am_Emma._I_want_to_join_the_aptitude_batch_",
//         "date": "2024-03-15",
//         "aid": "a-2"
//     },
//     {
//         "name": "Michael_Brown",
//         "email": "michael_brown@example.com",
//         "text": "Hey_there,_i_am_looking_to_enroll_in_the_WBJEE_batch_",
//         "date": "2024-03-18",
//         "aid": "a-3"
//     },
//     {
//         "name": "Sophia_Martinez",
//         "email": "sophia_martinez@example.com",
//         "text": "Hi,_i_am_Sophia._I_want_to_join_the_unacademy_batch_",
//         "date": "2024-03-21",
//         "aid": "a-4"
//     },
//     {
//         "name": "Liam_Johnson",
//         "email": "liam_johnson@example.com",
//         "text": "Hello,_i_am_Liam._I_want_to_study_in_the_Class-XII_Batch_2_",
//         "date": "2024-03-12",
//         "aid": "a-5"
//     },
//     {
//         "name": "Olivia_Wilson",
//         "email": "olivia_wilson@example.com",
//         "text": "Hi,_i_am_Olivia._I_want_to_join_the_vedantu_batch_",
//         "date": "2024-03-26",
//         "aid": "a-6"
//     },
//     {
//         "name": "Noah_Garcia",
//         "email": "noah_garcia@example.com",
//         "text": "Hey_there,_i_am_looking_to_enroll_in_the_Class-XI_Batch_2_",
//         "date": "2024-03-20",
//         "aid": "a-7"
//     },
//     {
//         "name": "Isabella_Martinez",
//         "email": "isabella_martinez@example.com",
//         "text": "Hello,_i_am_Isabella._I_want_to_study_in_the_bsc_batch_",
//         "date": "2024-03-28",
//         "aid": "a-8"
//     },
//     {
//         "name": "James_Smith",
//         "email": "james_smith@example.com",
//         "text": "Hi,_i_am_James._I_want_to_join_the_aptitude_batch_",
//         "date": "2024-03-17",
//         "aid": "a-9"
//     },
//     {
//         "name": "Emily_Brown",
//         "email": "emily_brown@example.com",
//         "text": "Hey_there,_i_am_looking_to_enroll_in_the_Class-XII_Batch_1_",
//         "date": "2024-03-23",
//         "aid": "a-10"
//     },
//     {
//         "name": "William_Davis",
//         "email": "william_davis@example.com",
//         "text": "Hello,_i_am_William._I_want_to_study_in_the_btech_batch_2_",
//         "date": "2024-03-16",
//         "aid": "a-11"
//     },
//     {
//         "name": "Charlotte_Miller",
//         "email": "charlotte_miller@example.com",
//         "text": "Hi,_i_am_Charlotte._I_want_to_join_the_JEE_batch_",
//         "date": "2024-03-13",
//         "aid": "a-12"
//     },
//     {
//         "name": "Alexander_Taylor",
//         "email": "alexander_taylor@example.com",
//         "text": "Hey_there,_i_am_looking_to_enroll_in_the_WBJEE_batch_",
//         "date": "2024-03-22",
//         "aid": "a-13"
//     },
//     {
//         "name": "Amelia_Thomas",
//         "email": "amelia_thomas@example.com",
//         "text": "Hello,_i_am_Amelia._I_want_to_study_in_the_bsc_batch_2_",
//         "date": "2024-03-14",
//         "aid": "a-14"
//     },
//     {
//         "name": "Ethan_Garcia",
//         "email": "ethan_garcia@example.com",
//         "text": "Hi,_i_am_Ethan._I_want_to_join_the_vedantu_batch_",
//         "date": "2024-03-19",
//         "aid": "a-15"
//     }
// ];








// print table
// var mainapprovelist=approvelist;
// approvelist=sortByname(approvelist);

function printapprovelist(approvelist){


var a=`<tr>


<th>Name</th>
<th>Phone</th>
<th colspan="3">Email</th>
<th>Request Date</th>
<th>View</th>
<th>Approve</th>
<th>Reject</th>
</tr>
<tr>
`;
for(var i=0;i<approvelist.length;i++){
a=a+`<td>
    `+approvelist[i].name+`
</td>
`;
a=a+`<td> `+approvelist[i].phone+`</td>
<td colspan="3"> `+approvelist[i].email+`</td>
<td>
    `+approvelist[i].date+`
</td>

<td  data-code="f3f3" data-name="disqus">
    <button type="button" class="btn btn-primary"  onclick="viewmessage('`+approvelist[i].name+`','`+approvelist[i].text+`')"
    ><i class="zmdi zmdi-disqus"></i> View Message</button>

</td>
<td>
    <button type="button" class="btn btn-success  " ><i
            class="icon-lock"></i>Approve</button>

</td>

<td>
    <button type="button" class="btn btn-danger " ><i class="icon-lock"></i>
        Reject</button>

</td></tr>

`;
}
if(approvelist.length<=0){
    a=`<div style="height: 50px;padding: 5px; margin:10px" class="alert alert-danger alert-dismissible fade show"
                    role="alert">
                    <strong>Ooh!</strong> No Records Found.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
`;}

else{

    a=a+"<tr>";
}


    document.getElementById("showapprovelist").innerHTML=a;
}



function approve(email){
    // alert(aid);
    fetch(url+"/approveadmission", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({email:email}),
    })

    .then((res) => res.json())
    .then((data) => {
        // alert(data);
        fetchall();
    })
    .catch((err) => console.log(err));
}


function reject(email){
    // alert(aid);
    fetch(url+"/rejectadmission", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({email:email}),
    })

    .then((res) => res.json())
    .then((data) => {
        // alert(data);
        fetchall();
    })
    .catch((err) => console.log(err));
}



// print message of student

function viewmessage(name,message){
    document.getElementById("showapprovemessagediv").innerHTML= `<div style="padding:10px;"  class="alert alert-info alert-dismissible text-dark fade show"
               role="alert">
               <strong >`+name+`'s Message : </strong><br></br><span id="showapprovemessage">`+message+`</span> 
               <button type="button" class="close" style="margin-top: 0%;color: black;" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
`;
    document.getElementById("showapprovemessagediv").style.display="block";
    
}
// sorting
function sortByDate() {
    objects=approvelist;
     objects.sort((a, b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    });
    approvelist=objects;
    printapprovelist(objects);
}
function sortByemail() {
    objects=approvelist;
    objects.sort((a, b) => {
        // Convert both emails to lowercase for case-insensitive sorting
        var emailA = a.email.toLowerCase();
        var emailB = b.email.toLowerCase();
        
        if (emailA < emailB) {
            return -1;
        }
        if (emailA > emailB) {
            return 1;
        }
        return 0;
    });
    
    // Return the sorted array
    approvelist=objects;
    printapprovelist(objects);
}
function sortByname() {
    objects=approvelist;
    objects.sort((a, b) => {
        // Convert both emails to lowercase for case-insensitive sorting
        var emailA = a.name.toLowerCase();
        var emailB = b.name.toLowerCase();
        
        if (emailA < emailB) {
            return -1;
        }
        if (emailA > emailB) {
            return 1;
        }
        return 0;
    });
    
    // Return the sorted array
    approvelist=objects;
    printapprovelist(objects);
}
// searching
function searchObjects() {
    // console.log("hit");
    objects=mainapprovelist;
    var searchPhrase=document.getElementById("searchapprove").value;
    // Convert the search phrase to lowercase for case-insensitive search
    var searchLower = searchPhrase.toLowerCase();
    
    // Filter the objects based on the search criteria
    var searchResults = objects.filter(object => {
        // Convert name, email, and phone to lowercase for case-insensitive search
        var nameLower = object.name.toLowerCase();
        var emailLower = object.email.toLowerCase();
        // var phoneLower = object.phone.toLowerCase();
        
        // Check if the search phrase is present in name, email, or phone
        return nameLower.includes(searchLower) || emailLower.includes(searchLower) ;
    });
    
    // return searchResults;
    approvelist=searchResults;
    // if(searchPhrase==""){
    //     approvelist=mainapprovelist;
    // }
    
    printapprovelist(searchResults);
}








// view students page
// var allstudents = [
//     {
//         "sid": "s-1",
//         "name": "Sneha Sharma",
//         "email": "sneha.sharma@example.com",
//         "phone": "9876543211",
//         "password": "sneha123",
//         "batch": [
//             {
//                 "bid": "b-1",
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
//                 "bid": "b-4",
//                 "bname": "btech",
//                 "day": "Thursday",
//                 "time": "16-18"
//             },
//             {
//                 "bid": "b-6",
//                 "bname": "Class-XI Batch 2",
//                 "day": "Saturday",
//                 "time": "21-22"
//             },
//             {
//                 "bid": "b-1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b-1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b-1",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "7-9"
//             },
//             {
//                 "bid": "b-1",
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
//                 "bid": "b-9",
//                 "bname": "aptitude",
//                 "day": "Tuesday",
//                 "time": "12-14"
//             },
//             {
//                 "bid": "b-11",
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
//                 "bid": "b-13",
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
//                 "bid": "b-2",
//                 "bname": "aptitude",
//                 "day": "Tuesday",
//                 "time": "18-20"
//             },
//             {
//                 "bid": "b-5",
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
//                 "bid": "b-7",
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
//                 "bid": "b-15",
//                 "bname": "aptitude",
//                 "day": "Monday",
//                 "time": "12-14"
//             },
//             {
//                 "bid": "b-3",
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
//                 "bid": "b-10",
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
//                 "bid": "b-8",
//                 "bname": "Class-XII Batch 2",
//                 "day": "Monday",
//                 "time": "10-11"
//             },
//             {
//                 "bid": "b-12",
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
//                 "bid": "b-14",
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
//                 "bid": "b-1",
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
//                 "bid": "b-2",
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
//                 "bid": "b-3",
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
//                 "bid": "b-4",
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
//                 "bid": "b-5",
//                 "bname": "Class-XI Batch 1",
//                 "day": "Friday",
//                 "time": "19-21"
//             }
//         ]
//     }
// ];


// print student list
function printallstudents()
{
    var a=`<tr>


<th>Sl.No</th>
<th>Name</th>
<th colspan="2">Batches</th>
<th>Email</th>
<th>Phone</th>
<th>View</th>
</tr>
<tr>
`;
for(var i=0;i<allstudents.length;i++){
    var b="";
   for(var j=0;j<allstudents[i].batch.length;j++){
    b=b+`<button class="btn btn-light m-2">`+allstudents[i].batch[j].bname+`</button>`
   } 
a=a+`<td>
    `+parseInt(i+1)+`
</td>
`;
a=a+`<td> `+allstudents[i].name+`</td>
<td colspan="2" class="hidescrollbar" style="max-width:300px;overflow-x:scroll;">
    `+b+`
</td>
<td > `+allstudents[i].email+`</td>

<td>
    `+allstudents[i].phone+`
</td>

<td  data-code="f205" data-name="account-circle">
    <a type="button" class="btn btn-primary"  onclick="viewstudent('`+allstudents[i].sid+`')"
    ><i class="zmdi zmdi-account-o"></i> View Student</a>

</td>


</tr>

`;
}
if(allstudents.length<=0){
    a=`<div style="height: 50px;padding: 5px; margin:10px" class="alert alert-danger alert-dismissible fade show"
                    role="alert">
                    <strong>Ooh!</strong> No Records Found.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
`;}

else{

    a=a+"<tr>";
}


    document.getElementById("showstudentlist").innerHTML=a;

}

// all batches
// var batches=[
//     {
//         "bid": "b-1",
//         "bname": "bsc Batch 1",
//         "bday": "Monday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-2",
//         "bname": "bsc Batch 2",
//         "bday": "Tuesday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-3",
//         "bname": "btech Batch 1",
//         "bday": "Wednesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b-4",
//         "bname": "btech Batch 2",
//         "bday": "Thursday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b-5",
//         "bname": "Class-XI Batch 1",
//         "bday": "Friday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b-6",
//         "bname": "Class-XI Batch 2",
//         "bday": "Saturday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b-7",
//         "bname": "Class-XII Batch 1",
//         "bday": "Sunday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-8",
//         "bname": "Class-XII Batch 2",
//         "bday": "Monday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-9",
//         "bname": "aptitude Batch 1",
//         "bday": "Tuesday",
//         "btime": "12-14"
//     },
//     {
//         "bid": "b-10",
//         "bname": "unacademy Batch 1",
//         "bday": "Wednesday",
//         "btime": "16-18"
//     },
//     {
//         "bid": "b-11",
//         "bname": "vedantu Batch 1",
//         "bday": "Thursday",
//         "btime": "19-21"
//     },
//     {
//         "bid": "b-12",
//         "bname": "jee Batch 1",
//         "bday": "Friday",
//         "btime": "21-22"
//     },
//     {
//         "bid": "b-13",
//         "bname": "wbjee Batch 1",
//         "bday": "Saturday",
//         "btime": "7-9"
//     },
//     {
//         "bid": "b-14",
//         "bname": "wbjee Batch 2",
//         "bday": "Sunday",
//         "btime": "10-11"
//     },
//     {
//         "bid": "b-15",
//         "bname": "aptitude Batch 2",
//         "bday": "Monday",
//         "btime": "12-14"
//     }
// ]






// print all batches
function printallbatches(){
    
    var a=`<select id="batchshow" onchange="filterStudentsByBatch()" class="form-select form-select-lg mb-3 btn btn-light col-lg-12"
                        aria-label="Default select example">
                    <option class="btn btn-dark" selected value="*">All Batches</option>`;
for(var i=0;i<batches.length;i++){
    a=a+`<option id="`+batches[i].bid+`" class="btn btn-dark" value="`+batches[i].bid+`">`+batches[i].bname+`-`+batches[i].bday+`-`+batches[i].btime+`</option>`;
    }
    a=a+"</select>"

    document.getElementById("showbatchesoption").innerHTML=a;

}
printallbatches();
// filter according to batch
var batchname="All Batches";

function filterStudentsByBatch() {
allstudents=mainallstudents;

   var batchId=document.getElementById("batchshow").value;
   batchname=document.getElementById(batchId).innerHTML;
   document.getElementById("batchnameshow").innerHTML=batchname;
console.log(batchId);
    if(batchId=="*"){
allstudents=mainallstudents;
    }
    else{

    
        allstudents= allstudents.filter(student => {
        // Check if the student has the provided batch ID in any of their batches
        return student.batch.some(batch => batch.bid === batchId);
    });

    
}
    printallstudents();
}


function sortByemail4() {
    objects=allstudents;
    objects.sort((a, b) => {
        // Convert both emails to lowercase for case-insensitive sorting
        var emailA = a.email.toLowerCase();
        var emailB = b.email.toLowerCase();
        
        if (emailA < emailB) {
            return -1;
        }
        if (emailA > emailB) {
            return 1;
        }
        return 0;
    });
    
    // Return the sorted array
    allstudents=objects;
    printallstudents();
}
function sortByname4() {
    objects=allstudents;
    objects.sort((a, b) => {
        // Convert both emails to lowercase for case-insensitive sorting
        var emailA = a.name.toLowerCase();
        var emailB = b.name.toLowerCase();
        
        if (emailA < emailB) {
            return -1;
        }
        if (emailA > emailB) {
            return 1;
        }
        return 0;
    });
    
    // Return the sorted array
    allstudents=objects;
    printallstudents();
    
}

function sortByphone4() {
    objects=allstudents;
    objects.sort((a, b) => {
        // Convert both emails to lowercase for case-insensitive sorting
        var phoneA = parseInt(a.phone);
        var phoneB = parseInt(b.phone);
        
        if (phoneA < phoneB) {
            return -1;
        }
        if (phoneA > phoneB) {
            return 1;
        }
        return 0;
    });
    
    // Return the sorted array
    allstudents=objects;
    printallstudents();
}
 

function viewstudent(studentId) {
   document.getElementById("showstudentdetails").focus();

    allstudents=mainallstudents;
    // Filter the array to find objects with the given student ID
    var studentObjects = allstudents.filter(student => {
        // console.log(student.sid,studentId);
        return student.sid === studentId; // Assuming the student ID matches the email
    });
    // console.log(studentObjects);
    // Return the filtered array
    // return studentObjects;
    var b="";
    for(var i=0;i<studentObjects[0].batch.length;i++){
        b=b+`<tr>
                                                <td>
                                                    <strong>`+studentObjects[0].batch[i].bname+`</strong>: <span>`+studentObjects[0].batch[i].bday+` `+studentObjects[0].batch[i].btime+`</span>
                                                </td>
                                            </tr>

                                           `;

    }

    var c="";


for(var i=0;i<batches.length;i++){
    console.log(batches[i]);
    var isPresent = studentObjects[0].batch.some(batch => batch.bid === batches[i].bid);

        if(isPresent){
c=c+`<label class="form-check-label col-lg-5 btn btn-light btn-toggle m-2 " for="`+batches[i].bid+`">
                                        <input checked class="form-check-input " type="checkbox" value="`+batches[i].bid+`" id="`+batches.bid+`">
                                        <strong>`+batches[i].bname+`</strong>: <span>`+batches[i].bday+` `+batches[i].btime+`</span>
                                               
                                    </label><br>
                                    `;
        }
        else{
            c=c+`<label class="form-check-label col-lg-5 btn btn-light btn-toggle m-2 " for="`+batches[i].bid+`">
                <input class="form-check-input " type="checkbox" value="`+batches[i].bid+`" id="`+batches.bid+`">
                                        <strong>`+batches[i].bname+`</strong>: <span>`+batches[i].bday+` `+batches[i].btime+`</span>
                                               
                                    </label><br>
                                    `;
 
        }
}
    var a=`<div class="tab-pane active" id="profile">
                                <h5 class="mb-3" >`+studentObjects[0].name+`</h5>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>Student-Id: <strong id="ssid">`+studentObjects[0].sid+` </strong></h6>

                                        <!-- <h6>Batch: <strong >XI </strong></h6> -->

                                        <h6>Email: <strong id="semail">`+studentObjects[0].email+` </strong></h6>
                                        <h6>phone: <strong id="sphone">`+studentObjects[0].phone+` </strong></h6>

                                        <button onclick="discontinuestudent(`+studentObjects[0].sid+`)" type="button" style="float: left;margin: 0px;"
                                            class="btn btn-danger px-5" ><i class="icon-lock"></i> Discontinue</button>
                                    </div>


                                </div>
                                <!--/row-->
                            </div>
                            <div class="tab-pane" id="messages">
                                
                                <h5 class="mb-3">Enrolled Batch</h5>

                                <div class="table-responsive">
                                    <table style="margin: 20px;" style="margin: 20px;"
                                        class="table table-hover table-bordered table-striped">
                                        <tbody>`+b+`
                                            
                                        </tbody>
                                    </table>



                                    
                                    
                                    <div class="form-group card col-md-12"
                                    style="overflow-y:scroll;height: auto ;max-height: 100px;display:none" id="batchlist">
                                    <h5 class="mb-3">Your Batch List</h5>

                                <div class="form-check col-md-12">
                                    `+c+`
                                </div>
                            </div>

                            <button type="button" style="float: right;margin: 20px;"
                                        class="btn btn-light px-5" id="editbatch" onclick="editbatch()"><i class="icon-lock" ></i> Edit Batch</button>
                                        <button type="button" style="display:none;float: right;margin: 20px;"
                                        class="btn btn-success px-5"  id="savebatch" onclick="savebatch()"><i class="icon-lock"></i> Save New Batch</button>

                                </div>
                            </div>
                            <div class="tab-pane" id="settings">
                                <form>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Student-Id</label>
                                        <div class="col-lg-9">
                                            <input disabled="true" class="form-control" type="text" value="`+studentObjects[0].sid+`">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Name</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="text" id="sdname" value="`+studentObjects[0].name+`">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="email" value="`+studentObjects[0].email+`">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">phone</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="email" value="`+studentObjects[0].phone+`">
                                        </div>
                                    </div>


                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="password" value="`+studentObjects[0].password+`">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label"></label>
                                        <div class="col-lg-9">
                                            <input type="reset" class="btn btn-secondary" value="reset">
                                            <input type="button" onclick="savestudentdetails()" class="btn btn-primary" value="Save Changes">
                                        </div>
                                    </div>
                                </form>
                            </div>
                       `;


 document.getElementById("showstudentdetails").innerHTML=a;

 document.getElementById("viewdetails").style.display="block";
}
function editbatch(){
    document.getElementById("batchlist").style.display="block";
    document.getElementById("savebatch").style.display="block";
    document.getElementById("editbatch").style.display="none";

}

function savebatch(){
    document.getElementById("batchlist").style.display="block";
    document.getElementById("editbatch").style.display="block";
    document.getElementById("savebatch").style.display="none";


}

     