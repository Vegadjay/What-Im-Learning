# read file and find twinkle from the file
''' with open('poems.txt') as f:
    line = f.read().lower()
    while(line != ""):
        print(line)
        if("twinkle" in line):
            print(f"Twinkle is found------------")
        else:
            print(f"Twinkle is not found------------")    
        line = f.read()
'''

# Make one function and write file if user is win than file is write otherwise nothing happen


''' import random

userCount = 0
compCount = 0
tieCount = 0

def addScore(result, user_score, comp_score, tie_score):
    """Append the score to the file based on the game result."""
    with open('score.txt', 'a') as f:
        if result == 'you':
            f.write(f'You win: {user_score}\n')
        elif result == 'comp':
            f.write(f'Computer wins: {comp_score}\n')
        elif result == 'tie':
            f.write(f'Tie: {tie_score}\n')

# Game logic
choice = input("Enter R for rock, P for paper, S for scissor: ").lower()

if choice not in ['r', 'p', 's']:
    print("Invalid choice. Please choose 'R', 'P', or 'S'.")
else:
    computer_choice = random.choice(['r', 'p', 's'])
    print(f"Computer chose: {computer_choice.upper()}")

    if choice == computer_choice:
        print("It's a tie!")
        tieCount += 1
        addScore('tie', userCount, compCount, tieCount)
    elif (choice == 'r' and computer_choice == 's') or \
         (choice == 's' and computer_choice == 'p') or \
         (choice == 'p' and computer_choice == 'r'):
        print("You win!")
        userCount += 1
        addScore('you', userCount, compCount, tieCount)
    else:
        print("You lose.")
        compCount += 1
        addScore('comp', userCount, compCount, tieCount)
        '''



# Write 2 to 20 tables

''' In This problem you want to do make table from 2 to 20 '''

# Open the file in write mode
''' with open('table.txt', 'w') as f:
    for i in range(1, 21):
        for j in range(1, 11): 
            mul = i * j
            table = f'{i} X {j} = {mul}'
            f.write(table + '\n')
            print(table + '\n') '''
