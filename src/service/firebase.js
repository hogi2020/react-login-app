// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FS_APIKEY,
    authDomain: process.env.REACT_APP_FS_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FS_DATABASEURL,
    projectId: process.env.REACT_APP_FS_PROJECTID,
    storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FS_APPID,
};

// 파이어베이스 프로젝트를 활용하여 웹 서비스를 제공받기 위한 초기화 작업
// 앞에 export를 붙여야 외부에서 사용이 가능하다.
export const firebaseApp = initializeApp(firebaseConfig);