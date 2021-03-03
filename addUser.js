//identify form
let myForm = document.querySelector('#addUserForm');

//get submit btn
let submitBtn = document.querySelector('#submitBtn');


//functions -----

function getData(){
    // get values
    
}







submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    
   //get data 
    var firstName = myForm.firstName.value;
    var lastName = myForm.lastName.value;
    var email = myForm.email.value;
    var phone = myForm.phone.value;
    var gender = myForm.gender.value;
    var age = myForm.age.value;
    var summary = myForm.summary.value;
    var password1 = myForm.password1.value;
    var password2 = myForm.password2.value;
    
    
    //log data 
    if (false){ //log result 
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(gender);
        console.log(age);
        console.log(summary);
        console.log(password1);
        console.log(password2);
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
        db.collection('users').add({
            name: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender,
            summary: summary,
            password: password,
        })    
        .then((docRef) => {
            console.log("Document successfully updated! ID:", docRef.id);

            //start php session 
            //probs ajax POST

            // all done reset form values to zero
            if(true){
                myForm.firstName.value = "";
                myForm.lastName.value = "";
                myForm.email.value = "";
                myForm.phone.value = "";
                myForm.gender.value = "";
                myForm.age.value = "";
                myForm.summary.value = "";
                myForm.password1.value = "";
                myForm.password2.value = ""; 
            }
            

        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.log("Error updating document: ", error);
        });
        
    } 
    
})






