import React, { useState } from "react";
import "./App.css";

function App() {
  const [homeTeamName, setHomeTeamName] = useState("rams");
  const [awayTeamName, setAwayTeamName] = useState("49ers");
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);
console.log('helloworld')
  // let isTie = homeTeamScore === awayTeamScore;
  // let isHomeTeamW

  return (
    <div>
      <input
        value={homeTeamName}
        onChange={(e) => setHomeTeamName(e.target.value)}
      />

      <button
        onClick={() => {
          setHomeTeamScore(homeTeamScore + 7);
        }}
      >{`Touchdown ${homeTeamName}`}</button>
      <button
        onClick={() => {
          setHomeTeamScore(homeTeamScore + 3);
        }}
      >
        FieldGoal {homeTeamName}
      </button>

      <button
        onClick={() => {
          setAwayTeamScore(awayTeamScore + 7);
        }}
      >
        Touchdown{awayTeamName}
      </button>
      <button
        onClick={() => {
          setAwayTeamScore(awayTeamScore + 3);
        }}
      >
        FieldGoal{awayTeamName}
      </button>

      <p>{`The current score for ${homeTeamName} is ${homeTeamScore}`}</p>

      <p>{`The current score for ${awayTeamName} is ${awayTeamScore}`}</p>

      <p>
        {homeTeamScore > awayTeamScore ? homeTeamName : awayTeamName} Is
        Winning!!!
      </p>

      <input
        value={awayTeamName}
        onChange={(e) => setAwayTeamName(e.target.value)}
      />
    </div>
  );
}

export default App;

// 2 inputs for 2 teams;
// each team is going to have 2 buttons a touchdown and a feildgoal;
// able to see each teams score;
// heading tag of the winning team;
