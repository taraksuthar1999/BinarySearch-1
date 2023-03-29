/**
 * Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.
 * 
 * Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
 * Output: 3
 */


/**
 * 
 * @param {number[]} A 
 * @param {number} k 
 * @returns 
 */
function freq_num(A,k){
    let i = 0
    let j = A.length-1
    const fi = firstOccurence(A,k)
    const li = lastOccurence(A,k)
    return li - fi + 1
}

function firstOccurence(A,k){
    let i = 0
    let j = A.length-1
    let index = Number.MAX_SAFE_INTEGER
    while(i<=j){
        let mid = Math.floor((j+i)/2)
        if(A[mid]>k){
            j = mid-1
        }else if(A[mid]<k){
            i = mid+1
        }else{
            index = Math.min(index,mid)
            j = mid-1
        }
    }
    return index
}
function lastOccurence(A,k){
    let i = 0
    let j = A.length-1
    let index = Number.MIN_SAFE_INTEGER
    while(i<=j){
        let mid = Math.floor((j+i)/2)
        if(A[mid]<k){
            i = mid +1
        }else if(A[mid]>k){
            j = mid - 1
        }else{
            index = Math.max(mid,index)
            i = mid+1
        }
    }
    return index
}

const ans = freq_num([1,2,3,3,3,3,4,6,8],3)
console.log(ans)



//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//https://leetcode.com/discuss/interview-question/algorithms/124724/facebook-onsite-count-occurrences-of-a-number-in-a-sorted-array