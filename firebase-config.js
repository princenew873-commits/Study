import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

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
"1:158495337912:web:93f185d825c7eafd69734d"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

const storage =
getStorage(app);

export {

auth,
db,
storage

};
