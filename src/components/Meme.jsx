import React, { useState } from 'react';
import memeDaata from '../memeData.js';

const Meme = () => {
  // comment added for test commit
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memeDaata);
  // const [randomMeme, setRandomMeme] = useState('');

  function getMemeImage() {
    const memes = allMemeImages.data.memes;
    console.log('hello', memes);
    const randomIndex = Math.floor(Math.random() * memes.length);

    setMeme((prevState) => ({
      ...prevState,
      randomImage: memes[randomIndex].url,
    }));
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
        <img src={meme.randomImage} className="meme-image" />
      </div>
    </div>
  );
};

export default Meme;
