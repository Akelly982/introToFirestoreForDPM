<!doctype>
<html lang="en">
    
    <head>        
        
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"></script>
        
    </head>
    
    
    
    <h1> add user</h1>
    
    <form id="addRestrauntForm">
        <label>RestrauntName:</label>
        <input type="text" name="resName" placeholder="type here">

        <label>location:</label>
        <input type="text" name="location">

        <label>Summary:</label>
        <input type="text" name="summary">
        
        <button id="submitBtn">submit</button>
    </form>
    
    
    
    <!-- firestore added at end of body      -->
    <script>
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later,measurementId is optional
        var firebaseConfig = {
        apiKey: "AIzaSyCwa8C_sc_njKvA8GRHsB5GAIdWQ_z87So",
        authDomain: "firestoretester-1233c.firebaseapp.com",
        projectId: "firestoretester-1233c",
        storageBucket: "firestoretester-1233c.appspot.com",
        messagingSenderId: "852637972265",
        appId: "1:852637972265:web:edce94d6431744df8f2938",
        measurementId: "G-L466K6TFGQ"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // variable we are going to use in our scripts to reference the firebase firestore db
        const db = firebase.firestore();

        // stops us from getting errors in the console.
        db.settings({ timestampsInSnapShots: true}); 
    </script>
    
    
    <script src="addUser.js"></script>
    
</html>