module.exports = function transportFee(timeOfTheDay){
    switch(timeOfTheDay){
     case 'morning':
       return 'R20'
     case 'afternoon':
       return 'R10'
     case 'nightshift':
       return 'free'
     default:
       return 'Pay full price'
                       }
  }