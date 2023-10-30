// TO capitalize
const capitalizeName = function (name) {
  const names = name.split(" ");
  const newNames = [];

  for (const n of names) {
    // newNames.push(n[0].toUpperCase() + n.slice(1));

    newNames.push(n.replace(n[0], n[0].toUpperCase(), ""));
  }
  console.log(newNames.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// padding

const message = "Go to gate 23!";
console.log(message.padStart(10, "*").padEnd(35));
console.log("Jonas".padStart(13, "*"));

// APPLICATIONS OF PADDING

const maskCredid = function (num) {
  // convert number to string
  const str = num + "";
  //getting the last 4 digits.
  const last = str.slice(-4);

  console.log(last.padStart(str.length, "*"));
};

maskCredid(3322333);
maskCredid("24243245454");

console.log("jonasey".padStart(10, "X"));

// REPEATING STRING METHOD.

const message2 = "Bad weather... All departures Delayed";

console.log(message.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(6);
planesInLine(3);
