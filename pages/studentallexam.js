import React, { useEffect } from 'react'
import Studenthead from "./studenthead";
import Studentfooter from './studentfooter';
import Script from 'next/script'
import { useState,useRef } from 'react';

import io from 'socket.io-client';
import { set } from 'mongoose';
var socket = io();



var Studentallexam = () => {
  var [batches, setbatches] = useState([]);
  var [allexams, setallexams] = useState([]);
  var [alloriginalexams, setalloriginalexams] = useState([]);
  var [studentbatch,setstudentbatch]=useState([]);
  var hasRun = useRef(false);


  // var url = "http://localhost:5000";
  var url="https://mathopia.onrender.com";

useEffect(() => {
  if (!hasRun.current) {
    hasRun.current = true;
    socket.on('startexam', (setno) => {
      // alert("exam starteed"+setno);
      for(var i=0;i<allexams.length;i++){
        if(allexams[i].setno==setno){
          allexams[i].status=2;
          printexams(allexams);
        }
      }
      // io.emit('startexam',setno);
    });
    window.startexam=(setno)=>{
      // alert("exam starteed"+setno);
      localStorage.setItem("examsetno",setno);
      window.location.href="/studentexammainpage";
    }
     studentbatch = JSON.parse(localStorage.getItem('student')).batch;
     setstudentbatch(studentbatch);

    window.viewresult=(setno)=>{
      localStorage.setItem("examsetno",setno);
      window.location.href="/studentresult";
    }
    // function printexams(obj){
      window.printexams=(obj)=>{
      // obj=allexams;
      var a=`<div id="one" class="tab-pane fade show p-0 active">
                              <div class="row g-4">
                  `;
      for (var i = 0; i < obj.length; i++) {
          var exam = obj[i];
          for (var j = 0; j < exam.batches.length; j++) {
              var p=``;
              if(exam.status==0){
              }
              else if(exam.status==1){
                 p=` <button disabled="true" class=" btn btn-primary " >Not Started Yet</button>`;
  
              }
              else if(exam.status==2){
                 p=` <button style={{"pointer-events" : "auto"}} onclick="startexam('`+exam.setno+`')" class=" btn btn-success">Start Exam</button>`;
  
              }
              else if(exam.status==3){
                 p=` <button style={{"pointer-events" : "auto"}} class=" btn btn-info" onclick="viewresult('`+exam.setno+`')" >view result</button>`;
  
              }
  
              if (studentbatch.includes(exam.batches[j]) && exam.status!=0 ) {
                  
                  a+=`
                                  <div class="col-lg-6">
                                      <div class="menu-item d-flex align-items-center">
                                          <img style="width:60px;height:60px;margin-top:-100px"  class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="">
                                          <div class="w-100 d-flex flex-column text-start ps-4">
                                              <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                  <h4>`+exam.name+`</h4>
                                                  `+p+`
  
                                              </div>
                                              <p class="mb-0"><strong>Full Marks : </strong>`+exam.totalno+`</p>
                                              <p class="mb-0"><strong>Duration : </strong>`+exam.time+`</p>
                                              <p class="mb-0"><strong>Exam Date-time : </strong>`+exam.date+"   "+exam.startingTime+`</p>
                                          </div>
                                      </div>
                                  </div>
                                   
                  `;
  
  
  
                  break;
              }
          }
      }
      document.getElementById("showexam").innerHTML=a+`</div></div>`;
  
  }
  // printexams(allexams);
  
  
  // function printexamcatagory(s){
    window.printexamcatagory=(s)=>{
  var obj= allexams.filter(exam => exam.status == s);
  
     printexams(obj);
      
  }
  

  window.fetchall=()=> {


    
        
  
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
            alloriginalexams=data;
            setalloriginalexams(data);
            console.log(allexams);
            sortExamsByDateAndTime(allexams);
            printexams(allexams);
            
            
    
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
              
              
        
          
      
      }
 
  
      fetchall();

  }
 },[]);
    
     
    
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
        var batchDayLower = object.date.toLowerCase();
        var batchtimeLower = object.startingTime.toLowerCase();
        // var syllabus = object.syllabus.toLowerCase();
        var fullmarks = object.totalno.toLowerCase();
        var duration = object.time.toLowerCase();
    
        // Check if the search phrase is present in batch name, day, or time
        return batchNameLower.includes(searchLower) || batchDayLower.includes(searchLower)|| batchDayLower.includes(searchLower) || batchtimeLower.includes(searchLower) || fullmarks.includes(searchLower) || duration.includes(searchLower);
      });
    
      // return searchResults;
      // batches = searchResults;
      if(searchPhrase==""){
        searchResults=allexams;
      }
    
    
      printexams(searchResults);
    
    }
    
    function sortExamsByDateAndTime(obj) {
      allexams=obj.sort((a, b) => {
        var dateA = new Date(a.date + " " + a.startingTime);
        var dateB = new Date(b.date + " " + b.startingTime);
        return dateB - dateA;
      });
    }
    
    
  return (
    <>
    {/* <Script src="assetsadmin/js/studentallexamjs.js"></Script> */}
    <Studenthead></Studenthead>
    
    <>
  {/* Hero Start */}
  <div className="container-fluid bg-light py-2 my-2 mt-0">
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1 mb-4">Exams</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          Exam
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* Menu Start */}
  <div className="container-fluid menu py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <h1 className="display-5 mb-5">Exam Details, results and records </h1>
        <small className="col-lg-12">
          <input
            style={{ height: 40, width: "80%" }}
            className="col-lg-12 d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"
            type="text"
            id="searchapprove"
            onKeyUp={() => searchObjects()}
            placeholder="Search By Name, Date"
          />
        </small>
        <br />
        {/* <label for="select">Select Notes/Videos</label> */}
        {/* <label for="select">Sort Contents</label> */}
        {/* <select onchange="sort()" id="sortvalue" class="col-lg-3 d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1  mb-3"
                aria-label="select Notes/Videos">
                <option class="btn btn-dark" selected value="d">Sort By Date (Newest One)</option>
                <option class="btn btn-dark"  value="n">Sort By Name</option>
              </select> 
 */}
      </div>
      <div className="tab-class text-center">
        <ul
          className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
          data-wow-delay="0.1s"
        >
          {/* <li className="nav-item p-2" 
          onClick={()=> printexams(allexams) }>
            <a
              className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active"
              data-bs-toggle="pill"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Statistics
              </span>
            </a>
          </li> */}
          <li className="nav-item p-2" onClick={()=> printexams(alloriginalexams) }>
            <a
              className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active"
              data-bs-toggle="pill"
            >
              <span className="text-dark" style={{ width: 150 }}>
                All Exams
              </span>
            </a>
          </li>
          <li className="nav-item p-2"  onClick={()=> printexamcatagory(1) }>
            <a
              className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
              data-bs-toggle="pill"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Upcoming
              </span>
            </a>
          </li>
          <li className="nav-item p-2"  onClick={()=> printexamcatagory(2) }>
            <a
              className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
              data-bs-toggle="pill"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Ongoing
              </span>
            </a>
          </li>
          <li className="nav-item p-2" onClick={()=> printexamcatagory(3) }>
            <a
              className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
              data-bs-toggle="pill"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Completed
              </span>
            </a>
          </li>
        </ul>
        {/* problem */}
        <div className="tab-content"  id="showexam">
          <div className="row">
            <div className="col-12 ">
              <div id="stat" className="card">
                <div className="card-header">
                  Exam Statistics
                  <div className="card-action">
                    <div className="dropdown">
                      <a
                        href="javascript:void();"
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-toggle="dropdown"
                      >
                        <i className="icon-options" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="javascript:void();">
                          Action
                        </a>
                        <a className="dropdown-item" href="javascript:void();">
                          Another action
                        </a>
                        <a className="dropdown-item" href="javascript:void();">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void();">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas
                    style={{
                      maxHeight: 300,
                      maxWidth: 700,
                      margin: "auto",
                      marginBottom: 30
                    }}
                    id="myChart"
                  />
                  <div style={{ marginLeft: "auto" }}>
                    <ul>
                      <li className="list-inline-item">
                        <i className="fa fa-circle mr-2 text-white" />
                        Exams
                      </li>
                      <li
                        style={{ color: "greenyellow" }}
                        className="list-inline-item"
                      >
                        <i
                          style={{ color: "greenyellow" }}
                          className="fa fa-circle mr-2 "
                        />
                        Ongoing
                      </li>
                      <li
                        style={{ color: "rgb(237, 111, 20)" }}
                        className="list-inline-item"
                      >
                        <i
                          style={{ color: "rgb(237, 111, 20)" }}
                          className="fa fa-circle mr-2 "
                        />
                        Not Started
                      </li>
                      <li
                        style={{ color: "rgb(243, 177, 177)" }}
                        className="list-inline-item"
                      >
                        <i
                          style={{ color: "rgb(243, 177, 177)" }}
                          className="fa fa-circle mr-2 "
                        />
                        Finished
                      </li>
                    </ul>
                  </div>
                  {/* <div  class="chart-container-1"> */}
                  {/* <canvas id="chart1"></canvas> */}
                  {/* </div> */}
                </div>
                <div className="row m-0 row-group text-center border-top border-light-3">
                  <div className="col-12 ">
                    <div className="p-3">
                      <h5 className="mb-0">Total exams </h5>
                      <small className="mb-0">12 </small>
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="p-3">
                      <h5 className="mb-0" style={{ color: "greenyellow" }}>
                        Ongoing Exam
                      </h5>
                      <small className="mb-0 ">
                        {" "}
                        <span style={{ color: "greenyellow" }}>
                          {" "}
                          <i className="fa fa-circle" />
                          Aptitude
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="p-3">
                      <h5
                        className="mb-0"
                        style={{ color: "rgb(237, 111, 20)" }}
                      >
                        Upcoming Exams
                      </h5>
                      <small className="mb-0">
                        {" "}
                        <span>
                          {" "}
                          <i
                            style={{
                              color: "rgb(237, 111, 20)",
                              marginRight: 5
                            }}
                            className="fa fa-circle"
                          />
                          2
                        </span>{" "}
                        exams pending
                      </small>
                    </div>
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
  {/* Menu End */}
</>

   
    <Studentfooter></Studentfooter>
   

    </>
  )
}

export default Studentallexam
