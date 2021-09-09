
const assert = require("assert");
const transportFee = require('../transportFee');

describe('this test returns the transport fair for a specific shift' , function()
{
    it('should return the transport fair for dsay or night shift shift ' , function(){
        
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});