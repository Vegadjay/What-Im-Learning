public class Insertionsort {
    
    public static void insertion_sort(int arr[], int n) {
        for(int i = 0; i < n;i++) {
            int j = i;
            while(j>0 && arr[j - 1] > arr[j]) {
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
    }
    
    public static void main(String[] args) {
        int arr[] = {14,9,15,12,6,8,13};
        int n = arr.length;

        System.out.print("Before Sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
        insertion_sort(arr,n);
        System.out.println();
        System.out.print("after sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
    }
}
