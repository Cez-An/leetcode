/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for(let i=0; i <nums.length; i++) elementSum+=nums[i];
    let string = nums.join("");
    for(let i=0; i<string.length; i++) digitSum+=Number(string[i]);
    return Math.abs(elementSum-digitSum);
};