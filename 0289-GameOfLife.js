/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
    // Make copy of board
    var tmpBoard = board.map(function(arr) {
        return arr.slice();
    });
    
    // Initialize grid dimensions
    var maxRow = (board.length - 1);
    var maxCol = (board[0].length - 1);
    
    // Go through every row
    for (var i = 0; i < tmpBoard.length; i++) {
        
        // Go through every column
        for (var j = 0; j < tmpBoard[i].length; j++) {
            
            // Initialize neighbor states
            var neighborsAliveCount = 0;

            // Check Top
            if (i > 0) {
                if (tmpBoard[i - 1][j] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check TopRight
            if (i > 0 && j < maxCol) {
                if (tmpBoard[i - 1][j + 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check Right
            if (j < maxCol) {
                if (tmpBoard[i][j + 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check BottomRight
            if (i < maxRow && j < maxCol) {
                if (tmpBoard[i + 1][j + 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check Bottom
            if (i < maxRow) {
                if (tmpBoard[i + 1][j] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check BottomLeft
            if (i < maxRow && j > 0) {
                if (tmpBoard[i + 1][j - 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check Left
            if (j > 0) {
                if (tmpBoard[i][j - 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // Check TopLeft
            if (i > 0 && j > 0) {
                if (tmpBoard[i - 1][j - 1] == 1) {
                    neighborsAliveCount++;
                }
            }
            
            // If 3 neighbors alive -> become alive
            if (neighborsAliveCount == 3) {
                board[i][j] = 1;
            }
            
            // If neighbors alive < 2 or > 3 -> dead
            if (neighborsAliveCount < 2 || neighborsAliveCount > 3) {
                board[i][j] = 0;
            }
        }
    }
};
