import React, { useState } from "react";
import "./App.css";
import TeamName from "./TeamName";
import Score from "./Score";

function App() {
  const [homeTeamName, setHomeTeamName] = useState("rams");
  const [awayTeamName, setAwayTeamName] = useState("49ers");
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);
  console.log('This is new code from a different person that is not currently on your local computer')
  // let isTie = homeTeamScore === awayTeamScore;
  // let isHomeTeamW

  return (
    <div>
 

      <TeamName name={homeTeamName} setName={setHomeTeamName} />

      <Score
        teamScore={homeTeamScore}
        setTeamScore={setHomeTeamScore}
        teamName={homeTeamName}
      />

      <Score
        teamScore={awayTeamScore}
        setTeamScore={setAwayTeamScore}
        teamName={awayTeamName}
      />

      <p>{`The current score for ${homeTeamName} is ${homeTeamScore}`}</p>

      <p>{`The current score for ${awayTeamName} is ${awayTeamScore}`}</p>

      <p>
        {homeTeamScore > awayTeamScore ? homeTeamName : awayTeamName} Is
        Winning!!!
      </p>

      <TeamName name={awayTeamName} setName={setAwayTeamName} />
    </div>
  );
}

export default App;

// 2 inputs for 2 teams;
// each team is going to have 2 buttons a touchdown and a feildgoal;
// able to see each teams score;
// heading tag of the winning team;
