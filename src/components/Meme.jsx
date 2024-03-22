import React from 'react';

const Meme = () => {
  return (
    <div className="meme-container">
      <form>
        <div className="form">
          <div className="first-input">
            <label>Top Text</label>
            <input type="text" placeholder="ShutUp" className="input-1"></input>
          </div>
          <div className="second-input">
            <label>Bottom Text</label>
            <input type="text" placeholder="And take my money" className="input-2" />
          </div>
          <button className="form-button">Get a New meme Image </button>
        </div>
      </form>
    </div>
  );
};

export default Meme;
