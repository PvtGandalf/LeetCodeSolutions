/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // Go through every value in nums
    for (let i = 0; i < nums.length; i++) {
        
        // Go through every value in nums
        for (let j = 0; j < nums.length; j++) {
            
            // If the current idx isn't checked twice
            if (i != j) {
                
                // If the sum of the values equals the target
                if ((nums[i] + nums[j]) == target) {
                    
                    // Return the index of the values
                    return [i, j];
                }                        
            }
        }
    }
};
