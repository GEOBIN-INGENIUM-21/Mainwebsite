function initializeApp() {

const firebaseConfig = {
    apiKey: "AIzaSyDfLJqtLTZqeIpuIeWHBP6BA3JaDFv1KSg",
    authDomain: "geobin-e2dc6.firebaseapp.com",
    projectId: "geobin-e2dc6",
    storageBucket: "geobin-e2dc6.appspot.com",
    messagingSenderId: "1056914312313",
    appId: "1:1056914312313:web:26e0f902f1a8fe83d118a8"
  };

  // Initialize Firebase
  firebase = initializeApp(firebaseConfig);


  function login() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage+ errorCode );
  });
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementsByClassName("wrapper").style.display = "none";
      document.getElementsByClassName("Terms").style.display = "block";
    } else {
        document.getElementsByClassName("wrapper").style.display = "block";
        document.getElementsByClassName("Terms").style.display = "none";
    }
  });
}


