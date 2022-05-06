const dogs = [
  { name: "Shickers", age: 2 },
  { name: "hugo", agw: 8 },
];

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is${dog.name} `);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});
console.warn("text");
console.error("error text!");
console.info("lalallaaalla");
console.dir("p");
console.count("wes");
console.count("wes");
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
