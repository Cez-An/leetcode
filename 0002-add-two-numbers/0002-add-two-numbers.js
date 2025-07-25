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
    let carry = 0;
    let dummy = new ListNode();
    current = dummy;
    while(l1||l2||carry){
        let value1 = l1? l1.val:0;
        let value2 = l2? l2.val:0;
        let sum = value1+value2+carry;
        carry = Math.floor(sum/10);
        current.next= new ListNode(sum%10);
        current = current.next;
        if(l1) l1=l1.next;
        if(l2) l2=l2.next;
    }
    return dummy.next;
};