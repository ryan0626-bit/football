import React, { useState } from "react";

function Player(props) {
 const { name, number } = props;
  
  
  return (
<div>{`name is ${name}, number is ${number}`}</div>
  )
}

export default Player;
