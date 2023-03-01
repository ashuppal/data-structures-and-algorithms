'use strict';

const AnimalShelter = require ('../animalShelter/animalShelter.js');


describe ('Animal Shelter', () => {
  it('can add a cat to the correct queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('cat1', 'cat');
    expect(shelter.cats.front.name).toEqual('cat1');
  });
  it('can add a dog to the correct queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog1', 'dog');
    expect(shelter.dogs.front.name).toEqual('dog1');
  });
});

