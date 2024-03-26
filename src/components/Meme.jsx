import React, { useState } from 'react';
import memeDaata from '../memeData.js';

const Meme = () => {
  const [randomMeme, setRandomMeme] = useState('');

  function getMemeImage() {
    const memes = memeDaata.data.memes;
    console.log('hello', memes);
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex].url);
    console.log('random', randomMeme);
  }

  return (
    <div className="meme-container">
      <div className="form">
        <div className="first-input">
          <label>Top Text</label>
          <input type="text" placeholder="ShutUp" className="input-1"></input>
        </div>
        <div className="second-input">
          <label>Bottom Text</label>
          <input type="text" placeholder="And take my money" className="input-2" />
        </div>

        <button className="form-button" onClick={getMemeImage}>
          Get a New meme Image{' '}
        </button>
        <img src={randomMeme} className="meme-image" />
      </div>
    </div>
  );
};

export default Meme;
