```Mermaid
flowchart TD
A[Start Game] --> B[Generate Random Number]
B --> C[Prompt Playes To Guess]
C --> D{Is Guess Correct?}
D --> |Yes| E[Congratuale Playes]
D --> |No| F {Is Guess Too High?}
F --> |Yes| G[Show 'Too High']
F --> |No| H[Show 'Too Low']
G --> C
H --> C
E --> I[End Game]
```


Start Game: The game begins, and the system is initialized.
Generate Random Number: The program generates a random number (e.g., between 1 and 100) that the player must guess.
Prompt Player to Guess: The player is asked to input a guess.
Check if the Guess is Correct: The program evaluates whether the player's guess matches the randomly generated number.
If the guess is correct, the program congratulates the player and ends the game.
If the guess is incorrect, the program determines whether the guess is too high or too low.
Provide Feedback:
If the guess is too high, the program displays "Too High" and asks the player to guess again.
If the guess is too low, the program displays "Too Low" and asks the player to guess again.
Repeat: Steps 3–5 are repeated until the player guesses the correct number.
End Game: When the player guesses the correct number, the program ends.
