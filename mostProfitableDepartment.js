module.exports = function mostProfitableDepartment(salesData){
    var thisDepartment = {}
    
      for(var i=0; i<salesData.length;i++){
        var dept = salesData[i]
        thisDepartment[dept.department] = 0   
      }
      
      for(var i=0; i<salesData.length;i++){
        var dept = salesData[i]
        var currentDeptTotal = thisDepartment[dept.department]
        currentDeptTotal += dept.sales
       thisDepartment[dept.department] = currentDeptTotal
      }
     
    console.log(thisDepartment)
      //return thisDepartment
      var currentMaxSales = 0;
      var currentDept = ''
     for (var theDepartment in thisDepartment){
       console.log(theDepartment)
       console.log(thisDepartment[theDepartment])
       var currentDeptSales = thisDepartment[theDepartment];
       if (currentDeptSales > currentMaxSales ){
         currentMaxSales = currentDeptSales;
         currentDept = theDepartment;
       }
     }
      return currentDept;
    }
    
    
    
    function mostProfitableDay (salesData){
    var dayProfit = {}
    
      for(var i=0; i<salesData.length;i++){
        var ThisDay = salesData[i]
        dayProfit[ThisDay.day] = 0   
      }
      
      for(var i=0; i<salesData.length;i++){
        var ThisDay = salesData[i]
        var currentDayTotal = dayProfit[ThisDay.day]
        currentDayTotal += ThisDay.sales
       dayProfit[ThisDay.day] = currentDayTotal
      }
     
    console.log(dayProfit)
      //return thisDepartment
      var currentMaxSales = 0;
      var currentDay = ''
     for (var theDay in dayProfit){
       console.log(theDay)
       console.log(dayProfit[theDay])
       var currentDeptSales = dayProfit[theDay];
       if (currentDeptSales > currentMaxSales ){
         currentMaxSales = currentDeptSales;
         currentDay = theDay;
       }
     }
      return currentDay;
    }
    
    