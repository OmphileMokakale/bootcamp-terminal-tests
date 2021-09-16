const assert = require("assert");
const fromWhere = require('../fromWhere');

describe('fromWhere', function () {
    it('should returns the town the car is from ', function () {

        assert.equal(fromWhere('CY'), 'Bellville');
        // assert.equal(fromWhere('CJ'), 'Paarl');
        // assert.equal(fromWhere('CA'), 'Cape Town');
        // assert.equal(fromWhere('CC'), 'Some other place!');
        
    });

    it('should returns the town the car is from ', function () {

        // assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        // assert.equal(fromWhere('CA'), 'Cape Town');
        // assert.equal(fromWhere('CC'), 'Some other place!');
        
    });

    it('should returns the town the car is from ', function () {

        // assert.equal(fromWhere('CY'), 'Bellville');
        // assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        // assert.equal(fromWhere('CC'), 'Some other place!');
        
    });

    it('should returns the town the car is from ', function () {

        // assert.equal(fromWhere('CY'), 'Bellville');
        // assert.equal(fromWhere('CJ'), 'Paarl');
        // assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
        
    });


});