/**
 *A peak element is an element that is strictly greater than its neighbors.
 *Given a 0-indexed integer array nums, find a peak element, and return its index. 
 *If the array contains multiple peaks, return the index to any of the peaks.You may imagine that nums[-1] = nums[n] = -∞. 
 *In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * 
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 5
 */
function peakElement(nums){
    let i = 0
    let j = nums.length - 1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if((mid==0 || nums[mid]>=nums[mid-1]) && (mid==nums.length-1 || nums[mid] >= nums[mid+1])){
            return mid
        }
        if((mid<nums.length-1) && (nums[mid]<nums[mid+1])){
            i = mid + 1
        }else {
            j = mid -1
        }
    }
    return -1
}
console.log(peakElement([1,2,1,3,3,5,6,4]))

//https://leetcode.com/problems/find-peak-element/