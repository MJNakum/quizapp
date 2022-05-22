import React, { useState } from "react";
import "./css/Stform.css";
const Stform = (props) => {
  const [numQue, setNumQue] = useState(10);
  const [category, setCategory] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  const [type, setType] = useState(1);

  const lesgo = (e) => {
    var url = "https://opentdb.com/api.php?";
    url += "amount=";
    url += e.target[0].value;
    url += "&category=";
    url += e.target[1].value == "any" ? "" : e.target[1].value;
    url += "&difficulty=";
    url += e.target[2].value == "any" ? "" : e.target[2].value;
    url += "&type=";
    url += e.target[3].value == "any" ? "" : e.target[3].value;

    props.setUrl(url);
    props.setShowq(true);

    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={lesgo}>
        <label type="text" name="num_que" className="lbl">
          Number of Question
        </label>
        <input type="number" defaultValue={10} className="inpt" />
        <br />
        <label type="text" name="category" className="lbl">
          Select Category
        </label>
        <select className="inpt">
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music </option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment:Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <br />
        <label type="text" name="difficulty" className="lbl">
          Select Difficulty
        </label>
        <select className="inpt">
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <br />
        <label type="text" name="num_que" className="lbl">
          Type of Question
        </label>
        <select className="inpt">
          <option value="any">Any Type</option>
          <option value="multiple">Multiple choice</option>
          <option value="boolean">True False</option>
        </select>
        <center>
          <input type="submit" className="btn button1" value="Take Quiz" />
        </center>
      </form>
    </>
  );
};

export default Stform;
