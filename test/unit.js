/**
 * Unit tests
 */

// Dependencies
const assert = require('assert');
const randomFunctions = require('../app/lib');

// Holder for Tests
const unit = {};

/**
 * Assert that fibonacci function is returning an array that contains a fibonacci sequence
 * @param {Function} done callback
 */
unit['randomFunctions.fibonacci should return an array that contains a fibonacci sequence'] = (done) => {
  assert.doesNotThrow(() => {
    const val = randomFunctions.fibonacci(6);
    assert.deepEqual(val, [0, 1, 1, 2, 3, 5]);
    done();
  }, TypeError);
};

/**
 * Assert that bubbleSort function is returning an ordered array of numbers
 * @param {Function} done callback
 */
unit['randomFunctions.bubbleSort should return an ordered array of numbers'] = (done) => {
  assert.doesNotThrow(() => {
    const val = randomFunctions.bubbleSort([61, 6, 16, 1, 6, 1, 6, 0, 5]);
    assert.deepEqual(val, [0, 1, 1, 5, 6, 6, 6, 16, 61]);
    done();
  }, TypeError);
};

/**
 * Assert that isAPrimeNumber function is returning true when the parameter is a prime number
 * @param {Function} done callback
 */
unit['randomFunctions.isAPrimeNumber should return true when the parameter is a prime number'] = (done) => {
  assert.doesNotThrow(() => {
    const val = randomFunctions.isAPrimeNumber(3);
    assert.equal(val, true);
    done();
  }, TypeError);
};

/**
 * Assert that isAPrimeNumber function is returning false when the parameter is not a prime number
 * @param {Function} done callback
 */
unit['randomFunctions.isAPrimeNumber should return false when the parameter is not a prime number'] = (done) => {
  assert.doesNotThrow(() => {
    const val = randomFunctions.isAPrimeNumber(9);
    assert.equal(val, false);
    done();
  }, TypeError);
};

// Assert that the 
module.exports = unit;
