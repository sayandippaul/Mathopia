import React from 'react'
import Adminhead from "./adminhead";
import Adminsidebar from './Adminsidebar';
import Adminfooter from './adminfooter';
import { useEffect } from 'react';
const adminindex = () => {
  useEffect(() => {
    var url = "http://localhost:5000";
  
           }
  , []);
  
  return (
    <>
    <Adminhead></Adminhead>
    
      <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)'}} className="bg-theme bg-theme1">
        
  <div id="wrapper">
    <Adminsidebar></Adminsidebar>
   
    <div className="clearfix" />
    <div className="content-wrapper">
      <div className="container-fluid">
        {/*Start Dashboard Content*/}
        <div className="card mt-3">
          <div className="card-content">
            <div className="row row-group m-0">
              <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                  <h5 className="text-white mb-0">
                    26{" "}
                    <span className="float-right">
                      <i className="fa fa-shopping-cart" />
                    </span>
                  </h5>
                  <div className="progress my-3" style={{ height: 3 }}>
                    <div className="progress-bar" style={{ width: "55%" }} />
                  </div>
                  <p className="mb-0 text-white small-font">
                    Total Students{" "}
                    <span className="float-right">
                      +4.2% <i className="zmdi zmdi-long-arrow-up" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                  <h5 className="text-white mb-0">
                    3{" "}
                    <span className="float-right">
                      <i className="fa fa-usd" />
                    </span>
                  </h5>
                  <div className="progress my-3" style={{ height: 3 }}>
                    <div className="progress-bar" style={{ width: "55%" }} />
                  </div>
                  <p className="mb-0 text-white small-font">
                    Total Exams Taken{" "}
                    <span className="float-right">
                      +1.2% <i className="zmdi zmdi-long-arrow-up" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                  <h5 className="text-white mb-0">
                    20{" "}
                    <span className="float-right">
                      <i className="fa fa-eye" />
                    </span>
                  </h5>
                  <div className="progress my-3" style={{ height: 3 }}>
                    <div className="progress-bar" style={{ width: "55%" }} />
                  </div>
                  <p className="mb-0 text-white small-font">
                    Total Notification{" "}
                    <span className="float-right">
                      +5.2% <i className="zmdi zmdi-long-arrow-up" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                  <h5 className="text-white mb-0">
                    5{" "}
                    <span className="float-right">
                      <i className="fa fa-envira" />
                    </span>
                  </h5>
                  <div className="progress my-3" style={{ height: 3 }}>
                    <div className="progress-bar" style={{ width: "55%" }} />
                  </div>
                  <p className="mb-0 text-white small-font">
                    New students{" "}
                    <span className="float-right">
                      +2.2% <i className="zmdi zmdi-long-arrow-up" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="card">
              <div className="card-header">
                Scheduled class
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
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-circle mr-2 text-white" />
                    Today
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-circle mr-2 text-light" />
                    Tomorrow
                  </li>
                </ul>
                {/* <div  class="chart-container-1"> */}
                {/* <canvas id="chart1"></canvas> */}
                {/* </div> */}
              </div>
              <div className="row m-0 row-group text-center border-top border-light-3">
                <div className="col-12 ">
                  <div className="p-3">
                    <h5 className="mb-0">Class XI</h5>
                    <small className="mb-0">11pm-12pm </small>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="p-3">
                    <h5 className="mb-0">15:48</h5>
                    <small className="mb-0">
                      Visitor Duration{" "}
                      <span>
                        {" "}
                        <i className="fa fa-arrow-up" /> 12.65%
                      </span>
                    </small>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3">
                    <h5 className="mb-0">245.65</h5>
                    <small className="mb-0">
                      Pages/Visit{" "}
                      <span>
                        {" "}
                        <i className="fa fa-arrow-up" /> 5.62%
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="card">
              <div className="card-header">
                New Students
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
              {/* <div class="card-body">
		     <div class="chart-container-2">
         <canvas id="chart2"></canvas>
			  </div>
     </div> */}
              <canvas
                style={{
                  maxHeight: 300,
                  maxWidth: 700,
                  margin: "auto",
                  marginBottom: 30
                }}
                id="students"
              />
              <div className="table-responsive">
                <table className="table align-items-center">
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa fa-circle text-white mr-2" /> Sayandip
                        Paul
                      </td>
                      <td> Class-XI</td>
                      <td
                        style={{
                          maxWidth: 100,
                          maxHeight: 100,
                          overflowX: "scroll"
                        }}
                      >
                        sir i am Sayandip Paul imet you on wednesday{" "}
                      </td>
                      <td>
                        <button type="submit" className="btn btn-success px-5 ">
                          <i className="icon-lock" /> Approve
                        </button>
                      </td>
                      <td>
                        <button type="submit" className="btn btn-danger px-5">
                          <i className="icon-lock" /> Reject
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-circle text-light-1 mr-2" />
                        Affiliate
                      </td>
                      <td>$2602</td>
                      <td>+25%</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-circle text-light-2 mr-2" />
                        E-mail
                      </td>
                      <td>$1802</td>
                      <td>+15%</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-circle text-light-3 mr-2" />
                        Other
                      </td>
                      <td>$1105</td>
                      <td>+5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*End Row*/}
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                Recent Order Tables
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
              <div className="table-responsive">
                <table className="table align-items-center table-flush table-borderless">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Photo</th>
                      <th>Product ID</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Shipping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Iphone 5</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405822</td>
                      <td>$ 1250.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Earphone GL</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405820</td>
                      <td>$ 1500.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>HD Hand Camera</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405830</td>
                      <td>$ 1400.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "70%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Clasic Shoes</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405825</td>
                      <td>$ 1200.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Hand Watch</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405840</td>
                      <td>$ 1800.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Clasic Shoes</td>
                      <td>
                        <img
                          src="https://via.placeholder.com/110x110"
                          className="product-img"
                          alt="product img"
                        />
                      </td>
                      <td>#9405825</td>
                      <td>$ 1200.00</td>
                      <td>03 Aug 2017</td>
                      <td>
                        <div className="progress shadow" style={{ height: 3 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*End Row*/}
        {/*End Dashboard Content*/}
        {/*start overlay*/}
        <div className="overlay toggle-menu" />
        {/*end overlay*/}
      </div>
      {/* End container-fluid*/}
    </div>
    <Adminfooter></Adminfooter>
   
    </div>
    </div>

    </>
  )
}

export default adminindex
