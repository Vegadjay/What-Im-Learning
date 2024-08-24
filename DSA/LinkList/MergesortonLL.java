public class MergesortonLL {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    Node head = null;
    Node last = null;

    // Insert at the beginning of the list
    public void insertAtFirst(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = last = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
        last.next = head; // Circular link
    }

    // Find the middle of the linked list
    public Node getMiddle(Node head) {
        if (head == null) return head;

        Node slow = head, fast = head.next;

        while (fast != head && fast.next != head) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // Merge two sorted linked lists
    public Node sortedMerge(Node left, Node right) {
        if (left == null) return right;
        if (right == null) return left;

        Node result;
        if (left.data <= right.data) {
            result = left;
            result.next = sortedMerge(left.next, right);
        } else {
            result = right;
            result.next = sortedMerge(left, right.next);
        }
        return result;
    }

    // Merge Sort for Linked List
    public Node mergeSort(Node head) {
        if (head == null || head.next == head) {
            return head;
        }

        Node middle = getMiddle(head);
        Node nextOfMiddle = middle.next;

        // Break the circular list into two halves
        middle.next = head;

        // Recursively sort the two halves
        Node left = mergeSort(head);
        Node right = mergeSort(nextOfMiddle);

        // Merge the sorted halves
        return sortedMerge(left, right);
    }

    // Print the linked list
    public void printList(Node head) {
        if (head == null) return;

        Node temp = head;
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println();
    }

    public static void main(String[] args) {
        MergesortonLL list = new MergesortonLL();
        list.insertAtFirst(30);
        list.insertAtFirst(20);
        list.insertAtFirst(40);
        list.insertAtFirst(10);
        list.insertAtFirst(50);
        list.insertAtFirst(60);

        System.out.println("Original List:");
        list.printList(list.head);

        list.head = list.mergeSort(list.head);

        System.out.println("Sorted List:");
        list.printList(list.head);
    }
}
