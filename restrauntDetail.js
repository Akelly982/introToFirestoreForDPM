



const cafeList = document.querySelector('#cafe-list');
const reviewList = document.querySelector('#user-reviews');

let resName = document.querySelector('#resName').getAttribute("value");
let resId = document.querySelector('#resId').getAttribute("value");

//set cafeName to h1 title
let pageH1Name = document.querySelector('#cafeName');
pageH1Name.innerHTML = resName;

//check to log to see if working
console.log(resName);
console.log(resId);








//create elements and render cafe 
function renderCafe(doc){
    let li = document.createElement("li");
    let name = document.createElement('span'); //I probs woruld of done a h2
    let city = document.createElement('span');
    let summary = document.createElement('span');
    let cross = document.createElement('div');
    
    
    
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;  
    city.textContent = doc.data().city;
    summary.textContent = "some summary provided from the business";
    cross.textContent = "x";
    

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(summary);
    li.appendChild(cross);
    
    cafeList.appendChild(li);
    // end of item creation
}


// if document does not exist 
// do the same thing but with hard coded error data
function renderCafeError(){
    let li = document.createElement("li");
    let note = document.createElement('span');

    note.textContent ="document can not be found";  

    li.appendChild(note);
    
    cafeList.appendChild(li);
    // end of item creation
}








//renderReview
function renderReview(doc){
    let li = document.createElement("li");
    //let time = document.createElement('span');
    let name = document.createElement('span');
    let summary = document.createElement('span');

    //time.textContent = doc.data().time.toDate();  
    name.textContent = doc.data().firstName;
    summary.textContent = doc.data().review;

    //li.appendChild(time);
    li.appendChild(name);
    li.appendChild(summary);
    
    reviewList.appendChild(li);
    // end of item creation
}







// GET CAFE DATA by doc id
//NOTE: For some reason slower than using where statement on an collection ????
db.collection('cafes').doc(resId).get().then((doc) =>{
    if (doc.exists) {
        console.log("Document data:", doc.data());
        renderCafe(doc);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        renderCafeError();
    }
}).catch((error) =>{
    
});





//GET user Review
db.collection('cafes').doc(resId).collection("reviews").get().then((snapshot) => {
    snapshot.docs.forEach(doc=> {
        renderReview(doc);
    })
});
    
    
    
    
//    if (doc.exists) {
//        console.log("Document data:", doc.data());
//        renderReview(doc);
//    } else {
//        // doc.data() will be undefined in this case
//        console.log("No such document!");
//        renderReviewNoDoc();
//    }
//}).catch((error) =>{
//    console.log("error cought:" + error);
//});




//ref get all by collection
//db.collection('cafes').get().then((snapshot) => {
//    snapshot.docs.forEach(doc => {
//        renderCafe(doc);
//    })
//})


