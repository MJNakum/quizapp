import React, { Component, useState } from "react";

const Question = (props) => {
  const questions = props.questionset;
  const [isLoading, setIsLoading] = useState(true);

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

  const multiple = (qset) => {
    qset.incorrect_answers.push(qset.correct_answer);
    qset.incorrect_answers = shuffleArray(qset.incorrect_answers);

    qset.incorrect_answers = Array.from(new Set(qset.incorrect_answers));

    console.log(qset.incorrect_answers, qset.correct_answer);
    return qset.incorrect_answers.map((ans) => {
      return <button key={ans}> {ans} </button>;
    });
  };

  const showques = questions.map((questionset) => {
    return (
      <div key={questionset.question}>
        <h2>{questionset.question}</h2>

        {questionset.type == "multiple" ? (
          multiple(questionset)
        ) : (
          <button>dsfhjkfhdsjkfhjskdfhsjkdfhj</button>
        )}
      </div>
    );
  });

  return (
    <>
      {isLoading}
      <div></div>
      {/* {console.log(props.questionset)} */}
      <div>{showques}</div>
    </>
  );
};

export default Question;
