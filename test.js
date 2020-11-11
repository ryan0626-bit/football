let players = [
  { name: "frank", number: 12 },
  { name: "tim", number: 1 },
  { name: "mike", number: 1233 },
];

let newPlayers = players.map(
  (player) => `
  <div>
   <div>${players.name}</div>
   <div>${players.number}</div>
 </div>`
);

console.log("original players are");
console.log(players);
console.log("new players are");
console.log(newPlayers);


