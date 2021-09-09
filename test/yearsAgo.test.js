
const assert = require("assert");
const yearsAgo = require('../yearsAgo');

describe('this test returns how many years ago a certain year is apart from the current' , function()
{
    it('should return the number of years apart' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });

});

describe('this test returns how many years ago a certain year is apart from the current' , function()
{
    it('should return the number of years apart' , function(){
        assert.equal((new Date().getFullYear() - 1878), yearsAgo(1878))

    });

});

describe('this test returns how many years ago a certain year is apart from the current' , function()
{
    it('should return the number of years apart' , function(){
        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010))

    });

});