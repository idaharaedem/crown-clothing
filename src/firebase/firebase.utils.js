import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    
        apiKey: "AIzaSyCUjrcy19YS-KszoFPpoNl5UlIgqCJA1XM",
        authDomain: "crown-db-b3275.firebaseapp.com",
        databaseURL: "https://crown-db-b3275.firebaseio.com",
        projectId: "crown-db-b3275",
        storageBucket: "crown-db-b3275.appspot.com",
        messagingSenderId: "823893514527",
        appId: "1:823893514527:web:95b4c0e7f16e58eb2ef82a",
        measurementId: "G-YC0RY056X8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
     return;

     const userRef =  firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error);
        }
     }

     return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
