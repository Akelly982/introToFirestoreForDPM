<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        
        
        
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"></script>
        
    </head>
    <body>

        <h1>Cloud Cafe</h1>

        <div class="content">

            <form id="add-cafe-form">
                <input type="text" name="name" placeholder="Cafe name">
                <input type="text" name="city" placeholder="Cafe city">
                <button> Add cafe </button>
            </form>
            
            <button id="akButton"> update button </button>
            <a href="index.html">Cafes</a>
            <a href="recomends.php">Recomends</a>

            <ul id="cafe-list"></ul>

        </div>

        
        
        
        
        
        
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
        <script src="recomends.php"></script>
        
    </body>
</html>