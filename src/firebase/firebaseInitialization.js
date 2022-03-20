import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase.config'

const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
    console.log(firebaseConfig)

}

export default firebaseInitialize;