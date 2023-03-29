/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * 
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 */

function searchInsert(nums,target){
    let i = 0
    let j = nums.length - 1
    let min = Number.MAX_SAFE_INTEGER
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]>target){
            j = mid-1
            min = Math.min(min,mid)
        }else if(nums[mid]<target){
            i = mid+1
        }else{
            return mid
        }
    }
    return min
}

console.log(searchInsert([1,2,5,6,7,11,12],8))
/**
 * 1,2,5,6,7,11,12 t = 8,11
 */
//https://leetcode.com/problems/search-insert-position/