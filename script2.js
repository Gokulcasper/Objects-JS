// Find a Particular Property in Object

const candidate = {
  Name: "raj",
  getname() {
    console.log(`This is ${this.Name}`);
  },
};

// Name is avaiable in object so output is Yes

if ("Name" in candidate) {
  console.log("yes");
} else {
  console.log("No");
}

// age is not avaialbe in object so output is No

if ("age" in candidate) {
  console.log("yes");
} else {
  console.log("No");
}
