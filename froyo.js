const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors."
);

const stringArray = userInputString.split(",");

const flavors = {};
for (let i = 0; i < stringArray.length; i++) {
  let flavor = stringArray[i];

  if (flavors[flavor]) {
    flavors[flavor] += 1;
  } else {
    flavors[flavor] = 1;
  }
}
console.log(flavors);
