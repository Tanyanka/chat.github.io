import { action, observable, decorate, computed, reaction } from "mobx";
import * as firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
    // apiKey: "AIzaSyCIzhrUeFmi8gVLTvKpOP5bXPJBEOSsjiQ",
    // authDomain: "test-40ae0.firebaseapp.com",
    // databaseURL: "https://test-40ae0.firebaseio.com",
    // projectId: "test-40ae0",
    // storageBucket: "test-40ae0.appspot.com",
    // messagingSenderId: "965845266224",
    // appId: "1:965845266224:web:89e8032b1918acdb7fa2f5"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}
console.log(firebaseConfig);
class SessionStore {

    db = null;

    getDB = async () => {
        console.log("db start", firebase.apps.length);
        if (!firebase.apps.length) {
           await firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.firestore();
        console.log("this db",this.db);
        return this.db;
    }


}

decorate(SessionStore, {
    db: observable,
    getDB: computed
});

const sessionStore = new SessionStore();
export default sessionStore;
