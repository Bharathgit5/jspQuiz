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
