import React, { useEffect } from 'react'
import Studenthead from "./studenthead";
import Studentfooter from './studentfooter';
import Script from 'next/script'




const Studentprofile = () => {

  var url="http://localhost:5000";
  var student;
  
  if (typeof window !== 'undefined') {
    student = JSON.parse(localStorage.getItem("student"));
  }

  // var student={
  //         "name": "Sneha Sharma",
  //         "email": "sneha.sharma@example.com",
  //         "phone": "9876543211",
  //         "sid":"s1",
  //         "joiningdate": "31-07-2017",
  //         "password": "sneha123",
  //         "batch": ['b1'],
  //     };
  
  
  //     var batches=[
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
  function getbatches(){
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
            printstudent(data);
        
          })
          .catch((err) => console.log(err));
      
      
  }
  
  
  
     function printstudent(b){
      batches=b;
      document.getElementById("sname").innerHTML=student.name;
      document.getElementById("sid").innerHTML=student.sid;
      document.getElementById("semail").innerHTML=student.email;
      document.getElementById("sphone").innerHTML=student.phone;
      document.getElementById("sphoneedit").value=student.phone;
      document.getElementById("semailedit").value=student.email;
      document.getElementById("spasswordedit").value=student.password;
      document.getElementById("snameedit").value=student.name;
      document.getElementById("sjoindate").innerHTML=student.joiningdate;
  
  
  
  var a=``;
      for(var i=0;i<student.batch.length;i++){
          for(var j=0;j<batches.length;j++){
              if(student.batch[i]==batches[j].bid){
                  a+=`<small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  <i class="fas fa-share text-primary me-2"></i>${batches[j].bname + " "+batches[j].bday + " "+batches[j].btime}
              </small>
              <br>`;
              }
          }
      }
      document.getElementById("showbatch").innerHTML=a;
     } 
  
  
      function gotosettings(){
          document.getElementById("settings").style.display="block";
          document.getElementById("settings").scrollIntoView();
      }
  
      function update(){
          var name=document.getElementById("snameedit").value;
          var email=document.getElementById("semailedit").value;
          var phone=document.getElementById("sphoneedit").value;
          var password=document.getElementById("spasswordedit").value;
           student.name=name;
          student.email=email;
          student.phone=phone;
          student.password=password;
          printstudent(batches);
          document.getElementById("settings").style.display="none";
          var ds={
              sid:student.sid,
              name:student.name,
              email:student.email,
              phone:student.phone,
              password:student.password,
              joiningdate:student.joiningdate,

          }

          fetch(url+"/updatestudent", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(ds)
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                alert("Details Updated Successfully")
              })
              .catch((err) => console.log(err));

      }

      function logout(){
        localStorage.setItem("student",null);
        window.location.href="/";
      }


  
      useEffect(() => {
          getbatches();

      } , [])


  return (
    <>
    <Script src="assetsadmin/js/studentprofilejs.js"></Script>
    <Studenthead></Studenthead>
    
    <>
  {/* Hero Start */}
  <div className="container-fluid bg-light py-2 my-2 mt-0">
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1 mb-4"> Profile And Dashboard</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          Profile
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* About Satrt */}
  <div className="container-fluid py-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <img
            src="img/about.jpg"
            style={{ height: 400, width: 400 }}
            className="img-fluid rounded"
            alt=""
          />
        </div>
        <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            <strong style={{ fontWeight: "bolder" }}>Student-Id : </strong>
            <span id="sid">#87986</span>
          </small>
          <h1 className="display-5 mb-4" id="sname">
            Sayandip Paul
          </h1>
          <p className="mb-4">
            Student Since <span id="sjoindate"> 29-09-2017</span>
          </p>
          <div className="row g-4 text-dark mb-5">
            <div className="col-sm-12">
              <strong style={{ fontWeight: "bolder" }}>Email-id : </strong>
              <span id="semail">sayandip126@gmail.com</span>
            </div>
            <div className="col-sm-12">
              <strong style={{ fontWeight: "bolder" }}>Phone : </strong>
              <span id="sphone">8798689876</span>
            </div>
          </div>
          <div id="showbatch">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              <i className="fas fa-share text-primary me-2" />
              batch 1 aptitude
            </small>
            <br />
          </div>
          <a
            href="#settings"
            onClick={() => gotosettings()}

            className="btn btn-primary py-3 px-5 rounded-pill"
          >
            Settings
            <i className="fas fa-arrow-right ps-2" />
          </a>
          <a
            onClick={() => logout()}

            className="btn btn-danger py-3 px-5 rounded-pill"
          >
            Logout
            <i className="fas fa-arrow-right ps-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  <div
    id="settings"
    className="container-fluid contact py-2 wow bounceInUp"
    style={{ display: "none" }}
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row g-0">
        <div className="col-1">
          <img
            // src="img/background-site.jpg"
            src="img/about.jpg"

            className="img-fluid h-100 w-100 rounded-start"
            style={{ objectFit: "cover", opacity: "0.7" }}
            alt=""
          />
        </div>
        <div className="col-10">
          <div className="border-bottom border-top border-primary bg-light py-5 px-4">
            <div className="text-center">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                Settings
              </small>
              <h1 className="display-5 mb-5">Change Your Basic Details</h1>
            </div>
            <div className="row g-4 form">
              <div className="col-lg-6 col-md-6">
                <label>Name </label>
                <input
                  type="text"
                  className="form-control border-primary p-2"
                  id="snameedit"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <label>Registered Email</label>
                <input
                  type="email"
                  className="form-control border-primary p-2"
                  id="semailedit"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <label>Phone (For Verification)</label>
                <input
                  type="mobile"
                  className="form-control border-primary p-2"
                  id="sphoneedit"
                  placeholder="Your Contact No."
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control border-primary p-2"
                  id="spasswordedit"
                  placeholder="your password"
                />
              </div>
              <div className="col-12 text-center">
                <button
                  type="button"
                  onClick={() => update()}
                  className="btn btn-primary px-5 py-3 rounded-pill"
                >
                  Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img
            // src="img/background-site.jpg"
            src="img/about.jpg"

            className="img-fluid h-100 w-100 rounded-end"
            style={{ objectFit: "cover", opacity: "0.7" }}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</>


   
    <Studentfooter></Studentfooter>
   

    </>
  )
}

export default Studentprofile
