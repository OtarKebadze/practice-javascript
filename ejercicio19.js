// Welcome. You are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  let arrNum = num.toString().split("");
  let newArr = [];

  for (num of arrNum) {
    newArr.push(num * num);
  }
  let newNum = newArr.join().replaceAll(",", "");
  console.log(newNum);
}

squareDigits(3212);
