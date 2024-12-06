import React from 'react'

const Studentfooter = () => {
    return (<>
    
    {/* Footer Start */}
    <div
      className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h1 className="text-primary">
                Mathopia<span className="text-dark">Admin</span>
              </h1>
              <p className="lh-lg mb-4">
              "Education opens doors to endless opportunities; learn, grow, and thrive with knowledge as your most powerful companion and guide." </p>
              <div className="footer-icon d-flex">
                <a
                  className="btn btn-primary btn-sm-square me-2 rounded-circle"
                  href="https://github.com/sayandippaul"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayandip-paul-4b66aa220/"
                  className="btn btn-primary btn-sm-square rounded-circle"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="mb-4">Admin Features</h4>
              <div className="d-flex flex-column align-items-start">
                <a className="text-body mb-3" href="">
                  <i className="fa fa-check text-primary me-2" />
                  Upload Videos,Notes 
                </a>
                <a className="text-body mb-3" href="">
                  <i className="fa fa-check text-primary me-2" />
                  Create batches and add students
                </a>
                <a className="text-body mb-3" href="">
                  <i className="fa fa-check text-primary me-2" />
                  Upload Exam and Exam Control
                </a>
                <a className="text-body mb-3" href="">
                  <i className="fa fa-check text-primary me-2" />
                 Approve Students
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="mb-4">Contact Us</h4>
              <div className="d-flex flex-column align-items-start">
                <p>
                  <i className="fa fa-map-marker-alt text-primary me-2" />Kolkata,West Bengal                </p>
                <p>
                  <i className="fa fa-user text-primary me-2" /> 
                  Sayandip Paul
                </p>
                <p>
                  <i className="fas fa-envelope text-primary me-2" />{" "}
                  sayandip126@gmail.com.com
                </p>
                              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="mb-4">Gallery</h4>
              <img
                    src="img/menu-01.jpg"
                    className="img-fluid rounded-circle border border-primary p-2"
                    alt=""
                  />
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Copyright Start */}
    <div className="container-fluid copyright bg-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-light">
              <a href="/">
                <i className="fas fa-copyright text-light me-2" />
                Mathopia
              </a>
              - All right reserved.
            </span>
          </div>
          <div className="col-md-6 my-auto text-center text-md-end text-white">
            {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
            {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
            {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://sayandippaul.github.io/resume/">
              Sayandip Paul
            </a>{" "}
          
          </div>
        </div>
      </div>
    </div>
    {/* Copyright End */}
    {/* Back to Top */}
    <a
      href="#"
      className="btn btn-md-square btn-primary rounded-circle back-to-top"
      style={{ marginLeft: 20, float: "left", position: "sticky" }}
    >
      <i className="fa fa-arrow-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
    </>
    )
}

export default Studentfooter