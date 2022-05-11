let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);
name = "wesly";
console.log(name, name2);

const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;
console.log(players, team);

// team[3] = "Lux";
console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
team2[3] = "Lux";
console.log(players, team2);

const team4 = [...players];
team4[3] = "heeee hawww";
console.log(team3, team4);

const team5 = Array.from(players);
team5[3] = "cool";
console.log(team5);

const person = {
  name: "Wes Bos",
  age: 80,
};

// const captian = person;
// captian.number = 99;
// console.log(person);

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, cap2);

const cap3 = { ...person };
const wes = {
  name: "Wes",
  age: 100,
  sosial: {
    twitter: "@wesb",
    facebook: "wes.b",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
dev.name = "Wesly";
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);
