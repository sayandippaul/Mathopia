
require("dotenv").config();

var express = require("express");
const app = express();
const path = require("path");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 5000

var mongoose = require("mongoose");
var mongoString=process.env.mongoString;
// console.log(mongoString);
// mongoose.connect("mongodb://127.0.0.1:27017/rajarshi");
mongoose.connect(mongoString);
var database = mongoose.connection;
var cors = require("cors");
const e = require("express");

// var montharr=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
var montharr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

app.use(
  cors({
    origin: "*",
  })
);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
var allanswers = new mongoose.Schema({
  setno: {
    required: false,
    type: String,
  },
  issub: {
    required: false,
    type: String,
  },
  ansarr: {
    required: false,
    type: Array,
  },
  
}); 

// var batches = new mongoose.Schema({
//   coursename: {
//     required: true,
//     type: String,
//   },
//   coursetitle: {
//     required: true,
//     type: String,
//   },
//   coursecatagory: {
//     required: true,
//     type: String,
//   },
//   courseid: {
//     required: true,
//     type: String,
//   },
//   coursedescription: {
//     required: true,
//     type: String,
//   },
//   coursefees: {
//     required: true,
//     type: Number,
//   },
// });
var admissiondetails = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
  text:{
    required: false,
    type: String,
  },date:{
    required: false,
    type: String,
  }

});
var notificationdetails = new mongoose.Schema({

  content: {
    required: false,
    type: String,
  }, 
  date: {
    required: false,
    type: String,
  }
 
});
var admindetails = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },adminid: {
    required: false,
    type: String,
  },about: {
    required: false,
    type: String,
  },password: {
    required: false,
    type: String,
  },phone: {
    required: false,
    type: String,
  },email: {
    required: false,
    type: String,
  },joindate: {
    required: false,
    type: String,
  },

 
});
var batchdetails = new mongoose.Schema({
  bid: {
    required: false,
    type: String,
  },bname: {
    required: false,
    type: String,
  },bday: {
    required: false,
    type: String,
  },btime: {
    required: false,
    type: String,
  },

 
});
var videonotes = new mongoose.Schema({
  type: {
    required: false,
    type: String,
  },
  batches: {
    required: false,
    type: Array,
  },
  name: {
    required: false,
    type: String,
  },
  id: {
    required: false,
    type: String,
  },
  link: {
    required: false,
    type: String,
  },
  date: {
    required: false,
    type: String,
  },
  vqid: {
    required: false,
    type: String,
  }
});





var students = new mongoose.Schema(
  {
    name: {
      required: false,
      type: String,
    },
    sid: {
      required: false,
      type: String,
    },
    password: {
      required: false,
      type: String,
    },

    email: {
      required: false,
      type: String,
    },
    joiningdate: {
      required: false,
      type: String,
    },
    phone: {
      required: false,
      type: String,
    },
    approved: {
      required: false,
      type: String,
    },
    batch: {
      required: false,
      type: Array,
    },
    // timstamps:true,
    exams: {
      required: false,
      type: [allanswers],
    },
  },

  { timestamps: true }
);




var questionSchema = new mongoose.Schema({
  qid: {
    required: false,
    type: String,
  },
  ocm: {
    required: false,
    type: String,
  },
  owm: {
    required: false,
    type: String,
  },
  qtext: {
    required: false,
    type: String,
  },
  qimg: {
    required: false,
    type: String,
  },
  

  qType: {
    required: false,
    type: String,
  },
  op1: {
    required: false,
    type: String,
  },
  op2: {
    required: false,
    type: String,
  },
  op3: {
    required: false,
    type: String,
  },
  op4: {
    required: false,
    type: String,
  },
  
  optionSet: {
    required: false,
    type: String,
  },
  qTopic: {
    required: false,
    type: String,
  },
  oc: {
    required: false,
    type: String,
  },
});



var examSchema = new mongoose.Schema({
  setno: {
    required: false,
    type: String,
  },
  name: {
    required: false,
    type: String,
  },
  time: {
    required: false,
    type: String,
  },
  batches: {
    required: false,
    type: Array,
  },
  date: {
    required: false,
    type: String,
  },
  startingTime: {
    required: false,
    type: String,
  },
  status: {
    required: false,
    type: Number,
  },
  allquestions: {
    required: false,
    type: [questionSchema],
  },
  totalno: {
    required: false,
    type: String,
  },
  totaltopics: {
    required: false,
    type: Array,
  },
  nosubt: {
    required: false,
    type: String,
  },
  edo: {
    required: false,
    type: String,
  },
  edcm: {
    required: false,
    type: String,
  },
  edq: {
    required: false,
    type: String,
  },
  edwm: {
    required: false,
    type: String,
  },
});


























var Model = mongoose.model("student", students);
var CourseModel = mongoose.model("batches", batchdetails);
var AdmissionModel = mongoose.model("admission", admissiondetails);
var NotificationModel = mongoose.model("notices", notificationdetails);
var AdminModel = mongoose.model("admins", admindetails);
var VideoNotesModel = mongoose.model("videonotes", videonotes);
var AllExamsModel = mongoose.model("exams", examSchema);










































// var usp = io.of("/user");
io.on("connection",  function (socket) {
  console.log("usernew connected ");
  
  socket.on("message", function (msg) {
    console.log(msg);
    // usp.emit("message", msg);
  });

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
  });







app.use(express.json());

// final functions

app.post("/Addcourse", async (req, res) => {
  console.log(req.body);
    

{
  try {

    var checkcid = await CourseModel.findOne({ bid: req.body.bid });
    if (checkcid == null) {
      // console.log(checkmail);
      var data = new CourseModel({
bname:req.body.bname,
bid:req.body.bid,
btime:req.body.btime,
bday:req.body.bday,
        
      });

      var dataToSave = await data.save();
      res.status(200).json(dataToSave);
      // res.json(1);
    } else {
      res.json(0);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
});

app.get("/showcourses", async (req, res) => {
  try {
    var data = await CourseModel.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.post("/Addstudent", async (req, res) => {
  
  console.log("here" + req.body.username);
 
  try {
    // var result= await AdmissionModel.deleteOne({ email: req.body.email });
    // console.log(result);
  

    var checkmail = await Model.findOne({ email: req.body.email });
    if (checkmail == null){
      // console.log(checkmail);
      var data = new Model({
        name: req.body.username,
        sid: req.body.sid,
        password: "",
        email: req.body.email,
        joiningdate: new Date().toISOString().slice(0, 10),
        phone: req.body.phone,
        approved: 1,
        batch: req.body.batch,
        exams: [],
        

      });


      console.log(data);

      var dataToSave = await data.save();
      res.status(200).json(dataToSave);




      // res.json(1);
    } else {
      res.json(0);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/showstudent", async (req, res) => {
  try {
    var data = await Model.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/Addadmission", async (req, res) => {
  // console.log("here" + req.body.coursename);
    

{
  try {

    var checkcid = await AdmissionModel.findOne({ email: req.body.email });
    // console.log(checkid);
    // if (checkcid == null) {
      // console.log(checkmail);


     
      var data = new AdmissionModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        text: req.body.text,
        date:new Date().toISOString().slice(0, 10),
       });
       console.log(req.body);

      var dataToSave = await data.save();
      res.status(200).json(dataToSave);
      // res.json(1);
    // } else {
    //   res.json(0);
    // }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
});
app.get("/showadmission", async (req, res) => {
  try {
    var data = await AdmissionModel.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/showadmin", async (req, res) => {
  try {
    var data = await AdminModel.find();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/adminlogin", async (req, res) => {
  try {
    console.log(req.body);
    var data = await AdminModel.find({ adminid: req.body.adminid });
    // console.log(req.body.username)
    if (data.length == 0 || data[0].password != req.body.password) {
      res.json(0);
    } else {
      res.json(data);
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/Addnotification", async (req, res) => {
    

  {
    try {
  
      // var checkcid = await CourseModel.findOne({ courseid: req.body.courseid });
      // if (checkcid == null) {
        // console.log(checkmail);
        console.log(req.body);
        var data = new NotificationModel({
          content:req.body.content,
          date: req.body.date,
          
          
        });
  
        var dataToSave = await data.save();
        console.log(dataToSave);
        res.status(200).json(dataToSave);
       
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  });

  app.get("/shownotification", async (req, res) => {
    try {
      var data = await NotificationModel.find();
      // console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  

app.post('/updateadmin', async (req, res) => {
console.log(req.body);  

  try{
      var student = await AdminModel.findOne({adminid: req.body.adminid},{})
      // console.log(req.body.username)
      // console.log(student);
      if(student==null){
          res.json(0);
      }
      else{
      
    const updateadmin = await AdminModel.findOneAndUpdate(
      { adminid: req.body.adminid }, {
      $set: { "about":req.body.about,"name":req.body.name,"phone":req.body.phone,"email":req.body.email,"password":req.body.password},

        // res.json("1");
        
    });
    res.json(updateadmin);

          
          

      }
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

 
app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    var data = await Model.find({ sid: req.body.sid });
    // console.log(req.body.username)
    if(data.length==0 || data[0].password!=req.body.password || data[0].approved==0 ||data[0].password==""){
        res.json(0);
    }
    else{
        res.json(data);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 
  

app.post("/updatestudent", async (req, res) => {
  try {
    console.log(req.body.sid);
    var student = await Model.findOne({ sid: req.body.sid }, {});
    // console.log(req.body.username)
    // console.log(student);
    if (student == null) {
      res.json(0);
    } else {
      console.log(req.body);
      var values = Object.keys(req.body);
      var values1 = Object.values(req.body);

      // if(Object.values(req.body)!=""){
      // console.log(values);
      // }

      var mydata = {};
      for (var i = 0; i < values1.length - 1; i++) {
        if (values1[i] != "") {
          // console.log(values[i]+" "+values1[i]);
          mydata[values[i]] = values1[i];
        }
      }

      console.log(mydata);
      // console.log(values.batch);

      await Model.findByIdAndUpdate(student._id, mydata);
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/findonestudent", async (req, res) => {
  try {
    var student = await Model.findOne({ sid: req.body.sid });
    // console.log(req.body.username)
    // console.log(student);
    if (student == null) {
      res.json(0);
    } else {
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/register', async (req, res) => {
  try{
      console.log(req.body);
      var student = await Model.findOne({sid: req.body.sid})
      // console.log(req.body.username)
      console.log(student);
      if(student==null || student.password!=""){
          res.json(0);
      }
      else{
      
      
      await Model.findByIdAndUpdate(student._id, {
          password: req.body.password,
          email:  req.body.email,
          phone:  req.body.phone,
          name:  req.body.name,

           
        });
       res.json(student)

      }
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})



app.post("/Addvideonotes", async (req, res) => {
    

  {
    try {
  
      // var checkcid = await CourseModel.findOne({ courseid: req.body.courseid });
      // if (checkcid == null) {
        // console.log(checkmail);
        console.log(req.body);
        var data = new VideoNotesModel({
          type:req.body.type,
          batches:req.body.batches,
          name:req.body.name,
          id:req.body.id,
          link:req.body.link,
          date:req.body.date,
          vqid:req.body.vqid,
            
          
          
        });
  
        var dataToSave = await data.save();
        console.log(dataToSave);
        res.status(200).json(dataToSave);
       
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  });



  app.get("/showvideonotes", async (req, res) => {
    try {
      var data = await VideoNotesModel.find();
      // console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });


  app.post("/Addquestionset", async (req, res) => {
    try {
      var { setno, name, time, batches, date, startingTime, status, allquestions, totalno, totaltopics, nosubt, edo, edcm, edq, edwm } = req.body;
      var questionSet = new AllExamsModel({
        setno,
        name,
        time,
        batches,
        date,
        startingTime,
        status,
        allquestions,
        totalno,
        totaltopics,
        nosubt,
        edo,
        edcm,
        edq,
        edwm
      });
      await questionSet.save();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to add question set" });
    }
  });
        

  app.get("/getalllastid", async (req, res) => {
    var lastsid =  await Model.find().sort( {_id: -1}).limit(1);
    var lastcid =  await CourseModel.find().sort( {_id: -1}).limit(1);
    var lastnid =  await NotificationModel.find().sort( {_id: -1}).limit(1);
    var lastadminid =  await AdminModel.find().sort( {_id: -1}).limit(1);
    var lastvideonotesid =  await VideoNotesModel.find().sort( {_id: -1}).limit(1);
    var lastallexamid =  await AllExamsModel.find().sort( {_id: -1}).limit(1);

    var sidnew="",courseidnew="",notificationidnew="",admissionidnew="",adminidnew="",videonotesidnew="",allexamidnew="";
    if(lastsid.length == 0  ){
       sidnew="s-0";
    }
    else{
  sidnew=lastsid[0].sid;
    }

    if(lastcid.length == 0  ){

      courseidnew="b0";
    }
    else{
  courseidnew=lastcid[0].bid;
      
      
    }
    

    if(lastadminid.length == 0  ){
      adminidnew="0";
    }
    else{
      adminidnew=lastadminid[0].adminid;
    }
    if(lastvideonotesid.length == 0  ){
      videonotesidnew="vn0";
    }
    else{
      videonotesidnew=lastvideonotesid[0].vqid;
    }
    if(lastallexamid.length == 0  ){
      allexamidnew="e0";
    }
    else{
      allexamidnew=lastallexamid[0].setno;
    }
    var obj={"lastsid":sidnew,"lastbid":courseidnew,"lastadminid":adminidnew,"lastvqid":videonotesidnew,"lastexamid":allexamidnew};
    console.log(obj);
    res.send(obj);
  // // res.json(data);
  // // hello();
    
  //   // res. JSON.stringify(data);
  //   // res.status(500).json({ data });


  
  //  if(courseiddata.length== 0){
  //      courseidnew="#cid0";
  //   }
  //   else{
  //     courseidnew=courseiddata[0].courseid;
  //   }
  //   if(qiddata.length== 0){
  //     questionidnew="#q0";
  //  }
  //  else{
  //    questionidnew=qiddata[0].qid;
  //  }
   
  
  //   var obj={"cpcid":cpcidnew,"courseid":courseidnew,"qid":questionidnew,"aid":admiddat.length};
  //  console.log(obj);
  
  //   res.send(obj);
  // // res.json(data);
  // // hello();
  //   // res. JSON.stringify(data);
  //   // res.status(500).json({ data });
  
  }
  );
  

  app.post("/approveadmission", async (req, res) => {
    try {
      var result = await AdmissionModel.deleteOne({ email: req.body.email });
    console.log(result);
  
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.mail,
            pass: process.env.mailpassword,
          },
        });
        var mailOptions = {
          from: process.env.mail,
          to: req.body.email,
          subject: "Subject",
  
          html:
            `<div>
          <h1>Dear ` +
            req.body.name +
            `,</h1>
          <p>Your Application to the CPC education is Rejected By the Administration.Though you can kindly contact to the centre .</p>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            //   break;
            // do something useful
          }
        });
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 







  app.post("/rejectadmission", async (req, res) => {
    try {
      var result = await AdmissionModel.deleteOne({ email: req.body.email });
    console.log(result);
  
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.mail,
            pass: process.env.mailpassword,
          },
        });
        var mailOptions = {
          from: process.env.mail,
          to: req.body.email,
          subject: "Subject",
  
          html:
            `<div>
          <h1>Dear ` +
            req.body.name +
            `,</h1>
          <p>Your Application to the CPC education is Rejected By the Administration.Though you can kindly contact to the centre .</p>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            //   break;
            // do something useful
          }
        });
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  

























































app.post('/loginuserpage', async (req, res) => {
  try{
      console.log(req.body.cpcid);
      var data = await Model.find({cpcid: req.body.cpcid},)
      // console.log(req.body.username)
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

app.post("/updatepend", async (req, res) => {
  try {
    console.log(req.body.cpcid);
    var student = await Model.findOne({ cpcid: req.body.cpcid }, {});
    // console.log(req.body.username)
    console.log(student);
    if (student == null) {
      res.json(0);
    } else {
      transactionid = req.body.tid;
      
      feeslist = student.feedetails;
      var monthofees = "";
      for (var i = 0; i < feeslist.length; i++) {
        if (feeslist[i].transactionid == transactionid) {
          feeslist[i].status = 1;
          feeslist[i].date =new Date().toISOString().slice(0, 10);
          break;
        }
      }

      await Model.findByIdAndUpdate(student._id, {
        feedetails: feeslist,
        // registered:1;
      });

      const fs = require("fs");
      const puppeteer = require("puppeteer");

      (async () => {
        // launch a new chrome instance
        const browser = await puppeteer.launch({
          headless: true,
        });

        // create a new page
        const page = await browser.newPage();

        // set your html as the pages content
        // const html = fs.readFileSync(`./template.html`, 'utf8')
        const html = `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">    
                <title>Document</title>
            </head>
            <body>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Payment Receipt</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Transaction ID: ${req.body.tid}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Course Description </td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">CPCID:  ${req.body.cpcid}</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Course Name: ${student.course}</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Course Fees(Current): ${student.amount}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Biller Name:Anup Kumar Paswan</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Biller Contact Number:8981887239</td>
                      </tr>
                      <tr>
                        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Biller Address: Belgharia,Jatidndas-Nagar </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      </table></td>
                  </tr>
                </table></td>
                <td width="51%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="right"><img src="logo.png" alt="" width="150"  /></td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right"></td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right">Receipt Date :${new Date().toISOString().slice(0, 10)} </td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;" align="right">Payer</td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${student.name}</td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${student.phone}</td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${student.email}</td>
                  </tr>
                </table></td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" width="34%" height="32" align="center">Transcation Id</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="26%" align="center">Month</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="25%" align="center">Fees</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" width="15%" align="center">Date Of payment</td>
                  </tr>
                  <tr>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" height="32" align="center">${req.body.tid}</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${montharr[parseInt(curmonth-1)]}</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${student.amount}</td>
                    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" align="center">${new Date().toISOString().slice(0, 10)}</td>
                  </tr>
                </table></td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">Please Note:</td>
              </tr>
              <tr>
                <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Dear Student, the bill payment has been done for Month-${montharr[parseInt(curmonth-1)]}.</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">DECLARATION:</td>
              </tr>
              <tr>
                <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">This is an invoice of the receipt of the amount paid against for the Course done under CPC education as described above.  Subject to terms and conditions mentioned at the link.com</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2" align="center">(This is computer generated receipt and does not require physical signature.)  <br />CPC Education Belgharia-56<br />  For Online payment <br />  Paytm Number: <br /> Phone Pay number<br />Google Pay number<br /></td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
            </table>
            </body>
            </html>
            `;
        await page.setContent(html, {
          waitUntil: "domcontentloaded",
        });

        // create a pdf buffer
        const pdfBuffer = await page.pdf({
          format: "A4",
        });

        // or a .pdf file
        await page.pdf({
          format: "A4",
          path: `src/pdf/invoice.pdf`,
        });

        // close the browser
        await browser.close();
      })();

      var nodemailer = require("nodemailer");
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.mail,
          pass: process.env.mailpassword,
        },
      });
      var mailOptions = {
        from: process.env.mail,
        to: req.body.email,
        subject: "Subject",

        html:
          `<div>
              <h1>Dear ` +
          student.name +
          `,</h1>
              <p>Your Fees Payment Receipt.</p>`,
        attachments: [
          {
            filename: "invoice.pdf",
            path: "src/pdf/invoice.pdf",
          },
        ],
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          //   break;
          // do something useful
        }
      });

      res.json({ name: student.name, month: new Date().toISOString().slice(0, 10) });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/deletestudent", async (req, res) => {
  console.log("deleted");
  try {
    var result = await Model.deleteOne({ cpcid: req.body.cpcid });
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      var nodemailer = require("nodemailer");
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.mail,
          pass: process.env.mailpassword,
        },
      });
      var mailOptions = {
        from: process.env.mail,
        to: req.body.email,
        subject: "Subject",

        html:
          `<div>
        <h1>Dear ` +
          req.body.name +
          `,</h1>
        <p>Your course is completed.Now you are deactivated,thank you.If this is not expected kindly contact to the centre.</p>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          //   break;
          // do something useful
        }
      });
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/deletecourse", async (req, res) => {
  console.log("deleted");
  try {
    var result = await CourseModel.deleteOne({ courseid: req.body.courseid });
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/makepdf", (req, res) => {
  // res.send('Welcome in Express Server....!!!')
  // const fs = require('fs')
  // const fs = require('fs');
  // const axios = require('axios');
  // const FormData = require('form-data');
  // // Prepare the PDF Generation schema.
  // const generation = {
  // 	html: 'template.html',
  // };
  // // Read the HTML template from disk.
  // const template = fs.readFileSync('./template.html', { encoding: 'utf8' });
  // // Pack the data in a multipart request.
  // const body = new FormData();
  // body.append('template.html', template, { filename: 'template.html' });
  // body.append('generation', JSON.stringify(generation));
  // (async () => {
  // 	// Send the request to Processor.
  // 	const response = await axios.post('http://localhost:3000/process', body, {
  // 		headers: body.getHeaders(),
  // 		responseType: 'stream',
  // 	});
  // 	// Save the result to a file on disk.
  // 	await response.data.pipe(fs.createWriteStream('invoice.pdf'));
  // })();
});
// app.get('/showstudentfees',(req,res)=>{
// mongoose.connect(mongoString, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("studentcpc");
//     dbo.collection("students").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

app.get("/", (req, res) => {
  res.send("Welcome in Express Server....!!!");
  
  // try {
  //   // res.json(data);
  // } catch (error) {
  //   // res.status(500).json({ message: error.message });
  // }
});
// app.get('/showstudentfees',(req,res)=>{
// mongoose.connect(mongoString, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("studentcpc");
//     dbo.collection("students").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });


app.get("/showfeedback", async (req, res) => {
  try {
    var data = await FeedbackModel.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/getbatch", async (req, res) => {
  try {
    var data = await Model.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/loginid", async (req, res) => {
  try {
    console.log("hit");
    var data = await Model.findOne({ cpcid: req.body.cpcid });
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/showtopic", async (req, res) => {
  try {
    // console.log("hit");
    var data = await CourseModel.find({ coursecatagory: req.body.name });
    res.json(data);
    console.log(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
var d = new Date();

var curmonth = d.getMonth()+1;

app.post("/showcourses", async (req, res) => {
  try {
      if(req.body.catagory=="all"){
          var data = await CourseModel.find();

      }
      else{
          
          var data = await CourseModel.find({coursecatagory: req.body.catagory},{})
      }

  //   var data = await CourseModel.find();
    res.json(data);
    //console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/aboutcourse", async (req, res) => {
  try {
    var data = await CourseModel.findOne({ courseid: req.body.courseid });
    // console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.post("/registerstudent", async (req, res) => {
  try {
    console.log(req.body.cpcid);
    var student = await Model.findOne(
      { cpcid: req.body.cpcid, registered: "0" },
      {}
    );
    // console.log(req.body.username)
    console.log(student);
    if (student == null) {
      res.json(0);
    } else {
      transactionid = "cpcid3#first";
      feeslist = student.feedetails;

      for (var i = 0; i < feeslist.length; i++) {
        if (feeslist[i].transactionid == transactionid) {
          feeslist[i].status = 1;
        }
      }

      await Model.findByIdAndUpdate(student._id, {
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        feedetails: feeslist,
        // registered:1;
      });
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.post('/updatestudentuserpage', async (req, res) => {
  try{
      console.log(req.body.cpcid);
      var student = await Model.findOne({cpcid: req.body.oldcpcid},{})
      // console.log(req.body.username)
      // console.log(student);
      if(student==null){
          res.json(0);
      }
      else{

      
          console.log(req.body);
          var values = Object.keys(req.body);
          var values1 = Object.values(req.body);


          // if(Object.values(req.body)!=""){
          // console.log(values);
          // }

          var mydata = {};
          for(var i=0;i<values1.length-1;i++){
              if(values1[i]!=""){
                  // console.log(values[i]+" "+values1[i]);
                  mydata[values[i]] = values1[i];
              }

          }
          
console.log(mydata);
// console.log(values.batch);

          
      await Model.findByIdAndUpdate(student._id, mydata);
      res.json(student)

      }
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

app.post("/updatecourse", async (req, res) => {
  try {
    // console.log(req.body.cpcid);
    var course = await CourseModel.findOne({ courseid: req.body.oldcourseid }, {});
    // console.log(req.body.username)
    // console.log(student);
    if (course == null) {
      res.json(0);
    } else {
      console.log(req.body);
      var values = Object.keys(req.body);
      var values1 = Object.values(req.body);

      // if(Object.values(req.body)!=""){
      // console.log(values);
      // }

      var mydata = {};
      for (var i = 0; i < values1.length ; i++) {
        if (values1[i] != "") {
          // console.log(values[i]+" "+values1[i]);
          mydata[values[i]] = values1[i];
        }
      }

      console.log(mydata);
      // console.log(values.batch);

      await CourseModel.findByIdAndUpdate(course._id, mydata);
      res.json(course);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/updatefees", async (req, res) => {
  try {
    // console.log(req.body.cpcid);
    var course = await Model.findOne({ cpcid: req.body.cpcid }, {});
    // console.log(req.body.username)
    // console.log(student);
    if (course == null) {
      res.json(0);
    } else {
      console.log(req.body);
      var values = Object.keys(req.body);
      var values1 = Object.values(req.body);

      // if(Object.values(req.body)!=""){
      // console.log(values);
      // }

      var mydata = {};
      for (var i = 0; i < values1.length; i++) {
        if (values1[i] != "") {
          // console.log(values[i]+" "+values1[i]);
          mydata[values[i]] = values1[i];
        }
      }

      console.log(mydata);
      // console.log(values.batch);

      await Model.findByIdAndUpdate(course._id, mydata);
      res.json(course);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/sendreply", async (req, res) => {
  console.log("Successfully sent reply.");
      var nodemailer = require("nodemailer");
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.mail,
          pass: process.env.mailpassword,
        },
      });
      var mailOptions = {
        from: process.env.mail,
        to: req.body.email,
        subject: "Subject",

        html:
          `<div>
        <h1>Dear ` +
          req.body.name +
          `,</h1>
        <p>This Is the Reply from CPC Education of your Enquiry/Feedback.</p>
        <hr/>
        <p>`+req.body.message+`</p>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          //   break;
          // do something useful
        }
      });
    
});

app.post("/addfees", async (req, res) => {
  // var student = await studentModel.findById(req.body.sid)
  var student = await Model.findOne({ cpcid: "cpcid2" });

  // var fees= await feeModel.findOne({month: req.body.month,amount:req.body.amount})
  var fees = { fees: "276", status: "0", transactionid: "cpcid2#third" };
  // console.log("student: " + student + " fees: " + fees)

  try {
    await Model.findByIdAndUpdate(student._id, {
      $push: { feedetails: fees },
    });
    res.json("done");
  } catch (err) {
    console.log("====================================");
    console.log("error" + err);
    console.log("====================================");
  }
});



app.post("/addfeeseverymonth", async (req, res) => {
  var d = new Date();
    var curmonth = d.getMonth()+1;
    // console.log(curmonth+1);
  //  var curmonth=4;
    // var curyear = d.getyear()+1;

  var data = await Model.find();
for(var i=0;i<data.length;i++){

  var stumonth=data[i].month;
  var correctvalue=curmonth-stumonth;
    if(curmonth-stumonth<0){
       correctvalue=correctvalue+12;
    }

  for(var j=1;j<=correctvalue;j++){

  

  // var student = await studentModel.findById(req.body.sid)
  var student = await Model.findOne({ cpcid: data[i].cpcid });

  // var fees= await feeModel.findOne({month: req.body.month,amount:req.body.amount})
  var fees = { fees: data[i].amount,date:"Not Paid", status: "0", transactionid:data[i].cpcid+"m"+montharr[parseInt(stumonth+j-1)%12] };
  // console.log("student: " + student + " fees: " + fees)

  try {
    await Model.findByIdAndUpdate(student._id, {
      month:curmonth,
      $push: { feedetails: fees },
    });
    res.json("done");
  } catch (err) {
    console.log("====================================");
    console.log("error" + err);
    console.log("====================================");
  }
}
}



});

app.post("/sendmailreg", (req, res) => {
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:process.env.mail ,
      pass: process.env.mailpassword,
    },
  });
  var showbatch = "Date And Time<hr/>";
  for (var i = 0; i < req.body.batch.length; i++) {
    showbatch += "<tr><td>" + req.body.batch[i] + "</td></tr>";
   
  }
  // document.getElementById("show").innerHTML=showbatch;

  var mailOptions = {
    from: process.env.mail,
    to: req.body.email,
    subject: "Subject",

    html:
      `<div>
        <h1>Dear ` +
      req.body.username +
      `,</h1>
        <p>Welcome to Mathopia.you have enrolled through this email id.</p>
        <article>Kindly register through your sid and Email to the below given link.</article>
        <div>
            <p><strong>sid</strong>:` +
      req.body.sid +
      `</p>
            <p><strong>Email</strong>:` +
      req.body.email +
      `</p>
        </div>

        <br />
        Your Enrolled batch:
        <table>
            <thead style="border:1px solid black">
               
            </thead>
            <br/>
            <hr/>
            <tbody id="show">
            ${showbatch}
                
               
            </tbody>
        </table>
        
    </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      //   break;
      // do something useful
    }
  });
});




app.post("/showadmin", async (req, res) => {
  try {
    var data = await AdminModel.find();
    // console.log(data);
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getallexams", async (req, res) => {
  try {
    var data = await AllExamsModel.find();
    // console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/addquestionobjecttoexam", async (req, res) => {
  // try {
  //   var { setno, questionno, question, option1, option2, option3, option4, answer, marks } = req.body;
  //   var questionObject = {
  //     questionno,
  //     question,
  //     option1,
  //     option2,
  //     option3,
  //     option4,
  //     answer,
  //     marks,
  //   };
  //   await AllExamsModel.updateOne({ setno: setno }, { $push: { allquestions: questionObject } });
  //   res.status(200).json({ message: "Question Added Successfully" });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
  // i want to find the exam set no in database by the set no of the object and set the new questionobject to the allquestions array of that exam set no
  try {
    console.log(req.body.setno);  
    await AllExamsModel.updateOne({ setno: req.body.setno }, { $set: { allquestions: req.body.allquestions } });
    res.status(200).json({ message: "Question Added Successfully" });
    
    // if setno not present then push the new object to the database



  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
  // console.log(req.body);
});

app.post("/publishexam", async (req, res) => {
  try {
    await AllExamsModel.updateOne({ setno: req.body.setno }, { $set: { status: 1 } });  
    res.status(200).json({ message: "Exam Published Successfully" });
    console.log("Exam Published Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);


function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // Ensures 2-digit format
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensures 2-digit format
  return `${hours}:${minutes}`;
}
function gettoday(){
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  if(date<10){
    date = "0"+date;
  }
  if(month<10){
    month = "0"+month;
  }
  return year + "-" + month + "-" + date;
}
app.post("/startexam", async (req, res) => {
  try {

    await AllExamsModel.updateOne({ setno: req.body.setno }, { $set: { status: 2 , startingTime: getCurrentTime(),date: gettoday(),totalno:req.body.totalno } });  
    res.status(200).json({ message: "Exam Published Successfully" });
    console.log("Exam Published Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

app.post("/endexam", async (req, res) => {
  try {

    await AllExamsModel.updateOne({ setno: req.body.setno }, { $set: { status: 3} });  
    res.status(200).json({ message: "Exam ended Successfully" });
    console.log("Exam ended Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

app.post("/extendtime", async (req, res) => {
  // increase the time of the exam by the given time

  try {
    var exam = await AllExamsModel.findOne({ setno: req.body.setno });
    var time = exam.time;

    var newtime = parseInt(time) + parseInt(req.body.time);
    await AllExamsModel.updateOne({
      setno: req.body.setno,
    }, {
      $set: {
        time: newtime
      }
    });
    res.status(200).json({ message: "Time Extended Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

app.post("/deleteexamset", async (req, res) => {
  try {
    await AllExamsModel.deleteOne({ setno : req.body.setno });
    res.status(200).json({ message: "Exam Deleted Successfully" });
    console.log("Exam Deleted Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

function caltime(startDay, startTime, durationMinutes) {
  // Parse start day and time
  // alert(startDay);
  // alert(startTime);
  // alert(durationMinutes);
  const [startYear, startMonth, startDate] = startDay.split('-').map(Number);
  const [startHour, startMinute] = startTime.split(':').map(Number);
  
  // Create a Date object for the start date and time
  const startDateTime = new Date(startYear, startMonth - 1, startDate, startHour, startMinute);

  // Add the duration to the start date and time
  const adjustedTime = new Date(startDateTime.getTime() + durationMinutes * 60000);

  // Get the current time
  const now = new Date();

  // Compare times
  if (adjustedTime <= now) {
      return 0; // If adjusted time is less than or equal to now, return 0
  }

  // Calculate the difference in seconds
  const differenceInSeconds = Math.floor((adjustedTime - now) / 1000);
  return differenceInSeconds;
}


app.get("/checkallexamend", async (req, res) => {
  // find all exams which have status 3
  try {
    var data = await AllExamsModel.find({ status: 2 });
    console.log(data.length);
    for(var i=0;i<data.length;i++){
      // console.log(data[i]);
      var starttime=data[i].startingTime;
      var date=data[i].date;
      var duration=data[i].time;
      // console.log(starttime,date,duration);
      if(caltime(date,starttime,duration)<=0){
        await AllExamsModel.updateOne({ setno: data[i].setno }, { $set: { status: 3} });  
      }
    }
    res.json(data);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
} 
);
// app.post("/getoneexam")
app.post("/getoneexam", async (req, res) => {
  try {
    var exam = await AllExamsModel.findOne({ setno: req.body.setno });
    // console.log(exam);
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

//i want to find the exam set in the studentmodel by exam set no and studnet id if the exam is present then update the ansarr of the exam else push the new object into exams of the student 
app.post("/startexambystudent", async (req, res) => {
  try {
    var student = await Model.findOne({ sid: req.body.sid });
    // var exam = await AllExamsModel.findOne({ setno: req.body.setno });
    for(var i=0;i<student.exams.length;i++){
      if(student.exams[i].setno == req.body.setno){
        var examDetails=student.exams[i];
        res.status(200).json({ansarr:examDetails.ansarr,issub:examDetails.issub});
        return;
      }
    }
    // var examDetails = req.body.examDetails;
    // push ansarr into examdetails
    // examDetails.ansarr = req.body.ansarr;
    var details={setno:req.body.setno,ansarr:req.body.ansarr};
    await Model.updateOne({ sid: req.body.sid }, { $push: { exams: details } });  
    res.status(200).json({ansarr:req.body.ansarr,issub:0});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

app.post("/saveoption", async (req, res) => {
  try {
    console.log(req.body);
    var student = await Model.findOne({ sid: req.body.sid });
    for(var i=0;i<student.exams.length;i++){
      if(student.exams[i].setno == req.body.setno){
        var examDetails=student.exams[i];
        examDetails.ansarr = req.body.ansarr;
        await Model.updateOne({exams:{$elemMatch:{setno:req.body.setno}}},{$set:{"exams.$.ansarr":req.body.ansarr,"exams.$.issub":req.body.issub}});
        res.status(200).json(examDetails.ansarr);
        return;
      }
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);






app.listen(port, () => {
  console.log(`Server Started at ${5000}`);
});

