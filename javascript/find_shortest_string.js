function findShortestString(arr) {
  // type your code here
  let newArr = [arr[0]]
  for (let string of arr) {
    if(string.length < newArr[0].length) {
      newArr[0] = string
    }
  }
  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const start = Date.now()
  for (let i = 0 ; i < 1000 ; i++) {
    findShortestString(findShortestString(['flower', 'juniper', 'lily', 'dadelion']))
  }

  const avg = (Date.now() - start) / 1000
  console.log(avg)
}


module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// declare a new array and assign it the value of the first provided array element 
// loop through the entire array and compare the new array[0] length to the length of the current string length in the loop
// if the newArr[0].length is shorter , then move on , else assign newArr[0] to the current string in looped array
