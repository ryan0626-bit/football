import React from "react";

function Score(props) {
  const {teamScore, setTeamScore, teamName} = props;
  return (
    <>
      <button
        onClick={() => {
          setTeamScore(teamScore + 7);
        }}
      >{`Touchdown ${teamName}`}</button>
      <button
        onClick={() => {
          setTeamScore(teamScore + 3);
        }}
      >
        FieldGoal {teamName}
      </button>
    </>
  );
}

export default Score;
