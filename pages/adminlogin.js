import React from 'react'
import Adminhead from './adminhead'
import Script from 'next/script'

const adminlogin = () => {
    return (
        
        <div style={{backgroundImage: 'url(assetsadmin/images/bg-themes/1.png)',"height":"100vh"}}>
            <Script src="assetsadmin/js/adminloginjs.js"></Script>
        <Adminhead></Adminhead>
      <div  className="bg-theme bg-theme1">
        
        <div className="mt-5">
            <div className="card card-authentication1 mx-auto my-2">
  <div className="card-body">
    <div className="card-content p-2">
      <div className="text-center">
        <img src="assets/images/logo-icon.png" alt="logo icon" />
      </div>
      <div className="card-title text-uppercase text-center py-3">Sign In</div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputUsername" className="sr-only">
            Admin_ID 
          </label>
          <div className="position-relative has-icon-right">
            <input
              type="text"
              id="adminid"
              className="form-control input-shadow"
              placeholder="Enter Admin_ID"
            />
            <div className="form-control-position">
              <i className="icon-user" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword" className="sr-only">
            Password
          </label>
          <div className="position-relative has-icon-right">
            <input
              type="password"
              id="password"
              className="form-control input-shadow"
              placeholder="Enter Password"

            />
            <div className="form-control-position">
              <i className="icon-lock" />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <div className="icheck-material-white">
              <input type="checkbox" id="user-checkbox" disabled checked defaultChecked="" />
              <label htmlFor="user-checkbox">Remember Me</label>
            </div>
          </div>
          <div className="form-group col-6 text-right">
            <a href="reset-password.html">Forgot Password?</a>
          </div>
        </div>
        <button type="button" onClick={() => login()}  className="btn btn-light btn-block">
          Sign In
        </button>
        </form>
    </div>
  </div>
  <div className="card-footer text-center py-3">
    <p className="text-warning mb-0">
      Want to take a glance of admin portal? <a href="">Fill Adminid: 3 and password: admin</a>
    </p>
  </div>
</div>

        </div>
        </div>
        </div>
    )
}

export default adminlogin
