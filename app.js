function greet(string, firstname, lastname) {
  let lastnameType;
  lastnameType = lastname === "Kumar" ? "short" : "big";

  return `${string[0]} ${firstname} ${lastname},${string[1]} you have used your ${lastnameType} name`;
}
const firstname = "Ravi";
const lastname = "Choudhary";
const greeting = greet`Hello, ${firstname} ${lastname}`;
console.log(greeting);
