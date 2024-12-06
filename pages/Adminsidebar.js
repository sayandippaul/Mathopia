import Link from 'next/link';
import React from 'react'

const Adminsidebar = () => {
    var i=0;
    function sidebar(){
      var element = document.getElementById("wrapper");
      if(i==0){
  
        element.classList.add("toggled");
        i=1;
      }
      else{
        element.classList.remove("toggled");
        i=0;
     
      }
    }
    
   
    return (
       <>
        <div id="sidebar-wrapper" >
     <div class="brand-logo">
      <a href="index.html">
       <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon"/>
       {/* <h5 class="logo-text">Dashtreme Admin</h5> */}


     </a>
   </div>
   <ul class="sidebar-menu do-nicescrol">
      <li class="sidebar-header">NAVIGATION</li>
      <li>
      <Link href="/adminprofile"><span>Mathopia Profile</span></Link> 
      </li>
      <li>
          {/* <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span> */}
      <Link href="/adminbatches"><span>Batches</span></Link> 

      </li>
      <li>
          {/* <i class="zmdi zmdi-grid"></i> <span>Tables</span> */}
      <Link href="/adminstudent"><span>Add/View Students</span></Link> 

      </li>

      <li>
          {/* <i class="zmdi zmdi-invert-colors"></i> <span>UI Icons</span> */}
      <Link href="/adminnotesvideos"><span>Videos/Notes</span></Link> 

      </li>

      <li>
          {/* <i class="zmdi zmdi-invert-colors"></i> <span>UI Icons</span> */}
      <Link href="/adminquestion"><span>Exams</span></Link> 

      </li>
      
      <li>
          {/* <i class="zmdi zmdi-invert-colors"></i> <span>UI Icons</span> */}
      <Link href="/"><span>Mathopia Client Side</span></Link> 

      </li>

     
     
      {/* <li>
        <a href="calendar.html">
          <i class="zmdi zmdi-calendar-check"></i> <span>Calendar</span>
          <small class="badge float-right badge-light">New</small>
        </a>
      </li>

      <li>
        <a href="profile.html">
          <i class="zmdi zmdi-face"></i> <span>Profile</span>
        </a>
      </li>

      <li>
        <a href="login.html" target="_blank">
          <i class="zmdi zmdi-lock"></i> <span>Login</span>
        </a>
      </li>

       <li>
        <a href="register.html" target="_blank">
          <i class="zmdi zmdi-account-circle"></i> <span>Registration</span>
        </a>
      </li>

      <li class="sidebar-header">LABELS</li>
      <li><a href="javaScript:void();"><i class="zmdi zmdi-coffee text-danger"></i> <span>Important</span></a></li>
      <li><a href="javaScript:void();"><i class="zmdi zmdi-chart-donut text-success"></i> <span>Warning</span></a></li>
      <li><a href="javaScript:void();"><i class="zmdi zmdi-share text-info"></i> <span>Information</span></a></li> */}

    </ul>
   
   </div>




   <nav className="navbar navbar-expand fixed-top">
        <ul className="navbar-nav mr-auto align-items-center">
          <li className="nav-item" onClick={sidebar}>
            <a className="nav-link toggle-menu" >
              <i className="icon-menu menu-icon" />
            </a>
          </li>
          <li className="nav-item">
            {/* <form className="search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keywords"
              />
              <a href="javascript:void();">
                <i className="icon-magnifier" />
              </a>
            </form> */}
          </li>
        </ul>
        
      </nav>
   
  
       </>  )
}

export default Adminsidebar
