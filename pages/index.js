import Image from "next/image";
import Studenthead from "./studenthead";


import { Inter } from "next/font/google";
import Studentfooter from "./studentfooter";
import Script from "next/script";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
 
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
  // var lastsid=localStorage.getItem("lastsid")!=null?localStorage.getItem("lastsid"):"S-0";
  





  showbuttons();
  // var url=
  var url = "http://localhost:5000";

  window.checkallexamend = () =>{
    fetch(url+"checkallexamend",{
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
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  
        }
        window.checkallexamend();


        window.getalllastid = () =>{
          fetch(url+"/getalllastid",{
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
              localStorage.setItem("lastsid",data.lastsid);
              localStorage.setItem("lastbid",data.lastbid);
              localStorage.setItem("lastadminid",data.lastadminid);
              localStorage.setItem("lastvqid",data.lastvqid);
              localStorage.setItem("lastexamid",data.lastexamid);

              document.getElementById("shownoofstudents").innerHTML=localStorage.getItem("lastsid").slice(2);
  document.getElementById("shownoofbatches").innerHTML=localStorage.getItem("lastbid").slice(1);
  document.getElementById("shownoofexams").innerHTML=localStorage.getItem("lastexamid").slice(1);

  
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
              } 
              getalllastid();
     




         }
, []);
  return (
  
    <>


<Studenthead></Studenthead>
<Script src="assetsadmin/js/studentindexjs.js"></Script>



    {/* login and register */}
    <div
      className="modal fade "
      id="login"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body" style={{ marginTop: "-200px" }}>
            <div id="loginpage" style={{ maxWidth: 300 }}>
              <article className="letter">
                <div className="side">
                  <h1 style={{ marginTop: "-10px" }}>Login </h1>
                  <subscript>(For Visiting Purpose Sid: s-1 and password : 12345)</subscript>
                  <button
                    className="close text-dark bg-transparent"
                    style={{
                      float: "right",
                      marginTop: "-40px",
                      fontSize: "xx-large",
                      fontWeight: "bolder"
                    }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <p style={{ marginTop: 40 }}>
                    <input
                      type="text"
                      id="sidlogin"
                      placeholder="Your Student-id(Given by Institute)"
                    />
                  </p>
                  <p style={{ marginTop: 40 }}>
                    <input
                      type="password"
                      id="passlogin"
                      required=""
                      placeholder="Your Password"
                    />
                  </p>
                </div>
                <div className="side">
                  <p style={{ marginTop: 80 }}>
                    <button
                      className="btn btn-primary"
                      // onClick="addClass('login')"
                      id="sendLetter"
                      onClick={() => {login()}}
                      

                    >
                      Login Now
                    </button>
                  </p>
                </div>
              </article>
              <div className="envelope front" />
              <div className="envelope back" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade "
      id="register"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body" style={{ marginTop: "-200px" }}>
            <div id="loginpage" style={{ maxWidth: 300 }}>
              <article className="letter">
                <div className="side">
                  <h1 style={{ marginTop: "-10px" }}>Registration</h1>
                  <button
                    className="close text-dark bg-transparent"
                    style={{
                      float: "right",
                      marginTop: "-40px",
                      fontSize: "xx-large",
                      fontWeight: "bolder"
                    }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <p style={{ marginTop: 20 }}>
                    <input
                      type="text"
                      id="sidreg"
                      placeholder="Your Student-id(Given by Institute)"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      id="sidname"
                      required=""
                      placeholder="Your Name"
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      id="sidemail"
                      required=""
                      placeholder="Your Email"
                    />
                  </p>
                </div>
                <div className="side">
                  <p style={{ marginTop: 30 }}>
                    <input
                      type="number"
                      id="sidphone"
                      required=""
                      placeholder="Your Phone"
                    />
                  </p>
                  <p>
                    <input
                      type="password"
                      id="sidpass"
                      required=""
                      placeholder="Set Password"
                    />
                  </p>
                  <p>
                    <button
                      className="btn btn-primary"
                      // onClick="addClass('register')"
                      id="sendLetter"
                      onClick={() => {register()}}
                    >
                      Register Now
                    </button>
                  </p>
                </div>
              </article>
              <div className="envelope front" />
              <div className="envelope back" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Start */}
    <div className="container-fluid bg-light py-6 my-6 mt-0">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7 col-md-12">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">
              Education Simplified, Success Amplified
            </small>
            <h1 className="display-1 mb-4 animated bounceInDown">
            
           Your <span className="text-primary">Gateway</span> to Lifelong Learning
            </h1>
            <a
              href=""
              className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft hidebutton"
              data-toggle="modal"
              // onClick="openlogin('login')"
              data-target="#login"
            >
              Login
            </a>
            <a
              href=""
              className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft hidebutton"
              data-toggle="modal"
              // onClick="openlogin('register')"
              data-target="#register"
            >
              Register
            </a>
          </div>
          <div className="col-lg-5 col-md-12">
            <img style={{width:"100%",height:"100%"}}
              src="img/hero.png"
              className="img-fluid rounded animated zoomIn"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/* About Satrt */}
    <div className="container-fluid py-6">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
            <img style={{height:"350px"}} src="img/about.jpg" className="img-fluid h-200 rounded" alt="" />
          </div>
          <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
            <small className="d-inline-block  fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              About Us
            </small>
            <h1 className="display-5 mb-4">Inspiring Success for Students</h1>
            <p className="mb-4">
            Welcome to our comprehensive educational platform, where students can seamlessly manage their academic journey. 
            Enroll easily to access a treasure trove of resources, including detailed notes and engaging lecture videos from expert instructors. 
            Prepare effectively with our tools, take exams, and instantly check your results to track your progress. 
            Tailor your study plan based on performance insights and stay motivated as you achieve your goals. 
            Your personalized profile keeps everything organized, from courses to achievements, all in one place.
             Experience hassle-free learning, all designed to help you succeed!
            </p>
            <div className="row g-4 text-dark mb-5">
              <div className="col-sm-6">
                <i className="fas fa-share text-primary me-2" />
                Check Videos and Notes 
              </div>
              <div className="col-sm-6">
                <i className="fas fa-share text-primary me-2" />
                Exams Facilities 
              </div>
              <div className="col-sm-6">
                <i className="fas fa-share text-primary me-2" />
                Check Your Result and Upgrade Yourself
              </div>
              <div className="col-sm-6">
                <i className="fas fa-share text-primary me-2" />
                Your Profile and Achievements
              </div>
            </div>
            <a href="/adminlogin" className="btn btn-primary py-3 px-5 rounded-pill">
                    Admin Portal 
                    
                                <i className="fas fa-arrow-right ps-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Fact Start*/}
    <div className="container-fluid faqt py-6">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                <div className="faqt-item bg-primary rounded p-4 text-center">
                  <i className="fas fa-users fa-4x mb-4 text-white" />
                  <h1 id="shownoofstudents" className="display-4 fw-bold" data-toggle="counter-up">
                  Loading
                  </h1>
                  <p className="text-dark text-uppercase fw-bold mb-0">
                    Registered Students
                  </p>
                </div>
              </div>
              <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                <div className="faqt-item bg-primary rounded p-4 text-center">
                  <i className="fas fa-users-cog fa-4x mb-4 text-white" />
                  <h1 id="shownoofbatches" className="display-4 fw-bold" data-toggle="counter-up">
                  Loading
                  </h1>
                  <p className="text-dark text-uppercase fw-bold mb-0">
                    Enrolled Batches
                  </p>
                </div>
              </div>
              <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                <div className="faqt-item bg-primary rounded p-4 text-center">
                  <i className="fas fa-check fa-4x mb-4 text-white" />
                  <h1 id="shownoofexams" className="display-4 fw-bold" data-toggle="counter-up">

                    Loading
                  </h1>
                  <p className="text-dark text-uppercase fw-bold mb-0">
                    Conducted Exams
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
            <div className="video">
              <button
                type="button"
                className="btn btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-bs-target="#videoModal"
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Video */}
    <div
      className="modal fade"
      id="videoModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Youtube Video
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* 16:9 aspect ratio */}
            <div className="ratio ratio-16x9">
              <iframe
                className="embed-responsive-item"
                src=""
                id="video"
                allowFullScreen=""
                allowscriptaccess="always"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
       <Studentfooter></Studentfooter>
  </>
  
    );
}
