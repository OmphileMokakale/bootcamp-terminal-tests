
let assert = require("assert");
var countAllFromTown = require('../countAllFromTown');

describe('this test returns the registration numbers in the string that is for that town' , function()
{
    it('should count and return the registration numbers in the string that is for that town (fromStellies) ' , function(){
        
        
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    });

});

describe('this test returns the registration numbers in the string that is for that town' , function()
{
    it('should count and return the registration numbers in the string that is for that town(fromKuilsriver) ' , function(){
        
        
        var fromKuilsriver = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver,0)
    });

});

