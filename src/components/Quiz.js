import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = (props) => {
  const axios = require("axios").default;
  const [isLoading, setIsLoading] = useState(true);
  const [questionsets, setQuestionsets] = useState([]);
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
          />
        </div>
      );
    }
  });

  useEffect(() => {
    getques(props.url);
  }, []);

  return (
    <>
      {showques}
      <div>{/* <Question questionset={questionsets} /> */}</div>
      {isLoading && (
        <div>
          <h1>LOADING ...</h1>
        </div>
      )}
    </>
  );
};
export default Quiz;
