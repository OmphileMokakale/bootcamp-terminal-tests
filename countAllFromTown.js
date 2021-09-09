module.exports = function countAllFromTown(regNum,RegString){
    //var RegNumber = [];
    var count = 0
    var reg = regNum.split(',')
    
  for(var i = 0; i<reg.length;i++){
    var Registration = reg[i].trim()

  if(Registration.startsWith(RegString)){
    //RegNumber.push(Registration)
    count++
    console.log(Registration)  
}   
}  
   return count
}