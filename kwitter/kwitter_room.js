const firebaseConfig = {
      apiKey: "AIzaSyDOEIlfQoOID3iKMd46R0_BtAfHJttetpU",
      authDomain: "kwitter-d6cf5.firebaseapp.com",
      databaseURL: "https://kwitter-d6cf5-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6cf5",
      storageBucket: "kwitter-d6cf5.appspot.com",
      messagingSenderId: "620115658807",
      appId: "1:620115658807:web:c81cd2d7e3b986262617b2"
};
      firebase.initializeApp(firebaseConfig);

function logOut(){
      window.location = 'kwitter.html'
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;});
      });
}
