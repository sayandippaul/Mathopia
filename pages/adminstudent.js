import React, { useEffect,useRef } from 'react'

import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import Script from 'next/script'

const adminstudent = () => {
  var hasRun = useRef(false);

    useEffect(() => {
      // if (hasRun.current) {
        if (!hasRun.current) {
          hasRun.current = true;
      if (typeof window !== "undefined") {
        var script = document.createElement("script");
        script.src = "assetsadmin/js/adminstudentjs.js";
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
        <style jsx global>{`
        .hidescrollbar::-webkit-scrollbar {
            display: none;
          }
          
       `}</style>
        
    {/* <Script src="assetsadmin/js/adminstudentjs.js"></Script> */}

        <Adminhead></Adminhead>
        
          <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
            
      <div id="wrapper">
        <Adminsidebar></Adminsidebar>
        <div className="content-wrapper">
  <div className="card ">
    <div className="card-content">
      <div className="row row-group m-0">
        <div className="col-12 col-lg-6 col-xl-3 border-light">
          <div className="card-body">
            <button type="button" id="btnstat" className=" btn btn-primary buttonshow btn-block btn-toggle" onClick={() => toggleDiv('stat')} >Statistics</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 border-light">
          <div className="card-body">
            <button type="button" id="btncreate" className="btn btn-light buttonshow btn-block btn-toggle" onClick={() => toggleDiv('create')} >Add New Student</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 border-light">
          <div className="card-body">
            <button type="button" id="btnedit" className="btn btn-light buttonshow btn-block btn-toggle" onClick={() => toggleDiv('edit')} >Approve students</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 border-light">
          <div className="card-body">
            <button type="button" id="btnview" className="btn btn-light buttonshow btn-block btn-toggle" onClick={() => toggleDiv('view')} >View Students</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* statistics */}
  <div className="card divshow" id="stat">
    <div id="stat" className="card">
      <div className="card-header">Exam Statistics
        <div className="card-action">
          <div className="dropdown">
            <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
              <i className="icon-options" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="javascript:void();">Action</a>
              <a className="dropdown-item" href="javascript:void();">Another action</a>
              <a className="dropdown-item" href="javascript:void();">Something else here</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="javascript:void();">Separated link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <canvas style={{"max-height":"300px","max-width":"700px","margin":"auto","margin-bottom":"30px"}} id="myChart" />
        <div style={{"margin-left":"auto"}}>
          <ul>
            <li className="list-inline-item"><i className="fa fa-circle mr-2 text-white" />Exams</li>
            <li style={{"color":"greenyellow"}} className="list-inline-item"><i style={{"color":"greenyellow"}} className="fa fa-circle mr-2 " />Ongoing</li>
            <li style={{"color":"rgb(237, 111, 20)"}} className="list-inline-item"><i style={{"color":"rgb(237, 111, 20)"}} className="fa fa-circle mr-2 " />Not Started
            </li>
            <li style={{"color":"rgb(243, 177, 177)"}} className="list-inline-item"><i style={{"color":"rgb(243, 177, 177)"}} className="fa fa-circle mr-2 " />Finished</li>
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
            <h5 className="mb-0" style={{"color":"greenyellow"}}>Ongoing Exam</h5>
            <small className="mb-0 "> <span style={{"color":"greenyellow"}}> <i className="fa fa-circle" />
                Aptitude</span></small>
          </div>
        </div>
        <div className="col-12">
          <div className="p-3">
            <h5 className="mb-0" style={{"color":"rgb(237, 111, 20)"}}>Upcoming Exams</h5>
            <small className="mb-0"> <span> <i style={{"color":"rgb(237, 111, 20)","margin-right":"5px"}} className="fa fa-circle" />2</span> exams pending</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* create batch */}
  <div className="card divshow" id="create" style={{"display":"none"}}>
    <div className="card">
      <div className="card-body">
        <h5>Add New Student</h5>
        <hr />
        <form>
          <div className="form-row col-md-12">
            <div className="form-group col-md-6">
              <label>Student-Id</label>
              <input type="text" disabled="true" className="form-control" id="scsid" placeholder="s-01" />
            </div>
            <div className="form-group col-md-6">
              <label>Today's Date</label>
              <input type="text" disabled="true" className="form-control" id="scdate" placeholder="29-09-89" />
            </div>
          </div>
          <div className="form-group col-12">
            <label>Student Name</label>
            <input type="text" className="form-control" id="scname" placeholder="Name of the student" />
          </div>
          <div className="form-row col-12">
            <div className="form-group col-md-6">
              <label>Phone Number</label>
              <input type="number" required className="form-control" id="scphone" placeholder maxLength={10} />
            </div>
            <div className="form-group col-md-6">
              <label>Email-Id</label>
              <input type="email" required className="form-control" id="scemail" placeholder />
            </div>
          </div>
          <label htmlFor="inputState">Select Batch</label>
          <div className="form-group card col-md-12" style={{"overflow-y":"scroll","height":"auto","max-height":"100px"}}>
            <div id="showbatchesincreate" className="form-check col-md-12">
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => addnewstudent()}>Add Student Now</button>
        </form>
      </div>
    </div>
  </div>
  {/* edit batches */}
  <div className="card divshow" id="edit" style={{"display":"none"}}>
    <div className="col-12 ">
      <div className="card">
        <div className="card-header">Approve Students
          <div className="card-action">
            <div className="dropdown">
              <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                <i className="icon-options" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" onClick={() => sortByname()} >Sort By Name</button>
                <button className="dropdown-item" onClick={() => sortByDate()} >Sort By Date</button>
                <button className="dropdown-item" onClick={() => sortByemail()}  >Sort By Email</button>
              </div>
            </div> 
          </div>
        </div>
        {/* <div class="card-body">
           <div class="chart-container-2">
             <canvas id="chart2"></canvas>
            </div>
         </div> */}
        <div id="showapprovemessagediv" style={{"height":"auto","padding":"5px","margin":"5px","display":"none"}}>
        </div>
        <div className="table-responsive mb-2">
          <input type="text" className="form-control mb-3" placeholder="Search Student By Name ,Email-ID,Contact Number" id="searchapprove"  onKeyUp={() => searchObjects()}/>
          <table className="table align-items-center table-bordered table-striped table-hover">
            <tbody id="showapprovelist">
              <tr><th>Sl.No</th>
                <th>Name</th>
                <th colSpan={3}>Batch</th>
                <th>Request Date</th>
                <th>Approve</th>
                <th>View</th>
                <th>Reject</th>
              </tr>
              <tr>
                <td>
                  1.
                </td>
                <td> Sayandip Paul</td>
                <td colSpan={3}> Class-XI</td>
                <td>
                  29-03-2023
                </td>
                <td>
                  <button type="button" className="btn btn-primary  "><i className="icon-lock" />View Message</button>
                </td>
                <td>
                  <button type="button" className="btn btn-success  "><i className="icon-lock" />Approve</button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger "><i className="icon-lock" />
                    Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/* view students */}
  <div className="card divshow" id="view" style={{"display":"none"}}>
    <div className="container-fluid mt-2">
      <br />
      Choose Batch:
      <br />
      <div id="showbatchesoption" className="col-12">
        {/* <option class="btn btn-dark" value="1">One</option>
                  <option class="btn btn-dark" value="2">Two</option>
                  <option class="btn btn-dark" value="3">Three</option> */}
        {/* </select> */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header"> <span id="batchnameshow">ALL Batches</span>
              <div className="card-action">
                <div className="dropdown">
                  <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                    <i className="icon-options" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" onClick={() => sortByname4()}>Sort By Name</button>
                    <button className="dropdown-item" onClick={() => sortByphone4()}>Sort By Phone</button>
                    <button className="dropdown-item" onClick={() => sortByemail4()}>Sort By Email</button>
                  </div>
                </div> 
              </div> 
            </div> 
            <div className="card-body">
              {/* <h5 class="card-title" >All Batches</h5> */}
              <div className="table-responsive" >
                <table className="table table-bordered table-striped table-hover">
                  {/* <thead>
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">First</th>
                                              <th scope="col">Last</th>
                                              <th scope="col">Handle</th>
                                              <th scope="col">Handle</th>
                                              <th scope="col">Handle</th>
                                              <th scope="col">Handle</th>
                                          </tr>
                                      </thead> */}
                  <tbody id="showstudentlist">
                    {/* <tr>
                                              <th scope="row">1</th>
                                              <td>Mark</td>
                                              <td>Otto</td>
                                              <td>@mdo</td>
                                              <td>@mdo</td>
                                              <td>@mdo</td>
                                              <td>@mdo</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">2</th>
                                              <td>Jacob</td>
                                              <td>Thornton</td>
                                              <td>@fat</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">3</th>
                                              <td colspan="2">Larry the Bird</td>
                                              <td>@twitter</td>
                                          </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>{/*End Row*/}
      <div className="col-lg-12" id="viewdetails" style={{"display":"none"}}>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-primary top-icon nav-justified">
              <li className="nav-item">
                <a href="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active"><i className="icon-user" /> <span className="hidden-xs">Profile</span></a>
              </li>
              <li className="nav-item">
                <a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-note" /> <span className="hidden-xs">Batches</span></a>
              </li>
              <li className="nav-item">
                <a href="javascript:void();" data-target="#settings" data-toggle="pill" className="nav-link"><i className="icon-settings" /> <span className="hidden-xs">Settings</span></a>
              </li>
            </ul>
            <div className="tab-content p-3" tabindex="0"  id="showstudentdetails">
            </div>
          </div>
        </div>
      </div>
      {/*start overlay*/}
      {/*end overlay*/}
    </div>
  </div>
  {/* End container-fluid*/}
</div>{/*End content-wrapper*/}


        <Adminfooter></Adminfooter>
       
        </div>
        </div>
    
        </>
    )
}

export default adminstudent
