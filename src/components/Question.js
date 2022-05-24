import React, { Component, useState } from "react";
import "./css/Question.css";

const Question = (props) => {
  const question = props.question;
  const correct = props.correct;
  const option = props.options;

  const [fcolor, setFcolor] = useState("rgba(217, 217, 217, 0.5)");
  const [isDisable, setISDisable] = useState(false);

  const cor = () => {
    props.setscore(props.score + 1);
    setFcolor("rgba(93,224,48, 0.634)");
  };

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
                      ? cor()
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
