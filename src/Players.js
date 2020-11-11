import { useState } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([{ name: "ryan", number: 2 }]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerNumber, setNewPlayerNumber] = useState("");
const removePlayer =() => {

}

  return (
    <>
      <input
        value={newPlayerName}
        onChange={(e) => setNewPlayerName(e.target.value)}
      />

      <input
        value={newPlayerNumber}
        onChange={(e) => setNewPlayerNumber(e.target.value)}
      />

      <button
        onClick={() => {
          setPlayers([
            ...players,
            { name: newPlayerName, number: newPlayerNumber },
          ]);
        }}
      >
        Add Player
      </button>
      {players.map((player) => (
        <Player
          removePlayer={removePlayer}
          name={player.name}
          number={player.number}
        />
      ))}
    </>
  );
};

export default Players;
