/*
 * Implimenting Singly LinkList Using java.
 * Date: 13-7-2024
 * Author: Jay Vegad
 */

public class LL {
    class Node {
        int data;
        Node link;

        public Node(int data) {
            this.data = data;
            this.link = null;
        }

    }

    public Node firstNode = null;
    public int size = 0;

    public void addFirst(int data) {
        Node newNode = new Node(data);
        size++;
        // Check is not empty;
        if (firstNode == null) {
            firstNode = newNode;
            return;
        }
        // In this case adding first Node value in to temp Node;
        Node temp = firstNode;

        // Now Make newNode to First Node
        firstNode = newNode;

        // Now refrence the newNode value;
        firstNode.link = temp;
    }

    public void addLast(int data) {
        Node newNode = new Node(data);
        size++;
        if (firstNode == null) {
            firstNode = newNode;
            return;
        }

        /*
         * // First make new Temp Node for travarse whole linklist
         * This temp is making because we perform opration on the direct firnode than
         * whole list structure is not well maintain
         * 
         * Now making New Last node that stores value of the first Node
         */

        Node last = firstNode;
        /*
         * -> In this loop travel whole list and store lin of the next node and loop is
         * started until last node is not found
         * -> This Loop store value of last node.
         */

        while (last.link != null) {
            last = last.link;
        }

        /*
         * -> For here last node value is found and now we change last node value to
         * newNode and add newNode at last position of link list;
         * -> Now change value of last Node
         */

        last.link = newNode;
    }

    /*
     * In this method We add Node at the Order of the linklist and List is must be
     * in asscending Order;
     * In this Method First We check first node is not null and second check
     * newNode's data is less or equal to first node data;
     * If Either or more condition is right than Make newNode.link = first and first
     * is newNode
     * Now make new Node Of Current and this node get record of the current Node and
     * travserse whole link List;
     * Now add loop for check the number when meet and check number for greater or
     * not
     * condition: while(current.link!=null && newNode.data>= currunt.link.data) {
     * current = current.link;
     * }
     * 
     * newNode.link = current.link;
     * current.link = newNode
     */

    public void insertAtOrder(int data) {
        // Making New Node
        Node newNode = new Node(data);
        size++;
        // Check condition
        if (firstNode == null || newNode.data <= firstNode.data) {
            // Than make add link of newNode to first
            newNode.link = firstNode;
            firstNode = newNode;
            return;
        }
        // Make New current Node
        Node current = firstNode;

        // Now check Node is not empty and add in order link list
        while (current.link != null && newNode.data >= current.link.data) {
            current = current.link;
        }

        // Now interchange the nodes
        newNode.link = current.link;
        current.link = newNode;
    }

    /*
     * Now making method for printing list.
     * In this method we use while loop until first.next is not null.
     */

    public void printList() {
        if (firstNode == null) {
            System.out.println("List is empty: ");
            return;
        }
        Node curNode = firstNode;
        while (curNode != null) {
            System.out.print(curNode.data + "->");
            curNode = curNode.link;
        }
        System.out.println("NULL");
    }

    /*
     * Now making copy fn for copy whole linklist and prin it..
     * 
     * 
     */

    public static void main(String[] args) {
        LL ll = new LL();
        // Adding first at the link list
        ll.addFirst(30);
        ll.addFirst(50);

        // Adding last in link list;

        ll.addLast(60);
        ll.addLast(50);
        ll.addLast(40);

        // Insert At Order;

        ll.insertAtOrder(130);
        ll.insertAtOrder(140);
        ll.insertAtOrder(150);

        // System.out.println(ll.size);
        ll.printList();

    }
}
