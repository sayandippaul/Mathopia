    // var student = {
    //     "name": "Sneha Sharma",
    //     "email": "sneha.sharma@example.com",
    //     "phone": "9876543211",
    //     "sid": "s1",
    //     "joiningdate": "31-07-2017",
    //     "password": "sneha123",
    //     "batch": ['b1'],
    //     "approved":0,
    //     "exams":[{
    //         "eid": "e1",
    //         "ansarr": [
    //             {
    //                 "qno": "q5",
    //                 "ans": "2"
    //             },
    //             {
    //                 "qno": "q1",
    //                 "ans": "123"
    //             },
    //             {
    //                 "qno": "q2",
    //                 "ans": "87"
    //             },
    //             {
    //                 "qno": "q4",
    //                 "ans": "12"
    //             },


    //             {
    //                 "qno": "q3",
    //                 "ans": "3"
    //             },
    //         ],
    //     },{
    //         "eid": "e",
    //         "ansarr": [
    //             {
    //                 "qno": "q5",
    //                 "ans": "2"
    //             },
    //             {
    //                 "qno": "q1",
    //                 "ans": "123"
    //             },
    //             {
    //                 "qno": "q2",
    //                 "ans": "87"
    //             },
    //             {
    //                 "qno": "q4",
    //                 "ans": "12"
    //             },

    //             {
    //                 "qno": "q3",
    //                 "ans": "3"
    //             },
    //         ],
    //     }]
        
    // }


    // var question = {
    //     setno: "e1",
    //     name: "aptitude exam 1",
    //     syllabus: "aptitude syllabus",
    //     time: "13:30",
    //     batches: ["b-1", "b-2", "b-3"],
    //     date: "2024-04-24",
    //     startingTime: "10:30",
    //     status: 1,
    //     allquestions: [
    //         {
    //             qno: "q5",
    //             ocm: "3",
    //             owm: "1",
    //             qtext: "5th question",
    //             qType: "s",
    //             op1: "option1",
    //             op2: "option2",
    //             op3: "option3",
    //             optionSet: "3",
    //             qTopic: "reasoning",
    //             oc: "3",
    //         },

    //         {
    //             qno: "q1",
    //             ocm: "4",
    //             owm: "1",
    //             qtext: "1st question",
    //             qType: "d",
    //             op1: "we",
    //             op2: "wsqas",
    //             op3: "qas",
    //             optionSet: "3",
    //             qTopic: "aptitude",
    //             oc: "13",
    //         },
    //         {
    //             qno: "q2",
    //             ocm: "4",
    //             owm: "1",
    //             qtext: "2nd question",
    //             qType: "n",
    //             optionSet: "0",
    //             qTopic: "reasoning",
    //             oc: "19083",
    //         },
    //         {
    //             qno: "q4",
    //             ocm: "3",
    //             owm: "2",
    //             qtext: "4th question",
    //             qType: "d",
    //             op1: "option1",
    //             op2: "option2",
    //             op3: "option3",
    //             optionSet: "2",
    //             qTopic: "aptitude",
    //             oc: "12",
    //         },

    //         {
    //             qno: "q3",
    //             ocm: "4",
    //             owm: "1",
    //             qtext: "3rd question",
    //             qType: "d",
    //             op1: "we",
    //             op2: "wsqas",
    //             op3: "qas",
    //             optionSet: "3",
    //             qTopic: "english",
    //             oc: "23",
    //         },
    //     ],
    //     totalno: "5",
    //     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
    //     nosubt: "4",
    //     edo: "3",
    //     edcm: "5",
    //     edq: "d",
    //     edwm: "7"
    // }'


//   var url = "http://localhost:5000";
var url="https://mathopia.onrender.com";


    var student={};
    var question={};
    var anarrgiven=[];
    var alldetailsforbar=[];

    function setquestion(p) {
        question = p;
        // console.log(question);
    }
    function setstudent(p) {
        student = p;
        // console.log(student);
    }

function fetchstudent(studentid){
    fetch(url+"/findonestudent", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({sid: studentid}),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    student=data;
    setstudent(data);
    anarrgiven=checkandsort(question,student);
    showresult();
        
    showbasicresult();
    document.getElementById("result").style.display = "none";
    showbargraphforall(question,student);


    return data;
   
}
    )
    .catch((error) => {
        console.error('Error:', error);
    });
}


function fetchquestion(setno){
    fetch(url+"/getoneexam", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({setno: setno}),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        question=data;
        setquestion(data);
       var studentdetails = JSON.parse(localStorage.getItem("student"));
        
       var studentid=studentdetails.sid;
       fetchstudent(studentid);

        return question;
}
    )
    .catch((error) => {
        console.error('Error:', error);
    });
    
}

    function fetchall(){
       var setno=localStorage.getItem("examsetno");
       question=fetchquestion(setno);
    //    console.log(student);
    //    student=fetchstudent(student.sid);
    
     


    }
    fetchall();


    function checkandsort(question,student){
        var c=0;
    for(var i=0;i<student.exams.length;i++){
        if(student.exams[i].setno==question.setno){
            // student.exams=student.exams[i];
            // break;
            c=1;
        }
    }
    if(c==0){
        alert("You have not given this exam");
        window.location.href="/studentallexam";
    }


        
        
console.log(student.exams);
// sort questions with respect to qno
// question.allquestions=question.allquestions.sort((a, b) => a.qid.localeCompare(b.qid));
question.allquestions.sort((a, b) => a.qid.localeCompare(b.qid));
for( var i=0;i<student.exams.length;i++){
    if(student.exams[i].setno==question.setno){
        anarrgiven=student.exams[i].ansarr;
        break;
    }
}
console.log(anarrgiven);
// sort answers with respect to qno

// anarrgiven.sort((a, b) => a.qno.localeCompare(b.qno));
// 
// ansarrgiven=anarrgiven.sort((a, b) => a.qno.localeCompare(b.qno));
// anarrgiven=[{qno:2,ans:3},{qno:1,ans:123},{qno:3,ans:3},{qno:4,ans:12},{qno:5,ans:2}];
// sort anarrgiven with respect to qno
anarrgiven.sort((a, b) => a.qno-b.qno);
 return anarrgiven;
    }
   

    console.log(question);
    console.log(student);
var totalmarks=0;totalcorrect=0;totalwrong=0;gotmarks=0;


    function showresult() {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").scrollIntoView();
// console.log(question);
        var a = ``;
        for (var i = 0; i < question.allquestions.length; i++) {
            totalmarks=totalmarks+parseInt(question.allquestions[i].ocm);
            var b = ``, c = ``, e = ``,d="",count=-1;
            for (var j = 0; j < anarrgiven.length; j++) {
                if (question.allquestions[i].qid =="q"+ anarrgiven[j].qno) {

                    if (question.allquestions[i].qType == "s") {
                        d="Single Option correct Type";

                        for (var k = 0; k < question.allquestions[i].optionSet; k++) {
                            b = b + `<h6>option ${k + 1}: ${question.allquestions[i]["op" + (k + 1)]}</h6>`;
                        }
                        if(anarrgiven[j].ans==""){
                            c = `
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid">option `+ question.allquestions[i].oc + `</span></small>
                            <small class="d-inline-block fw-bold text-light text-uppercase bg-secondary border border-secondary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid">Not Attempted</span></small>
                            `;
                            e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-secondary border border-success rounded-pill px-4 py-1 mb-3"> Not Counted</small>`;

                        }
                       
                        else if (question.allquestions[i].oc == anarrgiven[j].ans) {
                            c = `
                                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid">option `+ question.allquestions[i].oc + `</span></small>
                                    <small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid">option `+ anarrgiven[j].ans + `</span></small>
                                    `;
                                    totalcorrect++;
                                    gotmarks=gotmarks+parseInt(question.allquestions[i].ocm);
                                    e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"> Scored +`+question.allquestions[i].ocm+`</small>`;

                        }
                        else {
                            c = `
                                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid">option `+ question.allquestions[i].oc + `</span></small>
                                    <small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-danger rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid">option `+ anarrgiven[j].ans + `</span></small>`;
                        
                        totalwrong++;
                        e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-danger rounded-pill px-4 py-1 mb-3"> Deducted -`+question.allquestions[i].owm+`</small>`;
                        gotmarks=gotmarks-parseInt(question.allquestions[i].owm);
                        
                    }



                           


                    }
                    else if (question.allquestions[i].qType == "d") {
                    d="One Or More Than Option correct Type";

                        for (var k = 0; k < question.allquestions[i].optionSet; k++) {
                            b = b + `<h6>option ${k + 1}: ${question.allquestions[i]["op" + (k + 1)]}</h6>`;
                        }


       count=0;              
for(var l=0;l<anarrgiven[j].ans.length;l++){
    if(anarrgiven[j].ans==""){
        c = `
        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid">option `+ question.allquestions[i].oc + `</span></small>
        <small class="d-inline-block fw-bold text-light text-uppercase bg-secondary border border-secondary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid">Not Attempted</span></small>
        `;
        e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"> Not Counted</small>`;

    }
   
else if(question.allquestions[i].oc.includes(anarrgiven[j].ans[l])){
count++;
}
else{
    count=0;
     break;
}   
} 
var col=``;
var m=question.allquestions[i].ocm*count/question.allquestions[i].oc.length;

if(count==0){

    col="danger";
    totalwrong++;
    gotmarks=gotmarks-parseInt(question.allquestions[i].owm);

}
else if(count==question.allquestions[i].oc.length){
col="success";
totalcorrect++;
gotmarks=gotmarks+parseInt(question.allquestions[i].ocm);

}
else{

col="primary";
totalcorrect++;
gotmarks=gotmarks+parseInt(m);
}




                        
                        var c1="";

                        for(var k=0;k<question.allquestions[i].oc.length;k++){
                            c1=c1+` option `+ question.allquestions[i].oc[k] + `<br>`;
                       
                        }
                        c=c+`<small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary mx-2  px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid"> `+ c1 + `</span></small>`;
                        c1="";

                        for (var k = 0; k < anarrgiven[j].ans.length; k++) {
                            c1=c1+` option `+ anarrgiven[j].ans[k] + `<br>`;
                        }
                        c = c + `<small class="d-inline-block fw-bold text-light text-uppercase bg-`+col+` border border-success mx-2 px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid"> `+c1+`</span></small>`;
                        



                        if(count==question.allquestions[i].oc.length){
                           
                           e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"> Scored +`+question.allquestions[i].ocm+`</small>`;
                                               }
                                               else if(count==0){
                                                   e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-danger rounded-pill px-4 py-1 mb-3"> Deducted -`+question.allquestions[i].owm+`</small>`;
                                               
                                               }
                                               else{
                                                    e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-primary border border-primary rounded-pill px-4 py-1 mb-3"> partial +`+m+`</small>`;
                                               }
                           




















                    }
                    else if (question.allquestions[i].qType == "n") {
                        d="Numerical Answer Type";
                        if(anarrgiven[j].ans==""){
                            c = `
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid">option `+ question.allquestions[i].oc + `</span></small>
                            <small class="d-inline-block fw-bold text-light text-uppercase bg-secondary border border-secondary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid">Not Attempted</span></small>
                            `;
                            e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"> Not Counted</small>`;

                        }
                       
                        else if (question.allquestions[i].oc == anarrgiven[j].ans) {
                            c = `
                                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid"> `+ question.allquestions[i].oc + `</span></small>
                                    <small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid"> `+ anarrgiven[j].ans + `</span></small>`;

                       
                                    e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-success rounded-pill px-4 py-1 mb-3"> Scored +`+question.allquestions[i].ocm+`</small>`;
                            
                                    totalcorrect++;
                                    gotmarks=gotmarks+parseInt(question.allquestions[i].ocm);
                                }
                        else {
                            c = `
                                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Correct Answer : </strong><span id="sid"> `+ question.allquestions[i].oc + `</span></small>
                                    <small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-danger rounded-pill px-4 py-1 mb-3"><strong style="font-weight: bolder;">Your Answer : </strong><span id="sid"> `+ anarrgiven[j].ans + `</span></small>`;
                        
                                    e=e+`<small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-danger rounded-pill px-4 py-1 mb-3"> Deducted -`+question.allquestions[i].owm+`</small>`;
                        totalwrong++;
                        gotmarks=gotmarks-parseInt(question.allquestions[i].owm);
                                }


                           

                    }

                   



                    a = a + `<div  class="col-md-6 col-lg-6">
                            <div  style="overflow-x:scroll" class="d-inline-flex w-100 border border-primary p-4 col-lg-12 rounded mb-4">
                                <div class="">
                        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3"><span>`+question.allquestions[i].qTopic+`</span></small>

                        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">`+d+` (+`+question.allquestions[i].ocm+`,-`+question.allquestions[i].owm+`)</small>
`+e+`
                                    <pre  style="white-space: pre-wrap; word-wrap: break-word;">`+(i+1)+` ) `+question.allquestions[i].qtext+`</pre>
                                    <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                                    <iframe style="height:150px"  src="https://drive.google.com/file/d/`+question.allquestions[i].qimg+`/preview" class="img-fluid rounded my-2 w-100 "    allow="autoplay" allowfullscreen></iframe>

                                    </div>
                                    

                                    `+ b + c + `
                                    
                        

                                </div>
                            </div>
                            
                        </div>
                        `;


                }

            }
        }
        document.getElementById("showanswers").innerHTML = a;

    }



    function showbasicresult(){

        document.getElementById("examname").innerHTML=question.name;
        // document.getElementById("syllabus").innerHTML="<strong>Syllabus: </strong>"+question.syllabus;
        document.getElementById("totalquestion").value="Total Questions: "+question.allquestions.length;
        document.getElementById("duration").value="Duration: "+question.time+" minutes";
        document.getElementById("date").value="Exam Date: "+question.date;
        document.getElementById("showmarks").innerHTML=gotmarks+"/"+totalmarks;
        document.getElementById("showfullmarks").innerHTML="Full Marks:"+totalmarks;
        document.getElementById("correct").innerHTML="Correct Attempts:"+totalcorrect;
        document.getElementById("wrong").innerHTML="Wrong Attempts:"+totalwrong;
    }
   




function createCanvas(i) {
        var container = document.getElementById("barstat");

        // Create a canvas element
        var canvas = document.createElement('canvas');
        canvas.className = "sbar";
        canvas.id = "barstat"+i;
        // canvas.width = 80;
        // canvas.height = 80;
        // document.getElementById("barstat"+i).style.width="500px";
        // document.getElementById("barstat"+i).style.height="500px";\
        canvas.width = window.innerWidth / 3;  // Adjust the width (1/3 of the window width in this case)
        canvas.height = window.innerHeight / 4;

        // Append the canvas to the container
        container.appendChild(canvas);

        return canvas;
}    



function makebargraphobjects(question,student){
    console.log(question);
    // create a array of object where object will contain totaltopc[i] and marks scored in that topic and attempted to that topic and create correct marks total marks wrong marks correct marks correct attempted wrong attempted not attempted
    var totaltopics=question.totaltopics;
    var totalmarks=0;
    var totalcorrect=0;
    var totalwrong=0;
    var gotmarks=0;
    var totalcorrectattempted=0;
    var totalwrongattempted=0;
    var notattempted=0;
    var alldetailsforbar=[];
    for(var i=0;i<totaltopics.length;i++){
        for(var j=0;j<question.allquestions.length;j++){
            if(question.allquestions[j].qTopic==totaltopics[i]){
                totalmarks=totalmarks+parseInt(question.allquestions[j].ocm);
                for(var k=0;k<anarrgiven.length;k++){
                    if(question.allquestions[j].qid=="q"+anarrgiven[k].qno){
                        if(question.allquestions[j].qType=="s"){
                            if(anarrgiven[k].ans==""){
                                notattempted++;
                            }
                            else if(question.allquestions[j].oc==anarrgiven[k].ans){
                                totalcorrect++;
                                gotmarks=gotmarks+parseInt(question.allquestions[j].ocm);
                                totalcorrectattempted++;
                            }
                            else{
                                totalwrong++;
                                gotmarks=gotmarks-parseInt(question.allquestions[j].owm);
                                totalwrongattempted++;
                            }
                        }
                        else if(question.allquestions[j].qType=="d"){
                            var count=0;
                            for(var l=0;l<anarrgiven[k].ans.length;l++){
                                if(question.allquestions[j].oc.includes(anarrgiven[k].ans[l])){
                                    count++;
                                }
                                else{
                                    count=0;
                                    break;
                                }
                            }
                            if(count==0){
                                totalwrong++;
                                gotmarks=gotmarks-parseInt(question.allquestions[j].owm);
                                totalwrongattempted++;
                            }
                            else if(count==question.allquestions[j].oc.length){
                                totalcorrect++;
                                gotmarks=gotmarks+parseInt(question.allquestions[j].ocm);
                                totalcorrectattempted++;
                            }
                            else{
                                var m=question.allquestions[j].ocm*count/question.allquestions[j].oc.length;
                                gotmarks=gotmarks+parseInt(m);
                                totalcorrect++;
                                totalcorrectattempted++;
                            }
                        }
                        else if(question.allquestions[j].qType=="n"){
                            if(anarrgiven[k].ans==""){
                                notattempted++;
                            }
                            else if(question.allquestions[j].oc==anarrgiven[k].ans){
                                totalcorrect++;
                                gotmarks=gotmarks+parseInt(question.allquestions[j].ocm);
                                totalcorrectattempted++;
                            }
                            else{
                                totalwrong++;
                                gotmarks=gotmarks-parseInt(question.allquestions[j].owm);
                                totalwrongattempted++;
                            }
                        }
                    }
                }
            }
        }
        alldetailsforbar.push({topic:totaltopics[i],totalmarks:totalmarks,correct:totalcorrect,wrong:totalwrong,gotmarks:gotmarks,correctattempted:totalcorrectattempted,wrongattempted:totalwrongattempted,notattempted:notattempted});
        totalmarks=0;
        totalcorrect=0;
        totalwrong=0;
        gotmarks=0;

        totalcorrectattempted=0;
        totalwrongattempted=0;
        notattempted=0;

    }

    return alldetailsforbar;

}
function showbargraphforall(q,s){
    var alldetailsforbar=makebargraphobjects(q,s);
    var yValues = [];
    var piexValues = [];
    var pieyValues = [];
    var canvus;
    var l=``;
    for(var i=0;i<alldetailsforbar.length;i++){
        // xValues.push(alldetailsforbar[i].topic);
        yValues=[];
        piexValues.push(alldetailsforbar[i].topic);
        pieyValues.push(alldetailsforbar[i].gotmarks);
        yValues.push(alldetailsforbar[i].correctattempted);
        yValues.push(alldetailsforbar[i].wrongattempted);
        yValues.push(alldetailsforbar[i].notattempted);
         canvas = createCanvas(i);

        showbargraph(canvas,yValues,alldetailsforbar[i].topic);
        sethw();                                                                                    
        l=l+`<div class=" border border-primary mb-2 py-2 px-1"><div className="d-inline-flex w-100 border border-primary p-4 rounded">
        <h3 class="mx-2">`+alldetailsforbar[i].topic+`</h3>
    <small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-primary rounded-pill px-4 py-1 mb-3"><strong><i class="fa fa-check"></i> Attempted : </strong><span >`+alldetailsforbar[i].correctattempted+`</span></small>               
    <small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-primary rounded-pill px-4 py-1 mb-3"><strong><i class="fa fa-times"></i> Attempted : </strong><span >`+alldetailsforbar[i].wrongattempted+`</span></small>               
    <small class="d-inline-block fw-bold text-dark text-uppercase bg-warning border border-primary rounded-pill px-4 py-1 mb-3"><strong><i class="fa fa-circle"></i> Not Attempted : </strong><span >`+alldetailsforbar[i].notattempted+`</span></small>               
    <small class="d-inline-block fw-bold text-dark text-uppercase bg-info border border-primary rounded-pill px-4 py-1 mb-3"><strong> <i class="fa fa-square"></i> Total Marks : </strong><span >`+alldetailsforbar[i].totalmarks+`</span></small>
    <small class="d-inline-block fw-bold text-light text-uppercase bg-success border border-primary rounded-pill px-4 py-1 mb-3"><strong><i class="fa fa-check"></i> Marks  : </strong><span >`+alldetailsforbar[i].gotmarks+`</span></small>
    <small class="d-inline-block fw-bold text-light text-uppercase bg-danger border border-primary rounded-pill px-4 py-1 mb-3"><strong><i class="fa fa-times"></i> Marks  : </strong><span >`+alldetailsforbar[i].wrong+`</span></small>
    </div></div>
`;
        yValues=[];
        // break;
    }
    document.getElementById("showtablestat").innerHTML=l;


    new Chart("piestat", {
        type: "pie",
        data: {
          labels: piexValues,
          datasets: [{
            backgroundColor: "rgba(141, 136, 3, 0.69)",
            borderColor: "rgba(0,0,255,0.1)",
            data: pieyValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Topic Wise Marks Distribution"
          }
        }
      });
      
    // console.log(alldetailsforbar);
    // for(var i=0;i<question.totalTopics.length;i++){
    //     yValues.push(alldetailsforbar[i].gotmarks);

    // }
   
}



function showbargraph(canvus,yValues,t){
    // add a new canvus in the id barstat
// find maximum of yValues
// var max = Math.max.apply(null, yValues);
// var m = Math.max(...yValues);
// // round of the max to nearest 10
// m =1;
// m = Math.ceil(max / 10) * 10;
// var m= numbers.reduce((max, current) => (current > max ? current : max), yValues[0]);
var a= yValues[0];

for (let i = 1; i < yValues.length; i++) {
  if (yValues[i] > a) {
    a = yValues[i];
  }
}

    const xValues = ["Correct Attempted","Wrong Attempted","Not Attempted"];
    // new Chart(canvus.id, {
    //     type: "bar",
    //     data: {
    //       labels: xValues,
    //       datasets: [{
    //         label: t, // This label will appear in the legend
    //         data: yValues,
    //         backgroundColor: "rgba(141, 136, 3, 0.69)",
    //         borderColor: "black",
    //       }]
    //     },
    //     options: {
    //       responsive: true,
    //       maintainAspectRatio: false,
    //       scales: {
    //         // Customizing x-axis labels
    //         x: {
    //           ticks: {
    //             font: {
    //               size: 10,  // Font size for x-axis labels
    //               weight: "bold",  // Font weight for x-axis labels
    //             }
    //           }
    //         },
    //         // Customizing y-axis labels
    //         y: {
    //           ticks: {
    //             font: {
    //               size: 30,  // Font size for y-axis labels
    //               weight: "bold",  // Font weight for y-axis labels
    //             }
    //           },yAxes: [{ticks: {min: 6, max:16}}],
    //         }
    //       },
    //       plugins: {
    //         legend: {
    //           display: true, // Show the legend
    //           position: 'top', // Position of the legend (top, left, right, bottom)
    //           labels: {
    //             font: {
    //               size: 16, // Font size for legend labels
    //               weight: 'bold', // Font weight for legend labels
    //               family: 'Arial, sans-serif', // Font family for legend labels
    //             },
    //             color: '#333', // Color for legend text
    //           }
    //         }
    //       }
    //     }
    //   });




      new Chart(canvus.id, {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            fill: false,
            lineTension: 0,
            label: t, // This label will appear in the legend
            backgroundColor: "rgba(141, 136, 3, 0.69)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options: {
          legend: {display: true},
          scales: {
            yAxes: [{ticks: {min: 0, max:a}}],
          }
        }
      });




      
}
function sethw(){
   var allbars= document.getElementsByClassName("sbar");
    for(var i=0;i<allbars.length;i++){
         allbars[i].style.height="300px";
        //  allbars[i].style.width="800px";
        allbars[i].style.margin="50px";
        // allbars[i].style.borderColor="black";
        // set border color
        allbars[i].style.border="2px solid black";
    }
}
// showbargraph();
// var canvas = createCanvas('barstat', 60, 40);
// showbargraph(canvas);
// sethw();