import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
const Pokedex = require('pokeapi-js-wrapper');

$(document).ready(function() {

});

var P = new Pokedex.Pokedex({protocol: 'https'});
P.getPokemonByName('eevee') // with Promise
.then(function(response) {
  console.log(response);
})
.catch(function(err) {
  console.log(err)
});