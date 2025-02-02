// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0p35K2Q6vKNVmpBxtTOZ1rYtzU8oS5_4",
    authDomain: "ewc-dc-photos.firebaseapp.com",
    projectId: "ewc-dc-photos",
    storageBucket: "ewc-dc-photos.firebasestorage.app",
    messagingSenderId: "19548161850",
    appId: "1:19548161850:web:f19a9eb798c2c6b94cb203",
    measurementId: "G-RWYG185YV1"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Set up Google Sign-In provider
const provider = new firebase.auth.GoogleAuthProvider();

// Get the Google Sign-In button
const googleSignInButton = document.getElementById('googleSignInBtn');

// Add event listener for the button
googleSignInButton.addEventListener('click', function () {
  // Trigger Google Sign-In using the popup method
  auth.signInWithPopup(provider)
    .then((result) => {
      // User successfully signed in
      const user = result.user;
      console.log('User signed in:', user.displayName); // Log the user's name

      // Optionally, get the Firebase ID token
      user.getIdToken().then((idToken) => {
        console.log('Firebase ID Token:', idToken);
      });
    })
    .catch((error) => {
      // Handle any errors
      console.error('Error signing in:', error.message);
    });
});