import { Pokedex } from './../src/pokemon-match.js';


describe("Pokedex", () => {
  test("should return the name of a pokemon", () => {
    let P = new Pokedex.Pokedex({ protocol: 'https' });
    P.getPokemonByName("gastly")
    .then(function (response) {
      let gastly = [];
        gastly.push(response.name);
        console.log(gastly);
      })
      .catch (function(err) { 
        console.log(err);
      })
      expect(gastly[0]).toEqual("gastly");
  });
});
