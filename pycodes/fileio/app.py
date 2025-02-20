# File oprations
# r -read ,w -write, a -append, with -statement

with open('demo.txt') as f:
    line = f.readline()
    while(line != ""):
        print(line)
        line = f.readline()