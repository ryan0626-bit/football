import React, { useState } from "react";
import "./App.css";
import TeamName from "./TeamName";
import Score from "./Score";
import Team from "./Team";

function App() {
  return (
    <div>
      <Team initialName="rams" />
      <Team initialName="49ers" />
    </div>
  );
}

export default App;

// 2 inputs for 2 teams;
// each team is going to have 2 buttons a touchdown and a feildgoal;
// able to see each teams score;
// heading tag of the winning team;
