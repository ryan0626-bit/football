import React, { useState } from "react";

function Player(props) {
  const { name, number, removePlayer } = props;

  return (
    <div>
      {`name is ${name}, number is ${number}`}

      <button onClick={() => removePlayer()} />
    </div>
  );
}

export default Player;
