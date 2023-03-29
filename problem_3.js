// unique element

/**
 * Given a non-empty array of sorted integers nums, every element appears twice except for one. Find that single one.
 * 
 * Input: nums = [1,1,2,2,3]
 * Output: 3
 */

//
function uni_ele(A){
    let i = 0
    let j = A.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(A[mid]!==A[mid-1] && A[mid] !== A[mid+1]){
            return A[mid]
        }
        if(A[mid] == A[mid-1]){
            mid = mid -1
        }
        if((mid&1)==0){
            i = mid + 2
        }else{
            j = mid - 1
        }
    }
    return -1
}


console.log(uni_ele([1,1,2,2,3,3,4,5,5,6,6]))