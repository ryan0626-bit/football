import React, { useState } from "react";
import TeamName from "./TeamName";
import Score from "./Score";
import Players from "./Players";

function Team(props) {
  const { initialName } = props;
  const [name, setName] = useState(initialName);
  const [score, setScore] = useState(0);

  return (
    <>
      <TeamName name={name} setName={setName} />

      <Score teamScore={score} setTeamScore={setScore} teamName={name} />

      <p>{`The current score for ${name} is ${score}`}</p>

      <Players />
    </>
  );
}

export default Team;
