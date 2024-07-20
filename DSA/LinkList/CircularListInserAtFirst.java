/*
 * In this programme we can make CircularLinklist and impliment it from screatch and make it simple as possible as..
 * In this programme i am adding inserAtfirst position, Last Position, Delete at First position, last position, and make more
 * methods
 * @author : Jay Vegad
 * @date : 20-7-2024
 */

public class CircularListInserAtFirst {
    class Node {
        int data;
        Node link;

        Node(int data) {
            this.data = data;
            this.link = null;
        }
    }

    private Node first = null;
    private Node last = null;

    // This method add node at first postion of the circular linkedlist

    public void insertAtFirst(int data) {
        Node newNode = new Node(data);

        if (first == null) {
            first = last = newNode;
            newNode.link = newNode;
        } else {
            newNode.link = first;
            last.link = newNode;
            first = newNode;
        }
    }

    // This method add Node at last position of the circular linkedlist

    public void inserAtlast(int data) {
        Node newNode = new Node(data);
        if (first == null) {
            first = last = newNode;
            newNode.link = newNode;
        } else {
            newNode.link = first;
            last.link = newNode;
            last = newNode;
        }
    }

    // This method insert Node at given index

    public void inserAtOrder(int data) {
        Node newNode = new Node(data);
        Node save = null;
        if (first == null) {
            newNode.link = newNode;
            first = last = newNode;
            return;
        }
        if (newNode.data <= first.data) {
            newNode.link = first;
            last.link = newNode;
            first = newNode;
        }
        save = first;

        while (save != last && newNode.data >= save.link.data) {
            save = save.link;
        }

        newNode.link = save.link;
        save.link = newNode;

        if (save == last) {
            last = newNode;
        }

    }

    public void deleteNode(int data) {
        Node pred = null;
        Node save = first;

        if (first == null) {
            System.out.println("List is empty.");
            return;
        }

        if (first.data == data) {
            first = first.link;
            if (first == null) {
                last = null;
            }
            return;
        }

        while (save != null && save.data != data) {
            pred = save;
            save = save.link;
        }

        if (save == null) {
            System.out.println("Node is not found.");
            return;
        }

        pred.link = save.link;

        if (save == last) {
            last = pred;
        }
    }

    public static void main(String[] args) {
        CircularListInserAtFirst list = new CircularListInserAtFirst();
        list.insertAtFirst(10);
        list.insertAtFirst(20);
        list.insertAtFirst(30);

        list.inserAtlast(50);
        list.inserAtlast(60);
        list.inserAtlast(70);

        list.inserAtOrder(40);
    }
}
