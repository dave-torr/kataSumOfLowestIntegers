function sumTwoSmallestNumbers(numbers) { 
    numbers.sort((a, b) => a - b);
    console.log(`Sum Should be ${(numbers[0] + numbers[1])}`)
  }

  //https://codepen.io/dave-torr/pen/povdMBM = codepen tests