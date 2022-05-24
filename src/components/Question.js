import React, { Component, useState } from "react";
import "./css/Question.css";

const Question = (props) => {
  const question = props.question;
  const correct = props.correct;
  const option = props.options;

  // const [isLoading, setIsLoading] = useState(true);
  const [fcolor, setFcolor] = useState("rgba(217, 217, 217, 0.5)");
  const [isDisable, setISDisable] = useState(false);

  // const multiple = (qset) => {
  // qset.incorrect_answers.push(qset.correct_answer);
  // qset.incorrect_answers = shuffleArray(qset.incorrect_answers);

  // qset.incorrect_answers = Array.from(new Set(qset.incorrect_answers));

  // console.log(qset.incorrect_answers, qset.correct_answer);
  //   return (

  //   );
  // };

  // const showques = questions.map((questionset) => {
  //   return (
  //     <div
  //       key={questionset.question}
  //       className="form2"
  //       style={{ backgroundColor: fcolor }}
  //     >
  //       <h2>{questionset.question}</h2>

  //       {questionset.type == "multiple" ? (
  //         multiple(questionset)
  //       ) : (
  //         <button>dsfhjkfhdsjkfhjskdfhsjkdfhj</button>
  //       )}
  //     </div>
  //   );
  // });

  return (
    <>
      <div className="form2" style={{ backgroundColor: fcolor }}>
        <h2>{question}</h2>
        <div className="btn-group">
          <center>
            {console.log(option)}
            {option?.map((ans) => {
              return (
                <button
                  disabled={isDisable}
                  key={ans}
                  onClick={() => {
                    setISDisable(true);
                    ans === correct
                      ? setFcolor("rgba(93,224,48, 0.634)")
                      : setFcolor("rgba(252, 62, 24, 0.634)");
                  }}
                >
                  {ans}
                </button>
              );
            })}
          </center>
        </div>
      </div>
    </>
  );
};

export default Question;
