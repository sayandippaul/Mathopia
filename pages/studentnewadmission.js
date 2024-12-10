import React, { useEffect } from 'react'
import Studenthead from "./studenthead";
import Studentfooter from './studentfooter';
import Script from 'next/script'
import { useState,useRef } from 'react';




const Studentnewadmission = () => {
  function showbuttons(){
    var showbuttons = document.getElementsByClassName("showbutton");
    var hidebuttons = document.getElementsByClassName("hidebutton");
  
  // alert(localStorage.getItem("student"));
    // alert(showbuttons.length);
      if(localStorage.getItem("student")=="null" ||localStorage.getItem("student")==null || localStorage.getItem("student")==undefined){
        for(var i=0;i<showbuttons.length;i++){
          showbuttons[i].style.visibility="hidden";
  
        }
        
        for(var i=0;i<hidebuttons.length;i++){
          hidebuttons[i].style.visibility="visible";
  
        }
      }
       else{
          var showbuttons = document.getElementsByClassName("showbuttons");
          for(var i=0;i<showbuttons.length;i++){
              showbuttons[i].style.visibility="visible";
  
          }
          var hidebuttons = document.getElementsByClassName("hidebutton");
          for(var i=0;i<hidebuttons.length;i++){
              hidebuttons[i].style.visibility="hidden";
  
          }
      
       }
  }
  
  useEffect(() => {
    showbuttons();
 },[]);

  return (
    <>
    <Script src="assetsadmin/js/studentnewadmissionjs.js"></Script>
    <Studenthead></Studenthead>
    
    <>
  {/* Hero Start */}
  <div className="container-fluid bg-light py-2 my-2 mt-0">
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1 mb-4">New Admission</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          Admission
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* Book Us Start */}
  <div
    className="container-fluid contact py-3 wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row g-0">
        <div className="col-1">
          <img
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
                Admission
              </small>
              <h3 className="display-20 mb-5">
                To Get Student Id Kindly Apply Here And Wait For Approval
              </h3>
            </div>
            <div className="row g-4 form">
              <div className="col-lg-4 col-md-6">
                <input
                  type="text"
                  required=""
                  className="form-control border-primary p-2"
                  id="name"
                  placeholder=" Your Name"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="email"
                  required=""
                  className="form-control border-primary p-2"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="number"
                  required=""
                  className="form-control border-primary p-2"
                  id="contact"
                  placeholder="Your Contact No."
                />
              </div>

              <div className="col-lg-12 col-md-12">
                <textarea id="message" placeholder='Your Message or Description of you and yours batch' required="true">

                </textarea>
              </div>


              <div className="col-12 text-center">
                <button
                  type="submit"
                  onClick={() => newadmission()}
                  className="btn btn-primary px-5 py-3 rounded-pill"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img
            src="img/about.jpg"
            className="img-fluid h-100 w-100 rounded-end"
            style={{ objectFit: "cover", opacity: "0.7" }}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  {/* Book Us End */}
</>

   
    <Studentfooter></Studentfooter>
   

    </>
  )
}

export default Studentnewadmission
