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
1. select the .keys inside .main-content
1. Add click event listener in .keys

### getClick(e)
1. select the input inside .main-content
1. prevent the default of input
1. if the classList contains num
    1. run typeFunction
1. if the classList contains ops
    1. run operator function
1. if the id is clear
    1. run clear function
1. if id is all-clear
    run all clear function 

### typeNumber(input, btnContent)
1. in the value of input, add the textContent in the input