import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Pokedex } from "./pokemon-match.js";
// const Pokedex = require('pokeapi-js-wrapper');
let P = new Pokedex.Pokedex({ protocol: 'https' });

$(document).ready(function () {
    P.getPokemonHabitatsList() // with Promise
    .then(function (response) {
        console.log(response)
        $('.list').text(response.results[0].name)
    })
    .catch(function (err) {
        console.log(err)
    });
});