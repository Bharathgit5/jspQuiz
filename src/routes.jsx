import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./screens/Welcome";
import TopicSelection from "./screens/TopicSelection";
 import QuizConfig from "./screens/QuizConfig";
import QuizPlay from "./screens/QuizPlay";
// import NewTopic from "./screens/NewTopic/NewTopic";
 import Scoreboard from "./screens/Scoreboard";

import BoysBuzzer from "./screens/Buzzer/BoysBuzzer";
import GirlsBuzzer from "./screens/Buzzer/GirlsBuzzer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
       <Route path="/topics" element={<TopicSelection />} />
        <Route path="/config" element={<QuizConfig />} />
         <Route path="/quiz" element={<QuizPlay />} />
         <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/boys" element={<BoysBuzzer />} />
        <Route path="/girls" element={<GirlsBuzzer />} /> 
         {/*<Route path="/newtopic" element={<NewTopic />} />
       */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA35Mt-XQkPjIXbPVh79KJtPw8gaYijlXA",
//   authDomain: "jspquiz-98968.firebaseapp.com",
//   projectId: "jspquiz-98968",
//   storageBucket: "jspquiz-98968.firebasestorage.app",
//   messagingSenderId: "861943292608",
//   appId: "1:861943292608:web:f3e53ef5c5d35df44c8325",
//   measurementId: "G-R2ZXJFBX2N"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);