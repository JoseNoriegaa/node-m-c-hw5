/**
 * Test runner
 */

// Application logic for the test runner
app = {};

// tests wrapper
app.tests = {};

// Dependencies
app.tests.unit = require('./unit');

// tests counter
app.countTests = () => {
  let counter = 0;
  for (const key in app.tests){
    if (app.tests.hasOwnProperty(key)) {
      const subTests = app.tests[key];
      for (var testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// Run tests, collecting the errors and successes
app.runTests = () => {
  const errors = [];
  let successes = 0;
  const limit = app.countTests();
  let counter = 0;
  for (var key in app.tests) {
    if (app.tests.hasOwnProperty(key)) {
    const subTests = app.tests[key];
      for (const testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (() => {
            const tmpTestName = testName;
            const testValue = subTests[testName];
            // Call the test
            try {
              testValue(() => {
                // If it calls back without throwing, then it succeeded, so log it in green
                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                counter++;
                successes++;
                if (counter === limit) {
                  app.produceTestReport(limit, successes, errors);
                }
              });
            } catch (err) {
              // If it throws, then it failed, so capture the error thrown and log it in red
              errors.push({
                name: testName,
                error: err,
              });
              console.log('\x1b[31m%s\x1b[0m', tmpTestName);
              counter++;
              if (counter === limit) {
                app.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

// Produce a test outcome report
app.produceTestReport = (limit, successes, errors) => {
  console.log('');
  console.log('--------BEGIN TEST REPORT--------');
  console.log('');
  console.log('Total Tests: ',limit);
  console.log('Pass: ',successes);
  console.log('Fail: ',errors.length);
  console.log('');
  // If there are errors, print them in details
  if (errors.length > 0) {
    console.log('--------BEGIN ERROR DETAILS--------');
    console.log('');
    errors.forEach((testError) => {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      console.log(testError.error);
      console.log('');
    });
    console.log('');
    console.log('--------END ERROR DETAILS--------');
  }
  console.log('');
  console.log('--------END TEST REPORT--------');
};

// Run tests
app.runTests();
