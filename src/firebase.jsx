import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZgX4byDdSXCNG2bB-yGxQL-SuDu6F21A",
  authDomain: "rahat-6629f.firebaseapp.com",
  databaseURL: "https://rahat-6629f-default-rtdb.firebaseio.com",
  projectId: "rahat-6629f",
  storageBucket: "rahat-6629f.appspot.com",
  messagingSenderId: "826371114184",
  appId: "1:826371114184:web:f6e7694be3710610a9d1fd",
};

const app = initializeApp(firebaseConfig);

// Export the app instance
export default app;
