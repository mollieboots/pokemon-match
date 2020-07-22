export const Pokedex = require('pokeapi-js-wrapper');

let P = new Pokedex.Pokedex({ protocol: 'https' });

P.getPokemonHabitatByName("cave")
.then(function(response) {
  console.log(response);
});

// P.getPokemonByName('gastly') // with Promise
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

// // return an array of info, example below returns clefable, persim berry, and static
// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
//     .then(function(response) {
//       console.log(response); // resource function accepts singles or arrays of URLs/paths
//     })

// P.getPokemonColorByName('green') // with Promise
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

// // returns "Likes to thrash about"
// P.getPokemonHabitatsList() // with Promise
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });