import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Pokedex } from "./pokemon-match.js";
import result from "./pokemon-match.js";
// const Pokedex = require('pokeapi-js-wrapper');
let P = new Pokedex.Pokedex({ protocol: 'https' });

let cpokemon = 0;
let hpokemon = 0;
$(document).ready(function () {
    $("#user-pokemon").submit(function (event) {
        event.preventDefault();
        let h = $("#habitat").val();
        let c = $("#color").val();
        P.getPokemonHabitatByName(h)
            .then(function (response) {
                hpokemon = response.pokemon_species
            console.log(hpokemon);
        })
        P.getPokemonColorByName(c)
            .then(function (response) {
                
                cpokemon = response.pokemon_species
                console.log(cpokemon);
            })
            console.log(hpokemon.pokemon_species)
        });
    });
    


// //     //Just an example//
// //     loadScript("/article/promise-chaining/one.js")
// //   .then(script => loadScript("/article/promise-chaining/two.js"))
// //   .then(script => loadScript("/article/promise-chaining/three.js"))
// //   .then(script => {
// //     one();
// //     two();
// //     three();
// //   });
 
// let gastly = []
// $(document).ready(function () {
//     $("#user-pokemon").submit(function (event) {
//         event.preventDefault();
//         P.getPokemonByName("gastly")
//         .then(function (response) {
//         gastly.pop();
//         gastly.push(response.name);
//         console.log(gastly[0]);
//         });
//     });
  

// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
//     .then(function(response) {
//       console.log(response); // resource function accepts singles or arrays of URLs/paths
//     })