import java.util.Scanner;
import java.util.*;

public class StackImplimentiona {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Stack st = new Stack();

        Boolean isTrue = true;

        while (isTrue) {
            System.out.println(
                    "Enter 1. for Push \nEnter 2. for Pop \nEnter 3. for Peep \nEnter 4. for Change \nEnter 5. for show Stack \nEnter 6. for exit:");
            int temp = sc.nextInt();
            switch (temp) {
                case 1:
                    st.push();
                    break;

                case 2:
                    st.pop();
                    break;

                case 3:
                    st.peep();
                    break;

                case 4:
                    st.change();
                    break;

                case 5:
                    System.out.println(st);
                    break;

                case 6:
                    isTrue = false;
            }
        }
    }
}

class Stack {
    int n;
    int[] ar;
    int top;

    Stack() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of stack : ");
        n = sc.nextInt();
        this.top = -1;
        ar = new int[n];
    }

    public void push() {
        Scanner sc = new Scanner(System.in);
        if (this.top + 1 >= n) {
            System.out.print("Stack overflow : ");
        } else {
            this.top++;
            System.out.println("Enter number to push : ");
            ;
            ar[this.top] = sc.nextInt();
        }
    }

    public void pop() {
        if (top < 0) {
            System.out.print("Stack Underflow : ");
        } else {
            top--;
        }
    }

    public void peep() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter element to peep : ");
        int temp = sc.nextInt();

        if ((top - temp + 1) < 0) {
            System.out.print("Stack underflow : ");
        } else

        {
            System.out.print(ar[top - temp + 1] + "\n");
        }
    }

    public void change() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter location : ");
        int temp = sc.nextInt();

        if ((top - temp + 1) < 0) {
            System.out.print("Stack underflow : ");
        } else {
            System.out.print("Enter element : ");
            int el = sc.nextInt();

            this.ar[top - temp + 1] = el;
        }
    }

    public String toString() {
        String s = "";
        for (int i = 0; i <= this.top; i++) {
            s += ar[i] + " ";
        }
        return s;
    }
}