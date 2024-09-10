public class Basic{
    static class Node {
        int data;
        Node left;
        Node right;
        Node(int key) {
            this.data = key;
        }
    }

    // Traversal Of The Node 

    public static void inorder(Node root) {
        if(root == null) {
            return;
        }
        inorder(root.left);
        System.out.print(root.data + ",");
        inorder(root.right);
    }

    // Now Traveser this tree using postorder

    public static void postorder(Node root) {
        if(root == null) {
            return;
        }

        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data + ",");

    }

    // inorder search

    public static boolean treeSearch(Node root, int data) {
    if (root == null) {
        return false;
    }
    if (data == root.data) {
        return true;
    }
    return treeSearch(root.left, data) || treeSearch(root.right, data);
}

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.right = new Node(4);
        System.out.print("inorder: ");
        inorder(root);
        System.out.println();
        System.out.print("Postorder: ");
        postorder(root);
        System.out.println(treeSearch(root, 4));
    }
}