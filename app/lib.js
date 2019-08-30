/**
 * Random functions
 */

// functions container
const container = {};

/**
 * fibonacci sequence
 * @param {Number} length
 */
container.fibonacci = (length) => {
  // validate the parameter
  length = typeof length === 'number' && length - 1 > 0 ? length : false;
  const nums = [0, 1];
  if (length) {
    if (length <= 2) {
      return nums.splice(0, length);
    } else {
      for (let i = 0; i < length - 2; i++) {
        const val1 = nums[i];
        const val2 = nums[i + 1]; 
        const val3 = val1 + val2; 
        nums.push(val3);
      }
      return nums;
    }
  } else {
    throw new Error('Missing parameter, it was expected a number greater than 0');
  }
}

/**
 * Bubble sort
 * @param {Array} nums
 */
container.bubbleSort = (nums) => {
  // validate the parameter
  nums = nums instanceof Array && !nums.some(x => typeof x !== 'number') ? nums : false;
  if (nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
        }
      } 
    }
    return nums;
  } else {
    throw new Error('Missing parameter, it was exepected an array of numbers');
  }
};

/**
 * Check if a parameter is a prime number
 * @param {Number} num
 */
container.isAPrimeNumber = (num) => {
  // validate the parameter
  num = typeof num === 'number' && num > 1 ? num : false;
  if (num) {
    let acc = 0;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         acc ++;
      }
    }
    return acc === 0;
  } else {
    return false;
  }
}

module.exports = container;
