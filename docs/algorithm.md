# Calculator Algorithm

## Main operation
### addition(num1, num2)
1. return the sum of `num1` and `num2`

### subtraction(num1, num2)
1. return the difference of `num1` and `num2`

### multiplication(num1, num2)
1. return the product of `num1` and `num2`

### division(num1, num2)
1. return the quotient of `num1` and `num2`

### operator(num1, num2, operator)
1. if operator is equal `+`
    1. call `addition()` and put `num1` and `num2` as params
1. if operator is equal `+`
    1. call `subtraction()` and put `num1` and `num2` as params
1. if operator is equal `+`
    1. call `multiplication() `and put `num1` and `num2` as params
1. if operator is equal `+`
    1. if num1 or num2 is equal to zero
        1. return syntax error
    1. call `division()` and put `num1` and `num2` as params

## Typing operation
### init()
1. select the .main-content
1. Add click event listener in .main-content

### getClick(e)
1. select the input inside .main-content
1. prevent the default of input
1. if the classList contains num
    1. if the event id is equal dot and input value contains . in last character
        1. return none
    1. run typeFunction
1. if the classList contains ops
    1. if the firstNum is true and number does not match dot in last character
        1. run operator function
            1. call operator function, take the object keys as parameters and store the result
            1. reset the secondNum value to null
            1. assign the result in the firstNum state.
1. if the id is clear
    1. run clear function
1. if id is all-clear
    run all clear function 

### allClear(input, btnContent)
1. make the value of input an empty string
1. call resetState()

### typeNumber(input, btnContent)
1. in the value of input, add the textContent in the input
1. if the operation is null
    1. store the value in firstNum
    1. if number is equal to empty string.
        1. make first num a null
1. else store it on the second number.
    1. if number is equal to empty string.
        1. make second num a null

### getOperation(input, btnContent)
1. store the operation in the operation in state object
1. empty the input value

### clearNum(input)
1. slice the value of input
    1. if operator state is false
        1. update the first num
        1. if character is empty
            1. make first num a null
    1. else put it on second num
        1. if second num is empty
            1. make 2nd num null

### calculatorState {}
1. set the first number to null
2. set the second number to null
3. set operation to null

### showEqual(input)
1. if each key of calculator state is true and dot is not the last value in input
    1. set the input value to result of operators function
    1. call resetState()  
    1. re assign the result to first number

### resetState()
1. set first number to null
2. set second num to null
3. set operator to null
