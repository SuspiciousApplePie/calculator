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
    1. call `division()` and put `num1` and `num2` as params

## Typing operation
### init()
1. select the .main-content
1. Add click event listener in .main-content

### getClick(e)
1. select the input inside .main-content
1. prevent the default of input
1. if the classList contains num
    1. run typeFunction
1. if the classList contains ops
    1. run operator function
        1.if there is operator and second num is already populated.
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
1. else store it on the second number.

### getOperation(input, btnContent)
1. if the firstNum is false
    1. store the operation in the operation in state object
    1. empty the input value

### clearNum(input)
1. slice the value of input

### calculatorState {}
1. set the first number to null
2. set the second number to null
3. set operation to null

### showEqual(input)
1. set the input value of result of operators function
1. call resetState()  
1. call the typeNumber to reset operation

### resetState()
1. set first number to null
2. set second num to null
3. set operator to null
