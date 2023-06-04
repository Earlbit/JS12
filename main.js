let string1 = "I love JavaScript";
let string2 = "I'm a great programmer";

function findLongerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

let longerString = findLongerString(string1, string2);
console.log(longerString);
