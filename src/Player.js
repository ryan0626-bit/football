import React, { useState } from "react";

function Player(props) {
  const { name, number, removePlayer, id } = props;

  return (
    <div>
      {`name is ${name}, number is ${number}`}

      <button onClick={() => removePlayer(id)} >X</button>
    </div>
  );
}

export default Player;
