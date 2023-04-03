/**
 * You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * 
 * 
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 */
 
/*
1   3  5  7
10 11 16 20
23 30 34 60
*/

/**
 * 
 * @param {number[][]} matrix 
 * @param {number} target 
 */
function searchMatrix(matrix,target){
    let j = 0
    let low = 0
    let high = matrix.length - 1
    let max = 0
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(matrix[mid][j]<=target){
            low = mid + 1
            max = Math.max(max,mid)
        }else{
            high = mid - 1
        }
    }
    let i = max
    low = 0
    high = matrix[0].length - 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(matrix[i][mid]>target) high = mid - 1
        else if(matrix[i][mid]< target) low = mid + 1
        else return true
    }
    return false
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],16))

//https://leetcode.com/problems/search-a-2d-matrix/