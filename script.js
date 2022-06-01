// Enumerating Properties Of an Object

const user = {
  name: "Gokul",
  getname() {
    console.log(`This is ${this.name}`);
  },
};

for (let key in user) {
  // using for in
  console.log(key, user[key]);
}
for (let key of Object.keys(user)) {
  // using for of
  console.log(key);
}
for (let entry of Object.entries(user)) {
  console.log(entry);
}
