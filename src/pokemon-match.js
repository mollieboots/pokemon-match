//To call an API you have many choices. The two presented in LHTP are:
//Use the fetch() method (see lessons Using Fetch)
// OR
//manually create promises and XMLHttpRequests objects (see lesson Promises in ES6)
//the fetch() method does the above for you
//which one to use can be a matter of preference or the needs of the API you are using.

//Using fetch() is further refactored in the lesson Async and Await
//You could use fetch() without async functions
//If you find yourself chaining multiple .then() (a prototype of fetch()) and your code is getting long - async functions are a solution

import { Pokedex } from "./pokemon-match.js";
export const Pokedex = require("pokeapi-js-wrapper");

//This is your promise - your ticket at the DMV
let P = new Pokedex.Pokedex({ protocol: "https" });

//This has the setup of using fetch without actually using the method itself
//This is okay, without knowing anything about the pokemon API - perhaps getPokemonByName method is doing this for you
P.getPokemonByName("gastly")
  .then(function (response) {
    //I added this "if response is not okay" three lines of code
    //We have to determine what constitutes an error
    //otherwise .catch() won't trigger - it only triggers if code throws an exception
    //see lesson Exception Handling in JavaScript
    //however - see the lesson Using Fetch() - at the bottom where it starts with "An important note"
    if (!response.ok) {
      throw Error(response.statusText);
    }
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

//When you are ready - see lesson Async and Await to refactor this block by using the async keyword
//async functions are using promises under the hood
//be aware that catch block from "Using Fetch" is used differently as a try..catch block if using an Async function
//revisit the last paragraph in this lesson and discuss the possible downsides
P.resource([
  "/api/v2/pokemon/36",
  "api/v2/berry/8",
  "https://pokeapi.co/api/v2/ability/9/",
]).then(function (response) {
  console.log(response); // resource function accepts singles or arrays of URLs/paths
});

P.getPokemonColorByName("green") // with Promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

// returns "Likes to thrash about"
P.getCharacteristicById(8) // with Promise
  .then(function (response) {
    console.log(response.descriptions[1].description);
  })
  .catch(function (err) {
    console.log(err);
  });

//Separation of Logic

//   export class PokemonService {
//     all the API calls and error handling
//     return jsonifiedResponse
//   }
