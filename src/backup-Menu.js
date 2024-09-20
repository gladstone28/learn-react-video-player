import React, { useState } from 'react';

function Menu({ onSelectVideo }) {
  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  };

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
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
