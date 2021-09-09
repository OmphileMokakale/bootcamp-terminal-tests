
const assert = require("assert");
const isWeekday = require('../isWeekday');

describe('this tests if the day of the week is weekday or not' , function()
{
    it('should return true if it is weekday' , function(){
        
        assert.equal(isWeekday('Monday'), true);
    });

});

describe('this tests if the day of the week is weekday or not' , function()
{
    it('should return false if it is not weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });

});