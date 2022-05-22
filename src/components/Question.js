import React, { Component } from "react";

const Question = (props) => {
  const questions = props.questionset;
  const showques = questions.map((questionset) => {
    return (
      <div key={questionset.question}>
        <h2>{questionset.question}</h2>
        <p>{questionset.correct_answer}</p>
      </div>
    );
  });

  return (
    <>
      <div>hello22222222222</div>
      {console.log(props.questionset)}
      <div>{showques}</div>
    </>
  );
};

export default Question;
