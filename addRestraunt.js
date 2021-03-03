//identify form
let myForm = document.querySelector('#addRestrauntForm');

//get submit btn
let submitBtn = document.querySelector('#submitBtn');


//functions -----

function getData(){
    // get values
    
}



submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    
   //get data 
    var resName = myForm.resName.value;
    var location = myForm.location.value;
    var summary = myForm.summary.value;
    
    
    
    //log data 
    if (true){ //log result 
        console.log(resName);
        console.log(location);
        console.log(summary);
    }
    
    //create bool for checks
    var checksPassed = true;
    
    
    // check for data input errors
    
    if(password1 != password2){
        alert("passwords dont match");
        success = false;
    }else{
        //this should be hashed or encrypted
        var password = password1;
    }
    //....
    //......
    
    
    
    if(checksPassed){
        //add to firestore
        //.add takes in an object as the value
        db.collection('cafes').add({
            restrauntName: resName,
            location: location,
            summary: summary
        })    
        .then((docRef) => {
            console.log("Document successfully updated! ID:", docRef.id);

            //start php session 
            //probs ajax POST

            // all done reset values to zero
            if(true){
                myForm.resName.value = "";
                myForm.location.value = "";
                myForm.summary.value = "";
            }
            

        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.log("Error updating document: ", error);
        });
        
    } 
    
})






