import React from 'react'
import Head from "next/head";
import { Script } from 'next/script';
// import io from 'Socket.IO-client';
// import io from 'socket.io-client';
// import { Script } from 'next/script';'
import { useEffect } from 'react';

const Adminhead = () => {
// const socket = io();
useEffect(() => {
  var url = "http://localhost:5000";

        window.getalllastid = () =>{
          fetch(url+"/getalllastid",{
            method: 'GET',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Origin": "*",
            },
            })
            .then(response => response.json())
            .then(data => {
              localStorage.setItem("lastsid",data.lastsid);
              localStorage.setItem("lastbid",data.lastbid);
              localStorage.setItem("lastadminid",data.lastadminid);
              localStorage.setItem("lastvqid",data.lastvqid);
              localStorage.setItem("lastexamid",data.lastexamid);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
              } 
              getalllastid();
        }
, []);

    return (
        <>
        <Head>
    <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <title>Mathopia Admin</title>
  <link href="assetsadmin/css/pace.min.css" rel="stylesheet"/>

  <script src="assetsadmin/js/pace.min.js"></script>
  <script src="jquery-3.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
</script>
  <link rel="icon" href="assetsadmin/images/favicon.ico" type="image/x-icon"/>
  <link href="assetsadmin/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
  <link href="assetsadmin/plugins/simplebar/css/simplebar.css" rel="stylesheet"/>
  <link href="assetsadmin/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assetsadmin/css/animate.css" rel="stylesheet" type="text/css"/>
  <link href="assetsadmin/css/icons.css" rel="stylesheet" type="text/css"/>
  <link href="assetsadmin/css/sidebar-menu.css" rel="stylesheet"/>
  <link href="assetsadmin/css/app-style.css" rel="stylesheet"/>
  <script src="assetsadmin/js/jquery.min.js"></script>
  <script src="assetsadmin/js/popper.min.js"></script>
  <script src="assetsadmin/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

  <script src="assetsadmin/plugins/simplebar/js/simplebar.js"></script>
  <script src="assetsadmin/js/sidebar-menu.js"></script>
  <script src="assetsadmin/js/jquery.loading-indicator.js"></script>
  <script src="assetsadmin/js/app-script.js"></script>
  
<script src="https://apis.google.com/js/api.js"></script>



 {/* <script type="text/javascript"  src="socket.io/socket.io.js"></script> */}
 {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script> */}
   {/* <script src="assetsadmin/js/socketexample.js"></script> */}
{/* <script src="https://cdn.socket.io/4.8.1/socket.io.min.js" integrity="sha384-mkQ3/7FUtcGyoppY6bz/PORYoGqOl7/aSUMn2ymDOJcapfS6PHqxhRTMh1RR0Q6+" crossorigin="anonymous"></script> */}
<script async defer src="https://accounts.google.com/gsi/client"></script>
<script async defer src="https://apis.google.com/js/api.js"></script>
  {/* <script src="assetsadmin/js/index.js"></script> */}
   
    </Head>
    <div class="clearfix"></div>

    
        </>)
}

export default Adminhead
