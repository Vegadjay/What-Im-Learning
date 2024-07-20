/*
 * In this algorithm we check linklist contains circular linklist or not for that we use floyd's cycle finding algoritm 
 * In this algoritm we take two pointer and first that two pointer point to head and first pointer is jump with 1 and second pointer jump with 2 and lastly that two pointer is meet at one node and that we can say ll contains circular ll
 ! @author:Jay vegad.
 ! date: 20-7-2024
 */

public class CheckLinklist {
    // Here take two pointers for tracvece whole list.
    // Check in while condition and where fast and slow is same than we return list
    // is cycle.

    class Node {
        int data;
        Node link;

        Node(int data) {
            this.data = data;
            this.link = null;
        }
    }
    public Node first = null;
    public boolean isCycle() {
        Node fast = first;
        Node slow = first;

        while (first != null && first.link != null) {
            slow = slow.link;
            fast = fast.link.link;

            if (fast == slow) {
                return true;
            }
        }
        return false;
    }
    public static void main(String[] args) {
        
    }
}