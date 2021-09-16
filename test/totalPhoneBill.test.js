
const assert = require("assert");
const totalPhoneBill = require('../totalPhoneBill');

describe('Totall phone bill', function () {
    it('should Calculate and return the total bill ', function () {

        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
    });

    it('should Calculate and return the total bill ', function () {

        // assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        // assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
    });

    it('should Calculate and return the total bill ', function () {

        // assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        // assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
    });

});


