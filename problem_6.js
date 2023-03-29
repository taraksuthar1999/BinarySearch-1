/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */



function searchRange(nums,k){
    const ans = []
    ans.push(firstOccurence(nums,k))
    ans.push(lastOccurence(nums,k))
    return ans
}

function firstOccurence(nums,k){
    let i  = 0
    let j = nums.length-1
    let min = Number.MAX_SAFE_INTEGER
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]>k){
            j = mid -1
        }else if(nums[mid]<k){
            i = mid + 1
        }else{
            min = Math.min(min,mid)
            j = mid - 1
        }
    }
    if(min > nums.length) return -1
    return min
}

function lastOccurence(nums,k){
    let i = 0
    let j = nums.length -1
    let max = Number.MIN_SAFE_INTEGER
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]>k){
            j = mid - 1
        }else if(nums[mid]<k){
            i = mid + 1
        }else{
            max = Math.max(max,mid)
            i = mid + 1
        }
    }
    if(max < 0) return -1
    return max
}

console.log(searchRange([5,7,7,8,8,10],6))


//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
