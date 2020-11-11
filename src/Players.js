import { useState } from "react";
import Player from "./Player";
import { v4 as uuid } from "uuid";

const Players = () => {
  const [players, setPlayers] = useState([
    { name: "ryan", number: 2, id: uuid() },
  ]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerNumber, setNewPlayerNumber] = useState("");
  const removePlayer = (id) => {
 let newPlayers = players.filter((player) => {
      if (player.id !== id) {
        return true;
      } else {
        return false;
      }
    });

setPlayers(newPlayers)

  };

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
            { name: newPlayerName, number: newPlayerNumber, id: uuid() },
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
          id={player.id}
        />
      ))}
    </>
  );
};

export default Players;
