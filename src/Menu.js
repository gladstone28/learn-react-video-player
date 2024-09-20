
import React, { useState } from 'react';

const VIDEOS = {
  fast: 'path/to/fast.mp4',
  slow: 'path/to/slow.mp4',
  cute: 'path/to/cute.mp4',
  eek: 'path/to/eek.mp4',
};

function Menu({ onSelectVideo }) {
  const [src, setSrc] = useState("");

  const clickHandler = (event) => {
    const name = event.target.value;
    setSrc(VIDEOS[name]); // Set the source using the VIDEOS object
    onSelectVideo(name);   // Call the parent handler
  };

  return (
    <form onClick={clickHandler}>
      <input type="radio" name="src" value="fast" /> fast
      <input type="radio" name="src" value="slow" /> slow
      <input type="radio" name="src" value="cute" /> cute
      <input type="radio" name="src" value="eek" /> eek
    </form>
  );
}

export default Menu;

