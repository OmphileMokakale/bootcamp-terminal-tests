module.exports = function totalPhoneBill(bill){
    var totalSms = 0;
    var totalCall = 0;
    var callsAndSms = bill.split(','); 
 for(var i =0;i<callsAndSms.length;i++){
   var thisCallsAndSms = callsAndSms[i].trim()
   if(thisCallsAndSms.includes('call')){
     totalCall++;    
   }else if(thisCallsAndSms.includes('sms')){
      totalSms++;
   }
     var total = (totalCall*2.75) + (totalSms*0.65)  
 }
 //console.log('R' + total.toFixed(2))
 return 'R' + total.toFixed(2);
  
 
}