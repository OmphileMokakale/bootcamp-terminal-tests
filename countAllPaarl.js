module.exports = function allPaarl(regNumbers){
    var regNumbersForPaarl = []
   //var count = 0;
   var Regs = regNumbers.split(",")
   
    for(var i=0;i<Regs.length;i++){
       var RegNums = Regs[i].trim();
      
      
      if(RegNums.startsWith("CJ")){ 
        console.log(RegNums) 
        regNumbersForPaarl.push(RegNums)
        //count ++
      }   
    }
   
   console.log('There are ' + regNumbersForPaarl.length +' Paarl reg numbers.')
   
  return regNumbersForPaarl
 }


 