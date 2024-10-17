public class Selectionsort {
    public static void selection_sort(int arr[], int length) {
        for (int i = 0; i <= length-2; i++) {
            int min = i;
            for(int j = i + 1; j <= length-1; j++) {
                if(arr[j] < arr[min]) {
                    min = j;
                }
            }
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }   
    
    public static void main(String[] args) {
        int arr[] = {13,46,24,52,20,9};
        int n = arr.length;

        System.out.print("Before Sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
        selection_sort(arr,n);
        System.out.println();
        System.out.print("after sort: ");
        for(int i = 0 ; i < n ; i++) {
            System.out.print(arr[i] + ",");
        }
    }
}