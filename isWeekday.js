module.exports = function isWeekday(weekday){
    return weekday.startsWith('M') || weekday.startsWith('T') || weekday.startsWith('W') || weekday.startsWith('F')
    }