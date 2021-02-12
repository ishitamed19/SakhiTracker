import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA4fIEDNP1rLMTRgGgEdZuMDczGRfJNe0A",
    authDomain: "workout-tracker-d8e01.firebaseapp.com",
    databaseURL: "https://workout-tracker-d8e01-default-rtdb.firebaseio.com/",
    projectId: "workout-tracker-d8e01",
    storageBucket: "workout-tracker-d8e01.appspot.com",
    messagingSenderId: "886774396041",
    appId: "1:886774396041:web:1db3101962b4885bf60258",
    measurementId: "G-1620WVP06W"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}

export default Firebase;