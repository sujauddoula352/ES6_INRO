/** filter sectcts elements based on a condition and returns and array  with the element hat fulafilled the condition */
const numbers = [ 1,5,8,20,56];
const players = [ 75,60,72,74,60,55,62,51];
const friends = ['Hasnat','Jahan','Hira','Sohel'];
// const selected = players.filter(p => p >70);
//  const selected = players.filter(p => p >70);
// const selected = players.filter(p => p >50);
const selected = players.filter(p => p > 50);
console.log(selected);
const oddFriend = friends.filter(frnd => frnd.length > 4);
console.log(oddFriend)