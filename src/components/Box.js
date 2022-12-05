import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/BaseUrl";
import { Btn } from "../shared/Btn";

const Box = () => {
  const [qoute, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    apiHandler();
  }, []);

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
        <p className="text-box">{qoute}</p>
        <h4 className="author-box">{author}</h4>
      </div>
      <div className="btn-area">
        <Btn content="Generate" cls="btn gen-btn" clkFunc={apiHandler} />
        <Btn content="Copy" cls="btn copy-btn" />
      </div>
    </div>
  );
};

export default Box;
