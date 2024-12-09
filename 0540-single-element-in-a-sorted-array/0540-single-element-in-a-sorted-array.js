/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
   let low = 0;
   let high =nums.length -1;
   let middle;
    while(high >low){
        middle = low + Math.floor((high - low) / 2);
        if(middle % 2 ===1){
            middle--;
        }
        if(nums[middle] === nums[middle+1]){
            low = middle +2;
        }else {
            high = middle;
        }
    }
    return  nums[low];
   
};