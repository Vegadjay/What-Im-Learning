public class Bubblesort {
    public static void bubble_sort(int arr[], int length) {
        for(int i = length - 1; i>=1 ; i--) {
            for(int j = 0; j <= i - 1; j++ ) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    
    
    public static void main(String[] args) {
        int arr[] = {13,46,24,52,20,9};
        int n = arr.length;

        System.out.print("Before Sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
        bubble_sort(arr,n);
        System.out.println();
        System.out.print("after sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
    }
}
