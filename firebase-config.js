import { initializeApp }

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth

}

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

apiKey:
"AIzaSyAsj7-5zddomTDReEEdF5uPugtlu3O4LBg",

authDomain:
"website-9f590.firebaseapp.com",

projectId:
"website-9f590",

storageBucket:
"website-9f590.firebasestorage.app",

messagingSenderId:
"158495337912",

appId:
"1:158495337912:web:93f185d825c7eafd69734d",

measurementId:
"G-ZC7HMCFFPK"

};

/* INITIALIZE */

const app =
initializeApp(firebaseConfig);

/* AUTH */

const auth =
getAuth(app);

/* EXPORT */

export { auth };
