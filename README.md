# BC-HW-4
Coding Quiz

Logic Map:

1. Coding Quiz Start Page 
    a. On click 'start', timer starts -> question 1 
2. Uppon answering question -> Presented with another question
    a. Carousell concept?
3. If incorrect answer -> time--
4. Game over if
    a. all questions answered
    b. t = 0
5. When game over -> save my initials and score
    a. user string input
    b. display correct out of incorrect
6. Go back and clear score button

Approach: Html orriented. Could do javascript

1. 10 Different Questions via html
    a. Header
    b. 4 Buttons with boolean attribute 'correct'

2. 10 questions are hidden via carousell -> no backwards navigation
    a. index 1-10 -> data-index attribute 1-10 values
    b. on click index++ -> if index > 10 return insert initials page
3. Default css class = hidden
4. When done with base functions, could add question randomizer and/or answer randomizer.
    a. Based on data-question attribute manipulation

Global Variables:

1. time
2. correct
4. index

