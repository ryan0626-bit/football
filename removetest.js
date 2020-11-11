let players = [
  { name: "frank", number: 12, id: 0 },
  { name: "tim", number: 1, id: 1 },
  { name: "joey", number: 1, id: 90 },
  { name: "mike", number: 1233, id: 2 },
  { name: "tim", number: 1, id: 8983 },
];
//name = frank or id = 8983 or id =90
// let newPlayers = players.filter((player) => {

//   if (player.id === 3) {
//     return false;
//   } else {
//     return true;
//   }
// });
// console.log(newPlayers)

const removePlayer = (officalId, me, newId, id, myParam) => {
  let newPlayers = players.filter((player) => {
    if (player.id === newId || player.id === myParam || player.name === officalId) {
      return false;
    } else {
      return true;
    }
  });
  console.log(newPlayers);
};

const dodadoda = () => {
  //the id we want to remove is 3 and is defined below and 3 cannot be hardcoded in removePlayer function
  let id = 3;
  let officialId = "frank";
  let newId = 8983;
  let finalRealId = 90;
  removePlayer(officialId, 1234, newId, id, finalRealId);
};
dodadoda();
