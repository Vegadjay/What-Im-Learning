public class BinraySearching {
    public static int binary_serching(int arr[],int key) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int middle = (right + left) / 2;
            if(arr[middle] == key) {
                return middle;  
            } 
            else if(key < arr[middle]) {
                right = middle -1;
            }
            else {
                left = middle + 1;
            }
        }
        return -1;
    } 
    
    public static void main(String[] args) {
        int arr[] = {7,10,20,30,50,60};
        System.out.println(binary_serching(arr, 20));
    }
}
