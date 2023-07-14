/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(num1, m, num2, n) {
    let i =m-1;
    let j =n-1;
    let k = m+n -1
    while(i >=0 && j>=0){
        if(num1[i]> num2[j]){
            num1[k] =num1[i];
            i--;
        }else {
            num1[k] = num2[j];
            j--;
        }
        k--;
    }
    while(j >=0){
        num1[k] =num2[j];
        j--;
        k--;
        
    }
    
};
let num1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let num2 = [2, 5, 6];
let n = 3;
merge(num1, m, num2, n);

console.log(num1);