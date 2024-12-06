import React from 'react'
import Studenthead from "./studenthead";
import Studentfooter from './studentfooter';
import Script from 'next/script'




const Studentresult = () => {
  return (
    <>
    <Script src="assetsadmin/js/studentresultjs.js"></Script>
    <Studenthead></Studenthead>
    
    <>
  <div
    className="container-fluid contact py-3 wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="p-5 bg-light rounded contact-form">
        <div className="row g-4">
          <div className="col-12">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              Details
            </small>
            <h1 className="display-5 mb-0" id="examname">
              Aptitude Exam 1
            </h1>
          </div>
          <div className="col-md-6 col-lg-7">
            <p className="mb-4" id="syllabus">
              Successfully Given
            </p>
            <form>
              <input
                type="text"
                disabled="true"
                className="w-100 form-control p-3 mb-4 border-primary bg-light"
                id="totalquestion"
                placeholder="Total Questions:10"
              />
              <input
                type="text"
                disabled="true"
                className="w-100 form-control p-3 mb-4 border-primary bg-light"
                id="duration"
                placeholder="Duration:120 mins"
              />
              <input
                type="text"
                disabled="true"
                className="w-100 form-control p-3 mb-4 border-primary bg-light"
                id="date"
                placeholder="Date:29-08-1029"
              />
              <a
                onClick={() => showresult()}
                className="w-100 btn btn-primary text-dark form-control p-3 mb-4 border-primary bg-primary"
                href="#viewquestions"
              >
                View Answer Sheet
              </a>
              .
            </form>
          </div>
          <div className="col-md-6 col-lg-5">
            <div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                <div className="">
                  <h4 id="showmarks">23/40</h4>
                  <p id="showfullmarks">Full Marks:40</p>
                </div>
              </div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                <i className="fas fa-envelope fa-2x text-primary me-4" />
                <div className="">
                  <h4 id="correct">Correct Attempts:4</h4>
                </div>
              </div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                <div className="">
                  <h4 id="wrong">Wrong Attempts:3</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  <div
    className="container-fluid contact py-3 wow bounceInUp"
    style={{ display: "none" }}
    id="result"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="p-5 bg-light rounded contact-form">
        <div className="col-12 mb-4">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            answers
          </small>
          <h1 className="display-5 mb-0">Answersheet</h1>
        </div>
        <div className="row g-4" id="showanswers">
          <div className="col-md-6 col-lg-6">
            <div className="d-inline-flex w-100 border border-primary p-4 col-lg-12 rounded mb-4">
              <div className="">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  One or more than option correct (+4,-1)
                </small>
                <h4>1) name of alu lorem8</h4>
                <div className="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                  <img
                    src="img/about.jpg"
                    style={{ height: 150, width: "100%", overflowY: "scroll" }}
                    className="img-fluid rounded my-2"
                    alt=""
                  />
                </div>
                <h6>option 1: rtr</h6>
                <h6>option 2: 9tr</h6>
                <h6>option 3: 5</h6>
                <h6>option 4: 7</h6>
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  <strong style={{ fontWeight: "bolder" }}>
                    Correct Answer :{" "}
                  </strong>
                  <span id="sid">4</span>
                </small>
                <small className="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3">
                  <strong style={{ fontWeight: "bolder" }}>
                    Your Answer :{" "}
                  </strong>
                  <span id="sid">4</span>
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
              <i className="fas fa-envelope fa-2x text-primary me-4" />
              <div className="">
                <h4>Correct Attempts:4</h4>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

   
    <Studentfooter></Studentfooter>
   

    </>
  )
}

export default Studentresult
