/**
 * Jest tests sequencer
 *
 * Runs our tests in alphabetical order by directory / filename.
 *
 * This allows us to do things like run the setup wizard tests to further bootstrap
 * the testing environment for other tests.
 *
 * @link https://jestjs.io/docs/en/next/configuration#testsequencer-string
 */

 const Sequencer = require('@jest/test-sequencer').default;

 let tests = ['./users/getUser.test.ts', './users/getUsers.test.ts', './posts/getPost.ts', './posts/getPosts.ts'];

 class CustomSequencer extends Sequencer {
     sort( tests ) {
         const copyTests = Array.from(tests);
         return copyTests;
     }
 }
 
 module.exports = CustomSequencer;

// //main.test.js
// require("./users/getUser.test.ts");
// require("./users/getUsers.test.ts");
// require("./posts/getPost.ts");
// require("./posts/getPosts.ts");
