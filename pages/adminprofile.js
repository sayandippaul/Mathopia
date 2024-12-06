import React, { useEffect } from 'react'
import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import Script from 'next/script'
import {useRef} from 'react';
var Adminprofile = () => {
  var hasRun = useRef(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      var script = document.createElement("script");
      script.src = "assetsadmin/js/adminprofilejs.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Script loaded successfully!");
      };

      script.onerror = () => {
        console.error("Error loading script!");
      };
    }
  }, []);

  return (
    <>
    <Adminhead></Adminhead>

    
      <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
        
  <div id="wrapper">
    <Adminsidebar></Adminsidebar>
    {/* <Script async="true" strategy="afterInteractive"  src="assetsadmin/js/adminprofilejs.js"></Script> */}


    <>
  <div className="content-wrapper">
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-lg-4">
          <div className="card profile-card-2">
            <div className="card-img-block">
              <img
              style={{width:"100%"}}
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0yHd5g6Tyu9pDASncUtjZAIMZDg1Ogphxg&s"
                alt="Card image cap"
              />
            </div>
            <div onClick={() => see()} className="card-body pt-5">
              <img
                src="data:image/png;base64,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"
                alt="profile-image"
                className="profile"
              />
              <h5 className="card-title" id="showname">
                Rajarshi Dutta
              </h5>
              <p className="card-text" id="showabout">
                Teacher of Coaching mathopia.
              </p>
              <div className="icon-block"></div>
            </div>
            <div className="card-body border-top border-light">
              <h6>More Admin List</h6>
              <div id="showalladminslist"></div>
              <hr />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
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
                    <span className="hidden-xs">Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void();"
                    data-target="#messages"
                    data-toggle="pill"
                    className="nav-link"
                  >
                    <i className="fa fa-bell-o" />{" "}
                    <span className="hidden-xs">Notification</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void();"
                    data-target="#edit"
                    data-toggle="pill"
                    className="nav-link"
                  >
                    <i className="icon-note" />{" "}
                    <span className="hidden-xs">Edit</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content p-3">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">
                    Admin-Id: <span id="showadminid" />
                  </h5>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Joined</h6>
                      <p id="showjoindate"></p>
                    </div>
                    <div className="col-md-12">
                      <h5 className="mt-2 mb-3">
                        <span className="fa fa-clock-o ion-clock float-right" />{" "}
                        Profile Details
                      </h5>
                      <div className="table-responsive">
                        <table className="table table-hover table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Email: </strong>{" "}
                                <span id="showemail">
                                  sayandip@126gmail.com
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Phone:</strong>{" "}
                                <span id="showphone">*f9828732093</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <div className="tab-pane" id="messages">
                  <div
                    className="alert alert-danger alert-dismissible"
                    role="alert"
                  >
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <div className="alert-icon">
                      <i className="icon-info" />
                    </div>
                    <div className="alert-message">
                      <span>
                        <strong>Note That ! </strong> Your Notification will be
                        deleted after 30 days automatically.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-striped">
                      <tbody id="shownotification">
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              9/4
                            </span>{" "}
                            Maxamillion ais the fix for tibulum tincidunt
                            ullamcorper eros.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ display: "none" }} id="showinputnotification">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Notification Content
                      </label>
                      <div className="col-lg-10">
                        <textarea
                          id="notificationcontent"
                          className="form-control"
                          type="text"
                          defaultValue={""}
                          
                        ></textarea>
                      </div>
                    </div>
                    <button
                      id="newnotificationbutton"
                      style={{ float: "right" }}
                      className="btn btn-warning  mt-2"
                    >
                      New Notification
                    </button>
                    <button
                      style={{ display: "none" }}
                      id="showinputnotificationbutton"
                      className="btn btn-success mt-2"
                      onClick={() => publish()}
                    >
                      Publish Notification
                    </button>
                  </div>
                </div>
                <div className="tab-pane" id="edit">
                  <form>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        {" "}
                        Admin-ID
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          disabled="true"
                          id="editadminid"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        {" "}
                        name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          id="editname"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        {" "}
                        About
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          id="editabout"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Email
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="email"
                          id="editemail"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Phone
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="number"
                          id="editphone"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          id="editpassword"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="button"
                          onClick={() => updateadmin()}
                          id="updateadmin"
                          className="btn btn-primary"
                          defaultValue="Update Your Profile"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*start overlay*/}
      <div className="overlay toggle-menu" />
      {/*end overlay*/}
    </div>
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

export default Adminprofile
