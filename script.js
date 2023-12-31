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

// Strings Related Challenges.

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure


SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const stor = document
  .querySelector("button")
  .addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const splitText = text.split("\n");
    console.log(splitText);

    let highestSize = 0;

    for (const [num, element] of splitText.entries()) {
      let [first, sec] = element.split("_");
      const newSec = sec[0].toUpperCase() + sec.slice(1).toLowerCase();

      //determines the highest string length to add to the pad

      if (element > highestSize) {
        highestSize = element.length;
      }

      const result = (first.toLowerCase() + newSec).trimStart();
      const repetitive = "✅".repeat(num + 1);
      console.log(result.padEnd(20, " ") + repetitive);
    }
  });

//ONE MORE STRING EXERCISE

const stryy = "Peruvianhair";

console.log(stryy.padEnd(stryy.length + 2, "*"));

/*
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

console.log("----------XXX---------");

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightInfo = flights.split("+");

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const elements of flightInfo) {
  const noUnderscoreElements = elements.replace(/_/g, " ");

  //   console.log(noUnderscoreElements);
  const [data1, data2, data3, data4] = noUnderscoreElements.split(";");

  //   console.log(data1);
  if (data1.toLowerCase().includes("delayed")) {
    console.log(
      ` ${"🔴" + data1} from ${getCode(data2)} to ${getCode(
        data3
      )} (${data4})`.padStart(50)
    );
  } else {
    console.log(
      ` ${data1.padStart(20)} from ${getCode(data2)} to ${getCode(
        data3
      )} (${data4.replace(":", "h")}`.padStart(50)
    );
  }
}
