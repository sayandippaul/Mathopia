import React from 'react'

import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import Script from 'next/script'
import { useState, useEffect,useRef } from 'react';
// // var socket=io('/user',{
 
// // });
import io from 'socket.io-client';
import { get } from 'http';
// socket.emit('message', "message");



 
var Adminquestion = () => {



  var [batches, setbatches] = useState([]);
  var [allexams, setallexams] = useState([]);
  var [selectedBatches,setselectedBatches]=useState([]);
  var [examDetails,setexamDetails]=useState([]);
  var [link,setlink]=useState("");
  link="";
  var hasRun = useRef(false);


  // var url = "http://localhost:5000";
  var url="https://mathopia.onrender.com";
var socket = io(url);


useEffect(() => {
  if (!hasRun.current) {
    hasRun.current = true;








    


document.getElementById("showdetailsupload").innerHTML=`
<button  id="showbutton" type="button" onclick="upload()"   class="form-group col-md-4 btn btn-primary mt-4 " style="height:40px">Upload Question</button>
                            <br/>
                                    <div class="progress-container" style="margin-top: 5px;
                                  " id="progress-container">
                                    <div style="width: 100%;
                                    height: 20px;
                                    background-color: #f3f3f3;
                                  " class="progress-bar" id="progress-bar">
                                        <div class="progress" style="width: 0;
                                        height: 100%;
                                        background-color: #3c84f8;" id="progress"></div>
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
                                    
                                    display: none;" id="cancel-button" onclick="cancelUpload()">Cancel</button>
                                </div>
                               


`;




function caltime(startDay, startTime, durationMinutes) {
  // Parse start day and time
  // alert(startDay);
  // alert(startTime);
  // alert(durationMinutes);
  const [startYear, startMonth, startDate] = startDay.split('-').map(Number);
  const [startHour, startMinute] = startTime.split(':').map(Number);
  
  // Create a Date object for the start date and time
  const startDateTime = new Date(startYear, startMonth - 1, startDate, startHour, startMinute);
  console.log(startDateTime);

  // Add the duration to the start date and time
  const adjustedTime = new Date(startDateTime.getTime() + durationMinutes * 60000);

  // Get the current time
  const now = new Date();

  // Compare times
  // console.log(adjustedTime- now);
  if (adjustedTime <= now) {
      return 0; // If adjusted time is less than or equal to now, return 0
  }

  // Calculate the difference in seconds
  const differenceInSeconds = Math.floor((adjustedTime - now) / 1000);
  return differenceInSeconds;
}

function setendstatus(setno){
  fetch(url+"/setendstatus", {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({setno:setno}),
  })
  .then(response => response.json())
  .then(data => {
  }
  )
  .catch((error) => {

  });
}



    window.checkallexamend = () =>{
      fetch(url+"/checkallexamend",{
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          for(var i=0;i<data.length;i++){
            // console.log(data[i]);
            var starttime=data[i].startingTime;
            var date=data[i].date;
            var duration=data[i].time;
            // console.log(starttime,date,duration);
            if(caltime(date,starttime,duration)<=0){
              setendstatus(data[i].setno); 
            }
          }
          
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
          }
          checkallexamend();

fetchall();
printallbatches(allexams);
document.getElementById('basicdetails').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var examDetails = createbasicExamObject();
  console.log(examDetails); // You can do anything you want with the examDetails object
  // Now you can perform any further actions, like sending the data to a server or processing it further.
});

document.getElementById("editquesionpanel").style.display="none";

document.getElementById('basicdetailscopy').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var examDetails = createbasicExamObjectcopy();
  if(examDetails==0){
      return;
  }
  // ############################;
  // publishquestion();
  fetch(url+"/Addquestionset", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(examDetails),
  })
  .then(response => response.json())
  .then(data => {
  
      alert("examset uploaded successfully");
      viewquestion(examDetails);
      // document.getElementById("qidcreate").value="q1";

  
  
  })
  .catch((error) => {
      console.error('Error:', error);
  });
  

  console.log(examDetails); // You can do anything you want with the examDetails object
  // Now you can perform any further actions, like sending the data to a server or processing it further.
});


// var selectedBatches = [];
window.handleCheckboxChange =(batchId) =>{
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


// handleCheckboxChange(2)






window.toggleDiv=(divId)=> {

  selectedBatches = [];

  document.getElementById("editquesionpanel").style.display="none";

      var divs = document.querySelectorAll('.divshowqset');
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
      fetchall();
  }

  
    // change all function name from function sortObjectsByName(objects){ to window.sortObjectsByName=(objects)=>{

// function showfield(){
  window.showfield=()=>{
  document.getElementById("basicdetailsform").style.display="block";
  document.getElementById("showallelements").style.display="none";
  var form = document.getElementById("basicdetailsform");
  // var form2 = document.getElementById("showbatchesinquestion");
  
  
  var inputs = form.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
  }
  var checkboxes = document.getElementsByClassName("clearbatch");
  console.log(checkboxes.length);

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].checked = false;
}

}
// function toggleDiv1(divId) { 
  window.toggleDiv1=(divId)=> {
  var divs = document.querySelectorAll('.divshow1');
  var buttons = document.querySelectorAll('.buttonshow1');

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
// function fetchall() {

// function printbatches(d){
  window.printbatches=(d)=>{
  batches = d;

var a="";
  for(var i=0;i<batches.length;i++){
      a=a+`<label class="form-check-label col-lg-5 btn btn-light  m-2 "  for="a`+batches[i].bid+`">
                                      <input  class="form-check-input clearbatch " onclick="handleCheckboxChange('`+batches[i].bid+`')" type="checkbox" value="`+batches[i].bid+`" id="a`+batches[i].bid+`">
                                      `+batches[i].bname+`-`+batches[i].bday+`-`+batches[i].btime+`
                                  </label>
                                  `;
  }
  document.getElementById("showbatchesinquestion").innerHTML=a;

  var b="";
  for(var i=0;i<batches.length;i++){
      b=b+`<label class="form-check-label col-lg-5 btn btn-light  m-2 "  for="b`+batches[i].bid+`">
                                      <input  class="form-check-input clearbatch " onclick="handleCheckboxChange('`+batches[i].bid+`')" type="checkbox" value="`+batches[i].bid+`" id="b`+batches[i].bid+`">
                                      `+batches[i].bname+`-`+batches[i].bday+`-`+batches[i].btime+`
                                  </label>
                                  `;
  }

  document.getElementById("showbatchesinquestioncopy").innerHTML=b;
}





// function createbasicExamObject() {
  window.createbasicExamObject=()=>{
    
  if(selectedBatches.length==0){
  alert("Please select atleast one batch");
  return 0;
}

  if( !confirm("Are You Sure To Save The Basic Details?")){
      return;
  }
  
  document.getElementById("basicdetailsform").style.display="none";
  // Extracting values from form fields
  var setno = document.getElementById('esetno').value;
  var name = document.getElementById('esubject').value;
  var time = document.getElementById('time').value;
  var date = document.getElementById('edate').value;
  var startingTime = document.getElementById('etime').value;
  var edq = document.getElementById('edq').value;
  var edo = document.getElementById('edo').value;
  var edcm = document.getElementById('edcm').value;
  var edwm = document.getElementById('edwm').value;
  var nosubt = document.getElementById('nosubt').value;
  if(nosubt<=0){
      nosubt=1;
  }
  var totalno = document.getElementById('totalno').value;

  // Creating the object
   examDetails = {
      setno: setno,
      name: name,
      time: time,
      date: date,
      startingTime: startingTime,
      edq: edq,
      edo: edo,
      edcm: edcm,
      edwm: edwm,
      nosubt: nosubt,
      totalno: totalno,
      totaltopics:[],
      allquestions:[],
      status:0,
      batches:selectedBatches,
  };
  // selectedBatches = [];
document.getElementById("ocm").value=edcm;
document.getElementById("owm").value=edwm;
document.getElementById("questiontype").value=edq;
document.getElementById("selectoptionsetquestion").value=edo;
  printTopics(nosubt);
  selectquestiontype();
  selectoption();

//     var examDetails = {
//   setno: "",
//   name: "65",
//   time: "2",
//   date: "2024-04-23",
//   startingTime: "10:12",
//   allquestions: [
//     {
//       qid: "q1",
//       ocm: "6",
//       owm: "2",
//       qtext: "rgerf",
//       qType: "d",
//       op1:"we",
//       op2:"wsqas",
//       op3:"qas", 
// optionSet: "3",
// qTopic: "jbh",
//     }
//   ],
//   totalno: "2",
//   totaltopics: ["fjewb", "jbh", "jbhh"],
//   nosubt: "3",
//   edo: "2",
//   edcm: "6",
//   edq: "s",
//   edwm: "6"
// };


document.getElementById("showallelements").style.display="block";


}
// function printTopics(a) {
  window.printTopics=(a)=>{
  document.getElementById("showallelements").style.display="block";
  var topicsHTML = '';

  for (var i = 1; i <= a; i++) {
      topicsHTML += '<div class="form-group col-12" id="topic' + i + '">';
      topicsHTML += '<input type="text" class="form-control" id="topic' + i + '" placeholder="Enter subtopic here">';
      topicsHTML += '<button type="button" class="btn btn-danger col-3 mt-2" onclick="deleteTopic(' + i + ')">Delete</button>';
      topicsHTML += '</div>';
  }

  document.getElementById('showtopicdetails').innerHTML = topicsHTML;
  var existingTopicsCount = document.querySelectorAll('#showtopicdetails .form-group').length;
  document.getElementById("nosubt").value=existingTopicsCount;
  document.getElementById("totaltopics").value=existingTopicsCount;
  
}
// printTopics(3);

// function deleteTopic(index) {
  window.deleteTopic=(index)=>{
  var existingTopicsCount = document.querySelectorAll('#showtopicdetails .form-group').length;

  if(existingTopicsCount-1==0){
      return;
  }
  var topicId = "topic" + index;
  var topicElement = document.getElementById(topicId);
  if (topicElement) {
      topicElement.remove();
  }
   existingTopicsCount--;
document.getElementById("nosubt").value=existingTopicsCount;
var existingTopicsCount = document.querySelectorAll('#showtopicdetails .form-group').length;
document.getElementById("nosubt").value=existingTopicsCount;
document.getElementById("totaltopics").value=existingTopicsCount;

}


// function addNewTopic() {
  window.addNewTopic=()=>{
  // Find the number of existing topics by counting the number of divs with class "form-group"
  var existingTopicsCount = document.querySelectorAll('#showtopicdetails .form-group').length;

  // Increment the count to get the number for the new topic
  var newTopicNumber = existingTopicsCount + 1;
  document.getElementById("nosubt").value=newTopicNumber;
document.getElementById("totaltopics").value=newTopicNumber;


  // Create HTML for the new topic
  var newTopicHTML = '<div class="form-group col-12" id="topic' + newTopicNumber + '">';
  newTopicHTML += '<input type="text" class="form-control" id="topic' + newTopicNumber + '" placeholder="Enter subtopic here">';
  newTopicHTML += '<button type="button" class="btn btn-danger col-3 mt-2" onclick="deleteTopic(' + newTopicNumber + ')">Delete</button>';
  newTopicHTML += '</div>';

  // Append the new topic HTML to the existing content of the showtopicdetails element
  document.getElementById('showtopicdetails').insertAdjacentHTML('beforeend', newTopicHTML);
}

// function printOptions(optionCount) {
  window.printOptions=(optionCount)=>{
  var optionsHTML = '';
  var a=12/optionCount;

  if (optionCount >= 2 && optionCount <= 4) {
      for (var i = 1; i <= optionCount; i++) {
          optionsHTML += '<div class="form-group col-'+a+'" style="display:inline-block">';
          optionsHTML += '<label for="op' + i + '"> option ' + i + '</label>';
          optionsHTML += '<input type="text" class="form-control" id="op' + i + '" placeholder="Enter option ' + i + '">';
          optionsHTML += '</div>';
      }

      document.getElementById('showOptions').innerHTML = optionsHTML;
  } else {
      console.error("Invalid option count. Please provide a value between 2 and 4.");
  }

  // selectquestiontype();

}
// function selectoption(){
  window.selectoption=()=>{
  var a=document.getElementById("selectoptionsetquestion").value;
  printOptions(a);
}
// function selectquestion(){
  window.selectquestion=()=>{
  var a=document.getElementById("selectquestionset").value;
  printcorrectfield(a);
}

// printOptions(3);
// function printCorrectField(t, p) {
  window.printCorrectField=(t, p)=>{
  // printOptions(p);
  document.getElementById("showOptions").style.display="block";

  var correctFieldHTML = '';

  if (t === "s") {
      correctFieldHTML += '<div class="form-group col-12">';
      correctFieldHTML += '<label for="topic1"> correct answer (option type)</label>';
      correctFieldHTML += '<select id="selectcorrectsingle" class="form-control">';
      
      // Print options based on the value of p
      for (var i = 1; i <= p; i++) {
          correctFieldHTML += '<option value="'+i+'"> option ' + i + '</option>';
      }
      
      correctFieldHTML += '</select>';
      correctFieldHTML += '</div>';
  } else if (t === "n") {
      document.getElementById("showOptions").style.display="none";
      correctFieldHTML += '<div class="form-group col-12">';
      correctFieldHTML += '<label for="topic1"> correct answer (Numerical type)</label>';
      correctFieldHTML += '<input type="text" class="form-control" id="op0correct" placeholder="Enter correct answer">';
      correctFieldHTML += '</div>';
  } else if (t === "d") {
      correctFieldHTML += '<label for="inputState">Choose Correct answer(one or More than One correct)</label>';
      correctFieldHTML += '<div   class="form-group card col-md-12" style="overflow-y:scroll;height: auto ;max-height: 100px;">';
      correctFieldHTML += '<div id="selectmultipleoption" class="form-check col-lg-12">';
      
      // Print checkboxes based on the value of p
      for (var i = 1; i <= p; i++) {
          correctFieldHTML += '<label class="form-check-label col-lg-5 btn btn-light m-2" for="op' + i + '">';
          correctFieldHTML += '<input class="form-check-input" type="checkbox" value="'+i+'" id="op' + i + '">';
          correctFieldHTML += 'option ' + i;
          correctFieldHTML += '</label>';
      }
      
      correctFieldHTML += '</div>';
      correctFieldHTML += '</div>';
  }

  document.getElementById('showquestionset').innerHTML = correctFieldHTML;
}
// function selectquestiontype(){
  window.selectquestiontype=()=>{
  var a=document.getElementById("questiontype").value;
  var b=document.getElementById("selectoptionsetquestion").value;
  printCorrectField(a,b);
}

// function changeexamdetails(){
  window.changeexamdetails=()=>{
  selectquestiontype();
  selectoption();
}


// function savesubtopics() {
  window.savesubtopics=()=>{
  if( !confirm("Are You Sure To Save The subtopics Name? This Cannot Be Edited Later, Pls Check It Again")){
      return;
  }
  document.getElementById("basicdetailsform").style.display="none";
  document.getElementById("showallelements").style.display="none";



  


  var inputs = document.querySelectorAll('#showtopicdetails input[type="text"]');
  var inputValues = [];

  inputs.forEach(function(input) {
      inputValues.push(input.value.trim());
  });
  examDetails.totaltopics=inputValues;
  console.log(examDetails);


document.getElementById("ocm").value=examDetails.edcm;
document.getElementById("owm").value=examDetails.edwm;
document.getElementById("questiontype").value=examDetails.edq;
document.getElementById("selectoptionsetquestion").value=examDetails.edo;
  document.getElementById("showquestionpanel").style.display="block";



  

                                              var subtopics = examDetails.totaltopics;
                                              document.getElementById("printquestiontopic").innerHTML="";
                                              var selectElement = document.getElementById("printquestiontopic");
                                              
                                              for (var i = 0; i < subtopics.length; i++) {
                                                  var option = document.createElement("option");
                                                  option.text = subtopics[i];
                                                  selectElement.add(option);
                                              }

                                              console.log(examDetails);


                                              fetch(url+"/Addquestionset", {
                                                  method: 'POST',
                                                  headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json",
                                                    "Access-Control-Allow-Headers": "Content-Type",
                                                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                                                    "Access-Control-Allow-Origin": "*",
                                                  },
                                                  body: JSON.stringify(examDetails),
                                              })
                                              .then(response => response.json())
                                              .then(data => {
                                              
                                                  alert("examset uploaded successfully,now add question accordingly");
                                                  // viewquestion(examDetails);
                                                  toggleDiv("load")
                                                  // document.getElementById("qidcreate").value="q1";

                                              
                                              
                                              })
                                              .catch((error) => {
                                                  console.error('Error:', error);
                                              });
                                              



}

// function savequestion() {
  window.savequestion=()=>{
//     var examDetails = {
//   setno: "",
//   name: "65",
//   time: "2",
//   date: "2024-04-23",
//   startingTime: "10:12",
//   allquestions: [
//   {
//       qid: "q1",
//       ocm: "4",
//       owm: "1",
//       qtext: "1st question",
//       qType: "d",
//       op1:"we",
//       op2:"wsqas",
//       op3:"qas", 
// optionSet: "3",
// qTopic: "jbh",
// oc:"123",
//     },
//     {
//       qid: "q2",
//       ocm: "4",
//       owm: "1",
//       qtext: "2nd  question",
//       qType: "n",
     
// optionSet: "0",
// qTopic: "jbh",
// oc:"19083",
//     },
//     {
//       qid: "q3",
//       ocm: "4",
//       owm: "1",
//       qtext: "3rd  question",
//       qType: "s",
//       op1:"we",
//       op2:"wsqas",
//       op3:"qas", 
// optionSet: "3",
// qTopic: "jbh",
// oc:"3",
//     }
//   ],
//   totalno: "2",
//   totaltopics: ["fjewb", "jbh", "jbhh"],
//   nosubt: "3",
//   edo: "2",
//   edcm: "6",
//   edq: "s",
//   edwm: "6"
// };


  if( !confirm("Are You Sure To Save The Question?")){
      return;
  }
  var questionDetails = createQuestionObject();
  var questionIndex = examDetails.allquestions.findIndex(function(question) {
      return question.qid === questionDetails.qid;
  });
  
  if (questionIndex !== -1) {
      // Question ID already exists, update it
      examDetails.allquestions[questionIndex] = questionDetails;
  } else {
      // Question ID doesn't exist, push it
      examDetails.allquestions.push(questionDetails);
  }
  
  // examDetails.allquestions.push(questionDetails);
      console.log(examDetails); 
      //do the stuff 
      uploadfinalquestion();
      addQuestion();
      link="";
      // You can do anything you want with the examDetails object
  // Now you can perform any further actions, like sending the data to a server or processing it further.
}

// function addQuestion() {
  window.addQuestion=()=>{
  
  // var previousqid = document.getElementById("qidcreate").value;
  // var nextqid = "q" + (parseInt(previousqid.substring(1)) + 1);
  // document.getElementById("qidcreate").value = nextqid;

  // Clear all the inputs in the showquestionpanel div
//     var examDetails = {
//   setno: "",
//   name: "65",
//   time: "2",
//   date: "2024-04-23",
//   startingTime: "10:12",
//   allquestions: [
//   {
//       qid: "q1",
//       ocm: "4",
//       owm: "1",
//       qtext: "1st question",
//       qType: "d",
//       op1:"we",
//       op2:"wsqas",
//       op3:"qas", 
// optionSet: "3",
// qTopic: "jbh",
// oc:"123",
//     },
//     {
//       qid: "q2",
//       ocm: "4",
//       owm: "1",
//       qtext: "2nd  question",
//       qType: "n",
     
// optionSet: "0",
// qTopic: "jbh",
// oc:"19083",
//     },
//     {
//       qid: "q3",
//       ocm: "4",
//       owm: "1",
//       qtext: "3rd  question",
//       qType: "s",
//       op1:"we",
//       op2:"wsqas",
//       op3:"qas", 
// optionSet: "3",
// qTopic: "jbh",
// oc:"3",
//     }
//   ],
//   totalno: "2",
//   totaltopics: ["fjewb", "jbh", "jbhh"],
//   nosubt: "3",
//   edo: "2",
//   edcm: "6",
//   edq: "s",
//   edwm: "6"
// };

// Remove class 'active' from the 'messages' element
document.getElementById('messages').classList.remove('active');
document.getElementById('profile').classList.add('active');
document.getElementById('newbutton').classList.add('active');
document.getElementById('editbutton').classList.remove('active');
document.getElementById('viewbutton').classList.remove('active');


  var inputs = document.querySelectorAll('#showquestionpanel input[type="text"]');
  inputs.forEach(function(input) {
      input.value = "";
  });
  printCorrectField(examDetails.edq, examDetails.edo);    
  printOptions(examDetails.edo);
  if(examDetails.allquestions.length==0){
      document.getElementById("qidcreate").value="q1";    
  }
  else{
      var lastqid=examDetails.allquestions[examDetails.allquestions.length-1].qid;
      var nextqid = "q" + (parseInt(lastqid.substring(1)) + 1);
      document.getElementById("qidcreate").value = nextqid;
  }

document.getElementById("ocm").value=examDetails.edcm;
document.getElementById("owm").value=examDetails.edwm;
document.getElementById("questiontype").value=examDetails.edq;
document.getElementById("selectoptionsetquestion").value=examDetails.edo;



                                              var subtopics = examDetails.totaltopics;
                                              // var selectElement = document.getElementById("printquestiontopic");
                                              document.getElementById("printquestiontopic").innerHTML="";
                                              var selectElement = document.getElementById("printquestiontopic");
                                             
                                              
                                              for (var i = 0; i < subtopics.length; i++) {
                                                  var option = document.createElement("option");
                                                  option.text = subtopics[i];
                                                  selectElement.add(option);
                                              }
link="";
document.getElementById("qimg").value="";
}


// function createQuestionObject() {
  window.createQuestionObject=()=>{
  var questionObject = {};

  // Retrieve question details from the showquestionpanel div
  var qid = document.getElementById("qidcreate").value;
  var cocm = document.getElementById("ocm").value;
  var cowm = document.getElementById("owm").value;
  var qtext = document.getElementById("qcreatetext").value;
  
  var questionType = document.getElementById("questiontype").value;
  var questionTopic = document.getElementById("printquestiontopic").value;
  var optionSet = document.getElementById("selectoptionsetquestion").value;
  var uploadimageurl="";
  if(link!="")
    uploadimageurl=extractIdFromLink(link);  
  // Add question details to the questionObject
  questionObject.qid = qid;
  questionObject.ocm = cocm;
  questionObject.owm = cowm;
  questionObject.qtext = qtext;
  questionObject.qimg = uploadimageurl;
  questionObject.qType = questionType;
  questionObject.qTopic = questionTopic;
  questionObject.optionSet = optionSet;
  for (var i = 1; i <=  questionObject.optionSet; i++) {
      questionObject["op" + i] = document.getElementById("op" + i).value;
  }    

  // Add additional details based on the question type
  if (questionType === "s") {
      var correctAnswer = document.getElementById("selectcorrectsingle").value;
      questionObject.oc = correctAnswer;
  } else if (questionType === "n") {
      var correctAnswer = document.getElementById("op0correct").value;
      questionObject.oc = correctAnswer;
  } else if (questionType === "d") {

      var checkboxes = document.querySelectorAll('#selectmultipleoption input[type="checkbox"]');
      var correctAnswers = "";
      
      checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
              correctAnswers += checkbox.value;
              // correctAnswers.push(checkbox.value);
correctAnswers = correctAnswers.split('').sort().join('');
              
          }
      });
if(correctAnswers.length==0){
  alert("Please select atleast one correct answer");
  return;
}
      questionObject.oc = correctAnswers;
  }

  link="";

  return questionObject;
}




// function editquestion(questionId) {
  window.editquestion=(questionId)=>{
  // Add class 'active' to the 'profile' element
  document.getElementById('profile').classList.add('active');
  document.getElementById('editbutton').classList.add('active');

  // Remove class 'active' from the 'messages' element
  document.getElementById('messages').classList.remove('active');
  document.getElementById('viewbutton').classList.remove('active');
var questionDetails = examDetails.allquestions;
var selectedQuestion = questionDetails.find(question => question.qid === questionId);
var subtopics = examDetails.totaltopics;
                                              // var selectElement = document.getElementById("printquestiontopic");
                                              document.getElementById("printquestiontopic").innerHTML="";
                                              var selectElement = document.getElementById("printquestiontopic");
                                             
                                              
                                              for (var i = 0; i < subtopics.length; i++) {
                                                  var option = document.createElement("option");
                                                  option.text = subtopics[i];
                                                  selectElement.add(option);
                                              }
  
if (selectedQuestion) {
  document.getElementById('ocm').value = selectedQuestion.ocm;
  document.getElementById('qidcreate').value = selectedQuestion.qid;
  document.getElementById('owm').value = selectedQuestion.owm;
  document.getElementById('qcreatetext').value = selectedQuestion.qtext;
  document.getElementById('questiontype').value = selectedQuestion.qType;
  document.getElementById('printquestiontopic').value = selectedQuestion.qTopic;
  document.getElementById('selectoptionsetquestion').value = selectedQuestion.optionSet;
  document.getElementById("showeditimg").innerHTML=`
                            <iframe style={{"height":"200px"}}  src="https://drive.google.com/file/d/`+selectedQuestion.qimg+`/preview"  class="img-fluid w-100 "    allow="autoplay" allowfullscreen></iframe>
 `;

  // bidisha 
  printOptions(selectedQuestion.optionSet);
  
  // printCorrectField(selectedQuestion.qType, selectedQuestion.optionSet);    
  for (var i = 1; i <= selectedQuestion.optionSet; i++) {
       document.getElementById("op" + i).value=selectedQuestion["op"+ i] ;
  }


var t=selectedQuestion.qType;
var p=selectedQuestion.optionSet;
  var correctFieldHTML = '';

if (t === "s") {
  correctFieldHTML += '<div class="form-group col-12">';
  correctFieldHTML += '<label for="topic1"> correct answer (option type)</label>';
  correctFieldHTML += '<select id="selectcorrectsingle" class="form-control">';
  
  // Print options based on the value of p
  for (var i = 1; i <= p; i++) {
    // make string option 1 to option
      if(selectedQuestion.oc==i){
          correctFieldHTML += '<option value="'+i+'" selected> option ' + i + '</option>';
      }
      else{
          correctFieldHTML += '<option value="'+i+'"> option ' + i + '</option>';
      }
      // correctFieldHTML += '<option> option ' + i + '</option>';
  }
  
  correctFieldHTML += '</select>';
  correctFieldHTML += '</div>';
} else if (t === "n") {
  document.getElementById("showOptions").style.display="none";
  correctFieldHTML += '<div class="form-group col-12">';
  correctFieldHTML += '<label for="topic1"> correct answer (Numerical type)</label>';
  correctFieldHTML += '<input type="text" class="form-control" id="op0correct" value="'+selectedQuestion.oc+'" placeholder="Enter correct answer">';
  correctFieldHTML += '</div>';
} else if (t === "d") {
  correctFieldHTML += '<label for="inputState">Choose Correct answer(one or More than One correct)</label>';
  correctFieldHTML += '<div   class="form-group card col-md-12" style="overflow-y:scroll;height: auto ;max-height: 100px;">';
  correctFieldHTML += '<div id="selectmultipleoption" class="form-check col-lg-12">';
  
  // Print checkboxes based on the value of p
  for (var i = 1; i <= p; i++) {
      if(selectedQuestion.oc.includes(i)){
          correctFieldHTML += '<label class="form-check-label col-lg-5 btn btn-light m-2" for="op' + i + '">';
          correctFieldHTML += '<input class="form-check-input" type="checkbox" value="'+i+'" id="op' + i + '" checked>';
          correctFieldHTML += 'option ' + i;
          correctFieldHTML += '</label>';
      }
      else{
          correctFieldHTML += '<label class="form-check-label col-lg-5 btn btn-light m-2" for="op' + i + '">';
          correctFieldHTML += '<input class="form-check-input" type="checkbox" value="'+i+'" id="op' + i + '">';
          correctFieldHTML += 'option ' + i;
          correctFieldHTML += '</label>';
      }
      // correctFieldHTML += '<label class="form-check-label col-lg-5 btn btn-light m-2" for="op' + i + '">';
      // correctFieldHTML += '<input class="form-check-input" type="checkbox" value="'+i+'" id="op' + i + '">';
      // correctFieldHTML += 'option ' + i;
      // correctFieldHTML += '</label>';
  }
  
  correctFieldHTML += '</div>';
  correctFieldHTML += '</div>';
}

document.getElementById('showquestionset').innerHTML = correctFieldHTML;
  
  

  
}
else {
  alert("Error: Question not found");
}
}

// function deletequestion(setno,questionId) {
  window.deletequestion=(setno,questionId)=>{
  if( !confirm("Are You Sure To Delete The Question?")){
      return;
  }
  var questionIndex = examDetails.allquestions.findIndex(function(question) {
      return question.qid === questionId;
  });
  
  if (questionIndex !== -1) {
      examDetails.allquestions.splice(questionIndex, 1);
      // addQuestion();
      viewquestionfromloaded(setno);
      uploadfinalquestion();
      document.getElementById("noofq"+setno).innerHTML=examDetails.allquestions.length;
      
  }
  else {
      alert("Question not found");
  }
}
var printpdf="";
// function viewquestion(examDetails){
  window.viewquestion=(examDetails)=>{
    examDetails=examDetails;
    console.log(examDetails.status);
    link="";
    var z=printbatchesofexam();
    var p="";
    for(var k=0;k<z.length;k++){
       p=p+` <a href="javascript:void();" class="badge badge-dark badge-pill">`+z[k]+`</a>  `;

    }

    // console.log(e)
    document.getElementById("editquesionpanel").style.display="block";
  
    var a=`




    <div class="row">
                    <div id="detailsviewform" class="col-sm-12">
                      <div id="questiononepage" class="card">
                        <div class="card-body">
                          <h5 class="card-title">Exam Details</h5>
                          Exam Name: `+examDetails.name+`<br>
                                                            Exam Date: `+examDetails.date+`<br>
                                                            Exam Duration: <span id="showtime">`+examDetails.time+`</span> Minutes<br>
                                                            Starting Time: `+examDetails.startingTime+`<br>
                                                            Batches: `+p+`<br><br>
                                                           
                          <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                            <a onclick="copycode()" class="btn btn-primary">Copy Question
                            Code</a>
                            <!-- <a onclick="uploadfinalquestion()" id="createpdf" class="btn btn-warning blockedstatus">Upload and Save Final Exam</a> -->
                            
                            <div class="blockedstatus btn btn-danger"  id="deleteset"
                            onclick="deleteexamset('`+examDetails.setno+`')"
                            >Delete Exam set</div>
                          

                          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                        </div>
                      </div>


                    </div>
                    <div id="settingsstart" class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Settings</h5>
                          

                          
                          <div class="card form-row col-12">
                            <div class="form-group col-12 m-2">
                            <label for="addtime"> Extend Time</label>
                            <select id="addtime" class="form-control">
                              <option value="5" selected> Extend by 5 minutes</option>
                              <option value="10"> Extend by 10 minutes</option>
                              <option value="15"> Extend by 15 minutes</option>
                              <option value="30"> Extend by 30 minutes</option>
                            </select>

                            <button onclick="extendtime('`+examDetails.setno+`')" class="btn btn-warning form-row col-5 mt-2 mr-2">Add time</button>
                          </div>



                          </button>
                          
                          </div>
                        </div>
                      </div>
                    </div>






                                            <form style="width:100%">
                                                <div class="form-row">
            `;
    for(var i=0;i<examDetails.allquestions.length;i++){
        var b="";
    
        for (var j = 1; j <= examDetails.allquestions[i].optionSet; j++) {
        // var optionValue = examDetails.allquestions[i].op+i;
         var optionValue = examDetails.allquestions[i]['op' + j];
        
            
            b=b+` <div class="col-lg-6"><strong>`+j+`.</strong>`+optionValue+`</div> `
    }

var c="";
if(examDetails.allquestions[i].qType=="n"){
    c="Numerical Answer Type";
    b="";
}    
else if(examDetails.allquestions[i].qType=="d"){
    c="One Or More Than Option correct Type";
}    
else if(examDetails.allquestions[i].qType=="s"){
    c="Single Option correct Type";
}    

        a=a+`    
        
        <div class="card form-group col-md-6">
                                                <div class="card-body">
                                                <div class="form-group col-md-12 mb-2"><strong>`+parseInt(i+1)+`) </strong>`+c+`(+`+examDetails.allquestions[i].ocm+`,-`+examDetails.allquestions[i].owm+`) <strong style="float:right">`+examDetails.allquestions[i].qTopic+`</strong></div>
                                           
                                                <div class="card form-group col-md-12" style="height: 200px;overflow-y: scroll;">
            
                                                                                        <iframe style="height:300px"  src="https://drive.google.com/file/d/`+examDetails.allquestions[i].qimg+`/preview" class="img-fluid w-100 " height="200"   allow="autoplay" allowfullscreen></iframe>

                                                </div>
                                               
                                                <h6 class="form-group col-md-12 m-2"><strong>Question Text:</strong> `+examDetails.allquestions[i].qtext+`</h6>
                                                `+b+`
                                                  <div class="form-group col-md-12 mb-2"><strong>Correct Answer:</strong> `+examDetails.allquestions[i].oc+`</div> 
                                                  <a class="blockedstatus form-group col-md-4 m-2 btn btn-light" href="#profile" onclick="editquestion('`+examDetails.allquestions[i].qid+`')">Edit Quesion</a>  
                                                  <div class="blockedstatus form-group col-md-4 m-2 btn btn-danger" onclick="deletequestion('`+examDetails.setno+`','`+examDetails.allquestions[i].qid+`')">Delete Quesion</div>  
                                                </div></div><hr>`
    
    }
    document.getElementById("messages").innerHTML=a+`</div></form>`;
    printpdf=a+`</div></form>`;

    if (examDetails.status === 2 || examDetails.status === 3) {
    var buttons = document.getElementsByClassName("blockedstatus");
    console.log(buttons.length);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
        
    }

 

}   


document.getElementById("settingsstart").style.display = "none";
    // document.getElementById("startexam").style.display = "none";
    document.getElementById("deleteset").style.display = "none";

if (examDetails.status === 2) {
    document.getElementById("settingsstart").style.display = "";
    
var detailsViewForm = document.getElementById("detailsviewform");
detailsViewForm.classList.add("col-sm-6");
detailsViewForm.classList.remove("col-sm-12");
// document.getElementById("detailsviewform").scrollIntoView({
//   behavior: "smooth", // Smooth scrolling animation
//   // block: "start",     // Aligns the top of the element to the top of the viewport
// });

}  if (examDetails.status === 1) {
    // document.getElementById("startexam").style.display = "";
}  if (examDetails.status === 0 || examDetails.status === 1 ) {
    document.getElementById("deleteset").style.display = "";
    // sayandip
    // addq
    document.getElementById("addq").style.display = "";

}
else{
    document.getElementById("addq").style.display = "none";
}
if(examDetails.allquestions.length==0){
    document.getElementById("qidcreate").value="q1";
}
else{
    document.getElementById("qidcreate").value= 
    examDetails.allquestions[examDetails.allquestions.length-1].qid+1;
}


var element = document.getElementById("editquesionpanel");
var offsetTop = element.offsetTop;

window.scrollTo({
  top: offsetTop,
  behavior: "smooth",
});

}




// function uploadfinalquestion(){
  window.uploadfinalquestion=()=>{
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        for (var j = 1; j <= examDetails.allquestions[i].optionSet; j++) {
            if (examDetails.allquestions[i]['op' + j] === "") {
                examDetails.allquestions[i]['op' + j] = "Option " +j;
            }
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qtext === "") {
            examDetails.allquestions[i].qtext = "NO QUESTION TEXT";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qTopic === "") {
            examDetails.allquestions[i].qTopic = "No Topic";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qType === "") {
            examDetails.allquestions[i].qType = "No Type";

        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].ocm === "") {
            examDetails.allquestions[i].ocm = 0;
        }
    }

    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].owm === "") {
            examDetails.allquestions[i].owm = 0;
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].oc === "") {
            examDetails.allquestions[i].oc = 0;
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].optionSet === "") {

            examDetails.allquestions[i].optionSet = 0;
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qid === "") {
            examDetails.allquestions[i].qid = "0";
        }

    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.date === "") {
        examDetails.date = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.name === "") {
        examDetails.name = "Default Exam";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.setno === "") {
        examDetails.setno = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.startingTime === "") {
        examDetails.startingTime = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.time === "") {
        examDetails.time = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.totalno === "") {
        examDetails.totalno = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.totaltopics === "") {
        examDetails.totaltopics = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.nosubt === "") {
        examDetails.nosubt = "0";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.edo === "") {
        examDetails.edo = "0";
    }
    // if there are any no value field in examDetails then fill with #

    
    fetch(url+"/addquestionobjecttoexam", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(examDetails),
    })
    .then(response => response.json())
    .then(data => {

        alert("Question uploaded Successfully.");
printallbatches(allexams);

        // viewquestion(examDetails);
        // document.getElementById("qidcreate").value="q1";
    })
    .catch((error) => {

    }
    );
}




// function publishexam(setno,noofq){
  window.publishexam=(setno,noofq)=>{
    if( !confirm("Are You Sure To Publish The Exam?")){
        return;
    }
    if(noofq==0){
        alert("Please add atleast one question to publish the exam");
        return;
    }
    fetch(url+"/publishexam", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno:setno}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Exam set published Successfully");
        viewquestionfromloaded(setno);
        fetchall(); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}
// viewquestion(examDetails);

// createbasicExamObject();
// savesubtopics();
// addQuestion();
// printCorrectField(examDetails.edq, examDetails.edo);    
// printOptions(examDetails.edo);
// editquestion("q1");



























// view saved incomplete question



// var allexams = [
//   {
//     setno: "e1",
//     name: "aptitude exam 1",
//     time: "13:30",
//     batches:["b-1","b-2","b-3"],
//     date: "2024-04-24",
//     startingTime: "10:30",
//     status:1,
//     allquestions: [
//       {
//         qid: "q1",
//         ocm: "4",
//         owm: "1",
//         qtext: "1st question",
//         qType: "d",
//         op1: "we",
//         op2: "wsqas",
//         op3: "qas",
//         optionSet: "3",
//         qTopic: "aptitude",
//         oc: "123",
//       },
//       {
//         qid: "q2",
//         ocm: "4",
//         owm: "1",
//         qtext: "2nd question",
//         qType: "n",
//         optionSet: "0",
//         qTopic: "reasoning",
//         oc: "19083",
//       },
//       {
//         qid: "q3",
//         ocm: "4",
//         owm: "1",
//         qtext: "3rd question",
//         qType: "s",
//         op1: "we",
//         op2: "wsqas",
//         op3: "qas",
//         optionSet: "3",
//         qTopic: "english",
//         oc: "3",
//       },
//       {
//         qid: "q4",
//         ocm: "3",
//         owm: "2",
//         qtext: "4th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "456",
//       },
//       {
//         qid: "q5",
//         ocm: "3",
//         owm: "1",
//         qtext: "5th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "reasoning",
//         oc: "789",
//       }
//     ],
//     totalno: "5",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "3",
//     edcm: "5",
//     edq: "d",
//     edwm: "7"
//   },
//   {
//     setno: "e2",
//     name: "gk exam 2",
//     time: "14:00",
//     batches:["b-4","b-5","b-6"],

//     date: "2024-04-25",
//     status:0,
//     startingTime: "11:00",
//     allquestions: [
//       {
//         qid: "q6",
//         ocm: "2",
//         owm: "2",
//         qtext: "6th question",
//         qType: "n",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "987",
//       },
//       {
//         qid: "q7",
//         ocm: "4",
//         owm: "1",
//         qtext: "7th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "654",
//       },
//       {
//         qid: "q8",
//         ocm: "3",
//         owm: "1",
//         qtext: "8th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "321",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "4",
//     edcm: "8",
//     edq: "n",
//     edwm: "9"
//   },
//   {
//     setno: "e3",
//     name: "english exam 3",
//     time: "15:00",
//     date: "2024-04-26",
//     batches:["b-7"],

//     status:2,
//     startingTime: "12:00",
//     allquestions: [
//       {
//         qid: "q9",
//         ocm: "3",
//         owm: "1",
//         qtext: "9th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "147",
//       },
//       {
//         qid: "q10",
//         ocm: "2",
//         owm: "1",
//         qtext: "10th question",
//         qType: "n",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "258",
//       },
//       {
//         qid: "q11",
//         ocm: "4",
//         owm: "2",
//         qtext: "11th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "369",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "5",
//     edcm: "7",
//     edq: "s",
//     edwm: "3"
//   },
//   {
//     setno: "e4",
//     name: "maths exam 3",
//     time: "15:00",
//     batches:["b-8","b-9"],

//     date: "2024-04-26",
//     status:3,
//     startingTime: "12:00",
//     allquestions: [
//       {
//         qid: "q9",
//         ocm: "3",
//         owm: "1",
//         qtext: "9th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "147",
//       },
//       {
//         qid: "q10",
//         ocm: "2",
//         owm: "1",
//         qtext: "10th question",
//         qType: "n",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "258",
//       },
//       {
//         qid: "q11",
//         ocm: "4",
//         owm: "2",
//         qtext: "11th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "369",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "5",
//     edcm: "7",
//     edq: "s",
//     edwm: "3"
//   }
// ];




  window.sortObjectsByName=(objects)=>{

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


allexams=sortObjectsByName(allexams);
// allexams=filterByStatus(allexams, 3);

                            
    // print all batches


  window.filterByStatus=()=>{

var status=document.getElementById("valueoffilter").value;
status=parseInt(status);
    // alert(status);
    if (status === -1) {
printallbatches(allexams);

      return;
    }
    objects = allexams;
  objects= objects.filter(object => object.status === status);
//   viewquestion(objects);
printallbatches(objects);
}






  window.searchObjects=()=>{

  // console.log("hit");
  var objects = allexams;
  var searchPhrase = document.getElementById("searchapprove").value;
  // Convert the search phrase to lowercase for case-insensitive search
  var searchLower = searchPhrase.toLowerCase();

  // Filter the objects based on the search criteria
  var searchResults = objects.filter(object => {
    // Convert batch name, day, and time to lowercase for case-insensitive search
    var batchNameLower = object.name.toLowerCase();
    var batchDayLower = object.startingTime.toLowerCase();
    var batchTimeLower = object.date.toLowerCase();

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




// function extractIdFromLink(link) {
window.extractIdFromLink =(link) =>{
  let id = '';
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







  window.viewquestionfromloaded=(id)=>{
// alert(id);
// scroll to id details 
// var element = document.getElementById("detailsviewform");
// var offsetTop = element.offsetTop;

// window.scrollTo({
//   top: offsetTop,
//   behavior: "smooth",
// });

     examDetails = allexams.find(function(exam) {
        return exam.setno === id;
    });
    setexamDetails(examDetails);
    console.log(examDetails);
    // viewquestion(examDetails);
    // document.getElementById("showpreview").innerHTML=a;
    viewquestion(examDetails);
}



  window.printbatchesofexam=()=>{

    
    var batchDetails = [];
  examDetails.batches.forEach(function(batchId) {
    var batch = batches.find(function(batch) {
      return batch.bid === batchId;
    });
    if (batch) {
      var batchInfo = batch.bname +" - "+ batch.bday +" - "+ batch.btime;
      batchDetails.push(batchInfo);
    }
  });
  return batchDetails;     
}
  
  
  
  window.showfieldcopy=()=>{
      var form = document.getElementById("basicdetailsformcopy");
      
      
      var inputs = form.getElementsByTagName("input");
  
      for (var i = 0; i < inputs.length; i++) {
          inputs[i].value = "";
      }
      var checkboxes = document.getElementsByClassName("clearbatch");
      console.log(checkboxes.length);
  
  for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
  }
  
  }
  
    window.copycode=()=>{
  // copy question code
  
  navigator.clipboard.writeText(JSON.stringify(examDetails.allquestions))
    .then(() => {
      alert('Exam details copied to clipboard');
  
    })
    .catch((error) => {
      console.error('Failed to copy exam details to clipboard:', error);
    });
  
  }
  
    window.deleteexamset=(setno)=>{

    if( !confirm("Are You Sure To Delete The Exam Set?")){
        return;
    }
    fetch(url+"/deleteexamset", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno:setno}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Exam set deleted Successfully");
        window.location.reload(); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}  
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // Ensures 2-digit format
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensures 2-digit format
  return `${hours}:${minutes}`;
//   const nowUTC = new Date();
//   const offsetIST = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//   const nowIST = new Date(nowUTC.getTime() + offsetIST);

//   // Format the time as HH-MM in 24-hour format
//   const hours = nowIST.getHours().toString().padStart(2, '0');
//   const minutes = nowIST.getMinutes().toString().padStart(2, '0');
// if(minutes<10){
//   minutes = "0"+minutes;
// }
// if(hours<10){
//   hours = "0"+hours;
// }
//   return `${hours}:${minutes}`;
}
function gettoday(){
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  if(date<10){
    date = "0"+date;
  }
  if(month<10){
    month = "0"+month;
  }
  return year + "-" + month + "-" + date;
  // const nowUTC = new Date();
  //   const offsetIST = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  //   const nowIST = new Date(nowUTC.getTime() + offsetIST);

  //   // Format the date as YYYY-MM-DD
  //   const year = nowIST.getFullYear();
  //   const month = (nowIST.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  //   const date = nowIST.getDate().toString().padStart(2, '0');
  //   if(date<10){
  //   date = "0"+date;
  // }
  // if(month<10){
  //   month = "0"+month;
  // }

  //   return `${year}-${month}-${date}`;
}

window.startexam =(setno,totalno) =>{
    if( !confirm("Are You Sure To Start The Exam?")){
        return;
    }
    fetch(url+"/startexam", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno:setno,totalno:totalno,time:getCurrentTime(),date:gettoday()}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Exam started Successfully");
        socket.emit("startexam",setno);
        fetchall(); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

window.extendtime=(setno)=>{
    var time = document.getElementById("addtime").value;
    if( !confirm("Are You Sure To Extend The Time?")){
        return;
    }
    fetch(url+"/extendtime", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno:setno,time:time}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Time extended Successfully");
        // viewquestionfromloaded(setno);
        // fetchall(); 
        examDetails.time=parseInt(examDetails.time)+parseInt(time);
        document.getElementById("showtime").innerHTML=examDetails.time;
        socket.emit("extendtime",{setno:setno,time:time});
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 
  }

  window.endexam =(setno) =>{
    if( !confirm("Are You Sure To End The Exam?")){
        return;
    }
    fetch(url+"/endexam", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno:setno}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Exam ended Successfully");
        socket.emit("endexam",setno);
        fetchall(); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
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
let tokenClient;
let gapiInited = false;
let gisInited = false;




window.onload = () => {
gapiLoaded();
gisLoaded();
// handleAuthClick();



//var storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
//if (storedUserDetails && storedUserDetails.isSignedIn) {
//    signinButton.style.display = 'none';
 //   signoutButton.style.display = 'block';
//}
}







// function upload() {
  window.upload=()=>{


  var fileInput = document.getElementById('qimg');
  if(fileInput.files.length==0){
    alert("pls select file");
    return ;
  }
          var file = fileInput.files[0];
          var mimeType = file.type;
console.log(file)
          // Determine the file type
          if (mimeType.includes('pdf')) {
              uploadFile(file, 'application/pdf');
          } else if (mimeType.includes('image')) {
              uploadFile(file, mimeType);
          } else if (mimeType.includes('video')) {
              uploadFile(file, mimeType);
          } else {
              console.error('Unsupported file type');
          }
  
}



// function uploadFile(file, mimeType,i) {
  window.uploadFile=(file, mimeType)=>{
  // var formData = new FormData();
  // formData.append('file', file);

// start khola
  var progressBar = document.getElementById('progress');
  var progressContainer = document.getElementById('progress-container');
  var cancelButton = document.getElementById('cancel-button');
  // var uploadbutton=document.getElementById("saveallfield");

  progressBar.style.width = '0';
  progressContainer.style.display = 'block';
  cancelButton.style.display = 'inline-block';
  // end khola
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
          // uploadbutton.disabled = true;
      }
  };

  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('File uploaded successfully!');
          // console.log('Generated Google Drive link:', JSON.parse(xhr.responseText).id);
          var fileId =JSON.parse(xhr.responseText).id;
var sharableLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
// document.get
 document.getElementById("showeditimg").innerHTML=`
                            <iframe style={{"height":"200px"}}  src="https://drive.google.com/file/d/`+extractIdFromLink(sharableLink)+`/preview" class="img-fluid w-100 "    allow="autoplay" allowfullscreen></iframe>
 `;

link=sharableLink;
console.log('Sharable link:', sharableLink);
//  document.getElementById('curl'+i).value=sharableLink;

alert("File uploaded successfully now click save video/notes to share with students");
// uploadbutton.disabled = false;

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
      // progressContainer.style.display = 'none';
      cancelButton.style.display = 'none';
  };

  cancelButton.onclick = function() {
      xhr.abort(); // Cancel the upload
  };

  xhr.send(formData);




  
}






// function checkFolder() {
  window.checkFolder=()=>{
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


// function createFolder() {
  window.createFolder=()=>{
 
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


// function handleAuthClick() {
  window.handleAuthClick=()=>{
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

// function handleSignoutClick() {
  window.handleSignoutClick=()=>{
var token = gapi.client.getToken();
if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
}
}






// function gapiLoaded() {
  window.gapiLoaded=()=>{ 
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

// function gisLoaded() {
  window.gisLoaded =() =>{
tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: ''
});
gisInited = true;
  }
function maybeEnableButtons() {
  
if (gapiInited && gisInited) {
    // signinButton.style.display = 'block'
}
}


gapiLoaded();
gisLoaded(); 

// handleAuthClick();





  }

},[]);







function fetchall(){


    
        
  
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

printbatches(data);

  
      batches = data;
      setbatches(data);
  
    })
    .catch((err) => console.log(err));


    
fetch(url+"/getallexams", {
method: 'GET',
headers: {
Accept: "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Headers": "Content-Type",
"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
"Access-Control-Allow-Origin": "*",
},
})
.then(response => response.json())
.then(data => {
  allexams=data;
  setallexams(data);
  console.log(allexams);
  printallbatches(allexams);
  // add 1 with last examid

  
  var previouseid="e0";
  if(allexams.length>0){

    previouseid =allexams[allexams.length-1].setno;
  }
  if(previouseid==undefined || previouseid==null || allexams.length==0){
    previouseid="e0";
  }
  var nexteid = "e" + (parseInt(previouseid.substring(1)) + 1);
 
  document.getElementById("esetno").value=nexteid;
  document.getElementById("esetnocopy").value=   nexteid;
})
.catch((error) => {
  console.error('Error:', error);
});

    
    



}








var printallbatches=(allexams)=>{
    
  var a=``,r=``,s=``;

for(var i=0;i<allexams.length;i++){
  if(allexams[i].status==0){
      r="<span style='color:white'>Not Published</span>";
      s=`<a class="btn btn-primary" onclick="publishexam('`+allexams[i].setno+`','`+allexams[i].allquestions.length+`')">publish</a>`
  }
  else if(allexams[i].status==1){
     r="<span style='color:aqua'>Published</span>";
     s=`<a class="btn btn-success" onclick="startexam('`+allexams[i].setno+`','`+allexams[i].allquestions.length+`')">Start exam</a>`

  }
  else if(allexams[i].status==2){
      r="<span style='color:greenyellow'>Ongoing</span>";
      s=`<a class="btn btn-danger" onclick="endexam('`+allexams[i].setno+`')">End Exam</a>`

  }
 
  else if(allexams[i].status==3){
      r="<span style='color:orange'>Completed</span>";
      s=`<a class="btn btn-light" >Completed</a>`

  }
  // console.log(allexams[i]);

  a=a+`<tr>
                            <th scope="row">`+allexams[i].setno+`</th>
                            <td>`+allexams[i].name+`</td>
                            <td>`+allexams[i].date+" - " +allexams[i].startingTime+`</td>
                            <td id="noofq`+allexams[i].setno+`">`+allexams[i].allquestions.length+`</td>
                            <td>`+r+`</td>

                            <td><a class="btn btn-warning"  onclick="viewquestionfromloaded('`+allexams[i].setno+`')">View/Edit</a></td>
                            
                            <td>`+s+`</td>
                          </tr>
`;
  }
  a=a+`<tr>`;

  document.getElementById("showbatchesoptionedit").innerHTML=a;

}

var createbasicExamObjectcopy=()=>{

  if(selectedBatches.length==0){
      alert("Please select atleast one batch");
      return 0;
  }
  if( !confirm("Are You Sure To Save The question?")){
      return 0;
  }
  
  document.getElementById("basicdetailsform").style.display="none";
  // Extracting values from form fields
  var setno = document.getElementById('esetnocopy').value;
  var name = document.getElementById('esubjectcopy').value;
  var time = document.getElementById('timecopy').value;
  var date = document.getElementById('edatecopy').value;
  var startingTime = document.getElementById('etimecopy').value;
  var allquestions = document.getElementById('copycode').value;
  allquestions=JSON.parse(allquestions);
  // Extracting all different qtopic and making an array
  var qTopics = [];
  for (var i = 0; i < allquestions.length; i++) {
    var question = allquestions[i];
  
    if (!qTopics.includes(question.qTopic)) {
      qTopics.push(question.qTopic);
    }
  }
  
  // Creating the object
   examDetails = {
      batches:selectedBatches,
      setno: setno,
      name: name,
      time: time,
      date: date,
      startingTime: startingTime,
      edq: "",
      edo: "",
      edcm: "",
      edwm: "",
      nosubt: qTopics.length,
      totalno: "",
      status:0,
      totaltopics:qTopics,
      allquestions:allquestions,
  };
  // selectedBatches=[];
  viewquestion(examDetails);
  console.log(examDetails);
  
  
  return examDetails;
  
  
  }
  

  





  return (
    <>
    <Adminhead></Adminhead>
    {/* <Script src="assetsadmin/js/adminquestionjs.js"></Script> */}
    
      <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
        
  <div id="wrapper">
    <Adminsidebar></Adminsidebar>

    <>
  <div className="content-wrapper">
    <div className="container-fluid">
      <div className="card ">
        <div className="card-content">
          <div className="row row-group m-0">
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <button
                  type="button"
                  id="btnstat"
                  className="btn btn-light buttonshow btn-block btn-toggle"
                  onClick={() => toggleDiv("stat")}


                >
                  Statistics
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <button
                  type="button"
                  id="btnnewset"
                  className=" btn btn-primary buttonshow btn-block btn-toggle"
                  onClick={() => { toggleDiv("newset"); showfield() }}

                >
                  Add New Question SET
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <button
                  type="button"
                  id="btnnewcode"
                  className="btn btn-light buttonshow btn-block btn-toggle"
                  onClick={() => { toggleDiv("newcode"); showfieldcopy() }}

                >
                  Put Question Code
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <button
                  type="button"
                  id="btnload"
                  className="btn btn-light buttonshow btn-block btn-toggle"
                  onClick={() =>  {toggleDiv("load");handleAuthClick()}}
                  

                >
                  View All Exams
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* statistics */}
      <div className="divshowqset" style={{ display: "none" }} id="stat"></div>
      {/* new set add */}
      <div className="divshowqset" id="newset">
        <div id="basicdetailsform" className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Basic Details</div>
                <hr />
                {/* <form>
         <div class="form-group">
          <label for="input-1">Name</label>
          <input type="text" class="form-control" id="input-1" placeholder="Enter Your Name">
         </div>
         <div class="form-group">
          <label for="input-2">Email</label>
          <input type="text" class="form-control" id="input-2" placeholder="Enter Your Email Address">
         </div>
         <div class="form-group">
          <label for="input-3">Mobile</label>
          <input type="text" class="form-control" id="input-3" placeholder="Enter Your Mobile Number">
         </div>
         <div class="form-group">
          <label for="input-4">Password</label>
          <input type="text" class="form-control" id="input-4" placeholder="Enter Password">
         </div>
         <div class="form-group">
          <label for="input-5">Confirm Password</label>
          <input type="text" class="form-control" id="input-5" placeholder="Confirm Password">
         </div>
         <div class="form-group py-2">
           <div class="icheck-material-white">
          <input type="checkbox" id="user-checkbox1" =""/>
          <label for="user-checkbox1">I Agree Terms & Conditions</label>
          </div>
         </div>
         <div class="form-group">
          <button type="submit" class="btn btn-light px-5"><i class="icon-lock"></i> Register</button>
        </div>
        </form> */}
                <form id="basicdetails">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">Exam-SET-ID</label>
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        disabled="true"
                        id="esetno"
                        placeholder="Set-Xi-01"
                      />
                    </div>
                    <label htmlFor="inputState">Choose Batch</label>
                    <div
                      className="form-group card col-md-12"
                      style={{
                        overflowY: "scroll",
                        height: "auto",
                        maxHeight: 100
                      }}
                    >
                      <div
                        className="form-check col-lg-12"
                        id="showbatchesinquestion"
                      ></div>
                    </div>
                    <div className="form-group col-12">
                      <label htmlFor="">
                        Topic/Subject/syllabus(Max 200 letters)
                      </label>
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        id="esubject"
                        placeholder="Aptitude saturday batch"
                        maxLength={200}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="edq">Default Question Type</label>
                      <select id="edq" className="form-control">
                        <option value="s" selected="">
                          single answer correct
                        </option>
                        <option value="d">
                          one or more than option correct{" "}
                        </option>
                        <option value="n">numerical type answer </option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="edo">default No of options</label>
                      <select id="edo" className="form-control">
                        <option value={4} selected="">
                          4
                        </option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">default Correct Marks</label>
                      <input
                        required=""
                        type="number"
                        className="form-control"
                        id="edcm"
                        placeholder={+4}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">
                        {" "}
                        default Negative Marks(for wrong)
                      </label>
                      <input
                        required=""
                        type="number"
                        className="form-control"
                        id="edwm"
                        placeholder={-1}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCity">Total Subtopics</label>
                      <input
                        required=""
                        type="number"
                        min={1}
                        className="form-control"
                        id="nosubt"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPassword4">Total Questions</label>
                      <input
                        required=""
                        type="number"
                        className="form-control"
                        id="totalno"
                        placeholder="Enter total number of questions"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputZip">
                        Total Duration(In Minutes)
                      </label>
                      <input
                        required=""
                        type="number"
                        className="form-control"
                        id="time"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Exam date</label>
                      <input
                        required=""
                        type="date"
                        className="form-control"
                        id="edate"
                        placeholder="Enter total number of questions"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Starting time</label>
                      <input
                        required=""
                        type="time"
                        className="form-control"
                        id="etime"
                        placeholder="Enter total number of questions"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Save Details
                  </button>
                  <button type="button" className="btn btn-light">
                    Edit Details
                  </button>
                  <button type="reset" className="btn btn-danger">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* 
    <div class="col-lg-6">
      <div class="card">
         <div class="card-body">
         <div class="card-title">Round Vertical Form</div>
         <hr>
          <form>
         <div class="form-group">
          <label for="input-6">Name</label>
          <input type="text" class="form-control form-control-rounded" id="input-6" placeholder="Enter Your Name">
         </div>
         <div class="form-group">
          <label for="input-7">Email</label>
          <input type="text" class="form-control form-control-rounded" id="input-7" placeholder="Enter Your Email Address">
         </div>
         <div class="form-group">
          <label for="input-8">Mobile</label>
          <input type="text" class="form-control form-control-rounded" id="input-8" placeholder="Enter Your Mobile Number">
         </div>
         <div class="form-group">
          <label for="input-9">Password</label>
          <input type="text" class="form-control form-control-rounded" id="input-9" placeholder="Enter Password">
         </div>
         <div class="form-group">
          <label for="input-10">Confirm Password</label>
          <input type="text" class="form-control form-control-rounded" id="input-10" placeholder="Confirm Password">
         </div>
         <div class="form-group py-2">
           <div class="icheck-material-white">
          <input type="checkbox" id="user-checkbox2" =""/>
          <label for="user-checkbox2">I Agree Terms & Conditions</label>
          </div>
         </div>
         <div class="form-group">
          <button type="submit" class="btn btn-light btn-round px-5"><i class="icon-lock"></i> Register</button>
        </div>
        </form>
       </div>
       </div>
    </div> */}
        </div>
        {/*End Row*/}
        <div
          id="showallelements"
          style={{ display: "none" }}
          className="row mt-3"
        >
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Subtopic Details</div>
                <hr />
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">No of subtopics</label>
                      <input
                        type="text"
                        disabled="true"
                        className="form-control"
                        id="totaltopics"
                      />
                    </div>
                    <div className="form-group col-12" id="showtopicdetails">


                      {/* <label for="topic1"> SubTopic 1</label>
                                          <input type="text" class="form-control" id="topic1"
                                              placeholder="Enter subtopic here">
                                              <button type="button" class="btn btn-danger  mt-2">Delete</button>
                                               */}
                    </div>
                    <button
                      type="button"
                      onClick={() => savesubtopics()}

                      className="btn btn-success col-3 mt-2 mr-2"
                    >
                      Save SubTopics
                    </button>
                    <button
                      type="button"
                      onClick={() => addNewTopic()}

                      className="btn btn-primary col-3 mt-2 mr-2"
                    >
                      Add New{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*End Row*/}
      </div>
      {/* copy code question */}
      <div className="divshowqset" style={{ display: "none" }} id="newcode">
        <div id="basicdetailsformcopy" className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Basic Details</div>
                <hr />
                <form id="basicdetailscopy">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">Exam-SET-ID</label>
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        disabled="true"
                        id="esetnocopy"
                        placeholder="Set-Xi-01"
                      />
                    </div>
                    <label htmlFor="inputState">Choose Batch</label>
                    <div
                      className="form-group card col-md-12"
                      style={{
                        overflowY: "scroll",
                        height: "auto",
                        maxHeight: 100
                      }}
                    >
                      <div
                        className="form-check col-lg-12"
                        id="showbatchesinquestioncopy"
                      ></div>
                    </div>
                    <div className="form-group col-12">
                      <label htmlFor="">
                        Topic/Subject/syllabus(Max 200 letters)
                      </label>
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        id="esubjectcopy"
                        placeholder="Aptitude saturday batch"
                        maxLength={200}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputZip">
                        Total DurationIn Minutes)
                      </label>
                      <input
                        required=""
                        type="number"
                        className="form-control"
                        id="timecopy"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPassword4">Exam date</label>
                      <input
                        required=""
                        type="date"
                        className="form-control"
                        id="edatecopy"
                        placeholder="Enter total number of questions"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPassword4">Starting time</label>
                      <input
                        required=""
                        type="time"
                        className="form-control"
                        id="etimecopy"
                        placeholder="Enter total number of questions"
                      />
                    </div>
                    <div className="form-group col-12">
                      <label htmlFor="">Put Question Code</label>
                      <textarea
                        required=""
                        type="text"
                        className="form-control"
                        id="copycode"
                        placeholder="put question code"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">
                    {/* Save Details */}
                    Publish Question 
                  </button>
                  <button type="reset" className="btn btn-danger">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* 
    <div class="col-lg-6">
      <div class="card">
         <div class="card-body">
         <div class="card-title">Round Vertical Form</div>
         <hr>
          <form>
         <div class="form-group">
          <label for="input-6">Name</label>
          <input type="text" class="form-control form-control-rounded" id="input-6" placeholder="Enter Your Name">
         </div>
         <div class="form-group">
          <label for="input-7">Email</label>
          <input type="text" class="form-control form-control-rounded" id="input-7" placeholder="Enter Your Email Address">
         </div>
         <div class="form-group">
          <label for="input-8">Mobile</label>
          <input type="text" class="form-control form-control-rounded" id="input-8" placeholder="Enter Your Mobile Number">
         </div>
         <div class="form-group">
          <label for="input-9">Password</label>
          <input type="text" class="form-control form-control-rounded" id="input-9" placeholder="Enter Password">
         </div>
         <div class="form-group">
          <label for="input-10">Confirm Password</label>
          <input type="text" class="form-control form-control-rounded" id="input-10" placeholder="Confirm Password">
         </div>
         <div class="form-group py-2">
           <div class="icheck-material-white">
          <input type="checkbox" id="user-checkbox2" =""/>
          <label for="user-checkbox2">I Agree Terms & Conditions</label>
          </div>
         </div>
         <div class="form-group">
          <button type="submit" class="btn btn-light btn-round px-5"><i class="icon-lock"></i> Register</button>
        </div>
        </form>
       </div>
       </div>
    </div> */}
        </div>
        {/*End Row*/}
      </div>
      {/* loaded saved quesdtion */}
      <div className="divshowqset" style={{ display: "none" }} id="load">
        <div className="card divshow" id="edit" style={{ display: "block" }}>
          <div className="card">
            <div className="card-body">
              <h5>Exams List</h5>
              <hr />
              <div className="container-fluid mt-2">
                <div>
                  {/* Choose Batch:<br>
                            <select class="form-select form-select-lg mb-3 btn btn-light col-lg-12"
                              aria-label="Default select example">
                              <option class="btn btn-dark" value="1">One</option>
                              <option class="btn btn-dark" value="2">Two</option>
                              <option class="btn btn-dark" value="3">Three</option>
                            </select> */}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Search Exams </h5>

                        <select id="valueoffilter" 
                      onChange={() => filterByStatus()}
                      className="btn btn-info dropdown-toggle-nocaret" style={{ float: "right" }}
                              >
                            <option
value="-1"
                            >
                              All Exams
                            </option>
                            <option
value="0"


                            >
                              Not Published
                            </option>
                            <option
value="1"


                            >
                              Published
                            </option>
                            <option
value="2"


                            >
                              {" "}
                              Ongoing
                            </option>
                            <option
value="3"



                            >
                              Completed
                            </option>
                      
                              </select>
                            


                        {/* <div className="dropdown" style={{ float: "right" }}>
                          <a
                            className="btn btn-info dropdown-toggle-nocaret"
                            data-toggle="dropdown"
                          >
                            Filter Exams
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                      onClick={() => filterByStatus(-1)}

                            >
                              All Exams
                            </a>
                            <a
                              className="dropdown-item"
                      onClick={() => filterByStatus(0)}

                            >
                              Not Published
                            </a>
                            <a
                              className="dropdown-item"
                      onClick={() => filterByStatus(1)}

                            >
                              Published
                            </a>
                            <a
                              className="dropdown-item"
                      onClick={() => filterByStatus(2)}

                            >
                              {" "}
                              Ongoing
                            </a>
                            <a
                              className="dropdown-item"
                      onClick={() => filterByStatus(3)}


                            >
                              Completed
                            </a>
                          </div>
                        </div> */}
                        <input
                          type="text"
                          className="form-row form-control mb-3 col-lg-10"
                          placeholder="Search Exams By Name ,exam Day,Time"
                          id="searchapprove"
                          onKeyUp={() => searchObjects("")}

                        />
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped table-hover">
                            <thead>
                              <tr>
                                <th scope="col">Set-No</th>
                                <th scope="col">Exam Name</th>
                                <th scope="col">Day-Timing</th>
                                <th scope="col">No of Questions</th>
                                <th scope="col">Status</th>
                                <th scope="col">Edit Question</th>
                                <th scope="col">Publish</th>
                                {/* <th scope="col">Handle</th> */}
                              </tr>
                            </thead>
                            <tbody id="showbatchesoptionedit">
                              <tr>
                                <th scope="row">b-1</th>
                                <td>Aptitide</td>
                                <td>monday 7am-9am</td>
                                <td>24</td>
                                <td>
                                  <button className="btn btn-warning">
                                    Edit now
                                  </button>
                                </td>
                                <td>
                                  <button className="btn btn-success">
                                    students list
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Row*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* preview question /add question /edit question */}
      <div
        id="editquesionpanel"
        style={{ display: "none" }}
        className=" divshow1 col-lg-12"
      >
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-primary top-icon nav-justified">
              <li className="nav-item" 
                      onClick={() => viewquestion(examDetails)}


                      >
                <a
                  href="javascript:void();"
                  id="viewbutton"
                  data-target="#messages"
                  data-toggle="pill"
                  className="nav-link active"
                >
                  <i className="icon-envelope-open" />{" "}
                  <span className="hidden-xs">View Question</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="javascript:void();"
                  id="editbutton"
                  data-target="#messages"
                  data-toggle="pill"
                  className="nav-link "
                >
                  <i className="icon-envelope-open" />{" "}
                  <span className="hidden-xs">Edit Question</span>
                </a>
              </li>
              <li id="addq" className="nav-item" 
               onClick={() => {addQuestion();handleAuthClick()}}

              >
                <a
                  href="javascript:void();"
                  id="newbutton"
                  data-target="#profile"
                  data-toggle="pill"
                  className="nav-link "
                >
                  <i className="icon-note" />{" "}
                  <span className="hidden-xs">Add New</span>
                </a>
              </li>
            </ul>
            <div className="tab-content p-3">
              <div
                className="tab-pane active form-group col-md-12"
                id="messages"
              >
                {/* give sliding here */}
              </div>
              <div id="profile" className="tab-pane">
                <div id="showquestionpanel" className="divshow1 row mt-3">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Question Details</div>
                        <hr />
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">Question-Id</label>
                              <input
                                type="text"
                                className="form-control"
                                disabled="true"
                                id="qidcreate"
                                placeholder="que-Xi-01"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="questiontype">Select Topic</label>
                              <select
                                id="printquestiontopic"
                                className="form-control"
                              ></select>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="questiontype">
                                Question Type
                              </label>
                              <select
                                id="questiontype"
                                // onChange="selectquestiontype();selectoption()"
                      onClick={() => changeexamdetails()}

                                className="form-control"
                              >
                                <option value="s">single answer correct</option>
                                <option value="d">
                                  one or more than option correct{" "}
                                </option>
                                <option value="n">
                                  numerical type answer{" "}
                                </option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="selectoptionsetquestion">
                                No of options
                              </label>
                              <select
                                id="selectoptionsetquestion"
                                className="form-control"
                                // onChange="selectquestiontype();selectoption()"
                      onClick={() => changeexamdetails()}

                              >
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">Correct Marks</label>
                              <input
                                type="number"
                                className="form-control"
                                id="ocm"
                                placeholder={+4}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">
                                Negative Marks(for wrong)
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="owm"
                                placeholder={-1}
                              />
                            </div>
                            <div className="form-group col-12">
                              <label htmlFor="topic1"> question Text</label>
                              <input
                                type="text"
                                className="form-control"
                                id="qcreatetext"
                                placeholder="Enter Question body text here"
                              />
                            </div>
                            <div className="form-group col-6">
                              <label htmlFor="topic1"> question Image</label>

                              <input
                                type="file"
                                className="form-control"
                                id="qimg"
                                placeholder="Enter Question body image here"
                              />
                            </div>
                            <div id="showdetailsupload" className="form-group col-4">
                              {/* <label > Upload</label> */}
                              {/* <button
                                type="button"
                                className="btn btn-success"
                                // onclick="upload()"
                                onClick={() => {  upload(); }}
                              >
                                Upload Question  
                              </button> */}











                              
                            </div>
                            <div id="showeditimg"  className="form-group col-12">

                            <iframe style={{"height":"200px"}}  src="https://drive.google.com/file/d/1CNhoWmz4kek06My-5KEXkT6eoOhpEJkA/preview" class="img-fluid w-100 "    allow="autoplay" allowfullscreen></iframe>
                            </div>

                            
                            
                            <div
                              className="form-group col-12"
                              id="showOptions"
                            ></div>
                            {/* <div class="form-group col-3">
                                                                  <label for="topic1"> option 1</label>
                                                                  <input type="text" class="form-control" id="op1"
                                                                      placeholder="Enter  option 1 ">
                                                              </div>
                                                              <div class="form-group col-3">
                                                                  <label for="topic1"> option 2</label>
                                                                  <input type="text" class="form-control" id="op1"
                                                                      placeholder="Enter  option 2 ">
                                                              </div>
                                                              <div class="form-group col-3">
                                                                  <label for="topic1"> option 3</label>
                                                                  <input type="text" class="form-control" id="op1"
                                                                      placeholder="Enter  option 3 ">
                                                              </div>
                                                              <div class="form-group col-3">
                                                                  <label for="topic1"> option 4 </label>
                                                                  <input type="text" class="form-control" id="op1"
                                                                      placeholder="Enter  option 4 ">
                                                              </div> */}
                            {/* <div class="form-group col-12">
                                                                  <label for="topic1"> correct answer (Numerical type)</label>
                                                                  <input type="text" class="form-control" id="op0"
                                                                      placeholder="Enter correct answer ">
                      
                                                              </div> */}
                            <div
                              className="form-group col-12"
                              id="showquestionset"
                            ></div>
                            {/* <div class="form-group col-12">
                                                                  <label for="topic1"> correct answer (option type)</label>
                                                                  <select id="inputState" class="form-control">
                                                                      <option selected> option 1</option>
                                                                      <option> option 2</option>
                                                                      <option> option 3</option>
                                                                      <option> option 4</option>
                                                                  </select>
                      
                                                              </div> */}
                            {/* <label for="inputState">Choose Correct answer(one or More than One
                                                                  correct)</label>
                      
                                                              <div  class="form-group card col-md-12"
                                                                  style="overflow-y:scroll;height: auto ;max-height: 100px;">
                      
                                                                  <div class="form-check col-lg-12">
                                                                      <label class="form-check-label col-lg-5 btn btn-light  m-2 " for="op1">
                                                                          <input class="form-check-input " type="checkbox" value="" id="op1">
                                                                          option 1
                                                                      </label>
                                                                      <label class="form-check-label btn btn-light m-2 col-lg-5" for="op2">
                                                                          <input class="form-check-input " type="checkbox" value="" id="op2">
                                                                          option 2
                                                                      </label>
                                                                      <label class="form-check-label btn btn-light m-2 col-lg-5 " for="op3">
                                                                          <input class="form-check-input " type="checkbox" value="" id="op3">
                                                                          option 3
                                                                      </label>
                                                                      <label class="form-check-label btn btn-light m-2 col-lg-5" for="op4">
                                                                          <input class="form-check-input " type="checkbox" value="" id="op4">
                                                                          option 4
                                                                      </label>
                                                                  </div>
                                                              </div>
                       */}
                          </div>
                          <button
                            type="button"
                            onClick={() => savequestion()}
                            className="btn btn-success"
                          >
                            Save This Question
                          </button>
                          <button
                            type="button"
                            onClick={() => addQuestion()}

                            className="btn btn-warning"
                          >
                            Add New Question
                          </button>
                          {/* <button type="reset" class="btn btn-danger">Reset</button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Row*/}
              </div>
              {/*End Row*/}
            </div>
          </div>
        </div>
      </div>
      {/*start overlay*/}
      <div className="overlay toggle-menu" />
      {/*end overlay*/}
    </div>
    {/* End container-fluid*/}
  </div>
  {/*End content-wrapper*/}
</>

   
    <Adminfooter></Adminfooter>
   
    </div>
    </div>

    </>
  )
}

export default Adminquestion
