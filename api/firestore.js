import * as config from './firebase.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc,getDocs, getFirestore, getDoc,deleteDoc,updateDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig=config.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//init services
const db = getFirestore(app);

/**
 * add User to cloud firestore
 * @param {Object} User 
 * @param {function} onSuccess 
 * @param {function} onError 
 */
export const db_addUser = async (User,onSuccess,onError) => {

    try {
        const newUser= doc(collection(db,"users"))
        console.log(newUser.id)
        await setDoc(newUser,
            {...User,
            id:newUser.id})
        onSuccess()
    } catch (e) {
        onError(e)
        console.error("Error adding document: ", e);
    }

}
/**
 * get User from cloud firestore
 * @param {function} onSuccess 
 * @param {function} onError 
 */
 export const db_getUser = async (id,onSuccess,onError) => {

    try {
        const docRef=doc(db,"users",id);
        const docSnap=await getDoc(docRef);
        onSuccess(docSnap.data());
    } catch (e) {
        onError(e)
        console.error("Error adding document: ", e);
    }

}
/**
 * get Users from cloud firestore
 * @param {function} onSuccess 
 * @param {function} onError 
 */
export const db_getUsers = async (onSuccess,onError) => {

    try {
        const querySnapShot=await getDocs(collection(db, "users"));
        let user=[];
        querySnapShot.forEach((doc)=>{
            user.push(doc.data());
        })
        onSuccess(user)
    } catch (e) {
        onError(e)
        console.error("Error adding document: ", e);
    }

}
/**
 * delete User from cloud firestore
 * @param {string} id
 * @param {function} onSuccess 
 * @param {function} onError 
 */
 export const db_deleteUser = async (id,onSuccess,onError) => {

    try {
        const docRef=doc(db,"users",id);
        const docSnap=await deleteDoc(docRef);
        onSuccess(docSnap.data());
    } catch (e) {
        onError(e)
        console.error("Error adding document: ", e);
    }

}

/**
 * update User from cloud firestore
 * @param {Object} updatedUser
 * @param {function} onSuccess 
 * @param {function} onError 
 */
 export const db_updateUser = async (updatedUser,onSuccess,onError) => {

    try {
        const docRef=doc(db,"users",updatedUser.id);
        await updateDoc(docRef,updatedUser);
        onSuccess();
    } catch (e) {
        onError(e)
        console.error("Error adding document: ", e);
    }

}