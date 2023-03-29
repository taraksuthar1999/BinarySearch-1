/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * @param {*} A 
 * @param {*} k 
 * @returns 
 */
function bs(A,k){
    let i = 0
    let j = A.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(A[mid]<k) i = mid +1
        else if(A[mid]>k) j = mid - 1
        else return mid
    }
    return -1
}

const ans = bs([1,2,3,4,45],2)
console.log(ans)

//https://leetcode.com/problems/binary-search/