 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBFEUF7qKUelR06z0pD-zHhimPEgAk2pkw",
      authDomain: "kwitterfirebasecool.firebaseapp.com",
      databaseURL: "https://kwitterfirebasecool-default-rtdb.firebaseio.com",
      projectId: "kwitterfirebasecool",
      storageBucket: "kwitterfirebasecool.appspot.com",
      messagingSenderId: "985356402528",
      appId: "1:985356402528:web:e0f6d773adf68cf5d36805",
      measurementId: "G-4D0TDN6JS4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
