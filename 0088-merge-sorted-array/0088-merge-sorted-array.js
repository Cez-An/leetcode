/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) 
{

    for(let j=0; j<n; j++)
    {
        nums1.pop();
    }
    for(let k=0; k<n; k++)
    {
        nums1.push(nums2[k]);
    }
    nums1.sort((a,b)=>a-b)

};