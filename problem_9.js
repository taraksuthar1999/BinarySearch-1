/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 */



/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */

function findMedianSortedArrays(nums1, nums2) {
    if(nums2<nums2){
        let temp = nums2
        nums2 = nums1
        nums1 = temp
    }
    let n1 = nums1.length
    let n2 = nums2.length
    let lo = 0
    let hi = n1
    const mid = Math.floor((n1 + n2 + 1)/2)

    while(lo<=hi){
        let cut1 = Math.floor((lo + hi)/2)
        let cut2 = mid - cut1
        let l1 = cut1 == 0? Number.MIN_SAFE_INTEGER: nums1[cut1 - 1]
        let l2 = cut2 == 0? Number.MIN_SAFE_INTEGER: nums2[cut2 - 1]
        let r1 = cut1 == n1? Number.MAX_SAFE_INTEGER: nums1[cut1]
        let r2 = cut2 == n2? Number.MAX_SAFE_INTEGER: nums2[cut2]
        if(l1 <= r2 && l2 <= r1){
            if((n1 + n2) & 1) return Math.floor(Math.max(l1,l2))
            return (Math.max(l1,l2) + Math.min(r1,r2))/2
        }else if(l1 > r2){
            hi = cut1 - 1
        }else{
            lo = cut1 + 1
        }
    }    
};

console.log(findMedianSortedArrays([1,2],[3,4]))
/*

1 2 4 5 6 7
2 3 8 9 11


*/

//https://leetcode.com/problems/median-of-two-sorted-arrays/