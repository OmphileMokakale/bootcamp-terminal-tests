
const assert = require("assert");
const regCheck = require('../regCheck');

describe('this tests if the registration number is valid' , function()
{
    it('should return true if it is in the corret format' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });

});

describe('this tests if the registration number is valid' , function()
{
    it('should return false if it is not the corret format' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    });

});