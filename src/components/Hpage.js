import React, { useState } from "react";
import "./css/Hpage.css";
import Stform from "./Stform";
import Quiz from "./Quiz";
const Hpage = () => {
  const [showq, setShowq] = useState(false);

  return (
    <>
      <center>
        <h1>Quizz App</h1>
      </center>
      {!showq && <Stform setShowq={setShowq} />}
      {showq && <Quiz />}
    </>
  );
};
export default Hpage;
