



import React from 'react'
import Studenthead from "./studenthead";
import Studentfooter from './studentfooter';
import Script from 'next/script'
// import "../public/assetsadmin/js/studentvideonotesjs.js";


import { useEffect } from 'react';

const Studentvideonotes = () => {
  




  
  
  useEffect(() => {
    

    const loadScript = (url, callback) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = callback;
      document.body.appendChild(script);
  };

  // Load your JavaScript file
  loadScript("assetsadmin/js/studentvideonotesjs.js", () => {
      console.log("Script loaded successfully.");
      // You can place any code here that you want to execute after the script has loaded
  });



    

    


  }, [])
  
  
  return (
    <>
    <Studenthead></Studenthead>
    {/* <Script async defer src="assetsadmin/js/studentvideonotesjs.js"></Script> */}
    
    
    <>
  {/* main part */}
  {/* Hero Start */}
  <div
    style={{ height: 100 }}
    className="container-fluid bg-light py-3 my-1 mt-0"
  >
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1  mb-4">Study Materials </h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          Materials
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* Blog Start */}
  <div className="container-fluid blog py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <h1 className="display-5 mb-5">Notes And Videos List </h1>
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
        <select
          onChange={() => printvideoNotes(videonotes)}
          id="selectnotesvideos"
          className="col-lg-3 d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4  py-1 mb-3"
          aria-label="select Notes/Videos"
        >
          <option className="btn btn-dark" selected="true" value="v">
            Videos
          </option>
          <option className="btn btn-dark" value="n">
            Notes
          </option>
        </select>
        {/* <label for="select">Sort Contents</label> */}
        <select
          onChange={() => sort()}
          id="sortvalue"
          className="col-lg-3 d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1  mb-3"
          aria-label="select Notes/Videos"
        >
          <option className="btn btn-dark" selected="" value="d">
            Sort By Date (Newest One)
          </option>
          <option className="btn btn-dark" value="n">
            Sort By Name
          </option>
        </select>
      </div>
      <div className="row gx-4 justify-content-center " id="showcontent"></div>
    </div>
  </div>
  {/* Blog End */}
</>
   
    <Studentfooter></Studentfooter>
   

    </>
  )
}

export default Studentvideonotes
