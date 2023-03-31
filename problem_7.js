/**
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], 
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 */

function sortedSearch(nums,target){
    // find rotation index
    let ans
    const i = rotationFactor(nums)
    if(i==0) ans = bs(nums,0,nums.length-1,target)
    else if(target<nums[0]) ans = bs(nums,i,nums.length-1,target)
    else ans = bs(0,i-1,target)
    return ans
}

function bs(nums,low,high,target){
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid]>target) high = mid - 1
        else if (nums[mid]<target) low = mid + 1
        else return mid
    }
    return -1
}

function rotationFactor(nums){
    let i = 0
    let j = nums.length-1
    let k = 0
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]<= nums[0]){
            k = mid
            j = mid -1
        }else{
            i = mid + 1
        }
    }
    return k
}

sortedSearch([4,5,6,7,0,1,2],0)

//https://leetcode.com/problems/search-in-rotated-sorted-array/