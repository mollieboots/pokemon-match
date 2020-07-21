import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Pokedex } from "./pokemon-match.js";

//Separation of Logic - see lesson by the same name
//import PokemonService class
//create new instance of PokemonService - like how you create a new instance of an object using a constructor.
//You can then use your PokemonService anywhere in your application

let P = new Pokedex.Pokedex({ protocol: "https" });
//this is a promise that is requesting information from your pokemon API
//It looks like you got the same promise in pokemon-match.js file
//Gonna leave comments there because this main.js should just be your front-end logic
//front-end logic generally anything dealing with gathering information from the user and displaying information back to them

$(document).ready(function () {
  //When separating this front-end and back-end logic be aware the lesson Separation of Logic is assuming an async function
  P.getPokemonHabitatsList() // with Promise
    .then(function (response) {
      console.log(response);
      $(".list").text(response.results[0].name);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//.then returns a Promise object
// a promise can have three states: Pending, Fulfilled, Rejected
