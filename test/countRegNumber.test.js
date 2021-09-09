
const assert = require("assert");
const countRegNumber = require('../countRegNumber');

describe('this test returns the number of registration numbers in the string' , function()
{
    it('should count and return the of registration numbers in the string ' , function(){
        
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

});

describe('this test returns the number of registration numbers in the string' , function()
{
    it('should count and return the of registration numbers in the string ' , function(){
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});