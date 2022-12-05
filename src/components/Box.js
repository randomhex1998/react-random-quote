import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

const Box = () => {

    const [qoute , setQuote] = useState("");
    const [author , setAuthor] = useState("");

  const apiHandler = () => {
    axios.get(BASE_URL).then((res) => {
      let mainQuotesAdd = res.data.quotes;
      let rndNum = Math.floor(Math.random() * mainQuotesAdd.length);
      let showQuote = mainQuotesAdd[rndNum];
      setQuote(showQuote.quote);
      setAuthor(showQuote.author);
    });
  };

  return (
    <div className="main-box">
      <h2>The King is Back</h2>
      <div className="Content-box">
        <p className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 className="author-box">Rayan Jaberi</h4>
      </div>
      <div className="btn-area">
        <button className="btn gen-btn" onClick={apiHandler}>
          Generate
        </button>
        <button className="btn copy-btn">Copy</button>
      </div>
    </div>
  );
};

export default Box;
