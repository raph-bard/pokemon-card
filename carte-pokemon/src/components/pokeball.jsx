import React, { useState } from 'react';

const Pokeball = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Inverse l'état actuel
  };

  return (
    <div className='pokeball-container'>
        <div className='overlay'></div>
        <div className={`pokeball salameche ${isClicked ? 'tiny-pokeball' : 'big-pokeball'}`} onClick={handleClick}>
        </div>
    </div>
  );
};

export default Pokeball;
