import random

choice = input("Enter R for rock, P for paper, S for scissor: ").lower()

# Validate user input
if choice not in ['r', 'p', 's']:
    print("Invalid choice. Please choose 'R', 'P', or 'S'.")
else:
    computer_choice = random.choice(['r', 'p', 's'])
    print(f"Computer chose: {computer_choice.upper()}")

    # Determine the outcome
    if choice == computer_choice:
        print("It's a tie!")
    elif (choice == 'r' and computer_choice == 's') or \
         (choice == 's' and computer_choice == 'p') or \
         (choice == 'p' and computer_choice == 'r'):
        print("You win!")
    else:
        print("You lose.")
