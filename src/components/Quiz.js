import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = (props) => {
  const axios = require("axios").default;
  const [isLoading, setIsLoading] = useState(true);
  const [questionsets, setQuestionsets] = useState([]);
  const [score, setscore] = useState(0);
  const [highscore, sethighscore] = useState(0);
  const getques = (url) => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        setQuestionsets(response.data.results);
      })
      .then(setIsLoading(false));
  };

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const showques = questionsets.map((qset) => {
    if (qset.type == "multiple") {
      qset.incorrect_answers.push(qset.correct_answer);
      qset.incorrect_answers = shuffleArray(qset.incorrect_answers);
      qset.incorrect_answers = Array.from(new Set(qset.incorrect_answers));
      console.log(qset.incorrect_answers, qset.correct_answer);

      return (
        <div key={qset.question}>
          {/* {console.log(qset.incorrect_answers)} */}
          <Question
            question={qset.question}
            options={qset.incorrect_answers}
            correct={qset.correct_answer}
            setscore={setscore}
            score={score}
          />
        </div>
      );
    }
  });

  const submit = () => {
    if (score > highscore) sethighscore(score);
    setscore(0);
    console.log(score, highscore);
    return <Result />;
  };

  useEffect(() => {
    getques(props.url);
  }, []);

  return (
    <>
      <div>
        <div className="scorecard">
          <center>
            <div>Current Score</div>
            <div style={{ fontSize: "xxx-large" }}>{score}</div>
            <br />
            <div>Highest Score</div>
            <div style={{ fontSize: "xxx-large" }}>{highscore}</div>
          </center>
        </div>
      </div>
      {showques}
      {isLoading && (
        <div>
          <h1>LOADING ...</h1>
        </div>
      )}
      <div>
        <center>
          <button onClick={submit} className="submit">
            Submit
          </button>
        </center>
      </div>
    </>
  );
};
export default Quiz;
