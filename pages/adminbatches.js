import React, { useEffect } from 'react'
import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import Script from 'next/script'

import { useState } from 'react';


var Adminbatches = () => {
  var [bid,setbid]=useState("b0");
  useEffect(() => {
    // Update the document title
    // document.title = `Admin Batches`;



    if (typeof window !== "undefined") {
      var script = document.createElement("script");
      script.src = "assetsadmin/js/adminbatchesjs.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Script loaded successfully!");
      };

      script.onerror = () => {
        console.error("Error loading script!");
      };
    }



    var bid=localStorage.getItem("lastbid");
    if(bid==null || bid==undefined){
      bid="b0";
    } 
    // extract b from bid and add 1 to it covert b11 to 11

    bid=bid.slice(1);
  
    bid=parseInt(bid)+1;
    bid="b"+bid;
    setbid(bid);
   
  });

  var hello=new Date().toLocaleDateString();
  // var bid=0;

  return (
    <>
    {/* <Script src="assetsadmin/js/adminbatchesjs.js"></Script> */}
    <Adminhead></Adminhead>
    
      <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
        
  <div id="wrapper">

    <Adminsidebar></Adminsidebar>

    <>
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
                onClick={() => toggleDiv('create')}

              >
                Add New Batch
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
                Edit Batches
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
    <div className="card divshow" id="create" style={{ display: "none",height:"100vh" }}>
      <div className="card">
        <div className="card-body">
          <h5>Create Batch here</h5>
          <hr />
          <form onSubmit={()=> createbatch(event)}>
            <div className="form-row col-12">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Batch-Id</label>
                <input
                  type="text"
                  disabled="true"
                  className="form-control"
                  id="cbid"
                  placeholder={"Batch-"+bid}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Batch Creation day</label>
                <input 
                  type="text"
                  disabled="true"
                  className="form-control"
                  id="cbdate"
                  placeholder={hello}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Batch Name</label>
              <input
              required
                type="text"
                className="form-control"
                id="cbname"
                placeholder="mention Class + name to recognise batch later"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nobatchesperweek">No Of days Per week</label>
              <input
                type="number"
                required
                className="form-control"
                id="cnobatchesperweek"
                placeholder=""
              />
            </div>
            <div
              id="showmultiplebatchescreate"
              style={{ height: "auto" }}
            ></div>
            <button type="submit"  className="btn btn-primary">
              Create Batch
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
                            <th scope="col">No of students</th>
                            <th scope="col">edit batch(locked)</th>
                            <th scope="col">View batch students(locked)</th>
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
            <div className="card" style={{ display: "none" }} id="editbatch" tabindex="0">
              <div className="card-body">
                <form>
                  <div className="form-row col-12">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">Batch-Id</label>
                      <input
                        type="text"
                        disabled="true"
                        className="form-control"
                        id="batchIdInput"
                        placeholder="Batch-01"
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor="inputAddress">Edit Batch Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="batchNameInput"
                          placeholder="mention Class + name to recognise batch later"
                        />
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="inputAddress">Previous Batch Day</label>
                        <input
                          type="text"
                          disabled="true"
                          className="form-control"
                          id="batchDayInput"
                          placeholder="mention Class + name to recognise batch later"
                        />
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="inputAddress">
                          Previous Batch Time
                        </label>
                        <input
                          type="text"
                          disabled="true"
                          className="form-control"
                          id="batchTimeInput"
                          placeholder="mention Class + name to recognise batch later"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row col-12">
                    <div className="form-group col-lg-5">
                      <label>Edit Batch Day</label>
                      <select className="form-control col-12" id="editbatchday">
                        <option selected="">Monday</option>
                        <option>tuesday</option>
                        <option>wednesday</option>
                        <option>thursday</option>
                        <option>friday</option>
                        <option>saturday</option>
                        <option>sunday</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-3">
                      <label htmlFor="batchstimeInput">Edit Starting Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="batchstimeInput"
                      />
                    </div>
                    <div className="form-group col-lg-4">
                      <label htmlFor="batchetimeInput">Edit Ending Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="batchetimeInput"
                      />
                    </div>
                  </div>
                  <button onClick={() =>editsavebatch()}  type="button" className="btn btn-success">
                    Save batch
                  </button>
                </form>
              </div>
            </div>
            <div
              className="card"
              id="viewbatchstudents"
              tabindex="0"
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
                <button onClick={()=> addstudenttobatch()} className="btn btn-success">Add Now</button>
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
                          <button className="btn btn-primary">
                            View profile
                          </button>
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
    {/* view students */}
    {/* End container-fluid*/}
  </div>
  {/*End content-wrapper*/}
</>

   
    <Adminfooter></Adminfooter>
   
    </div>
    </div>

    </>
  )
}

export default Adminbatches
