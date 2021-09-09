const assert = require("assert");
const allPaarl = require('../countAllFromTown');

describe('this tests if the registration number from Paarl' , function()
{
    it('should return reg Number from Paarl' , function(){
      var Paarlregistration = 'CJ 345 123';
        var regs = allPaarl(Paarlregistration)
        
        assert.equal(0, regs);
    });

});