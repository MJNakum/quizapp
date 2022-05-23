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

  useEffect(() => {
    getques(props.url);
  }, []);

  return (
    <>
      <div>hello</div>
      <div>
        <Question questionset={questionsets} />
      </div>
      {isLoading && (
        <div>
          <h1>LOADING ...</h1>
        </div>
      )}
    </>
  );
};
export default Quiz;
