// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0BkDz3vT2063bk_RhnKeEwJ9VY_bgWX0",
    authDomain: "sharings1-fce7a.firebaseapp.com",
    projectId: "sharings1-fce7a",
    storageBucket: "sharings1-fce7a.appspot.com",
    messagingSenderId: "613086024067",
    appId: "1:613086024067:web:a0e39ebd2f2e892f4e66b6",
    measurementId: "G-E6BV2N8KFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export default app;