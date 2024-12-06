import React from 'react'
import Head from "next/head";
import Link from 'next/link'
// import "../public/js/main.js";
import Script from 'next/script'
import { set } from 'mongoose';
import { useState,useEffect } from 'react';


const Studenthead = () => {
  const [allnotification, setallnotification] = useState([]);
   


  // var allnotification=[];
  // var url="http://localhost:5000";
  var url="https://mathopia.onrender.com";

  
  async function fetchal() {
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
          // allnotification=data;
          // printallnotification(data);
          setallnotification(data);
    console.log(data);
    
    
      } catch (error) {
          console.log(error);
      }
    
    
    
    
    
      
    }
  
    // fetchal();

    useEffect(() => {
 
      fetchal();

     
      
    }, []);

  
  

    return (
        <div>
            
    <Head>

    <meta charset="utf-8"></meta>
    <title>Mathopia</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
    
    <meta content="" name="keywords"></meta>
    <meta content="" name="description"></meta>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playball&display=swap"
        rel="stylesheet"></link>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" ></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>

    <link href="lib/animate/animate.min.css" rel="stylesheet"></link>
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"></link>
    <link href="lib/owlcarousel/owl.carousel.min.css" rel="stylesheet"></link>

    <link href="css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="css/index.css" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <link href="css/style.css" rel="stylesheet"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <script src="js/main.js"></script>
    {/* <script type="text/javascript" src="socket.io/socket.io.js"></script> */}
    
    </Head>
    {/* <div
      id="spinner"
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status" />
    </div> */}
    {/* Spinner End */}
    {/* Navbar start */}
    <div className="container-fluid nav-bar">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-primary fw-bold mb-0">
                Math<span className="text-dark">opia</span>{" "}
            </h1>
          </a>

          {/* <button
              className="btn-search btn btn-primary btn-md-square me-4 rounded-circle "
              data-toggle="modal"
              data-target="#notification"
            >
              <i className="fas fa-bell" />
            </button>
          */}
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
             
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">

            <Link href="/"  className="nav-item nav-link">Home</Link>
            <a  data-toggle="modal"
              data-target="#notification"  className="nav-item nav-link ">Notification</a>
                <Link  href="/studentvideonotes"  className="nav-item nav-link showbutton">Notes/Videos</Link>
            <Link href="/studentallexam"  className="nav-item nav-link showbutton">Exams</Link>
          
              {/* <a href="about.html" class="nav-item nav-link">About</a> */}
              {/* <a href="service.html" class="nav-item nav-link">Services</a> */}
              {/* <a href="event.html" class="nav-item nav-link">Events</a> */}
              {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu bg-light">
                            <a href="team.html" class="dropdown-item">Our Team</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div> */}
              
              {/* <a href="book.html" class="dropdown-item"></a> */}
            </div>
            
            <Link href="/studentnewadmission"  className="btn btn-primary py-2 px-4  rounded-pill">New Admission?</Link>
            <Link  c href="/studentprofile"  className="btn btn-primary py-2 px-4  rounded-pill showbutton">Profile</Link>

          </div>
        </nav>
      </div>
    </div>
    {/* Navbar End */}
    {/*-Chat Board Start*/}



{/* 




*/}
     {/*-Chat Board End*/}
    <div
      className="modal fade"
      id="notification"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header  bg-primary">
            <h1 className=" animated bounceInDown" id="exampleModalLongTitle">
              Notification
            </h1>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            className="modal-body" id=""
            style={{ height: 409, overflowY: "scroll" }}
          >






<div id="shownotification">

{allnotification.map((data) => (
                          <>
 <div className="testimonial-item rounded bg-light my-2">
          <div className="d-flex mb-3">
            <img
              src="img/testimonial-4.jpg"
              className="img-fluid rounded-circle flex-shrink-0"
              alt=""
            />
            <div className="position-absolute" style={{ top: 15, right: 20 }}>
              <i className="fa fa-quote-right fa-2x" />
            </div>
            <div className="ps-3 my-auto">
              <h4 className="mb-0">Notification </h4>
              <p className="m-0">{data.date}</p>
            </div>
          </div>
          <div className="testimonial-content">
            <p className="fs-9 text-primary m-0 pt-3">
              {data.content}
               </p>
          </div>
        </div>
         
                        </>))}

</div>






            
          </div>
          <div className="modal-footer ">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Search Start */}
    <div
      className="modal fade "
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0 bg-success">
          <div className="modal-body d-flex align-items-center">
            {/* <div class="input-group w-75 mx-auto d-flex">
                        <input type="search" class="form-control bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1">
                        <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* Modal Search End */}
    {/* Button trigger modal */}
    {/* Modal */}
        </div>
    )
}

export default Studenthead



