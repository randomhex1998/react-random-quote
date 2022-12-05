import React from "react";

const Box = () => {
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
      <div className="footer-box">
        <div className="btn-area">
          <button className="gen-btn">Generate</button>
          <button className="copy-btn">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Box;
