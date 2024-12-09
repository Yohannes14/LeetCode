/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const timeInMinutes = timePoints.map(time => {
        const [hours, minutes] =time.split(":").map(Number);
        return hours * 60 + minutes;
    })
    
    ///Sort the times
    timeInMinutes.sort((a,b) =>a -b);
    let minDiff = Infinity;
    
    for(let i =1; i <timeInMinutes.length; i++){
        const diff = timeInMinutes[i] -timeInMinutes[i -1];
        minDiff = Math.min(minDiff, diff);
        
    }
    const circularDiff = 1440 + timeInMinutes[0] -timeInMinutes[timeInMinutes.length -1];
    minDiff =Math.min(minDiff, circularDiff);
    return minDiff;
     
    
};