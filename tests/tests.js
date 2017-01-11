'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
//var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/libray.js');// root to app

describe("Test for proper arithmetic functionality", function() {
  it("should return [3,17]  for [3,6,9,17]", function() {
    expect((myApp.getMaxAndMin([3,6,9,17]))).toEqual([3,17]);
  })
  it("should return [3,9]  for [3, 7, 5,9]", function() {
    expect(myApp.getMaxAndMin([3, 7, 5,9])).toEqual([3,9]);
  })
  it("should return [4,101]  for [100,4,7,101,56]", function() {
    expect(myApp.getMaxAndMin([100,4,7,101,56])).toEqual([4,101]);
  })
  it("should return [1,210]  for  [210,19,1,17]", function(){
    expect(myApp.getMaxAndMin([210,19,1,7,5])).toEqual([1,210]);
  })
  it("should return [4,20]  for  [20,19,17,7,4,8]", function(){
    expect(myApp.getMaxAndMin([20,19,17,7,4,8])).toEqual([4,20]);
  })
  it("should return [4,23]  for  [14,23,11,7,15,4]", function(){
    expect(myApp.getMaxAndMin([14,23,11,7,15,4])).toEqual([4,23]);
  })
  it("should return [7,15] for  [13,11,7,15]", function(){
    expect(myApp.getMaxAndMin([13,11,7,15])).toEqual([7,15]);
  })
  it("should return [3,19]  for  [13,11,3,19]", function(){
    expect(myApp.getMaxAndMin([13,11,3,19])).toEqual([3,19]);
  })
  it("should return [3,70]  for  [3,11,70,15]", function(){
    expect(myApp.getMaxAndMin([3,11,70,15])).toEqual([3,70]);
  })
  it("should return [3,1182] for  [13,1182,17,15,3]", function(){
    expect(myApp.getMaxAndMin([13,1182,17,15,3])).toEqual([3,1182]);
  })
})