import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import {useEffect, useState,useRef } from 'react';

import io from 'socket.io-client';
import next from 'next';





var Studentexammainpage = () => {
  var [object, setexam] = useState([]);
  var [quesgo, setquesgo] = useState([]);
  var [ansarr, setansarr] = useState([]);
  var [totalquestions, settotalquestions] = useState();
  var [totaltopics, settotaltopics] = useState();
  var [setno, setsetno] = useState();
  var [user, setuser] = useState("");
  var [student,setstudent]=useState([]);
  var [c,setc]=useState();
  c=0;
//   setc(0);
  user="";
var[no,setnoo]=useState(1);
no=1;


  var hasRun = useRef(false);


//   var url = "http://localhost:5000";
var url="https://mathopia.onrender.com";
var socket = io(url);


useEffect(() => {
  if (!hasRun.current) {
    hasRun.current = true;
    if (typeof window !== 'undefined') {
        student = JSON.parse(localStorage.getItem("student"));
        setstudent(student);
      }


      

function calctime(startDay, startTime, durationMinutes) {
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
              if(calctime(date,starttime,duration)<=0){
                setendstatus(data[i].setno); 
              }
            }
            
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      
            }
            checkallexamend();
  
    
  setno = localStorage.getItem("examsetno");
  setsetno(setno);
//   alert(setno);
    




    window.printtopics=()=>{
        var topicsprint = "";
        for (var i = 1; i <= totaltopics; i++) {
            topicsprint = topicsprint + ` <li id="head` + i + `" style="padding:5px" onclick="gotohead(` + i + `)" class="nav-item">
        <strong>`+ object.totaltopics[i - 1] + `</strong>
      
      </li>
      `;
        }
        topicsprint = topicsprint + ``;
        document.getElementById("pos1").innerHTML = topicsprint;
      }

            //   function printquestionnumbers() {
    //             window.printquestionnumbers = (object) => {
    //                 var allquestionnumbers = "";
    //                 var allquestionnumbersfield = "";
          
    //   var temp1="";
    //             //   for (var i = 1; i <= object.totaltopics.length; i++) {
    //             //       allquestionnumbersfield = allquestionnumbersfield + `<strong id="showsub` + i + `">` + object.totaltopics[i - 1] + `</strong>
    //             //           <div id="show`+ i + `">
    //             //           </div>
    //             //           `;
    //             //   }
    //             //   document.getElementById("showleftnumberfield").innerHTML = allquestionnumbersfield;
    //             //   setTimeout(() => {                 nextprint();
    //             //   }, 2000);
    // setTimeout(nextprint(object), 500);

                  
    //           }
    
    
    
    window.nextprint=(object)=>{
      var allquestionnumbersfield = "";
        for (var it = 1; it <= object.totaltopics.length; it++) {
        //   console.log(quesgo);
          var c = 0;var temp1 = "";
          allquestionnumbersfield = allquestionnumbersfield + `<strong id="showsub` + it + `">` + object.totaltopics[it - 1] + `</strong>
                <div id="show`+ it + `">`;
            

          for (var j = 0; j < quesgo.length; j++) {

              console.log(it,object.allquestions[j].qTopic , object.totaltopics[it - 1]);
              if (object.allquestions[j].qTopic.trim() === object.totaltopics[it - 1].trim()) {
                console.log("matcj");

                  c++;
                  var w = parseInt(j + 1);
                  if (c % 4 == 0) {
                      temp1 += `<td><button class="but" id="` + w + `" onclick="ge(this)">` + w + '</button></td>' + '<br>';

                  }
                  else {

                      temp1 += `<td><button class="but" id="` + w + `" onclick="ge(this)">` + w + '</button></td>';
                  }


              }

          }
          allquestionnumbersfield =allquestionnumbersfield+ temp1 + "<hr>"+ `</div>`;
                console.log(allquestionnumbersfield);   
      }

      document.getElementById("showleftnumberfield").innerHTML = allquestionnumbersfield;


    }
      
              
              
            //   function printoption() {
                window.printoption = () => {
                    var t = `
                    <div class="card-body" id="numerical">
                <label for="">Enter Numerical value</label>
                <input type="number" oninput="gett(-1)"   id="nvalue" class="form-control" id="" aria-describedby="Help" placeholder="Write the nuerical value">
                <small id="Help" class="form-text text-muted">Write the answer of two digit decimal space in case of integer write two zero after decimal.<br>
                    Don,t start a number with 0,if number is 02.78 write 2.78<br>
                    but in case the number less than 1, you can start the number with 0 ,Eg: 0.78
                    <br>Eg:2.467232=2.47,<br>
                    2.463123=2.46,<br>
                    2=2.00<br></small>
              </div>
              `;
                  for (var j = 1; j <= 4; j++) {
      
      
                      t = t + `
      
      
      <div class="card-body" id="wholeoption`+ j + `">
          
                      <!-- This is some text within a card body. -->
                      <label for=""> `+ j + `.</label>
                      
                      <button type="button" class="btn btn-outline-primary" onclick="gett(`+ j + `)"   id="opt` + j + `"   ><strong id="op` + j + `"></strong></button>
                      <div class="form-check">
                          
                      </div>
                      
                  </div>
                  `;
                  }
                  document.getElementById("showoption").innerHTML = t;
              }
      
      
      
      
      
      
      


              fetchall();




              window.clock=()=> {
                document.getElementById("submit").disabled = false;
  
                document.getElementById("submit").style.backgroundColor = "rgb(250, 117, 2)";
            
  
                document.getElementById("clear").disabled = true;
                document.getElementById("clear").style.backgroundColor = "grey";
                document.getElementById("opt1").checked = false;
                document.getElementById("opt2").checked = false;
                document.getElementById("opt3").checked = false;
                document.getElementById("opt4").checked = false;
        
                document.getElementById("start").innerHTML = "Exam Started";
                document.getElementById("start").disabled = "true";
                document.getElementById("start").style.backgroundColor = "black";
                document.getElementById("head1").style.backgroundColor = "#ffd633";
                document.getElementById(1).style.backgroundColor = "#ff8080";
                document.getElementById("pre").disabled = true;
                document.getElementById("pre").style.backgroundColor = "grey";
        
                anarr();
        
                show(1);
                /* Get the element you want to display in fullscreen */
                var elem = document.getElementById("body");
        
                /* Execute the openFullscreen() function to open the video in fullscreen. Include prefixes for browsers that do not support the requestFullscreen property */
        
        
        
              var  myTimer = setInterval(myClock, 1000);
                 c =caltime(object.date,object.startingTime, object.time);
                // calculate now time = start time +duration - now original timme  


                // alert(c);
                //Initially set to 1 hour
                
                no = 1;
                setnoo(1);
        
                //myclock function to run the timer 
                function myClock() {
                    --c
                    var seconds = c % 60; // Seconds that cannot be written in minutes
                    var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
                    var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
                    var hours = (secondsInMinutes - minutes) / 60;
                    document.getElementById("demo").value = hours + " hours " + minutes + " mins " + seconds + " sec ";
        
                    if (c == -1) {
                        document.getElementById("demo").value = " finished ";
                        document.getElementById("demo").style.backgroundColor = "#ff471a";
                        clearInterval(myTimer);
                        // conf();
                        alert("Time finished.Answer submitted successfully");
                        uploadoptiontodatabase("1");
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
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                        window.location.href = "/studentallexam";

        
                    }
                    else if (c == 1199) {
                        alert("submit button is activated,if you are confident then you can submit anytime!");
        
                    }
        
                    else if (c == 299) {
                        alert("you have 5 minutes to submit! hurry up!");
        
                    }
        
                    if (c < 1200) {
                        document.getElementById("submit").disabled = false;
                        document.getElementById("submit").style.backgroundColor = "rgb(250, 117, 2)";
        
        
                    }
        
                }
                
// sayandip

     console.log(object);
fetch(url+"/startexambystudent", {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({setno: object.setno,sid:student.sid,ansarr:ansarr}),
})
.then(response => response.json())
.then(data => {

    ansarr = data.ansarr;
    console.log(ansarr);
    if(data.issub=="1" || data.issub==1){
        alert("You have already submitted the exam");
        window.location.href = "/studentallexam";
    }

    show(1);
    showoption(1);

    for(var i=1;i<=ansarr.length;i++){
        if (ansarr[i - 1].ans == "") {

            document.getElementById(i).style.backgroundColor = "#ff8080";
        }
        else {
            document.getElementById(i).style.backgroundColor = "#33cc33";

        }
        
        if (ansarr[i - 1].mark == 1) {
            if (ansarr[i - 1].att == 0) {

                document.getElementById(i).style.backgroundColor = "#a64dff";
            }
            else {
                document.getElementById(i).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)";

            }


        }
        else {
            if (ansarr[i - 1].att == 0) {

                document.getElementById(i).style.backgroundColor = "#ff8080";
            }

            else {
                document.getElementById(i).style.backgroundColor = "#33cc33";


            }


        }

    }



})
.catch((error) => {

}
); 
                
            }
            function caltime(startDay, startTime, durationMinutes) {
                // Parse start day and time
                // alert(startDay);
                // alert(startTime);
                // alert(durationMinutes);
                var [startYear, startMonth, startDate] = startDay.split('-').map(Number);
                var [startHour, startMinute] = startTime.split(':').map(Number);
                
                // Create a Date object for the start date and time
                var startDateTime = new Date(startYear, startMonth - 1, startDate, startHour, startMinute);
            
                // Add the duration to the start date and time
                var adjustedTime = new Date(startDateTime.getTime() + durationMinutes * 60000);
            
                // Get the current time

                var now = new Date();
            
                // Compare times
                if (adjustedTime <= now) {
                    alert("Exam has already ended");
                    return 0; // If adjusted time is less than or equal to now, return 0
                }
            
                // Calculate the difference in seconds
                var differenceInSeconds = Math.floor((adjustedTime - now) / 1000);
                return differenceInSeconds;
            }
            
            // Example usage
            // Example usage
            
        // clear function
            // function clea() {
                window.clea = () => {
        
                user = "";
                ansarr[no - 1].ans = user;
                ansarr[no - 1].att = 0;
        
        
                document.getElementById(no).style.backgroundColor = "#ff8080";
                // console.log(object.allquestions[no-1].qType);
        
                if (object.allquestions[no-1].qType == "n") {
                    document.getElementById("nvalue").value="";
        
                    // console.log(user);
                    
                }
                else{
        
                
                for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                    document.getElementById("clear").disabled = true;
                    document.getElementById("clear").style.backgroundColor = "grey";
                    document.getElementById("opt" + i).className = "btn btn-outline-primary";
        
        
                }
            }
        
                // document.getElementById("opt1").checked = false;
                // document.getElementById("opt2").checked = false;
                // document.getElementById("opt3").checked = false;
                // document.getElementById("opt4").checked = false;
                document.getElementById("clear").disabled = true;
                document.getElementById("clear").style.backgroundColor = "grey";
                if (ansarr[no - 1].mark == 0) {
                    document.getElementById(no).style.backgroundColor = "#ff8080";
        
                }
                else {
                    document.getElementById(no).style.backgroundColor = "#a64dff";
        
                }
        
        
        
            }
        
            //clear mark option 
            // function cleamark() {
                window.cleamark = () => {
                if (ansarr[no - 1].mark == 0) {
                    if (ansarr[no - 1].att == 0) {
                        document.getElementById("mark").innerHTML = "Mark For Review";
                        document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
                        document.getElementById(no).style.backgroundColor = "#ff8080";
        
                    }
                    else {
                        document.getElementById("mark").innerHTML = "Mark For Review";
                        document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
                        document.getElementById(no).style.backgroundColor = "#33cc33";
        
                    }
        
        
                }
                else if (ansarr[no - 1].mark == 1) {
                    if (ansarr[no - 1].att == 0) {
                        document.getElementById("mark").innerHTML = "Remove Mark Option";
                        document.getElementById("mark").style.backgroundColor = "#a64dff";
                        document.getElementById(no).style.backgroundColor = "#a64dff";
        
                    }
                    else {
                        document.getElementById("mark").innerHTML = "Remove Mark Option";
                        document.getElementById("mark").style.backgroundColor = "#a64dff";
                        document.getElementById(no).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)"
        
                    }
        
                }
        
            }
        //create answer array
            // function anarr() {
                window.anarr = () => {
                for (var p = 0; p < object.allquestions.length; p++) {
                    var ansobject = { qno: p + 1, ans: "", att: 0, mark: 0 };
                    ansarr.push(ansobject);
                }
                console.log(ansarr);
            }
        
        //after clicking an option  
            // function gett(p) {
                    window.gett = (p) => {
                if (object.allquestions[no - 1].qType == "s") {
                    user = p;
        
                    for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                        document.getElementById("opt" + i).className = "btn btn-outline-primary";
        
        
                    }
                document.getElementById("opt" + p).className = "btn btn-primary";
        
                }
                else if (object.allquestions[no - 1].qType == "d") {
                    user=user+p;
                    user=user+ansarr[no - 1].ans;
                    // remove 0 from the user
                        user = user.replace('0', '');
                        // remove duplicate values from the user
                            user=[...new Set(user)].join('');

                        user = user.split("").sort().join("");
                        // alert(user);

                    document.getElementById("opt" + p).className = "btn btn-primary";
        
                }
                else if (object.allquestions[no - 1].qType == "n") {
                    user = document.getElementById("nvalue").value;
                    console.log(user);
                    
                }
               
        
        
                document.getElementById("clear").disabled = false;
                document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
            }
        // save and next
            // function savnex() {
                window.savnex = () => {
                // console.log(ansarr);
                if (no < object.allquestions.length + 1) {
                    if (no == object.allquestions.length) {
                        alert("you have visited last question.no questions are behind this.")
                        if (ansarr[no - 1].ans == "") {
        
                            ansarr[no - 1].ans = user;
                            if (user == "") {
        
                                ansarr[no - 1].att = 0;
                                document.getElementById(no).style.backgroundColor = "#ff8080";
                            }
                            else {
                                document.getElementById(no).style.backgroundColor = "#33cc33";
                                ansarr[no - 1].att = 1;
        
                            }
        
                        }
                        else {
                            if (ansarr[no - 1].ans == user) {
                                ansarr[no - 1].att = 1;
        
                                ansarr[no - 1].ans = ansarr[no - 1].ans;
                            }
                            else if (ansarr[no - 1].ans != user && user != 0) {
                                ansarr[no - 1].ans = user;
                                ansarr[no - 1].att = 1;
        
                            }
                            document.getElementById(no).style.backgroundColor = "#33cc33";
        
        
                        }
        
                        if (ansarr[no - 1].mark == 1) {
                            if (ansarr[no - 1].att == 0) {
                                document.getElementById(no).style.background = "none";
                                document.getElementById(no).style.backgroundColor = "#a64dff";
        
                            }
                            else {
                                document.getElementById(no).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)";
                            }
        
                        }
                        else if (ansarr[no - 1].mark == 0) {
                            if (ansarr[no - 1].att == 0) {
                                document.getElementById(no).style.background = "none";
        
                                document.getElementById(no).style.backgroundColor = "#ff8080";
                            }
                            else {
                                document.getElementById(no).style.background = "none";
        
                                document.getElementById(no).style.backgroundColor = "#33cc33";
        
        
                            }
                        }
        
                    }
                    else {
                        if (ansarr[no - 1].ans == "") {
        
                            ansarr[no - 1].ans = user;
                            if (user == "") {
        
                                ansarr[no - 1].att = 0;
                                document.getElementById(no).style.backgroundColor = "#ff8080";
                            }
                            else {
                                document.getElementById(no).style.backgroundColor = "#33cc33";
                                ansarr[no - 1].att = 1;
        
                            }
        
                        }
                        else {
                            if (ansarr[no - 1].ans == user) {
                                ansarr[no - 1].att = 1;
        
                                ansarr[no - 1].ans = ansarr[no - 1].ans;
                            }
                            else if (ansarr[no - 1].ans != user && user != 0) {
                                ansarr[no - 1].ans = user;
                                ansarr[no - 1].att = 1;
        
                            }
                            document.getElementById(no).style.backgroundColor = "#33cc33";
        
        
                        }
        
                        if (ansarr[no - 1].mark == 1) {
                            if (ansarr[no - 1].att == 0) {
                                document.getElementById(no).style.background = "none";
                                document.getElementById(no).style.backgroundColor = "#a64dff";
                            }
                            else {
                                document.getElementById(no).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)";
                            }
        
                        }
                        else if (ansarr[no - 1].mark == 0) {
                            if (ansarr[no - 1].att == 0) {
                                document.getElementById(no).style.background = "none";
                                document.getElementById(no).style.backgroundColor = "#ff8080";
                            }
                            else {
                                document.getElementById(no).style.background = "none";
                                document.getElementById(no).style.backgroundColor = "#33cc33";
                            }
                        }
                        no++;
                        var col = no;
                        if (ansarr[no - 1].ans == 0) {
        
                            document.getElementById(col).style.backgroundColor = "#ff8080";
                        }
                        else {
                            document.getElementById(col).style.backgroundColor = " #33cc33";
        
                        }
                        // alert(no);
                        var userans = ansarr[no-1].ans;
                        if (userans != 0) {
        
                            showoption(no);
                        }
                        else {
                            user = 0;
                            showoption(no);
        
                        }
                        if (no == 1) {
                            document.getElementById("pre").disabled = true;
                            document.getElementById("pre").style.backgroundColor = "grey";
                        }
                        else if (no == 75) {
                            document.getElementById("pre").disabled = false;
                            document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
                        }
                        else {
                            document.getElementById("pre").disabled = false;
                            document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
        
        
                        }
                        show(no);
        
                    }
                }

                uploadoptiontodatabase("0");
            }
            window.uploadoptiontodatabase=(issub)=>{
                fetch(url+"/saveoption", {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Headers": "Content-Type",
                        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({setno: object.setno,sid:student.sid,ansarr:ansarr,issub:issub}),
                })
                .then(response => response.json())
                .then(data => {

                })
                .catch((error) => {
                }   
                );
            }


            // mark any question
            // function mark() {
                window.mark = () => {
                if (ansarr[no - 1].mark == 0) {
                    var l1 = parseInt(no);
                    document.getElementById(l1).style.backgroundColor = "#a64dff";
                    document.getElementById("mark").style.backgroundColor = "#a64dff";
        
                    document.getElementById("mark").innerHTML = "Remove Mark Option";
        
                    ansarr[no - 1].mark = 1;
                }
                else if (ansarr[no - 1].mark == 1) {
                    l1 = parseInt(no);
                    document.getElementById(l1).style.backgroundColor = "#ff8080";
                    document.getElementById("mark").innerHTML = "Mark For Review";
                    document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
        
        
        
                    ansarr[no - 1].mark = 0;
                }
            }
        // previous function
            // function prev() {
                window.prev = () => {
                no--;
                setTimeout(1000);
                showoption(no);
                show(no);
                if (no == 1) {
                    document.getElementById("pre").disabled = true;
                    document.getElementById("pre").style.backgroundColor = "grey";
        
                }
                else {
                    document.getElementById("pre").disabled = false;
                    document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
                }
            };
        // question show function
            // function show(i) {
                window.show = (i) => {
                // alert("i"+i);
                // document.getElementById("qno").innerHTML = quesgo[i - 1].no;
                // document.getElementById("qshow").innerHTML = quesgo[i - 1].body;
                // document.getElementById("op2").innerHTML = quesgo[i - 1].op2;
                // document.getElementById("op1").innerHTML = quesgo[i - 1].op1;
                // document.getElementById("op3").innerHTML = quesgo[i - 1].op3;
                // document.getElementById("op4").innerHTML = quesgo[i - 1].op4;
                // var imgno = quesgo[i - 1].image;
                // alert(quesgo[i - 1].no);
                // document.getElementById("qimgso").src = imgno+".img";
                // if (quesgo[i - 1].no == 41) {
                //     // document.getElementById("qimgso").src = "q41.img";
        
                // }
        
                for (var j = 1; j <= 4; j++) {
                    var w = "op" + j;
                    // console.log(w);
        
                    document.getElementById("wholeoption" + j).style.display = "none";
        
                }
                
                if(object.allquestions[no - 1].qType == "n"){
                    document.getElementById("numerical").style.display = "block";
                    for (var j = 1; j <= 4; j++) {
                        var w = "op" + j;
                        // console.log(w);
            
                        document.getElementById("wholeoption" + j).style.display = "none";
            
                    }
                    
                    
                }
                else{
                    document.getElementById("numerical").style.display = "none";
        
                for (var j = 1; j <= object.allquestions[i - 1].optionSet; j++) {
                    var w = "op" + j;
                    // console.log(w);
                    document.getElementById("wholeoption" + j).style.display = "block";
                    document.getElementById("op" + j).innerHTML = object.allquestions[i - 1][w];
        
                }
            }

                // i want to make a string from q15 to 15
                // var str = "q15";
                // var res = str.slice(1);

        
                document.getElementById("qno").innerHTML = parseInt(object.allquestions[i - 1].qid.slice(1));
                document.getElementById("qshow").innerHTML = object.allquestions[i - 1].qtext;
                document.getElementById("qimgshow").innerHTML=`<iframe style="width:100%;height:400px"   src="https://drive.google.com/file/d/`+object.allquestions[i - 1].qimg+`/preview"     allow="autoplay" allowfullscreen></iframe>`;

                
                if (object.allquestions[i - 1].qType == "s") {
        
                    document.getElementById("qtype").innerHTML = "SINGLE OPTION CORRECT( +"+object.allquestions[i - 1].ocm+", -"+object.allquestions[i - 1].owm+" )";
                }
                else if (object.allquestions[i - 1].qType == "d") {
                    document.getElementById("qtype").innerHTML = "ONE OR MORE THAN ONE OPTION CORRECT( +"+object.allquestions[i - 1].ocm+", -"+object.allquestions[i - 1].owm+" )";
        
                } else if (object.allquestions[i - 1].qType == "n") {
                    document.getElementById("qtype").innerHTML = "NUMERICAL ANSWER TYPE( +"+object.allquestions[i - 1].ocm+", -"+object.allquestions[i - 1].owm+" )";
        
                }
                // document.getElementById("op2").innerHTML = object.allquestions[i - 1].op2;
                // document.getElementById("op1").innerHTML = object.allquestions[i - 1].op1;
                // document.getElementById("op3").innerHTML = object.allquestions[i - 1].op3;
                // document.getElementById("op4").innerHTML = object.allquestions[i - 1].op4;
                var imgno = quesgo[i - 1].qimg;
        
                if (ansarr[no - 1].mark == 0) {
                    document.getElementById("mark").innerHTML = "Mark For Review";
                    document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
                    document.getElementById(no).style.backgroundColor = "#ff8080";
                    if (ansarr[no - 1].att == 0) {
                        document.getElementById("mark").innerHTML = "Mark For Review";
                        document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
                        document.getElementById(no).style.backgroundColor = "#ff8080";
        
                    }
                    else {
                        document.getElementById("mark").innerHTML = "Mark For Review";
                        document.getElementById("mark").style.backgroundColor = " rgb(124, 130, 223) ";
                        document.getElementById(no).style.backgroundColor = "#33cc33";
        
                    }
        
        
                }
                else if (ansarr[no - 1].mark == 1) {
                    if (ansarr[no - 1].att == 0) {
                        document.getElementById("mark").innerHTML = "Remove Mark Option";
                        document.getElementById("mark").style.backgroundColor = "#a64dff";
                        document.getElementById(no).style.backgroundColor = "#a64dff";
        
                    }
                    else {
                        document.getElementById("mark").innerHTML = "Remove Mark Option";
                        document.getElementById("mark").style.backgroundColor = "#a64dff";
                        document.getElementById(no).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)"
        
                    }
        
                }
                subshow(object.allquestions[i - 1].qTopic);
        
                if (no >= object.allquestions.length) {
                    document.getElementById("savnex").innerHTML = "Save(No Question Left)";
        
                }
                else {
                    document.getElementById("savnex").innerHTML = "Save And Next";
        
                }
                if (no == 1) {
        
                    document.getElementById("pre").disabled = true;
                    document.getElementById("pre").style.backgroundColor = "grey";
        
                }
                else {
        
                    document.getElementById("pre").disabled = false;
                    document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
        
        
                }
        
            }
        //   top head show
            // function subshow(p) {
                window.subshow = (p) => {
                // if (no > 0 && no < 26) {
                //     document.getElementById("head1").style.backgroundColor = "#ffd633";
                //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("show1").style.display = "block";
                //     document.getElementById("show2").style.display = "none";
                //     document.getElementById("show3").style.display = "none";
                //     document.getElementById("showsub1").style.display = "block";
                //     document.getElementById("showsub1").innerHTML = "PHYSICS";
        
                //     document.getElementById("showsub2").style.display = "none";
                //     document.getElementById("showsub3").style.display = "none";
        
        
        
                // }
                // else if (no > 25 && no < 51) {
                //     document.getElementById("head2").style.backgroundColor = "#ffd633";
                //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("show2").style.display = "block";
                //     document.getElementById("show1").style.display = "none";
                //     document.getElementById("show3").style.display = "none";
                //     document.getElementById("showsub1").style.display = "block";
                //     document.getElementById("showsub1").innerHTML = "MATHEMATICS";
        
                //     document.getElementById("showsub2").style.display = "none";
                //     document.getElementById("showsub3").style.display = "none";
        
        
                // }
                // else if (no > 50 && no < 76) {
                //     document.getElementById("head3").style.backgroundColor = "#ffd633";
                //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
                //     document.getElementById("show3").style.display = "block";
                //     document.getElementById("show2").style.display = "none";
                //     document.getElementById("show1").style.display = "none";
                //     document.getElementById("showsub1").style.display = "block";
                //     document.getElementById("showsub1").innerHTML = "CHEMISTRY";
        
                //     document.getElementById("showsub2").style.display = "none";
                //     document.getElementById("showsub3").style.display = "none";
        
        
                // }
                var index = object.totaltopics.indexOf(p) + 1;
                for (var i = 1; i <= totaltopics; i++) {
                    document.getElementById("head" + i).style.backgroundColor = "rgb(146, 146, 204)";
                }
                document.getElementById("head" + index).style.backgroundColor = "#ffd633";
        
        
            }


            
        // function ge(p) {
            window.ge = (p) => {
            no = parseInt(p.innerHTML);
            showoption(no);
            // if (no == 1) {
    
            //     document.getElementById("pre").disabled = true;
            //     document.getElementById("pre").style.backgroundColor = "grey";
    
            // }
            // else if (no == 75) {
    
            //     document.getElementById("pre").disabled = false;
            //     document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
    
    
    
    
            // }
            // else {
    
            //     document.getElementById("pre").disabled = false;
            //     document.getElementById("pre").style.backgroundColor = "rgb(124, 130, 223)";
    
    
            // }
            var qno = p.innerHTML;
            if (ansarr[no - 1].ans == "") {
    
                p.style.backgroundColor = "#ff8080";
            }
            else {
                p.style.backgroundColor = "#33cc33";
    
            }
            var l = parseInt(qno);
            // document.getElementById("qno").innerHTML = quesgo[l - 1].no;
    
            // document.getElementById("qshow").innerHTML = quesgo[l - 1].body;
            // document.getElementById("op1").innerHTML = quesgo[l - 1].op1;
            // document.getElementById("op2").innerHTML = quesgo[l - 1].op2;
            // document.getElementById("op3").innerHTML = quesgo[l - 1].op3;
            // document.getElementById("op4").innerHTML = quesgo[l - 1].op4;
            show(l);
            // if (l < 26) {
            //     document.getElementById("head1").style.backgroundColor = "#ffd633";
            //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
    
            // }
            // else if (l > 25 && l < 51) {
            //     document.getElementById("head2").style.backgroundColor = "#ffd633";
            //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
    
            // }
            // else if (l > 50 && l < 76) {
            //     document.getElementById("head3").style.backgroundColor = "#ffd633";
            //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
    
            // }
            if (ansarr[no - 1].mark == 1) {
                if (ansarr[no - 1].att == 0) {
    
                    document.getElementById(no).style.backgroundColor = "#a64dff";
                }
                else {
                    document.getElementById(no).style.background = "linear-gradient(30deg, #a64dff 40%, #33cc33 60%)";
    
                }
    
    
            }
            else {
                if (ansarr[no - 1].att == 0) {
    
                    document.getElementById(no).style.backgroundColor = "#ff8080";
                }
    
                else {
                    document.getElementById(no).style.backgroundColor = "#33cc33";
    
    
                }
    
    
            }
    
        }
  
        
        
        
        
        // after clicking top head subject
            // function gotohead(q) {
                window.gotohead = (q) => {
                for (var i = 1; i <= totaltopics; i++) {
                    document.getElementById("head" + i).style.backgroundColor = "rgb(146, 146, 204)";
                }
                document.getElementById("head" + q).style.backgroundColor = "#ffd633";
                for (var i = 0; i < object.allquestions.length; i++) {
                    if (object.allquestions[i].qTopic == object.totaltopics[q - 1]) {
        
                        no = i + 1;
                        show(i + 1);
                        showoption(i + 1);
                        break;
                    }
                }
            }
            // function phy() {
            //     no = 1;
            //     show(1);
            //     document.getElementById("head1").style.backgroundColor = "#ffd633";
            //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
        
            // }
            // function math() {
            //     no = 26;
            //     show(26);
            //     document.getElementById("head2").style.backgroundColor = "#ffd633";
            //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head3").style.backgroundColor = "rgb(146, 146, 204)";
        
            // }
            // function chem() {
            //     no = 51;
            //     show(51);
            //     document.getElementById("head3").style.backgroundColor = "#ffd633";
            //     document.getElementById("head2").style.backgroundColor = "rgb(146, 146, 204)";
            //     document.getElementById("head1").style.backgroundColor = "rgb(146, 146, 204)";
            // }
        
            function all1() {
               
            }
        
            // function submi() {
                window.submi = () => {
                var textt = "Are you really want to submit this paper? pls check another time. ";
                if (confirm(textt) == true) {

                    alert("paper submitted successfully.")
                    uploadoptiontodatabase("1");
                    // conf();
                    window.location.href = "/studentallexam";
                }
        
            }
        
            // function conf() {
                window.conf = () => {
        
                all1();
                localStorage.setItem("attp", attp);
                localStorage.setItem("attc", attc);
                localStorage.setItem("attm", attm);
                pco = 0, cco = 0, mco = 0, pwo = 0, mwo = 0, cwo = 0, pmarks = 0, cmarks = 0, mmarks = 0, pco = 0;
                for (var i = 0; i < 25; i++) {
                    corret = parseInt(quesgo[i].oc);
                    given = parseInt(ansarr[i].ans);
        
                    if (corret == given) {
                        pmarks = pmarks + 4;
                        pco++;
        
                    }
                    else if (corret != given && given != 0) {
                        pmarks--;
                        pwo++;
                    }
        
        
                }
        
                for (var i = 25; i < 50; i++) {
                    corret = quesgo[i].oc;
                    given = ansarr[i].ans;
        
                    if (corret == given) {
                        mmarks = mmarks + 4;
                        mco++;
        
                    }
                    else if (corret != given && given != 0) {
                        mmarks--;
                        mwo++;
                    }
        
        
                }
        
        
                for (var i = 50; i < 75; i++) {
                    corret = quesgo[i].oc;
                    given = ansarr[i].ans;
        
                    if (corret == given) {
                        cmarks = cmarks + 4;
                        cco++;
        
                    }
                    else if (corret != given && given != 0) {
                        cmarks--;
                        cwo++;
                    }
        
        
                }
                hek();
                var anser = JSON.stringify(ansarr, null, 4);
                localStorage.setItem("ansarr", anser);
        
                window.location.assign("https://sandyexam.000webhostapp.com/result copy.php")
        
        
        
            }
            // function hek() {
                window.hek = () => {
        
                localStorage.setItem("pmarks", pmarks);
                localStorage.setItem("pco", pco);
                localStorage.setItem("pwo", pwo);
        
                localStorage.setItem("cmarks", cmarks);
                localStorage.setItem("cco", cco);
                localStorage.setItem("cwo", cwo);
        
                localStorage.setItem("mmarks", mmarks);
                localStorage.setItem("mco", mco);
                localStorage.setItem("mwo", mwo);
        
            }
        
        // showoption or numerical value
            // function showoption(no) {
                window.showoption = (no) => {
                var quesno = no;
                var answer = ansarr[no - 1].ans;
        
                var shm = "upcoming question: " + no;
                alert(shm);
                var quesno = no;
                var answer = ansarr[no - 1].ans;
                // if (answer == 1) {
                //     // document.getElementById("opt1").checked = true;
                //     document.getElementById("opt1").className ="btn btn-primary";
        
                //     document.getElementById("clear").disabled = false;
                //     document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                // }
                // else if (answer == 2) {
                //     document.getElementById("opt2").checked = true;
                //     document.getElementById("clear").disabled = false;
                //     document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                // }
                // else if (answer == 3) {
                //     document.getElementById("opt3").checked = true;
                //     document.getElementById("clear").disabled = false;
                //     document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                // }
                // else if (answer == 4) {
                //     document.getElementById("opt4").checked = true;
                //     document.getElementById("clear").disabled = false;
                //     document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                // }
                // else {
                //     document.getElementById("opt4").checked = false;
                //     document.getElementById("opt3").checked = false;
                //     document.getElementById("opt2").checked = false;
                //     document.getElementById("opt1").checked = false;
                //     document.getElementById("clear").disabled = true;
                //     document.getElementById("clear").style.backgroundColor = "grey";
        
                // }
                if (object.allquestions[no - 1].qType == "s") {
                    for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                        document.getElementById("clear").disabled = true;
                        document.getElementById("clear").style.backgroundColor = "grey";
                        document.getElementById("opt" + i).className = "btn btn-outline-primary";
        
        
                    }
                    for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                        if (answer == i) {
                            document.getElementById("opt" + i).className = "btn btn-primary";
                            document.getElementById("clear").disabled = false;
                            document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                        }
                    }
        
                }
                else if (object.allquestions[no - 1].qType == "d") {
                    for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                        document.getElementById("clear").disabled = true;
                        document.getElementById("clear").style.backgroundColor = "grey";
                        document.getElementById("opt" + i).className = "btn btn-outline-primary";
        
        
                    }
                    for (var i = 1; i <= object.allquestions[no - 1].optionSet; i++) {
                        for (var j = 0; j < answer.length; j++) {
                            if (answer[j] == i) {
                                document.getElementById("opt" + i).className = "btn btn-primary";
                                document.getElementById("clear").disabled = false;
                                document.getElementById("clear").style.backgroundColor = "rgb(124, 130, 223)";
        
                            }
                        }
                    }
        
                }
                else if (object.allquestions[no - 1].qType == "n") {
                    document.getElementById("nvalue").value=answer;
                }
        
        
        
            }
        
              
       







            socket.on('extendtime', (data) => {
                // alert("Exam Extended By "+data.time+" Minutes");
                // // console.log(data);
                // console.log(data.setno);
                // console.log(object.setno);
                if(data.setno==object.setno){

                var time = data.time;
                // extendtime(time*60);
                c=c+time*60;
                alert("Exam Extended By "+time+" Minutes");

            } 

            });

            socket.on('endexam', (data) => {
                if(data==object.setno){
                alert("Exam Ended By Admin");
                uploadoptiontodatabase("1");
                window.location.assign("/studentallexam");
            }

            });









// // console.log(object);
// window.onload = function () {
//     // console.log("Document and all resources are fully loaded.");
//     // printdetails();
//     // Your logic here
// };


     }
 },[]);
 
 function printdetails(){
    // alert("d");
    var nae, phone;
    // document.getElementById("submit").disabled = true;
    
    // phone = localStorage.getItem("phone");
    // var texam = localStorage.getItem("texam");
    document.getElementById("name1").value = student.name;
    document.getElementById("phone").value = student.phone;
    document.getElementById("texam").value = object.name;
    
    
    // document.getElementById("show3").innerHTML = temp3;
    
    document.getElementById("qno").innerHTML = 1;
     no = 1;
    var cval;
    
    var time = 10800;
    var second = time % 60; // Seconds that cannot be written in minutes
    var secondsInMinute = (time - second) / 60; // Gives the seconds that COULD be given in minutes
    var minute = secondsInMinute % 60; // Minutes that cannot be written in hours
    var hour = (secondsInMinute - minute) / 60;
    
    document.getElementById("demo").value = hour + " hours " + minute + " mins " + second + " sec ";
    var myTimer, l1;
    var attp, attc, attm;
    var array = [];
    document.getElementById("qno").innerHTML = 0;
    document.getElementById("qshow").innerHTML = "question shows here";
    document.getElementById("op1").innerHTML = "1st option";
    document.getElementById("op2").innerHTML = "2nd option";
    document.getElementById("op3").innerHTML = "3rd option";
    document.getElementById("op4").innerHTML = "4th option";
    
    // document.getElementById("qimgso").src = "quesshow.img";
    
    var imagesObject = [];
    
    
    // var quesg = localStorage.getItem("ques");
    // var quesgo = JSON.parse(quesg);
    // var quesgo = [{ "no": "1", "time": "", "body": "A light year is a unit of?", "op1": "Time", "op2": "Mass", "op3": "Distance", "op4": "Energy", "oc": "3", "image": "q0" }, { "no": "2", "time": "", "body": "The magnitude of any physical quantity depends upon?", "op1": "Depends upon the method of measurement.", "op2": "does not depend upon the method of measurement.", "op3": "is more in the SI system than CGS system.", "op4": "is directly proportional to fundamental quantities mass, length, time.", "oc": "2", "image": "q0" }, { "no": "3", "time": "", "body": "Newton-Second is the unit of?", "op1": "Velocity", "op2": "Angular Momentum.", "op3": "Linear Momentum", "op4": "Energy", "oc": "3", "image": "q0" }, { "no": "4", "time": "", "body": "One Nanometer is equal to?", "op1": "10 to the power 9 mm", "op2": "10 to the power -6 cm", "op3": "10 to the power -7 cm", "op4": "10 to the power -9 cm", "oc": "3", "image": "q0" }, { "no": "5", "time": "", "body": "If the quantity A has dimension [M^1T^-6] and B has dimension of [T^2] and the dimension of C is ? where equation is A^2/C=B", "op1": "[M^2T^-4]", "op2": "[M^4T^-16]", "op3": "[M^2T^-14]", "op4": "[M^2T^-16]", "oc": "4", "image": "q0" }, { "no": "6", "time": "", "body": "The vector having a magnitude of 10 and perpendicular to the vector 3i-4k?", "op1": "4i-3k", "op2": "8i+6k", "op3": "5i-5k", "op4": "8i-6j", "oc": "2", "image": "q0" }, { "no": "7", "time": "", "body": "A particle is moving along a straight line according to the equation of motion X=At+Bt^2+Ct^3 where X is thr position measured from a fixed point on the line and t is time elapsed it reaches position X after starting point from the fixed point.here A,B,C are positive constants.then find correct option.", "op1": "its velocity at t=0 is A", "op2": "its acceleration at t=0 is B.", "op3": "its velocity at t=0 is B", "op4": "its acceleration at t=0 is C", "oc": "1", "image": "q0" }, { "no": "8", "time": "", "body": "If theta is angle between two vectors A and B and | A cross B|=A.B then what is value of angle theta?", "op1": "0 degree", "op2": "180 degree", "op3": "90 degree", "op4": "45 degree", "oc": "4", "image": "q0" }, { "no": "9", "time": "", "body": "The vector sum of the forces of 10N and 6N can be", "op1": "2 N", "op2": "8 N", "op3": "18 N", "op4": " 20 N", "oc": "2", "image": "q0" }, { "no": "10", "time": "", "body": "If P+Q=P-Q where P and Q is vector , then angle between P and Q is ?", "op1": "0 degree", "op2": "90 degree", "op3": "135 degree", "op4": "45 degree", "oc": "1", "image": "q0" }, { "no": "11", "time": "", "body": "If the vectors are A=2i+3j(eta je)-k, B=3i-2j-2k, C=pi+pj+2pk then find angle between (A-B) and C?", "op1": "cos inverse(2/root 3)", "op2": "cos inverse(root 3/2)", "op3": "cos inverse(root 2/3)", "op4": "none of these", "oc": "3", "image": "q0" }, { "no": "12", "time": "", "body": "Find dot product of (2i+3j+4k) and 3k?", "op1": "10", "op2": "12", "op3": "8", "op4": "24", "oc": "2", "image": "q0" }, { "no": "13", "time": "", "body": "the three vectors OA ,OB,OC have the same magnitude R. then the sum of these vector have magnitude according to diagram?", "op1": "R", "op2": "(root 2) R", "op3": "3R", "op4": "(1+root 2)R", "oc": "4", "image": "q13" }, { "no": "14", "time": "", "body": "What is number of significant figures in 0.310 into 10^3?", "op1": "2", "op2": "3", "op3": "4", "op4": "6", "oc": "2", "image": "q0" }, { "no": "15", "time": "", "body": "The percentage errors in the measurement of mass and velocity is 2% and 3% respectively .how much will be the maximum error in calculating in the kinetic energy measuring mass and velocity?", "op1": "11%", "op2": "8%", "op3": "5%", "op4": "1%", "oc": "2", "image": "q0" }, { "no": "16", "time": "", "body": "A body travels uniformly a distance of (13.8plusminus 0.2)meter in a time (4.0plus minus0.3)second .then the velocity of the body within error limits is :", "op1": "(3.45plusminus0.2)ms^-1", "op2": "(3.45plusminus0.3)ms^-1", "op3": "(3.45plusminus0.4)ms^-1", "op4": "(3.45plusminus0.5)ms^-1", "oc": "2", "image": "q0" }, { "no": "17", "time": "", "body": "A physical quantity P is related to four observables a,b,c,d as follows: see the diagram .the percentage error of measurement of a,b,c,d is 1%,3%,4%,2% respectively.then the percentage error in the quantity of P is? ", "op1": "12%", "op2": "13%", "op3": "14%", "op4": "15%", "oc": "2", "image": "q17" }, { "no": "18", "time": "", "body": "A stone falls from rest a height h and it travels a distance of 9h/25 in the last second.the value of h is?", "op1": "145 m", "op2": "100 m", "op3": "125 m", "op4": "200 m", "oc": "3", "image": "q0" }, { "no": "19", "time": "", "body": "For the following acceleration versus time graph the corresponding velocity displacement graph is ? see the diagram", "op1": "see the diagram", "op2": "see the diagram", "op3": "see the diagram", "op4": "see the diagram", "oc": "3", "image": "q19" }, { "no": "20", "time": "", "body": "which of the following four statements is false?", "op1": "A body can have zero velocity and still be accelerated.", "op2": "a body can have a constant velocity and still have a varying speed.", "op3": "a body can have a constant speed and still have a varying velocity", "op4": "the direction of the velocity of a body can change when its acceleration is constant?", "oc": "2", "image": "q0" }, { "no": "21", "time": "", "body": "A particle moving with a uniform acceleration travels 24meter and 64meter in the first two consecutive intervals of 4sec each.Its initial speed was?", "op1": "1 m/s", "op2": "10 m/s", "op3": "5 m/s", "op4": "2 m/s", "oc": "1", "image": "q0" }, { "no": "22", "time": "", "body": "what is torque of a force .F=(2i-3j+4k) Newton acting at a point R=(3i+2j+3k) meter about the origin? (given:torque=R cross F)", "op1": "6i-6j+12k", "op2": "17i-6j-13k", "op3": "-6i-6j+12k", "op4": "-17i+6j+13k", "oc": "2", "image": "q0" }, { "no": "23", "time": "", "body": "A police jeep is chasing with a velocity of 45km/h a thief in another jeep moving with a velocity of 153km/h.police fires a bulvar with a muzzle velocity of 180m/s.the velocity with which it will strike the car of the thief is?", "op1": "150 m/s", "op2": "27 m/s", "op3": "450 m/s", "op4": "250 m/s", "oc": "1", "image": "q0" }, { "no": "24", "time": "", "body": "the displacement of a particle is given by y=a+bt+ct^2-dt^4 .the initial velocity and initial acceleration are respectively?", "op1": "b, -4d", "op2": "-b, 2c", "op3": "b ,2c", "op4": "2c,-4d", "oc": "3", "image": "q0" }, { "no": "25", "time": "", "body": "Two forces A and B have a resultant P.if B is doubled then the new resultant is Q which is perpendicular to A. then choose correct option?", "op1": "P=A", "op2": "P=B", "op3": "Q=A", "op4": "Q=B", "oc": "2", "image": "q0" }, { "no": "26", "time": "", "body": "If y=ax^2+b then find dy/dx;", "op1": "2a", "op2": "2ax", "op3": "b", "op4": "2a+b", "oc": "2", "image": "q0" }, { "no": "27", "time": "", "body": "value of sin150+cos120-tan135?", "op1": "1", "op2": "0", "op3": "-1", "op4": "0.5", "oc": "1", "image": "q0" }, { "no": "28", "time": "", "body": "if the roots of a quadratic equation are 3,6 then the quadratic equation formed with the roots is ?", "op1": "x^2-9x-18=0", "op2": "x^2-18x-9=0", "op3": "2x^2-9x+18=0", "op4": "x^2-9x+18=0", "oc": "4", "image": "q0" }, { "no": "29", "time": "", "body": "var p and q be the roots of the equation of x^2-6x-2=0. then find the value of p?", "op1": "3", "op2": "-3", "op3": "6", "op4": "-6", "oc": "1", "image": "q29" }, { "no": "30", "time": "", "body": "if 3a^2=4a-5 and 3b^2=4b-5 then find the value of a+b?", "op1": "1", "op2": "2", "op3": "3", "op4": "4", "oc": "4", "image": "q0" }, { "no": "31", "time": "", "body": "form the quadratic equation whose roots are p,q. where p^2+q^2=12 and pq=2.", "op1": "x^2-2x+4=0", "op2": "x^2+4x-4=0", "op3": "x^2-4x-2=0", "op4": "x^2+4x+2=0", "oc": "4", "image": "q0" }, { "no": "32", "time": "", "body": "if A<0 and Discriminant>0 and C<0 then find the correct graph from diagram?", "op1": "see the diagram", "op2": "see the diagram", "op3": "see the diagram", "op4": "see the diagram", "oc": "2", "image": "q32" }, { "no": "33", "time": "", "body": "if the first term of ap is 2 and common difference is 2 the find the sum of 20 terms?", "op1": "420", "op2": "210", "op3": "200", "op4": "400", "oc": "1", "image": "q0" }, { "no": "34", "time": "", "body": "If the 3rd term of an ap is 60 and 5th term is 100.then find the sum of only 2nd and 4th term?", "op1": "40", "op2": "80", "op3": "100", "op4": "120", "oc": "4", "image": "q0" }, { "no": "35", "time": "", "body": "if a,b,c are in gp then loga,logb,logc are in?", "op1": "ap", "op2": "gp", "op3": "hp", "op4": "none of these", "oc": "1", "image": "q0" }, { "no": "36", "time": "", "body": "if sinp=3/5 and cosq=12/13 then find cos^2p+sin^2q?", "op1": "3322/4364", "op2": "3329/5653", "op3": "3329/4225", "op4": "1", "oc": "3", "image": "q0" }, { "no": "37", "time": "", "body": "if the first term of a gp is 2 and common ratio is 2 then find 10 th term of gp?", "op1": "128", "op2": "512", "op3": "1024", "op4": "2028", "oc": "3", "image": "q0" }, { "no": "38", "time": "", "body": "if the first term of a gp is 3 and common ratio is 1/2 then find the sum of gp upto infinite terms?", "op1": "6", "op2": "5/6", "op3": "6/5", "op4": "3", "oc": "1", "image": "q0" }, { "no": "39", "time": "", "body": "if a and b are roots of the equation x^2-x+1=0 then a^2009+b^2009?", "op1": "-2", "op2": "-1", "op3": "1", "op4": "2", "oc": "3", "image": "q0" }, { "no": "40", "time": "", "body": "if the equation x^2+2x+3=0 and ax^2+bx+c=0 have a common root then a:b:c?", "op1": "1:2:3", "op2": "3:2:1", "op3": "1:3:2", "op4": "3:1:2", "oc": "1", "image": "q0" }, { "no": "41", "time": "", "body": "find the correct graph of the quadratic equation x^2-5x-6?", "op1": "see the diagram", "op2": "see the diagram", "op3": "see the diagram", "op4": "see the diagram", "oc": "4", "image": "q0" }, { "no": "42", "time": "", "body": "find the value of summation?", "op1": "400", "op2": "440", "op3": "340", "op4": "480", "oc": "2", "image": "q42" }, { "no": "43", "time": "", "body": "find the 4th term of hp 1,1/2,......?", "op1": "1/3", "op2": "1/4", "op3": "4", "op4": "3", "oc": "2", "image": "q0" }, { "no": "44", "time": "", "body": "if 5 arithmetic means are inserted in the ap of first term 2 and common difference 3 then find the 3rd arithmetic mean?", "op1": "8", "op2": "11", "op3": "14", "op4": "none of these", "oc": "2", "image": "q0" }, { "no": "45", "time": "", "body": "if 5 geometric means are inserted in the gp of common ratio 2.and the 2nd geometric mean is 8 then find 5th geometric mean?", "op1": "32", "op2": "64", "op3": "16", "op4": "none of these", "oc": "2", "image": "q0" }, { "no": "46", "time": "", "body": "if 5th term of a ap is 50 and 7th term is 70 then find the sum of ap of first 10 terms?", "op1": "500", "op2": "550", "op3": "600", "op4": "400", "oc": "2", "image": "q0" }, { "no": "47", "time": "", "body": "if y=ax^10+bx^5 then find the value of dy/dx at x=1;", "op1": "a+b", "op2": "10a+b", "op3": "a+11b", "op4": "10a+5b", "oc": "4", "image": "q0" }, { "no": "48", "time": "", "body": "value of sin operator lies in between?", "op1": "[-1,1]", "op2": "(-1,1)", "op3": "{-1,1}", "op4": "[-1,1)", "oc": "1", "image": "q0" }, { "no": "49", "time": "", "body": "value of (log 4 base 2)+(log 100 base 10) ?(given: log a base b mane log upore a ache ar base b )", "op1": "2", "op2": "3", "op3": "4", "op4": "5", "oc": "3", "image": "q0" }, { "no": "50", "time": "", "body": "choose correct graph where D<0 and a<0?", "op1": "see the diagram", "op2": "see the diagram", "op3": "see the diagram", "op4": "see the diagram", "oc": "2", "image": "q50" }, { "no": "51", "time": "", "body": "an organic compound contains carbon,hydrogen and oxygen.its elemental analysis gives C =38.71% and H=9.67% find the empirical formula of the compund?", "op1": "CHO", "op2": "CH4O", "op3": "CH3O", "op4": "CH2O", "oc": "3", "image": "q0" }, { "no": "52", "time": "", "body": "which has maximum number of molecules among the following?", "op1": "64g SO2", "op2": "44g CO2", "op3": "48g O3", "op4": "8g H2", "oc": "4", "image": "q0" }, { "no": "53", "time": "", "body": "In which case number of water molecules is maximum?", "op1": "0.00224 L of water vapours at 1 atm and 273K", "op2": "0.18g of water", "op3": "18ml of water", "op4": "10^-3 mol of water", "oc": "3", "image": "q0" }, { "no": "54", "time": "", "body": "when 22.4 of H2 is mixed with 11.2L of Cl2 each at stp the moles of HCL is formed is equal to?", "op1": "1 mole of HCl", "op2": "2 moles of HCl", "op3": "0.5 mole of HCl", "op4": "1.5 moles of HCl", "oc": "1", "image": "q0" }, { "no": "55", "time": "", "body": "In the haber process,30L of dihydrogen and 30L of dinitrogen were taken for the reaction.which yielded only 50% of the expected product.what will be the composition of the gaseous mixture under the said conditions in the end?", "op1": "20L Ammonia,10L Nitrogen,30L Hydrogen", "op2": "20L Ammonia,25L Nitrogen,30L Hydrogen", "op3": "20L Ammonia,10L Nitrogen,20L Hydrogen", "op4": "10L Ammonia,25L Nitrogen,15L Hydrogen", "oc": "4", "image": "q0" }, { "no": "56", "time": "", "body": "the number of atoms in 4.25g of NH3?", "op1": "4x10^23", "op2": "2x10^23", "op3": "1x10^23", "op4": "6x10^23", "oc": "4", "image": "q0" }, { "no": "57", "time": "", "body": "In the reaction 4NH3+5O2=4NO+6H2O . when 1 mole of ammonia and 1 mole of O2 reacts to completion then", "op1": "1.0 mole of H2O is produced.", "op2": "1.0 mole of NO will be produced.", "op3": "all the oxygen will be consumed.", "op4": "all the ammonia will be consumed", "oc": "3", "image": "q0" }, { "no": "58", "time": "", "body": "The molality of a 15%(w/vol) solution of H2SO4 of density 1.1g/cm^3 is ", "op1": "1.2", "op2": "1.4", "op3": "1.8", "op4": "1.6", "oc": "4", "image": "q0" }, { "no": "59", "time": "", "body": "which is independent of temperature?", "op1": "Molality", "op2": "percent by mass", "op3": "mole fraction", "op4": "all of the above", "oc": "4", "image": "q0" }, { "no": "60", "time": "", "body": "the total molarity of all the ions present in 0.1M of CuSO4 and 0.1 M ofAl2(SO4)3 solution is ?", "op1": "0.2M", "op2": "0.7M", "op3": "0.8M", "op4": "1.2M", "oc": "2", "image": "q0" }, { "no": "61", "time": "", "body": "IN THE REACTION: 2Ag+2H2SO4=Ag2SO4+2H20+SO2 H2SO4 acts as?", "op1": "oxidizing agent", "op2": "reducing agent", "op3": "dehydrating agent", "op4": "none of the above", "oc": "1", "image": "q0" }, { "no": "62", "time": "", "body": "IN THE REACTION: X HI+Y HNO3=NO+I2+H20 value of x,y after balancing equation?", "op1": "X=3,Y=2", "op2": "X=6,Y=3", "op3": "X=6,Y=2", "op4": "X=6,Y=1", "oc": "3", "image": "q0" }, { "no": "63", "time": "", "body": "which is not an intramolecular redox reaction?", "op1": "NH4NO2=N2+2H20", "op2": "2Mn2O7=4MnO2+3O2", "op3": "2KClO3=2KCl+3O2", "op4": "2H2O2=2H2O+O2", "oc": "4", "image": "q0" }, { "no": "64", "time": "", "body": "The equivalent mass of H3PO4 in the following reaction is: H3PO4+Ca(OH)2=CaHPO4+2H20", "op1": "98", "op2": "49", "op3": "32.66", "op4": "40", "oc": "2", "image": "q0" }, { "no": "65", "time": "", "body": "The oxidation state of Fe in K3[Fe(CN)6] is", "op1": "+2", "op2": "+3", "op3": "+4", "op4": "+1", "oc": "2", "image": "q0" }, { "no": "66", "time": "", "body": "KMnO4 in acidic medium always reduced to:", "op1": "(Mn)4+", "op2": "(Mn)2+", "op3": "(Mn)6+", "op4": "(Mn)1+", "oc": "2", "image": "q0" }, { "no": "67", "time": "", "body": "oxidation state of carbon in C3O2 AND Mg2C3 are respectively?", "op1": "-4/3,+4/3", "op2": "+4/3,-4/3", "op3": "-2/3,+2/3", "op4": "-2/3,+4/3", "oc": "2", "image": "q0" }, { "no": "68", "time": "", "body": "oxidation states of p in H4P2O5,H4P2O6,H4P2O7 is?", "op1": "+3,+5,+4", "op2": "+5,+3,+4", "op3": "+5,+4,+3", "op4": "+3,+4,+5", "oc": "4", "image": "q0" }, { "no": "69", "time": "", "body": "SPECIAL QUESTION: 2+2 ? check the question number", "op1": "1", "op2": "2", "op3": "3", "op4": "4", "oc": "4", "image": "q0" }, { "no": "70", "time": "", "body": "which is the correct IUPAC name?", "op1": "2-Ethyl-3-methyl-hexa-1-en-4-yne", "op2": "5-Ethyl-4-methyl-hexa-2-yn-5-ene", "op3": "3-Methylene-4-methylhepta-5-yne", "op4": "4-methyl-5-methylene hepta-2-yne", "oc": "1", "image": "q70" }, { "no": "71", "time": "", "body": "Isobutyl Chloride is-", "op1": "CH3CH2CH2CH2Cl", "op2": "(CH3)2CHCH2Cl", "op3": "CH3CH2CHCLCH3", "op4": "(CH3)3C-Cl", "oc": "2", "image": "q0" }, { "no": "72", "time": "", "body": "statement 1:An element may have variable equivalent mass....... statement 2:such elements should possess variable valency.", "op1": "statement 1 is correct but statement 2 is wrong", "op2": "statement 2 is correct but statement 1 is wrong", "op3": "both is correct and statement 2 is correct explanation of statement 1", "op4": "both is correct and statement 2 is not a correct explanation of statement 1", "oc": "3", "image": "q0" }, { "no": "73", "time": "", "body": "the oxide of metal contains 40% by mass of oxygen.the percentage of chlorine in the chloride of the metal?", "op1": "84.7", "op2": "74.7", "op3": "64.7", "op4": "44.7", "oc": "2", "image": "q0" }, { "no": "74", "time": "", "body": "which metal exhibits more than one oxidation state?", "op1": "Na", "op2": "Mg", "op3": "Al", "op4": "Fe", "oc": "4", "image": "q0" }, { "no": "75", "time": "", "body": "IUPAC name of the following is?", "op1": "1,5 Hexenyne", "op2": "Hex-1-en-5-yne", "op3": "1-hexyne-5-ene", "op4": "1,5 hexynene.", "oc": "2", "image": "q75" }]
    var pmarks = 0, cmarks = 0, mmarks = 0, pco = 0, cco = 0, mco = 0, pwo = 0, corret, given, cwo = 0, mwo = 0;
    var att;
    var markp = 0;
    var user = "";
    var ansarr = [];
    
    // var i;
    
    
    
}
 async function fetchall() {


    
        
  fetch(url+"/getoneexam", {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({setno: setno}),
})
.then(response => response.json())
.then(data => {

    object=data;
    setexam(object);
    if(object.status<2){
        alert("Exam not started");
        window.location.href="/studentallexam";
        return;
    }
    if(object.status>2){
        alert("Exam ended");
        window.location.href="/studentallexam";
        return;
    }
console.log(object);
quesgo=object.allquestions;
setquesgo(quesgo);

    totalquestions = object.allquestions.length;
    settotalquestions(totalquestions);
    totaltopics = object.totaltopics.length;
    settotaltopics(totaltopics);
    printtopics();
    nextprint(data);
    // setTimeout(nextprint=(data)=>{}, 500);
    setTimeout(() => {
        // console.log("This message is displayed after 2 seconds");
        nextprint(data);
    }, 500);
    
    
    // printquestionnumbers();
    setTimeout(printoption, 500);

    // printoption();
    // printdetails();
    setTimeout(printdetails, 1000);
    setTimeout(clock, 2000);



})
.catch((error) => {

}
);  
        
    
    }


 
  
      // screen.orientation.qType="landscape-primary";
      // screen.orientation.lock("landscape-primary");
  
  
  
  // start function
  
      
  return (
    <>
    
    {/* <Script src="assetsadmin/js/studentexammainpagejs.js"></Script> */}
    <style jsx global>{`
        




@import url('https://fonts.googleapis.com/css?family=Varela+Round');

html,
body {
    /* overflow-x: hidden; */
    
    height: 100%;
}

body {
    background: #fff;
    padding: 0;
    margin: 0;
    // overflow: hidden;
    font-family: 'Varela Round', sans-serif;
}

.header {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: white;
    position: fixed;
    height: 60px !important;
    overflow: hidden;
    z-index: 10;
}

.main {
    margin: 0 auto;
    display: block;
    height: 100%;
    margin-top: 60px;
}

.mainInner {
    display: table;
    height: 100%;
    width: 100%;
    text-align: center;
}

.mainInner div {
    display: table-cell;
    vertical-align: middle;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 1.25px;
}

#sidebarMenu {
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    left: 0;
    width: 300px;
    z-index: 1;
    margin-top: 60px;
    transform: translateX(-300px);
    transition: transform 250ms ease-in-out;
    /* background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%); */
}

#sidebarMenu::-webkit-scrollbar {
    display: none;
}

.sidebarMenuInner {
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li {
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li span {
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.50);
}

.sidebarMenuInner li a {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

input[type="checkbox"]:checked~#sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}

.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
}

.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: black
}

.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}

.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

input[type=checkbox]:checked~.sidebarIconToggle>.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
}

input[type=checkbox]:checked~.sidebarIconToggle>.diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
}

input[type=checkbox]:checked~.sidebarIconToggle>.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
}








.total {
    display: grid;
    /* grid-template-columns: 2fr 6fr; */
    overflow-x: scroll;
    height: 100%;
}

.but {
    background-color: rgb(189, 238, 238);
    margin-top: 10px;
    margin-left: 10px;
    width: 50px;

}

.nav-item {
    background-color: rgb(146, 146, 204);
    margin-left: 20px;
    margin-right: 30px;
    height: 30px;
    border-radius: 12px;
    /* width: 30%; */
    margin-top: 30px;
    /* position: sticky; */
}

#pos {
    /* position: fixed; */
    width: 100%;
    margin-top: -25px;
    margin-right: 0px;
}  
       `}</style>
        
    <Head>





    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Exam Started</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

    </Head>
    <>
  {/* <input type="checkbox" id="hamburger-input" class="burger-shower" />
<label id="hamburger-menu" for="hamburger-input">
  <nav id="sidebar-menu">
    <h3>Menu</h3>
    <ul>
<li><a href="#">Home</a></li>
<li><a href="#">Store</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact</a></li>
    </ul>
  </nav>
</label> */}
  <div
    style={{ border: "2px solid black", paddingBottom: 12 }}
    className="header"
  >
    <nav
      style={{ width: "90%", float: "right" }}
      className="navbar navbar-light bg-light"
    >
      <div className="container-fluid">
        {/* <a class="navbar-brand">Exam Details</a> */}
        <form style={{ marginRight: 0, marginLeft: "auto" }} className="d-flex">
          <label htmlFor="">
            <strong>Time Left:</strong>
          </label>
          <input
            className="form-control me-2"
            disabled="true"
            style={{
              fontWeight: "bolder",
              backgroundColor: "rgb(172, 206, 137)"
            }}
            id="demo"
          />
          {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
        </form>
      </div>
    </nav>
  </div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1" />
    <div className="spinner horizontal" />
    <div className="spinner diagonal part-2" />
  </label>
  <div id="sidebarMenu">
    {/* <ul class="sidebarMenuInner">
<li>Jelena Jovanovic <span>Web Developer</span></li>
<li><a href="https://vanila.io" target="_blank">Company</a></li>
<li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
<li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
<li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
<li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
    </ul> */}
    <div id="user">
      <div className="card" style={{ width: "18rem", marginTop: 10 }}>
        <img
            src="img/user.png"
          style={{ borderRadius: 10 }}
          className="card-img-top"
          alt="user image"
        />
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <p className="card-text"></p>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="text"
                style={{ pointerEvents: "none" }}
                id="name1"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                style={{ pointerEvents: "none" }}
                id="phone"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Exam Name
              </label>
              <input
                type="text"
                style={{ pointerEvents: "none" }}
                id="texam"
                className="form-control"
                placeholder="1234 Main St"
              />
            </div>
          </form>
          <p />
          <button className="btn btn-primary" id="start"  onClick={()=> clock()}>
            start exam
          </button>
          <button className="btn " id="submit"  onClick={()=> submi()}>
            <span style={{ color: "rgb(0, 0, 0)" }}>Submit exam</span>
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text" id="showleftnumberfield">
            {/* <strong id="showsub1">PHYSICS</strong>
              <div id="show1">
              </div>
              <strong id="showsub2">MATHS</strong>
              <div id="show2">
              </div>
              <strong id="showsub3">CHEMISTRY</strong>
              <div id="show3">
              </div> */}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="total">
    {/* <div  id="user">
  <div class="card" style="width: 18rem;">
      <img src="back.img" style="border-radius: 10px; " class="card-img-top" alt="user image">
      <div class="card-body">
          <h5 class="card-title">User Information</h5>
          <p class="card-text">
          <form class="row g-3">
              <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Name</label>
                  <input type="text" class="form-control" id="inputEmail4">
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Phone number</label>
                  <input type="text" class="form-control" id="inputPassword4">
              </div>
              <div class="col-12">
                  <label for="inputAddress" class="form-label">Exam type</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
              </div>
          </form>
          </p>
          <button class="btn btn-primary" id="start" onclick="clock()">start exam</button>
          <button class="btn " id="submit"  onclick="submit()"><span style="color: rgb(0, 0, 0);" >Submit exam</span></button>

      </div>
  </div>
  <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">
              <strong>PHYSICS</strong>
          <div id="show1">
          </div>
          <strong>MATHS</strong>
          <div id="show2">
          </div>
          <strong>CHEMISTRY</strong>
          <div id="show3">
          </div>
          </p>
      </div>
  </div>
    </div> */}
    <div
      style={{ marginTop: 80, overflowY: "scroll", height: 500, width: "100%" }}
      id="exam"
    >
      <div id="pos" style={{ width: "auto", height: 100, overflowY: "scroll" }}>
        <ul id="pos1" className="nav nav-pills nav-fill">
          {/* <li id="head1" onclick="phy()" class="nav-item">
              <strong>PHYSICS</strong>
          </li>
          <li id="head2" onclick="math()" class="nav-item">
              <strong>MATHEMATICS</strong>

          </li>
          <li id="head3" onclick="chem()" class="nav-item">
              <strong>CHEMISTRY</strong>

          </li>
          <li id="head4" onclick="all1()" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom" class="nav-item">
              <strong>OVERALL</strong>

          </li> */}
        </ul>
      </div>
      <hr />
      <div className="overflow-auto">
        <div
          style={{
            // height: 200,
            outline: "none",
            borderBottom: "none",
            marginLeft: 10
          }}
          className="card"
        >
          <div className="card-header">
            <nav
              style={{
                marginTop: 0,
                background: "none",
                color: "white",
                gridTemplateColumns: "6fr 2fr"
              }}
              className="navbar navbar-dark bg-dark"
            >
              <div className="container-fluid">
                <a className="navbar-brand">
                  {" "}
                  <strong style={{ fontSize: "medium" }}>Question No:</strong>
                  <strong style={{ fontSize: "medium" }} id="qno" />{" "}
                </a>
                <form className="d-flex">
                  <a className="navbar-brand">
                    <strong style={{ fontSize: "medium" }} />
                    <strong style={{ fontSize: "medium" }} id="qtype">
                      {" "}
                      Question type
                    </strong>{" "}
                  </a>
                </form>
              </div>
            </nav>
          </div>
          <div style={{ outline: "none" }} className="card-body">
            <blockquote
              style={{ minWidth: "auto" }}
              className="blockquote mb-0"
            >

              <span id="qshow" />
              {/* <p>A well-known quote, contained in a blockquote Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eaque, quia doloribus non necessitatibus quasi! Minima eius saepe maiores consectetur incidunt reprehenderit tenetur, nihil voluptas nesciunt facilis at voluptatem eligendi blanditiis aliquam earum unde necessitatibus provident dolor fuga? Excepturi facere delectus, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde corrupti vero labore voluptatum eum, repellat aspernatur tempora inventore obcaecati rerum iusto sapiente, sunt maxime sit expedita mollitia! Ea saepe neque deserunt culpa commodi eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit? dignissimos odio repellendus reprehenderit. element. i, adipisci quasi delectus quia tenetur quam voluptates officiis nihil repudiandae aspernatur. Beatae odit labore soluta neque culpa provident blanditiis sint dignissimos nulla.</p> */}
              {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
            </blockquote>
          </div>
          <div id="qimgshow"></div>
          
          {/* </div> */}

        {/* <div style={{width:"100%"}} class="col-sm-6">
              <div style={{width:"100%", "margin-left": 0, height: "300px"}} class="card">
                  <div class="card-body">

                  </div>
              </div>
          </div> */}
      </div>
      </div>

    </div>
    <div className="card" id="showoption">
      {/* <div class="card-body">
          <label for="">option 1</label>
          <div class="form-check">
              <input class="form-check-input" value="1" onclick="gett(1)" id="opt1" type="radio"
                  name="flexRadioDefault" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
                  <strong id="op1"></strong>
              </label>
          </div>
      </div>
      <div class="card-body">
          <label for="">option 2</label>
          <div class="form-check">
              <input class="form-check-input" value="2" onclick="gett(2)" id="opt2" type="radio"
                  name="flexRadioDefault" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
                  <strong id="op2"></strong>
              </label>
          </div>
      </div>
      <div class="card-body">
          <label for="">option 3 </label>
          <div class="form-check">
              <input class="form-check-input" value="3" onclick="gett(3)" type="radio" id="opt3"
                  name="flexRadioDefault" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
                  <strong id="op3"></strong>
              </label>
          </div>
      </div>
      <div class="card-body">
          <label for="">option 4 </label>
          <div class="form-check">
              <input class="form-check-input" value="4" onclick="gett(4)" type="radio" id="opt4"
                  name="flexRadioDefault" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
                  <strong id="op4"></strong>
              </label>
          </div>
      </div> */}
    </div>
    <nav style={{ marginTop: 10 }} className="nav nav-pills nav-fill">
      <button
        className="nav-link "
        id="pre"
        onClick={()=>prev()}
        style={{
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          color: "black",
          backgroundColor: "rgb(124, 130, 223)"
        }}
      >
        previous
      </button>
      <button
        className="nav-link   "
        id="clear"
        onClick={()=>clea()}
        style={{
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          color: "black",
          backgroundColor: "rgb(124, 130, 223)"
        }}
      >
        clear option
      </button>
      <button
        className="nav-link  "
        id="mark"
        onClick={()=>mark()}
        style={{
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          color: "black",
          backgroundColor: "rgb(124, 130, 223)"
        }}
      >
        mark for review
      </button>
      <button
        className="nav-link  "
        id="savnex"
        onClick={()=> savnex()}
        style={{
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          color: "black",
          backgroundColor: "rgb(124, 130, 223)"
        }}
      >
        save and next
      </button>
      {/* <button id="next" class="nav-link  " onclick="next()" */}
      {/* style="margin-left: 20px;color: black; background-color: rgb(124, 130, 223);">next</button> */}
    </nav>
  </div>
  {/* <button class="btn btn-primary" type="button">Toggle bottom offcanvas</button> */}
  <div
    style={{ width: "70%", margin: "auto" }}
    className="offcanvas offcanvas-bottom"
    tabIndex={-1}
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div className="offcanvas-header">
      <h5
        className="offcanvas-title"
        style={{ fontWeight: "bolder" }}
        id="offcanvasBottomLabel"
      >
        Allover Details
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    {/* <div class="offcanvas-body small">
  <div style="display: flex;">
      <div style="width: 30%; margin-left: 3%;" id="physhow" class="col-sm-6">
          <div class="card">
              <div class="card-body" style="width: 100px;">
                  <h5 class="card-title">Physics details</h5>
                  <p class="card-text"><strong>Attempted:</strong> 
                      <span id="pdet"></span></p>
              </div>
          </div>
      </div>
      <div style="width: 30%; margin-left: 3%;" id="mathshow" class="col-sm-6">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Mathematics details</h5>
                  <p class="card-text"><strong>Attempted:

                  </strong> <span id="mdet"></span></p>
              </div>
          </div>
      </div>
      <div style="width: 30%; margin-left: 3%;" id="chemshow" class="col-sm-6">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Chemistry details</h5>
                  <p class="card-text"><strong>Attempted:</strong>
                       <span id="cdet"></span></p>
              </div>
          </div>
      </div>

  </div>
  <div class=" text-center">
      <div class="card-body">
          
          <div class="card-footer text-muted">
              <strong>Total Attempted: </strong><span id="att"></span>
          </div>
      </div>
  </div>
    </div> */}
  </div>
  {/* Optional JavaScript; choose one of the two! */}
  {/* Option 1: Bootstrap Bundle with Popper */}
  {/* Option 2: Separate Popper and Bootstrap JS */}
  {/*


*/}
</>

   

    </>
  )
}

export default Studentexammainpage
