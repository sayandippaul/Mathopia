var url = "http://localhost:5000";


// var studentbatch=['b1','b2','b3','b4'];

var studentbatch = JSON.parse(localStorage.getItem('student')).batch;
console.log(studentbatch);





//     var videonotes = [
//    {
//        "type": "n",
//        "batches": ["b1", "b2", "b3", "b4"],
//        "name": "Aptitude notes",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-01",
//        "vqid": "vn1"
//    },
//    {
//        "type": "v",
//        "batches": ["b1", "b4"],
//        "name": "English videos",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-03",
//        "vqid": "vn2"
//    },
//    {
//        "type": "n",
//        "batches": ["b2", "b3"],
//        "name": "Mathematics notes",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-02",
//        "vqid": "vn3"
//    },
//    {
//        "type": "v",
//        "batches": ["b2", "b3", "b4"],
//        "name": "Science videos",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-02",
//        "vqid": "vn4"
//    },
//    {
//        "type": "n",
//        "batches": ["b5", "b6"],
//        "name": "History notes",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-03",
//        "vqid": "vn5"
//    },
//    {
//        "type": "v",
//        "batches": ["b7", "b8", "b9", "b4"],
//        "name": "Geography videos",
//        "id": "0Wv2dP3Gt1s",
//        "link": "https://www.youtube.com/watch?v=0Wv2dP3Gt1s",
//        "date": "2021-09-03",
//        "vqid": "vn6"
//    }
// ];

var videonotes=[];

function fetchall(){
    fetch(url+"/showvideonotes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        // body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then((data) => {
           
            console.log(data);
            videonotes = data;
sortByDate(videonotes);

      
        })
        .catch((err) => console.log(err));
      
        
        
  
    
}
fetchall();

function printvideoNotes(v) {
   var obj=v;
   var a=``;
  var  c=0;
   for (var i = 0; i < obj.length; i++) {
       var note = obj[i];
       for (var j = 0; j < note.batches.length; j++) {

           if (studentbatch.includes(note.batches[j]) && note.type==document.getElementById("selectnotesvideos").value ) {
               c++;
              var  p=((2*c)+1)*0.1;


               // console.log(note);
                   a=a+`<div class="col-md-6 col-lg-4 wow bounceInUp" onclick="gotolink('`+note.link+`')"  data-wow-delay="`+p+`s">
                       <div class="blog-item">
                           <div class="overflow-hidden rounded">
                                    <iframe style="height:300px"  src="https://drive.google.com/file/d/`+note.id+`/preview" class="img-fluid w-100 " height="200"   allow="autoplay" allowfullscreen></iframe>

                           </div>
                           <div class="blog-content mx-4 d-flex rounded bg-light">
                               <div class="text-dark bg-primary rounded-start">
                                   <div class="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                       <p class="fw-bold mb-0">`+note.date+`</p>
                                   </div>
                               </div>
                               <a href="#" class="h5 lh-base my-auto h-100 p-3">`+note.name+`</a>
                           </div>
                       </div>
                   </div>
                   `;







               break;
           }
       }
   }
   document.getElementById("showcontent").innerHTML=a;
}


function sortByName(obj) {
 var o =obj.sort((a, b) => {
   var nameA = a.name.toUpperCase();
   var nameB = b.name.toUpperCase();
   if (nameA < nameB) {
     return -1;
   }
   if (nameA > nameB) {
     return 1;
   }
   return 0;
 });
 console.log(o);
printvideoNotes(o);

}

function sortByDate(obj) {
var o= obj.sort((a, b) => {
   var dateA = new Date(a.date);
   var dateB = new Date(b.date);
   return dateB - dateA;
 });
printvideoNotes(o);

}

function sort() {
 if(document.getElementById("sortvalue").value=="n"){
   sortByName(videonotes);
 }
 else{
   sortByDate(videonotes);
 }
}

function searchObjects() {
 // console.log("hit");
 var objects = videonotes;
 var searchPhrase = document.getElementById("searchapprove").value;
 // Convert the search phrase to lowercase for case-insensitive search
 var searchLower = searchPhrase.toLowerCase();

 // Filter the objects based on the search criteria
 var searchResults = objects.filter(object => {
   // Convert batch name, day, and time to lowercase for case-insensitive search
   var batchNameLower = object.name.toLowerCase();
   var batchDayLower = object.date.toLowerCase();

   // Check if the search phrase is present in batch name, day, or time
   return batchNameLower.includes(searchLower) || batchDayLower.includes(searchLower);
 });

 // return searchResults;
 // batches = searchResults;
 if(searchPhrase==""){
   searchResults=videonotes;
 }


 printvideoNotes(searchResults);

}

function gotolink(link){
 window.open(link, '_blank');
}

