import { current } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../fireBase";
const auth = getAuth();

const createUser = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      const q = query(collection(db, "Users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "Users"), {
          uid: user.uid,
          name: name,
          authProvider: "google",
          email: email,
          number: user.phoneNumber,
        });
        window.location.assign("http://localhost:3001");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const signinUser = (email, password) => {
  // sendEmailVerification(auth.currentUser).then(() => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  // });
};

const emailVerification = () => {};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Pasword reset link sent");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export { createUser, signinUser, sendPasswordReset };
