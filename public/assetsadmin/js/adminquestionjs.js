// var url = "http://localhost:5000";
var url="https://mathopia.onrender.com";

// var socket = io();
// var socket = io('http://localhost:5000'); 
// import { socket } from "../socket";
// var socket=io('/user',{
//  auth:2
// });
// socket.on('connect', function() {
//     alert('Connected to server');
// });
// socket.on('disconnect', function() {
//     console.log('Disconnected from server');
// });

       

// show();
function toggleDiv(divId) {

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

function showfield(){
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
function toggleDiv1(divId) {
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



//      var batches=[
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

var batches=[];
var allexams = [];



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
      
printbatches(data);
      
        
            batches = data;
        
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
        console.log(allexams);
        printallbatches(allexams);
        // add 1 with last examid
 
        

        var previouseid =allexams[allexams.length-1].setno;
        var nexteid = "e" + (parseInt(previouseid.substring(1)) + 1);
       
        document.getElementById("esetno").value=nexteid;
        document.getElementById("esetnocopy").value=   nexteid;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

          
          
    
      
  
  }
  fetchall();



function printbatches(d){
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






document.getElementById('basicdetails').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var examDetails = createbasicExamObject();
    console.log(examDetails); // You can do anything you want with the examDetails object
    // Now you can perform any further actions, like sending the data to a server or processing it further.
});




function createbasicExamObject() {
    
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
// document.getElementById("showallelements").style.display="none";
// document.getElementById("showquestionpanel").style.display="none";
// document.getElementById("showoptionofquesion").style.display="none";
// document.getElementById("editquesionpanel").style.display="none";




function printTopics(a) {
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

function deleteTopic(index) {
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


function addNewTopic() {
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

function printOptions(optionCount) {
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
function selectoption(){
    var a=document.getElementById("selectoptionsetquestion").value;
    printOptions(a);
}
function selectquestion(){
    var a=document.getElementById("selectquestionset").value;
    printcorrectfield(a);
}

// printOptions(3);
function printCorrectField(t, p) {
    // printOptions(p);
    document.getElementById("showOptions").style.display="block";

    var correctFieldHTML = '';

    if (t === "s") {
        correctFieldHTML += '<div class="form-group col-12">';
        correctFieldHTML += '<label for="topic1"> correct answer (option type)</label>';
        correctFieldHTML += '<select id="selectcorrectsingle" class="form-control">';
        
        // Print options based on the value of p
        for (var i = 1; i <= p; i++) {
            correctFieldHTML += '<option> option ' + i + '</option>';
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
function selectquestiontype(){
    var a=document.getElementById("questiontype").value;
    var b=document.getElementById("selectoptionsetquestion").value;
    printCorrectField(a,b);
}

function changeexamdetails(){
    selectquestiontype();
    selectoption();
}

// var examDetails = {
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
// var examDetails = {
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





function savesubtopics() {
    if( !confirm("Are You Sure To Save The subtopics Name? This Cannot Be Edited Later, Pls Check It Again")){
        return;
    }
    document.getElementById("basicdetailsform").style.display="none";
    document.getElementById("showallelements").style.display="none";



    


    var inputs = document.querySelectorAll('#showtopicdetails input[type="text"]');
    var inputValues = [];

    inputs.forEach(function(input) {
        inputValues.push(input.value);
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
                                                    viewquestion(examDetails);
                                                    // document.getElementById("qidcreate").value="q1";

                                                
                                                
                                                })
                                                .catch((error) => {
                                                    console.error('Error:', error);
                                                });
                                                



}

function savequestion() {
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
        addQuestion();
        // You can do anything you want with the examDetails object
    // Now you can perform any further actions, like sending the data to a server or processing it further.
}

function addQuestion() {
    
    
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

}


function createQuestionObject() {
    var questionObject = {};

    // Retrieve question details from the showquestionpanel div
    var qid = document.getElementById("qidcreate").value;
    var cocm = document.getElementById("ocm").value;
    var cowm = document.getElementById("owm").value;
    var qtext = document.getElementById("qcreatetext").value;
    
    var questionType = document.getElementById("questiontype").value;
    var questionTopic = document.getElementById("printquestiontopic").value;
    var optionSet = document.getElementById("selectoptionsetquestion").value;

    // Add question details to the questionObject
    questionObject.qid = qid;
    questionObject.ocm = cocm;
    questionObject.owm = cowm;
    questionObject.qtext = qtext;
    // questionObject.qimg = cowm;
    questionObject.qType = questionType;
    questionObject.qTopic = questionTopic;
    questionObject.optionSet = optionSet;
    for (var i = 1; i <= optionSet; i++) {
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

    return questionObject;
}


function editquestion(questionId) {
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
        if(selectedQuestion.oc==i){
            correctFieldHTML += '<option selected> option ' + i + '</option>';
        }
        else{
            correctFieldHTML += '<option> option ' + i + '</option>';
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

function deletequestion(setno,questionId) {
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
        document.getElementById("noofq"+setno).innerHTML=examDetails.allquestions.length;
        
    }
    else {
        alert("Question not found");
    }
}


document.getElementById("editquesionpanel").style.display="none";
var printpdf="";
function viewquestion(examDetails){
    examDetails=examDetails;
    console.log(examDetails.status);
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
                                                            Exam Duration: `+examDetails.time+`<br>
                                                            Starting Time: `+examDetails.startingTime+`<br>
                                                            Batches: `+p+`<br><br>
                                                           
                          <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                          <a class="btn btn-success" id="startexam"
                            >Start Exam</a>
                            <a onclick="copycode()" class="btn btn-primary">Copy Question
                            Code</a>
                            <a onclick="uploadfinalquestion()" id="createpdf" class="btn btn-warning">Upload and Save Final Exam</a>
                            
                            <a class="btn btn-danger" id="deleteset"
                            onclick="deleteexamset('`+examDetails.setno+`')"
                            >Delete Exam set</a>
                          

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
                            <label for="addtime"> Add Time</label>
                            <select id="addtime" class="form-control">
                              <option selected> Add 5 minutes</option>
                              <option> Add 10 minutes</option>
                              <option> Add 15 minutes</option>
                              <option> Add 30 minutes</option>
                            </select>

                            <button class="btn btn-warning form-row col-5 mt-2 mr-2">Add time</button>
                            <button type="reset" class="btn btn-danger form-row col-5 ">End Exam
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
                                                <div class="form-group col-md-12 mb-2"><strong>`+parseInt(i+1)+`) </strong>`+c+`(+`+examDetails.allquestions[i].ocm+`,-`+examDetails.allquestions[i].owm+`)</div>
                                           
                                                <div class="card form-group col-md-12" style="height: 200px;overflow-y: scroll;">
            
                                                    <img src="../try1.png" style="width: 100%;" class="img-fluid"
                                                        alt="Responsive image">
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
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }

 

}   


document.getElementById("settingsstart").style.display = "none";
    document.getElementById("startexam").style.display = "none";
    document.getElementById("deleteset").style.display = "none";

if (examDetails.status === 2) {
    document.getElementById("settingsstart").style.display = "";
    
var detailsViewForm = document.getElementById("detailsviewform");
detailsViewForm.classList.add("col-sm-6");
detailsViewForm.classList.remove("col-sm-12");


}  if (examDetails.status === 1) {
    document.getElementById("startexam").style.display = "";
}  if (examDetails.status === 0 || examDetails.status === 1 || examDetails.status === 3) {
    document.getElementById("deleteset").style.display = "";
}
if(examDetails.allquestions.length==0){
    document.getElementById("qidcreate").value="q1";
}
else{
    document.getElementById("qidcreate").value= 
    examDetails.allquestions[examDetails.allquestions.length-1].qid+1;
}
}




function uploadfinalquestion(){
    if( !confirm("Are You Sure To Publish The Exam?")){
        return;
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        for (var j = 1; j <= examDetails.allquestions[i].optionSet; j++) {
            if (examDetails.allquestions[i]['op' + j] === "") {
                examDetails.allquestions[i]['op' + j] = "#";
            }
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qtext === "") {
            examDetails.allquestions[i].qtext = "See Question Image";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qTopic === "") {
            examDetails.allquestions[i].qTopic = "#";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qType === "") {
            examDetails.allquestions[i].qType = "#";

        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].ocm === "") {
            examDetails.allquestions[i].ocm = "#";
        }
    }

    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].owm === "") {
            examDetails.allquestions[i].owm = "#";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].oc === "") {
            examDetails.allquestions[i].oc = "#";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].optionSet === "") {

            examDetails.allquestions[i].optionSet = "#";
        }
    }
    // if there are any no value field in examDetails then fill with #
    for (var i = 0; i < examDetails.allquestions.length; i++) {
        if (examDetails.allquestions[i].qid === "") {
            examDetails.allquestions[i].qid = "#";
        }

    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.date === "") {
        examDetails.date = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.name === "") {
        examDetails.name = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.setno === "") {
        examDetails.setno = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.startingTime === "") {
        examDetails.startingTime = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.time === "") {
        examDetails.time = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.totalno === "") {
        examDetails.totalno = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.totaltopics === "") {
        examDetails.totaltopics = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.nosubt === "") {
        examDetails.nosubt = "#";
    }
    // if there are any no value field in examDetails then fill with #

    if (examDetails.edo === "") {
        examDetails.edo = "#";
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

        alert("Exam set uploaded Successfully,Now Publish the Exam to show to the students");
        // viewquestion(examDetails);
        // document.getElementById("qidcreate").value="q1";
    })
    .catch((error) => {

    }
    );
}




function publishexam(setno,noofq){
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


allexams=sortObjectsByName(allexams);
// allexams=filterByStatus(allexams, 3);

                            
    // print all batches
function printallbatches(allexams){
    
    var a=``,r=``,s=``;

for(var i=0;i<allexams.length;i++){
    if(allexams[i].status==0){
        r="<span style='color:white'>Not Published</span>";
        s=`<a class="btn btn-primary" onclick="publishexam('`+allexams[i].setno+`','`+allexams[i].allquestions.length+`')">publish</a>`
    }
    else if(allexams[i].status==1){
       r="<span style='color:aqua'>Published</span>";
       s=`<a class="btn btn-success" >Start exam</a>`

    }
    else if(allexams[i].status==2){
        r="<span style='color:greenyellow'>Ongoing</span>";
        s=`<a class="btn btn-danger" >End Exam</a>`

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

                              <td><a class="btn btn-warning" onclick="viewquestionfromloaded('`+allexams[i].setno+`')">View/Edit</a></td>
                              
                              <td>`+s+`</td>
                            </tr>
`;
    }
    a=a+`<tr>`;

    document.getElementById("showbatchesoptionedit").innerHTML=a;

}
printallbatches(allexams);


function filterByStatus() {
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






function searchObjects() {
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






function viewquestionfromloaded(id){
     examDetails = allexams.find(function(exam) {
        return exam.setno === id;
    });
    console.log(examDetails);
    // viewquestion(examDetails);
    // document.getElementById("showpreview").innerHTML=a;
    viewquestion(examDetails);
}



function printbatchesofexam(){

    
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
// window.jsPDF = window.jspdf.jsPDF;

// var doc = new jsPDF();
	
// // Source HTMLElement or a string containing HTML.
// function createPDF(){
//     // var elementHTML = document.getElementById('messages').innerHTML;
//     // elementHTML=printpdf;
//     elementHTML=`hi

// `;
//     console.log(elementHTML);    


// doc.html(elementHTML, {
//     callback: function(doc) {
//         // Save the PDF
//         doc.save('sample-document.pdf');
//     },
//     x: 15,
//     y: 15,
//     width: 170, //target width in the PDF document
//     windowWidth: 650 //window width in CSS pixels
// });

// }

// function createPDF() {
//   var div = document.getElementById('messages');
//   var divHeight = div.clientHeight;
//   var pageHeight = 600; // Height of each page
//   var numPages = Math.ceil(divHeight / pageHeight); // Calculate number of pages

//   // Function to capture content of div and convert it into an image
//   function capturePage(pageIndex) {
//     var scrollTop = pageIndex * pageHeight;
//     div.scrollTo(0, scrollTop);
//     return html2canvas(div, {
//       scrollY: -scrollTop,
//       height: Math.min(pageHeight, divHeight - pageIndex * pageHeight)
//     }).then(canvas => canvas.toDataURL());
//   }

//   // Function to convert image data to PDF
//   function convertToPDF(images) {
//     var doc = new jsPDF();
//     images.forEach((image, index) => {
//       if (index !== 0) {
//         doc.addPage();
//       }
//       doc.addImage(image, 'JPEG', 0, 0);
//     });
//     doc.save('messages.pdf');
//   }

//   // Capture each page and convert to PDF
//   var imagePromises = [];
//   for (var i = 0; i < numPages; i++) {
//     imagePromises.push(capturePage(i));
//   }

//   // Wait for all images to be captured and convert to PDF
//   Promise.all(imagePromises)
//     .then(images => convertToPDF(images))
//     .catch(error => console.error('Error creating PDF:', error));
// }



// function createPDF() {
//     var div = document.getElementById('messages');
//     var divHeight = div.clientHeight;
//     var pageHeight = 600; // Height of each page
//     var numPages = Math.ceil(divHeight / pageHeight); // Calculate number of pages

//     // Function to capture content of div and convert it into an image
//     function capturePage(pageIndex) {
//         var scrollTop = pageIndex * pageHeight;
//         div.scrollTo(0, scrollTop);
//         return html2canvas(div, {
//             scrollY: -scrollTop,
//             height: Math.min(pageHeight, divHeight - pageIndex * pageHeight)
//         }).then(canvas => canvas.toDataURL());
//     }

//     // Function to convert image data to PDF
//     function convertToPDF(images) {
//         var doc = new jsPDF();
//         images.forEach((image, index) => {
//             if (index !== 0) {
//                 doc.addPage();
//             }
//             doc.addImage(image, 'JPEG', 0, 0);
//         });
//         doc.save('content.pdf');
//     }

//     // Capture images for each page
//     var capturePromises = [];
//     for (var i = 0; i < numPages; i++) {
//         capturePromises.push(capturePage(i));
//     }

//     // Convert images to PDF once all captured
//     Promise.all(capturePromises)
//         .then(images => {
//             convertToPDF(images);
//         });
// }



// copy question code

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


function createbasicExamObjectcopy() {
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



function showfieldcopy(){
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

function copycode(){

// copy question code

navigator.clipboard.writeText(JSON.stringify(examDetails.allquestions))
  .then(() => {
    alert('Exam details copied to clipboard');

  })
  .catch((error) => {
    console.error('Failed to copy exam details to clipboard:', error);
  });

}


        
        // $('#createpdf').on('click', function () {  
        //     $('#messages').scrollTop(0);  
        //     createPDF();  
        // });  
        // //create pdf  
        var form,cache_width,a4;
        function createPDF() {
              form = $('#messages'),  
         cache_width = form.width(),  
         a4 = [395.28, 1100.89]; // for a4 size paper width and height  
    
            getCanvas().then(function (canvas) {  
                var  
                 img = canvas.toDataURL("image/png"),  
                 doc = new jsPDF({  
                     unit: 'px',  
                     format: 'a4'  
                 });  
                doc.addImage(img, 'JPEG', 20, 20);  
                doc.save('Bhavdip-html-to-pdf.pdf');  
                form.width(cache_width);  
            });  
        }  
  
        // create canvas object  
        function getCanvas() {  
            form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
            return html2canvas(form, {  
                imageTimeout: 2000,  
                removeContainer: true  
            });  
        }  
  
       
       
       
        (function ($) {
    $.fn.html2canvas = function (options) {
        var date = new Date(),
            $message = null,
            timeoutTimer = false,
            timer = date.getTime();
        html2canvas.logging = options && options.logging;

        html2canvas.Preload(this[0], $.extend({
            complete: function (images) {
                var queue = html2canvas.Parse(this[0], images, options),
                    pages = [], // Array to store canvas elements for each page
                    currentPage = 0,
                    canvasHeight = options && options.canvasHeight || 0, // Height of each canvas/page
                    totalHeight = 0;

                // Function to create a canvas element for a page
                function createPageCanvas(queue) {
                    var canvas = html2canvas.Renderer(queue, options);
                    totalHeight += canvasHeight;
                    return canvas;
                }

                // Create canvas elements for each page
                var canvas = createPageCanvas(queue);
                pages.push(canvas);

                // Check if we need additional pages
                while (totalHeight < queue.height) {
                    canvas = createPageCanvas(queue);
                    pages.push(canvas);
                }

                // Append canvas elements to document body
                $.each(pages, function (index, canvas) {
                    $(canvas).css({
                        position: 'absolute',
                        left: 0,
                        top: index * canvasHeight // Position canvas elements vertically
                    }).appendTo(document.body);
                });

                // Show/hide canvas elements based on user click
                $(window).click(function () {
                    currentPage = (currentPage + 1) % pages.length;
                    $.each(pages, function (index, canvas) {
                        if (index === currentPage) {
                            $(canvas).show();
                        } else {
                            $(canvas).hide();
                        }
                    });

                    throwMessage("Page " + (currentPage + 1));
                });

                throwMessage('Screenshot created in ' + ((new Date().getTime() - timer) / 1000) + " seconds<br />", 4000);
            }
        }, options));

        function throwMessage(msg, duration) {
            window.clearTimeout(timeoutTimer);
            timeoutTimer = window.setTimeout(function () {
                $message.fadeOut(function () {
                    $message.remove();
                });
            }, duration || 2000);
            if ($message)
                $message.remove();
            $message = $('<div ></div>').html(msg).css({
                margin: 0,
                padding: 0,
                background: "#000",
                opacity: 1,
                position: "fixed",
                top: 0,
                right: 0,
                fontFamily: 'Tahoma',
                color: '#fff',
                fontSize: 12,
                borderRadius: 12,
                width: 'auto',
                height: 'auto',
                textAlign: 'center',
                textDecoration: 'none'
            }).hide().fadeIn().appendTo('body');
        }
    };
})(jQuery);

function deleteexamset(setno){
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