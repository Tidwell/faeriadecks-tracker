'use strict'

const expect = require('chai').expect

describe('(unit) example suite', () => {
  // Before test suite
  before((done) => {
    return done()
  })

  // Before each of the tests
  beforeEach((done) => {
    return done()
  })

  describe('feature 1', () => {
    it('should pass', (done) => {
      expect(true).to.be.ok
      done()
    })

  // add other tests...
  })

  // add other features...

  // After each of the tests
  afterEach((done) => {
    done()
  })

  // At the end of all
  after((done) => {
    done()
  })
})


//test deck
let sourceDeck = [
  { id: '001', name: 'Farm Boy', copies: '3', color: 'mountain', cost: '1'},
  { id: '002', name: 'Farm Boy', copies: '3', color: 'forest', cost: '5' },
  { id: '003', name: 'Farm Boy', copies: '3', color: 'desert', cost: '10' },
  { id: '004', name: 'Farm Boy', copies: '3', color: 'lake', cost: '20' },
  { id: '005', name: 'Farm Boy', copies: '3', color: 'neutral', costMountain: 2, costDesert: 2, costForest: 2, costLake: 2 },
  { id: '010', name: 'Farm Boy', copies: '3', color: 'neutral', costMountain: 5 },
  { id: '021', name: 'Farm Boy', copies: '3', color: 'neutral', costDesert: 1 },
  { id: '031', name: 'Farm Boy', copies: '3', color: 'neutral', costForest: 3  },
  { id: '041', name: 'Farm Boy', copies: '3', color: 'neutral', costLake: 2 },
  { id: '051', name: 'Farm Boy', copies: '3', color: 'neutral', costMountain: 2, costForest: 2 },
  { id: '061', name: 'Farm Boy', copies: '3', color: 'neutral' },
  { id: '071', name: 'Farm Boy', copies: '0', color: 'neutral' },
  { id: '081', name: 'Farm Boy', copies: '3', color: 'neutral' },
  { id: '091', name: 'Farm Boy', copies: '3', color: 'neutral' },
  { id: '101', name: 'Farm Boy', copies: '3', color: 'neutral' },
  { id: '201', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
  // { id: '001', name: 'Farm Boy', copies: '3', color: 'neutral' },
];
