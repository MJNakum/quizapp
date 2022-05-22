import { Axios } from "axios";
import React, { useState, useEffect } from "react";

const Quiz = (props) => {
  const axios = require("axios").default;
  const [isLoading, setIsLoading] = useState(true);
  const getques = (url) => {
    axios
      .get(url)
      .then((response) => {
        return response;
      })
      .then(setIsLoading(false));
  };

  useEffect(() => {
    getques(props.url);
  }, []);

  return (
    <>
      <div>hello</div>
      {isLoading && (
        <div>
          <h1>LOADING ...</h1>
        </div>
      )}
    </>
  );
};
export default Quiz;
