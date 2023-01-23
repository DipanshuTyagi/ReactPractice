import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // const handleUndo = () => {
  //   let lastWord = words.pop();
  //   console.log(words);
  //   let newText = lastWord;
  //   setText(newText);
  // };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#42743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#42743",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpCase}>
          Convert to UpperCase{" "}
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowCase}>
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary m-2" onClick={handleClear}>
          Clear TextBox{" "}
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text{" "}
        </button>
        {/* <button className="btn btn-primary m-2" onClick={handleUndo}>
          Undo{" "}
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} letter
        </p>
        <p>{0.008 * text.split(" ").length} min takes to read.</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter"}</p>
      </div>
    </>
  );
}
