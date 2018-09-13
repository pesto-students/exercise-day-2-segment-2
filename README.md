<p align="center">
  <a href="https://pesto.tech/">
    <img alt="PESTO" src="https://www.pesto.tech/assets/pestoblack.svg" width="500">
  </a>
</p>

# Questions:

## Instructions:
All the answers should be written in proper English.

---

**1) Why should we write tests?**
A: Tests ensure that the desired functionalities are implemented correctly and also check that failsafe/edge cases are taken care of as well. 

**2) How much code coverage is required? Comment.**
A: Code coverage depends on a lot of factors including budget,scale,timing,codebase,frequency of changes being made etc. Hence it's a collaborative decision of people involved in it. There cannot be a thumb rule as situations may vary indefinetly.However if a codebase provides very important services and is less frequently changed, 80-85% code coverage should be there. 
**3) What kind of test is this? Explain your choice of answer.**
  #### Options:
  - End to end (E2E)
  - Integration
  - Unit

      ```js
        var request = require('supertest');
        var app = require('../server');

        describe('API Tests', function() {
          var task  = {
            name: 'test',
          };

          describe('Get all tasks', function() {
            it('should get all tasks', function(done) {
              request(app)
                .get('/tasks')
                .end(function(err, res) {
                  expect(res.statusCode).toBe(200);
                  expect(Array.isArray(res.body)).toBe(true);
                  done();
                });
            });
          });

          describe('Create task ', function() {
            it('should create a task', function(done) {
              request(app)
                .post('/tasks')
                .send(task)
                .end(function(err, res) {
                  expect(res.statusCode).toBe(200);
                  expect(res.body.name).toBe('test');
                  task = res.body;
                  done();
                });
            });
          });
        });
      ```

A: Test above is an integration test as it involves more than one modules to interact and provide data to be tested.

**4) Below are 2 snippets of code which achieve the same functionality. Which snippet of code is better testable and WHY?**

  ```js
    // 1
    function valIncrementer(val, disabled) {
      var nextVal = val + 1;
      function clipToUpperLimit() {
        if (val >= 10) {
          nextVal = 10;
          secondStageSetter()
        }
      }
      function clipToLowerLimit() {
        if (val <= 0) {
          nextVal = 0;
          secondStageSetter()
        }
      }
      function secondStageSetter() {
        if (disabled) {
          nextVal = val
        }
      }
      function run() {
        clipToUpperLimit()
        clipToLowerLimit()
      }
      run()
      return nextVal
    }

    // 2
    const incrementedVal = (val) => val + 1;
    function substituteVal(val, low, high) {
      if (val >= high) return high
      else if (val <= low) return low
      else return val
    }
    function shouldIncrement(val, disabled) {
      return val >= 0 && val < 10 && !disabled
    }
    function valIncrementer(val, disabled) {
      if (shouldIncrement(val, disabled)) {
        return incrementedVal(val)
      }
      return substituteVal(val, 0, 10)
    }
  ```
A: Second way is better as it has better unit testing as opposed to first part where testing the modules will get relatively complicated.

  **5) Describe the difference between the two tests below. Which one is ideal and WHY?**

  ```js
      // 1
      it('should send the profile data to the server and update the profile view properly', function() {
        expect(...)to(...);
        expect(...)to(...);
      });

      // 2
      it('should send the profile data to the server', function() {
        expect(...)to(...);
      });

      it('should update the profile view properly', function() {
        expect(...)to(...);
      });
  ```
A: The difference between the two tests is that first one is testing two functionalilty in a single test case, while second part is using separate test cases to test the two different functionalities. Ideally, it's better to test different functionality separetly.