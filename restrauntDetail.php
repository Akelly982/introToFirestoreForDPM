<!doctype>
<html lang="en">

    
    <?php 
        //get data from PHP GET method
        $resName = $_GET["restrauntName"];
        $resId = $_GET["restrauntId"];
        
    ?>
    
<!--    return Data to html -->
    <input type="hidden" id="resName" value="<?php echo $resName; ?>">
    <input type="hidden" id="resId" value="<?php echo $resId; ?>">
    
    
    
    <head>
        <link rel="stylesheet" href="styles.css">
        
        
        
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"></script>
        
    </head>
    
    
    
    <body>
        
        <h1 id="cafeName"> Cafe name </h1>
        
        <div class="content">
        
            <a href="index.html">Cafe</a>
            <a href="recomends.php">Recomends</a>

<!--            //should only be one being what we get from our cafe name-->
            <ul id="cafe-list"></ul>
            
<!--            //spacer-->
            <div style="min-height:10px;background-color:grey "></div>
            
            
            <ul id="user-reviews"></ul>
            
            
        </div>
        
        
        
        
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


        <!-- added the js at the end load last -->
        <script src="restrauntDetail.js"></script>
            
        
    </body>


</html>