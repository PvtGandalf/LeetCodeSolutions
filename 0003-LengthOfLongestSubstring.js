/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {};
  var maxLength = 0;
  var startIdx = 0;
  
  // Go through each character in the substring
  for (var i = 0; i < s.length; i++) {
    
    // If character already added to map
    if (map[s[i]] !== undefined) {
        
        // Reset the starting index
        startIdx = Math.max(startIdx, map[s[i]] + 1);
    }
    
    // Add character to map
    map[s[i]] = i;
    
    // Update length of longest substring
    maxLength = Math.max(maxLength, i - startIdx + 1);
    
  }
  
  // Return the length of the longest substring
  return maxLength;
};
