// var url = "http://localhost:5000";
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
                <select "cbday`+i+`" class="form-control col-12" >
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
                  <input type="time" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-lg-4">
                  <label for="inputZip">Ending Time</label>
                  <input type="time" class="form-control" id="inputZip">
                </div>
              </div><hr><hr>
              `;
    }
    document.getElementById("showmultiplebatchescreate").innerHTML=b;

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

var batches = [],videonotes = [];




  



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
async function fetchall() {


    
  
 
  fetch(url+"/showvideonotes", {
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
          videonotes = data;
    
      })
      .catch((err) => console.log(err));
    
      
      

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
    
        printbatchesoption(data);
        printallbatches(data);
    
      
          batches = data;
      
        })
        .catch((err) => console.log(err));
    
    
        
        
        
        
  
    

}
fetchall();

function extractIdFromLink(link) {
  var id = '';
  if (link.includes('drive.google.com')) {
    var match = link.match(/\/file\/d\/(.+?)\//);
    if (match) {
      id = match[1];
    }
  } else if (link.includes('youtube.com')) {
    var match = link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|$|&)/);
    if (match) {
      id = match[1];
    }
  }
  return id;
}

   
// var videonotes = [
//     {
//         "type": "n",
//         "batches": ["b1", "b2", "b3", "b4"],
//         "name": "Aptitude notes",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-01",
//         "vqid": "vn1"
//     },
//     {
//         "type": "v",
//         "batches": ["b1", "b4"],
//         "name": "English videos",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-01",
//         "vqid": "vn2"
//     },
//     {
//         "type": "n",
//         "batches": ["b2", "b3"],
//         "name": "Mathematics notes",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-02",
//         "vqid": "vn3"
//     },
//     {
//         "type": "v",
//         "batches": ["b2", "b3", "b4"],
//         "name": "Science videos",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-02",
//         "vqid": "vn4"
//     },
//     {
//         "type": "n",
//         "batches": ["b1", "b4"],
//         "name": "History notes",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-03",
//         "vqid": "vn5"
//     },
//     {
//         "type": "v",
//         "batches": ["b1", "b2", "b3", "b4"],
//         "name": "Geography videos",
//         "id": "0Wv2dP3Gt1s",
//         "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//         "date": "2021-09-03",
//         "vqid": "vn6"
//     }
// ];








// upload notes


var alltopics = [];
function printbatchesoption(data){
      batches = data;
    
    var a="";
        for(var i=0;i<batches.length;i++){
            a=a+`<label class="form-check-label col-lg-5 btn btn-light  m-2 "  for="a`+batches[i].bid+`">
                                            <input  class="form-check-input clearbatch " onclick="handleCheckboxChange('`+batches[i].bid+`')" type="checkbox" value="`+batches[i].bid+`" id="a`+batches[i].bid+`">
                                            `+batches[i].bname+`-`+batches[i].bday+`-`+batches[i].btime+`
                                        </label>
                                        `;
        }
        document.getElementById("showbatchesinquestion").innerHTML=a;
    
    }

    
    var selectedBatches = [];
    
            // Function to handle checkbox change event
            function handleCheckboxChange(batchId) {
                console.log(batchId);
                // Get the value (batch ID) of the selected checkbox
    
                // If the checkbox is checked, add the batch ID to the selectedBatches array
                if (selectedBatches.includes(batchId)) {
                    var index = selectedBatches.indexOf(batchId);
                    if (index !== -1) {
                        selectedBatches.splice(index, 1);
                    }
                } else {
                    selectedBatches.push(batchId);
                }
                
                // if (event.checked) {
                //     selectedBatches.push(batchId);
                // } else {
                //     // If the checkbox is unchecked, remove the batch ID from the selectedBatches array
                //     var index = selectedBatches.indexOf(batchId);
                //     if (index !== -1) {
                //         selectedBatches.splice(index, 1);
                //     }
                // }
    
                console.log(selectedBatches);
            }
    
var existingTopicsCount = 0;
    
function deleteTopic(index) {
    if(alltopics.length-1==0){
        return;
    }
    // alltopics.splice(index-1, 1);
var valueToDelete = index;
var indexToDelete = alltopics.indexOf(valueToDelete);

if (indexToDelete !== -1) {
    alltopics.splice(indexToDelete, 1);
}
    console.log(alltopics);
    
    existingTopicsCount--;
    var topicId = "topic" + index;
    var topicElement = document.getElementById(topicId);
    if (topicElement) {
        topicElement.remove();
    }
  
}


function addnewfield() {
    // Find the number of existing topics by counting the number of divs with class "form-group"
    existingTopicsCount++;
// bhalo
var o=0;
for(var i=1;i<=alltopics.length;i++){
    if(!alltopics.includes(i)){
        existingTopicsCount=i;
        o=1;
        break;
    }
    
}
if(o==0){
    existingTopicsCount=alltopics.length+1;

}
var contentVQId=localStorage.getItem("lastvqid");
    if(contentVQId==null ){
        contentVQId="vn0";
    }
    // alert(contentVQId);
    // make vn0  to 0
    // contentVQId=contentVQId.replace("vn","");
    contentVQId=contentVQId.slice(2);
    contentVQId=parseInt(contentVQId)+parseInt(existingTopicsCount);
    contentVQId="vn"+contentVQId;



alltopics.push(existingTopicsCount);
console.log(alltopics);
    // Increment the count to get the number for the new topic
    var newTopicNumber = existingTopicsCount;
    

    // Create HTML for the new topic
    var newTopicHTML =`<div class="card" id="topic`+newTopicNumber+`">
                <div class="card-body">
                    <div class="card-title">Set `+newTopicNumber+`</div>
                    <hr>
                    <form id="basicdetailscopy">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Id</label>
                                <input type="text" disabled="true" class="form-control" id="cid`+newTopicNumber+`" placeholder="`+contentVQId+`">
                              </div>
                              <div class="form-group col-md-4">
                                <label for="ctype">content Type</label>
                                <select  id="ctype`+newTopicNumber+`" class="form-control">
                                    <option value="v" selected>Video</option>
                                    <option value="n">Notes</option>
                                </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="utype">upload Type</label>
                                    <select onchange="showUploadField('`+newTopicNumber+`')"  id="utype`+newTopicNumber+`" class="form-control">
                                        <option value="m" selected> Upload Url</option>
                                        <option value="a">Upload Direct Here</option>
                                    </select>
                                    </div>
                                
                            
                            <div class="form-group col-4">
                                <label for="">Title of the Video/Notes</label>
                                <input required type="text" class="form-control" id="ctitle`+newTopicNumber+`"
                                    placeholder="Aptitude saturday batch class 1" maxlength="200">
                            </div>

                            
                            <div id="uploadUrlField`+newTopicNumber+`" class="form-group col-md-6">
                                <label for="">Upload URL/sharable link</label>
                                <input  type="text" class="form-control" id="curl`+newTopicNumber+`">
                            </div>
                            
                            
                            <div style="display:none"  id="uploadFileField`+newTopicNumber+`" class="form-group col-md-6">
                                <label for="inputPassword4"><strong>upload Notes Only</strong></label>
                                <small>*(Don't Upload videos directly For better Storage Management)</small>
                                <input  type="file"  accept=".pdf, .jpg, .jpeg, .png, .gif, .mp4"  class="form-control" id="cfile`+newTopicNumber+`" 
                                    placeholder="only notes">
                                    
                                    
                                    </div>
                                
                                    <button style="display:none" id="showbutton`+newTopicNumber+`" type="button" onclick="upload(`+newTopicNumber+`)"   class="form-group col-md-2 btn btn-primary mt-4 " style="height:40px">Upload</button>
                            <br/>
                                    <div class="progress-container" style="margin-top: 20px;
                                    display: none;
                                  " id="progress-container`+newTopicNumber+`">
                                    <div style="width: 100%;
                                    height: 20px;
                                    background-color: #f3f3f3;
                                  " class="progress-bar" id="progress-bar`+newTopicNumber+`">
                                        <div class="progress" style="width: 0;
                                        height: 100%;
                                        background-color: #3c84f8;" id="progress`+newTopicNumber+`"></div>
                                    </div>
                                    <button class="cancel-button" style="margin-top: 10px;
                                    background-color: #f44336;
                                    color: white;
                                    border: none;
                                    padding: 5px 10px;
                                    text-align: center;
                                    text-decoration: none;
                                    display: inline-block;
                                    font-size: 16px;
                                    cursor: pointer;
                                    border-radius: 5px;
                                    
                                    display: none;" id="cancel-button`+newTopicNumber+`" onclick="cancelUpload(`+newTopicNumber+`)">Cancel</button>
                                </div>
                               

                            

                        </div>

                        <button type="button" onclick="deleteTopic(` + newTopicNumber + `)" class="btn btn-danger">Delete</button>
                    </form>



                </div>
            </div>`;
    // Append the new topic HTML to the existing content of the showtopicdetails element
    document.getElementById('showtopics').insertAdjacentHTML('beforeend', newTopicHTML);

}
addnewfield();


function showUploadField(i) {
    var uploadType = document.getElementById('utype'+i).value;
    var uploadUrlField = document.getElementById('uploadUrlField'+i);
    var uploadFileField = document.getElementById('uploadFileField'+i);
    
    if (uploadType === 'm') {
        uploadUrlField.style.display = 'block';
        uploadFileField.style.display = 'none';
        document.getElementById("showbutton"+i).style.display="none";

    } else if (uploadType === 'a') {
        // uploadUrlField.style.display = 'none';
        // uploadUrlField.disabled = true;
        document.getElementById("curl"+i).disabled = true;

        uploadFileField.style.display = 'block';
        document.getElementById("showbutton"+i).style.display="block";

    }
}



function saveallfield(){

    if(selectedBatches.length==0){
        alert("Please select atleast one batch");
        return;
    }
    console.log(alltopics);

    for(var i=0;i<alltopics.length;i++){
        savefield(alltopics[i]);
    }


}


function savefield(i) {
     

    // Get the values of the input fields
    
    var contentTitle = document.getElementById('ctitle'+i).value;
    // var contentId = document.getElementById('cid'+i).value;
    var contentType = document.getElementById('ctype'+i).value;
    var contentUploadType = document.getElementById('utype'+i).value;

if(contentUploadType=="a"){
    // var contentFile = document.getElementById('cfile'+i).value;


    // generate content link
    // var contentLink = "demo";
    var contentLink = document.getElementById('curl'+i).value;
    var contentId=extractIdFromLink(contentLink);
    if(contentId==""){
        alert("Please enter a valid link");
        return;
    }

}
else if(contentUploadType=="m"){
    var contentLink = document.getElementById('curl'+i).value;
    var contentId=extractIdFromLink(contentLink);
    if(contentId==""){
        alert("Please enter a valid link");
        return;
    }

}
if(contentTitle==""){
    alert("Please enter a title");
    return;
}





    var contentBatch = selectedBatches;
    var contentDate = new Date().toISOString().split('T')[0];
    // var contentVQId = "vn" + (videonotes.length + 1);
    var contentVQId=localStorage.getItem("lastvqid");
    if(contentVQId==null){
        contentVQId="vn0";
    }
    // make vn0  to 0
    contentVQId=contentVQId.replace("vn","");
    contentVQId=parseInt(contentVQId)+1;
    contentVQId="vn"+contentVQId;
    
    // Create a new content object
    var newContent = {
        type: contentType,
        batches: contentBatch,
        name: contentTitle,
        id: contentId,
        link: contentLink,
        date: contentDate,
        vqid: contentVQId
    };
    
    fetch(url+"/Addvideonotes", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newContent),
    })
    .then(response => response.json())
    .then(data => {

        console.log('Success:', data);
        alert("Content uploaded successfully");
    videonotes.push(newContent);
    window.location.reload();


    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Add the new content to the videonotes array
    
    // Reset the form fields
    // Reset the selectedBatches array
    
    // Print the updated videonotes array
    console.log(videonotes);
}
    
    
    
    
    
























// edit all notes videos



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


// allstudents=sortObjectsByName(allstudents);
                            
    // print all batches
function printallbatches(batches){
    
    var a=``;
for(var i=0;i<batches.length;i++){
     var v = [];
         v = videonotes.filter(videonote => {
            // Check if the batchId is present in the batches of videonotes
            return videonote.batches.includes(batches[i].bid);
        });
   
  var b=v.length;
  
    a=a+`<tr>
                              <th scope="row">`+batches[i].bid+`</th>
                              <td>`+batches[i].bname+`</td>
                              <td>`+batches[i].bday+` `+batches[i].btime+`</td>
                              <td>`+b+`</td>
                              <td><a class="btn btn-warning"  onclick="editbatch('`+batches[i].bid+`','`+batches[i].bname+`','`+batches[i].bday+` `+batches[i].btime+`','`+b+`')">Edit now</a></td>
                            </tr>
`;
    }
    a=a+`<tr>`;

    document.getElementById("showbatchesoptionedit").innerHTML=a;

}





































function searchObjects() {
  // console.log("hit");
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

function editbatch(batchId,name,details,numberofvideos) {
  document.getElementById("editbatch").focus();

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

    var videonotesArray = [];
         videonotesArray = videonotes.filter(videonote => {
            // Check if the batchId is present in the batches of videonotes
            return videonote.batches.includes(batchId);
        });
   console.log(videonotesArray);
   var a="",b="",c="";
   c=`<h5 class="mb-3">`+name+`</h5>
                             <div class="row">
                                 <div class="col-md-6">
                                  <h6>Batch-Id: <strong>`+batchId+` </strong></h6>
                                 
                                  <h6>Batch: <strong>`+details+` </strong></h6>
                                     
                                     <h6>Number of video+notes: <strong>`+numberofvideos+` </strong></h6>
                                         
                                 </div>
            
                                 
                             </div>
                             `
   for(var i=0;i<videonotesArray.length;i++){
    if(videonotesArray[i].type=="n"){
        b=b+`
            


                          <div class="col-sm-6">
                                <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">Uploaded Notes</h5>
                                    <iframe style="width: 100%;" src="https://drive.google.com/file/d/`+videonotesArray[i].id+`/preview"   height="200" allow="autoplay" allowfullscreen></iframe>

        <h5 class="card-title">`+videonotesArray[i].name+`</h5>
                             <h5 class="card-title">`+videonotesArray[i].date+`</h5>
              
                             <a href="`+videonotesArray[i].link+`" class="btn btn-primary">View Notes</a>
                             <a  class="btn btn-warning" onclick="notessettings('`+videonotesArray[i].vqid+`','`+videonotesArray[i].name+`','`+videonotesArray[i].link+`')">Settings</a>

                                  </div>
                                </div>
                              </div>
             
        
        `;

    }
    else if(videonotesArray[i].type=="v"){

        a=a+`<div class="col-sm-6">
                                <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">Uploaded Video</h5>
                                    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                             <iframe style="width: 100%;" src="https://drive.google.com/file/d/`+videonotesArray[i].id+`/preview"   height="200" allow="autoplay" allowfullscreen></iframe>
                             <h5 class="card-title">`+videonotesArray[i].name+`</h5>
                             <h5 class="card-title">`+videonotesArray[i].date+`</h5>
              
                             <a href="`+videonotesArray[i].link+`" class="btn btn-primary">View Video</a>
                             <a  class="btn btn-warning" onclick="videosettings('`+videonotesArray[i].vqid+`','`+videonotesArray[i].name+`','`+videonotesArray[i].link+`')">Settings</a>
                                  </div>
                                </div>
                              </div>
                            `;

    }
    
    }
    document.getElementById("showvideos").innerHTML=a;
    document.getElementById("shownotes").innerHTML=b;
    document.getElementById("profile").innerHTML=c;
  
    // Fill the inputs with the batch details
      }
}

function videosettings(vqid,a,b){
    // console.log(vqid);
    document.getElementById("videosettings").style.display="block";
    document.getElementById("notessettings").style.display="none";
    document.getElementById("videoid").value=vqid;
    document.getElementById("namevideo").value=a;
    document.getElementById("oldvideourl").value=b;



}

function notessettings(vqid,a,b){
    console.log(vqid);
    document.getElementById("notessettings").style.display="block";
    document.getElementById("videosettings").style.display="none";
    document.getElementById("notesid").value=vqid;
    document.getElementById("namenotes").value=a;
    document.getElementById("oldnotesurl").value=b;
}
document.getElementById("notessettings").style.display="none";
document.getElementById("videosettings").style.display="none";



function upload(i) {

  var fileInput = document.getElementById('cfile'+i);
          var file = fileInput.files[0];
          var mimeType = file.type;
console.log(file)
          // Determine the file type
          if (mimeType.includes('pdf')) {
              uploadFile(file, 'application/pdf',i);
          } else if (mimeType.includes('image')) {
              uploadFile(file, mimeType,i);
          } else if (mimeType.includes('video')) {
              uploadFile(file, mimeType,i);
          } else {
              console.error('Unsupported file type');
          }
  
}



function uploadFile(file, mimeType,i) {
  // var formData = new FormData();
  // formData.append('file', file);


  var progressBar = document.getElementById('progress'+i);
  var progressContainer = document.getElementById('progress-container'+i);
  var cancelButton = document.getElementById('cancel-button'+i);
  var uploadbutton=document.getElementById("saveallfield");

  progressBar.style.width = '0';
  progressContainer.style.display = 'block';
  cancelButton.style.display = 'inline-block';
        var parentFolder = localStorage.getItem('parent_folder');

  var metadata = {
'name': file.name,
'mimeType': mimeType,
parents: [parentFolder]
};
  var formData = new FormData();
formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
formData.append('file', file);

  // Additional metadata for the file (name, MIME type, etc.) can be added here
console.log(formData);
var access_token = gapi.auth.getToken().access_token;


// var access_token="ya29.a0AXooCgsil-wEDZm3jC801DGWHY24p-6wDLMAxGPhoKzZ1pcZs8zD1lPWxKrVXdORCx_KuRp_GDIOcT297tWv2ZH6s_GbYFkE6M2-lh3aUkws-IYYcAYL-_VyLXrrmsPv9MDaLcaRqKszh1x1E4BlBxC-fBDWCKIvjwaCgYKAT8SARESFQHGX2MiXejOYXGFsUrO7CrYMTJYaQ0169";
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart');
  xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
  console.log('Bearer ' + access_token);

  xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
          var percentComplete = (event.loaded / event.total) * 100;
          progressBar.style.width = percentComplete + '%';
          uploadbutton.disabled = true;
      }
  };

  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('File uploaded successfully!');
          // console.log('Generated Google Drive link:', JSON.parse(xhr.responseText).id);
          var fileId =JSON.parse(xhr.responseText).id;
var sharableLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
console.log('Sharable link:', sharableLink);
 document.getElementById('curl'+i).value=sharableLink;

alert("File uploaded successfully now click save video/notes to share with students");
uploadbutton.disabled = false;

      } else {
          console.error('Error uploading file:', xhr.statusText);
          console.error(xhr.responseText);
      }
      // Hide progress bar and cancel button
      progressContainer.style.display = 'none';
      cancelButton.style.display = 'none';
  };

  xhr.onerror = function() {
      console.error('Error uploading file');
      console.error(xhr.statusText);
      // Hide progress bar and cancel button
      progressContainer.style.display = 'none';
      cancelButton.style.display = 'none';
  };

  cancelButton.onclick = function() {
      xhr.abort(); // Cancel the upload
  };

  xhr.send(formData);




  
}



    // this source code used updated google sign in options 
// after the previous button is deprecated
window.onload = () => {
}

// var CLIENT_ID = '639609669934-eaescllh1k9fpp4nggtdoh1lc0p8kihh.apps.googleusercontent.com';
// var API_KEY = 'AIzaSyAXs-Hb9cjDptjCqjS2ST5gd0_c7KbSvAM';
// sayandip email id
// var CLIENT_ID = '31628992962-u8rfhl4f69tt6g13q89dojpsj0feqp87.apps.googleusercontent.com';
// var API_KEY = 'AIzaSyCSZDg-69xCM1Mpyidx3Lex9Abd1RKp4Uo';

// project email id
// var CLIENT_ID = '335884535424-n47sf3on3h0vqko22iom17abffunqjkt.apps.googleusercontent.com';
var CLIENT_ID = '132542636094-1lgfuf3glm64bfc0850h3n1puae6n1gq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBwMUYN2wJMytWsKjQ7BJAdI6SO0OksRD0';
//var API_KEY = 'AIzaSyA_Z-TFUFfqVuDveZ-tN9be6rMgjA-6dQY';
  
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';
var tokenClient;
var gapiInited = false;
var gisInited = false;




window.onload = () => {
gapiLoaded();
gisLoaded();


//var storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
//if (storedUserDetails && storedUserDetails.isSignedIn) {
//    signinButton.style.display = 'none';
 //   signoutButton.style.display = 'block';
//}
}



function checkFolder() {
  gapi.client.drive.files.list({
      'q': 'name = "Backup Folder"',
  }).then(function (response) {
      var files = response.result.files;
      if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
              var file = files[i];
              localStorage.setItem('parent_folder', file.id);
              console.log('Folder Available');
              // get files if folder available
          }
      } else {
          // if folder not available then create
          createFolder();
      }
  })
}


function createFolder() {
 
      var access_token = gapi.auth.getToken().access_token;
  
  var request = gapi.client.request({
      'path': 'drive/v2/files',
      'method': 'POST',
      'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token,
      },
      'body': {
          'title': 'Backup Folder',
          'mimeType': 'application/vnd.google-apps.folder'
      }
  });
  request.execute(function (response) {
      localStorage.setItem('parent_folder', response.id);
  })
}


function handleAuthClick() {
tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
        throw (resp);
    }
    var userDetails = {
        isSignedIn: true,
        accessToken: resp.access_token,
        idToken: resp.id_token,
        expiresIn: resp.expires_in,
        tokenType: resp.token_type,
        scope: resp.scope,
        refreshToken: resp.refresh_token,
        issuedAt: Date.now()
    };
    checkFolder();
};

if (gapi.client.getToken() === null) {
    tokenClient.requestAccessToken({ prompt: 'consent' });
} else {
    tokenClient.requestAccessToken({ prompt: '' });
}


}

function handleSignoutClick() {
var token = gapi.client.getToken();
if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
}
}






function gapiLoaded() {
gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
});
gapiInited = true;
maybeEnableButtons();
}

function gisLoaded() {
tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: ''
});
gisInited = true;
maybeEnableButtons();
}

function maybeEnableButtons() {
if (gapiInited && gisInited) {
    // signinButton.style.display = 'block'
}
}


gapiLoaded();
gisLoaded(); 


