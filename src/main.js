import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Pokedex } from "./pokemon-match.js";
// const Pokedex = require('pokeapi-js-wrapper');
let P = new Pokedex.Pokedex({ protocol: 'https' });

let hpokemon = []
$(document).ready(function () {
    $("#user-pokemon").submit(function (event) {
        event.preventDefault();
        let h = $("#habitat").val();
        P.getPokemonHabitatByName(h)
            .then(function (response) {
                hpokemon.push(response.pokemon_species);
                return hpokemon;    
            });
        console.log(hpokemon);
    });
});

// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
//     .then(function(response) {
//       console.log(response); // resource function accepts singles or arrays of URLs/paths
//     })