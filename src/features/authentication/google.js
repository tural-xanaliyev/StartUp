import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import {db} from '../../fireBase'
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInGoogle = async () => {

  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      const q = query(collection(db, "Users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "Users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          number:user.phoneNumber,
        });
      }
      // window.location.assign("http://localhost:3001/home")
      // const userCred = await getRedirectResult(auth);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //   const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return false;
    });
};

export const logout = () => {
  signOut(auth)
}