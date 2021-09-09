
const assert = require("assert");
const isFromBellville = require('../isFromBellville');


describe('this tests if Vehicle Registration number is From Bellville' , function()
{
    it('should return true if it is From Bellvilleand' , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });

});

describe('this tests if Vehicle Registration number is Not From Bellville' , function()
{
    it('should return false if it is not From Bellvilleand' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });

});