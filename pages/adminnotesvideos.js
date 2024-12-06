import React from 'react'
import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import Script from 'next/script'
import { useEffect } from 'react';
import { useRef } from 'react';

var Adminnotesvideos = () => {
  var hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
  
    if (typeof window !== "undefined") {
      var script = document.createElement("script");
      script.src = "assetsadmin/js/adminnotesvideosjs.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Script loaded successfully!");
      };

      script.onerror = () => {
        console.error("Error loading script!");
      };
    }
    
  }
  }, []);

  return (
    <>
    {/* <Script src="assetsadmin/js/.js"></Script> */}
    <style jsx>{`
       
.progress-container {
  margin-top: 20px;
  display: none;
}
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
}
.progress {
  width: 0;
  height: 100%;
  background-color: #3c84f8;
}
.cancel-button {
  margin-top: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  display: none;
}

      `}</style>
      {/* <style global jsx>{`
        body {
          background: black;
        }
      `}</style> */}
    <Adminhead></Adminhead>
    
      <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
        
  <div id="wrapper">
    <Adminsidebar></Adminsidebar>

    <div className="content-wrapper">
  <div className="card ">
    <div className="card-content">
      <div className="row row-group m-0">
        <div className="col-12 col-lg-6 col-xl-4 border-light">
          <div className="card-body">
            <button
              type="button"
              id="btnstat"
              className=" btn btn-primary buttonshow btn-block btn-toggle"
              
              onClick={() => toggleDiv('stat')}
            >
              Statistics
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 border-light">
          <div className="card-body">
            <button
              type="button"
              id="btncreate"
              className="btn btn-light buttonshow btn-block btn-toggle"
           
              onClick={() => {
                toggleDiv('create');
                handleAuthClick();
              }}

              
            >
              Add Notes/Videos
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 border-light">
          <div className="card-body">
            <button
              type="button"
              id="btnedit"
              className="btn btn-light buttonshow btn-block btn-toggle"
              onClick={() => toggleDiv('edit')}

            >
              List Notes/videos
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* statistics */}
  <div className="card divshow" id="stat">
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
            <li style={{ color: "greenyellow" }} className="list-inline-item">
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
            <h5 className="mb-0" style={{ color: "rgb(237, 111, 20)" }}>
              Upcoming Exams
            </h5>
            <small className="mb-0">
              {" "}
              <span>
                {" "}
                <i
                  style={{ color: "rgb(237, 111, 20)", marginRight: 5 }}
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
  {/* create batch */}
  <div className="card divshow" id="create" style={{ display: "none" }}>
    <div className="card">
      <div className="card-body">
        <h5 onClick={() =>handleAuthClick()}>Add Notes/Videos</h5>
        <hr />
        <form>
          <label htmlFor="inputState">Choose Batch</label>
          <div
            className="form-group card col-md-12"
            style={{ overflowY: "scroll", height: "auto", maxHeight: 100 }}
          >
            <div
              className="form-check col-lg-12"
              id="showbatchesinquestion"
            ></div>
          </div>
          <div id="showtopics"></div>
          <button
            type="button"
            id="saveallfield"
            onClick={() => saveallfield()}

            className=" form-row col-4 btn btn-success mr-2"
          >
            Save Videos/Notes
          </button>
          <button
            type="button"
            onClick={() => addnewfield()}

            className=" form-row col-4 btn btn-primary"
          >
            Add New Field
          </button>
        </form>
      </div>
    </div>
  </div>
  {/* edit batches */}
  <div className="card divshow" id="edit" style={{ display: "none" }}>
    <div className="card">
      <div className="card-body">
        <h5>Edit Your Batch here</h5>
        <hr />
        <div className="container-fluid mt-2">
          <div>
            {/* Choose Batch:<br>
        <select class="form-select form-select-lg mb-3 btn btn-light col-lg-12"
          aria-label="Default select example">
          <option class="btn btn-dark" value="1">One</option>
          <option class="btn btn-dark" value="2">Two</option>
          <option class="btn btn-dark" value="3">Three</option>
        </select> */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Search Batches </h5>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search Batches By Name ,Batch Day,Time"
                    id="searchapprove"
                    onKeyUp={() => searchObjects()}
                  />
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">batch-id</th>
                          <th scope="col">Batch Name</th>
                          <th scope="col">Timing</th>
                          <th scope="col">Total videos/notes</th>
                          <th scope="col">View</th>
                          {/* <th scope="col">Handle</th> */}
                        </tr>
                      </thead>
                      <tbody id="showbatchesoptionedit">
                        <tr>
                          <th scope="row">b-1</th>
                          <td>Aptitide</td>
                          <td>monday 7am-9am</td>
                          <td>24</td>
                          <td>
                            <button className="btn btn-warning">
                              Edit now
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-success">
                              students list
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan={2}>Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
          <div className="card" style={{ display: "none" }} tabIndex="0" id="editbatch">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                    <li className="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#profile"
                        data-toggle="pill"
                        className="nav-link active"
                      >
                        <i className="icon-user" />{" "}
                        <span className="hidden-xs">Details</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#messages"
                        data-toggle="pill"
                        className="nav-link"
                      >
                        <i className="icon-envelope-open" />{" "}
                        <span className="hidden-xs">Videos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void();"
                        data-target="#note"
                        data-toggle="pill"
                        className="nav-link"
                      >
                        <i className="icon-note" />{" "}
                        <span className="hidden-xs">Notes</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content p-3">
                    <div className="tab-pane active" id="profile">
                      {/*/row*/}
                    </div>
                    <div className="tab-pane" id="messages">
                      {/* <div class="alert alert-info alert-dismissible" role="alert">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
               <div class="alert-icon">
              <i class="icon-info"></i>
               </div>
               <div class="alert-message">
                 <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
               </div>
                     </div> */}
                      <h5 className="mb-3">Video Listed</h5>
                      <div
                        style={{ height: "auto", padding: 5 }}
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Holy guacamole!</strong> You should check in on
                        some of those fields below.
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div
                            id="videosettings"
                            style={{ display: "none" }}
                            className="card"
                          >
                            <div className="card-body">
                              <h5 className="card-title">Settings</h5>
                              <p className="card-text">
                                Video Id:
                                <input
                                  type="text"
                                  id="videoid"
                                  disabled="true"
                                  className="form-control"
                                  placeholder="video id"
                                />
                                Previous URL:
                                <input
                                  type="text"
                                  id="oldvideourl"
                                  disabled="true"
                                  className="form-control"
                                  placeholder="Enter New video Url"
                                />
                                New URL:{" "}
                                <input
                                  type="text"
                                  className="form-control"
                                  id="newvideourl"
                                  placeholder="Enter New video Url"
                                />
                                Change Title:{" "}
                                <input
                                  type="text"
                                  className="form-control"
                                  id="namevideo"
                                  placeholder="change name of the videos"
                                />
                              </p>
                              <a className="btn btn-primary">Update Video</a>
                              <a className="btn btn-danger">Delete Video</a>
                            </div>
                          </div>
                        </div>
                        <div id="showvideos" className="row col-12"></div>
                      </div>
                      {/* <button class="btn btn-primary">Update Video</button>
      <button class="btn btn-danger">Delete Video</button> */}
                      {/* <iframe width="420" height="315"
                     src="https://drive.google.com/file/d/1XdjQizGBnSRx8mckxHa3c0wY9BzwcA97/preview" allowfullscreen>
                     <src="https://www.youtube.com/watch?v="> 
                     
                     </iframe> */}
                    </div>
                    <div className="tab-pane" id="note">
                      {/* <div class="alert alert-info alert-dismissible" role="alert">
             <button type="button" class="close" data-dismiss="alert">&times;</button>
              <div class="alert-icon">
             <i class="icon-info"></i>
              </div>
              <div class="alert-message">
                <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
              </div>
                    </div> */}
                      <h5 className="mb-3">Noted Listed</h5>
                      <div
                        style={{ height: 50, padding: 5 }}
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Holy guacamole!</strong> You should check in on
                        some of those fields below.
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div id="notessettings" className="card">
                            <div className="card-body">
                              <h5 className="card-title">Settings</h5>
                              <p className="card-text">
                                Notes Id:
                                <input
                                  type="text"
                                  id="notesid"
                                  disabled="true"
                                  className="form-control"
                                  placeholder="Notes id"
                                />
                                Previous URL:
                                <input
                                  type="text"
                                  id="oldnotesurl"
                                  disabled="true"
                                  className="form-control"
                                  placeholder="Enter New Notes Url"
                                />
                                New URL:{" "}
                                <input
                                  type="text"
                                  id="newnotesurl"
                                  className="form-control"
                                  placeholder="Enter New Notes Url"
                                />
                                Change Title:{" "}
                                <input
                                  type="text"
                                  id="namenotes"
                                  className="form-control"
                                  placeholder="change name of the Notes"
                                />
                              </p>
                              <a className="btn btn-primary">Update Notes</a>
                              <a className="btn btn-danger">Delete Notes</a>
                            </div>
                          </div>
                        </div>
                        <div id="shownotes" className="row col-12"></div>
                      </div>
                      {/* <button class="btn btn-primary">Update Video</button>
      <button class="btn btn-danger">Delete Video</button> */}
                      {/* <iframe width="420" height="315"
                    src="https://drive.google.com/file/d/1XdjQizGBnSRx8mckxHa3c0wY9BzwcA97/preview" allowfullscreen>
                    <src="https://www.youtube.com/watch?v="> 
                    
                    </iframe> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          id="viewbatchstudents"
          style={{ display: "none" }}
        >
          <div className="card-body">
            Add New Student In This Batch:
            <br />
            <select
              className="form-select form-select-lg mb-3 btn btn-light col-lg-12"
              aria-label="Default select example"
              id="selectstudenttoadd"
            >
              <option className="btn btn-dark" value={1} selected="">
                no student selected
              </option>
              <option className="btn btn-dark" value={1}>
                Student 1
              </option>
              <option className="btn btn-dark" value={2}>
                student 2
              </option>
              <option className="btn btn-dark" value={3}>
                student 3
              </option>
            </select>
            <button className="btn btn-success">Add Now</button>
            <div className="table-responsive mt-4">
              <h5>View Batch Students</h5>
              <hr />
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">student-id</th>
                    <th scope="col">Student Name</th>
                    {/* <th scope="col">Action</th> */}
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="showstudentlist">
                  <tr>
                    <th scope="row">s-1</th>
                    <td>Sayandip Paul</td>
                    <td>
                      <button className="btn btn-primary">View profile</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        Remove Form Batch
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
    <Adminfooter></Adminfooter>
   
    </div>
    </div>

    </>
  )
}

export default Adminnotesvideos
