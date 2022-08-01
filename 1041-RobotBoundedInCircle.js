/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    
    // Initialize available directions (forward [0], right [1], left [2], back [3])
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    // Initialize starting position with head facing forward ([0, 1])
	let head = 0;
	let x = 0, y = 0;
	
	for (let move of instructions) {
        
        // If forward -> increment movement in current direction
		if (move === 'G') {
			x = x + dirs[head][0];
			y = y + dirs[head][1];
            
        // If left -> adjust direction 1 to left
		} else if (move === 'L') {
			head = (head + 3) % 4;
            
        // If right -> adjust direction 1 to right
		} else if (move === 'R') {
			head = (head + 1) % 4;
		}
	}
    
    // Check if robot is back at the origin (loop already made)
	const isAtOrigin = (x === 0 && y === 0);
    
    // Check if robot is facing north (loop can be made within 4 iterations if not facing north)
	const isHeadingNorth = head === 0

    // Return true if a loop will occur within 4 iterations
	return isAtOrigin || (! isHeadingNorth);
};
