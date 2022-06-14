/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanKey = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    var result = 0;

    // Go through each letter in string
    for (let i = 0; i < s.length; i++) {

        // If curr val < next val -> sub curr val from result
        if (romanKey.get(s[i]) < romanKey.get(s[i+1])) {
            result -= romanKey.get(s[i]);
        
        // Else add curr val to result
        } else {
            result += romanKey.get(s[i]);
        }
    }
    return result;
};
