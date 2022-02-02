var firebaseConfig = {
    apiKey: "AIzaSyCrHEptxoOU1VvIEqAGmPFTnNTRV0ZOVlo",
    authDomain: "kwitter-6321d.firebaseapp.com",
    databaseURL: "https://kwitter-6321d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6321d",
    storageBucket: "kwitter-6321d.appspot.com",
    messagingSenderId: "1038504956317",
    appId: "1:1038504956317:web:1d4f6d33672c1d63769f74",
    measurementId: "G-TE594EMHC6"
  };
  
  // Initialize Firebase
 var app = initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
}