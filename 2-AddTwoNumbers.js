/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    // Initialize result nodes
    var headNode = new ListNode(0);
    var currNode = headNode;
    
    // Initialize temp nodes
    var tmp1 = l1;
    var tmp2 = l2;
    
    // Initialize math variables
    var carry = 0;
    var sum = 0;
  
    // While both nodes are valid
    while (tmp1 !== null || tmp2 !== null) {
        
        // Calculate the sum of the current nodes
        sum = (tmp1 ? tmp1.val : 0) + (tmp2 ? tmp2.val : 0) + carry;
        
        // Calculate the carry over value
        carry = Math.floor(sum / 10);
        
        // Set the next nodes
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;
        tmp1 = tmp1 ? tmp1.next : null;
        tmp2 = tmp2 ? tmp2.next : null;
    }
    
    // If carry over value exists add to next node
    if (carry) {
        currNode.next = new ListNode(carry);
    }
    
    // Return the first node with sum values
    return headNode.next;
};
