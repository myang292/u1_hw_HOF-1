// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  
  const arr = [1,2,3,4]
  const ans1 = arr.forEach((element) => {
    return arr + 1
  })
}

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */

   const arr = [1,2,3,4]
   const ans2 = arr.forEach((element) => {
     for (let i = 0; i<arr.length; i++) {
       return ans2 + 1
     }
   })
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */

   const arr = [1,2,3,4]
   const ans2 = arr.forEach((element) => {
     for (let i = 0; i<arr.length; i++) {
       return ans2
     }
   })
}


function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */

   const arr = ['2.30, 2.40, 32.99']
   const dec = arr.map((num) => {
    return `$ ${num}`
})


function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */

   const values = [{
    name: 'Joe',
    happy: false
  }]

const newSent = values.filter((happy) => {
    if (happy == true) {
        return values
    } else {
        return 0
    }
})


function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  const arr = [1,2,3,4]
  const sum = arr.reduce ((a,b) => {
      return a + 2 + b
  },0)

}


function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  const arr = ['g', 'f', 'z']
  const newArr = arr.reduce ((a,b) => {
    return `hi ${arr}!`
  })
}


//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
}

