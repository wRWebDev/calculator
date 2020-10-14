Calculator
==========

![Screenshot](https://github.com/wRWebDev/calculator/blob/master/Screenshot.png?raw=true)

## Get started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

From project directory, run with
`npm start`

Or build streamlined version with
`npm run build`

For more info, checkout the [React documentation](https://reactjs.org/docs/getting-started.html) on building/deploying apps here:

## About Calculator

Calculator runs from 3 components:
> 1) Buttons
> 2) Screen
> 3) App

Each can be found as a *.js file in src/

### Buttons Component

The Buttons component (Buttons.js) creates the clickable elements (numberic and operator alike) from an object to save on html markup. 

Each passes a value and a type back to the App component which processes the inputs.
The type of the button also effects the class name of that element, and thereby the styling.
```

## Example button:
{
    type: 'number',
    id: 'six',
    value: '6'
}

## Passed back to App.js with:
onClick={() => props.handleClick(button.value, button.type)}

```

### Screen Component

The screen function's only job is to format state.currentValue and state.formula into HTML away from the App component.

### App Component

#### Methods:

> 1) constructor
> 2) handleClick
> 3) handleNumber
> 4) handleOperator
> 5) clearAll
> 6) calculate
> 7) render

##### 1. `constructor()`

Initialising state:
- formula: storing the whole calculation: `string`
- currentVal: the number being inputted, default 0: `string`
- answer: the calculation of state.formula: `number`

#### 2. `handleClick()`

Triggered onClick of elements generated in Buttons component.

Arguments:
- value: numeric value or operator: `[0-9.+\-*/=] or 'CE' as string`
- type: `number / operator`

If type is a number (includes decimal point), passes the value to handleNumber.

If an operator, passes the value to handleOperator.

#### 3. `handleNumber()`

If a decimal point is passed, if state.currentValue doesn't contain a decimal point yet, it'll append one.

If a number, it'll check to see if it's a new number.
If so, it'll replace the 0 with the clicked value, else append the clicked value to the currently displayed number.

#### 4. `handleOperator()`

Checks to see if multiple operators were clicked. If so, it'll only use the last of them, unless it was a negative sign, '-', in which case it'll use the last two operators.

If the operator was 'CE', it'll point to clearAll(), or '=' points to calculate.

#### 5. `clearAll()`

Resets state to default values.

#### 6. `calculate()`

Returns the calculation of `state.currentValue` appended to `state.formula` by means of the `eval()` function. 

The answer is returned as a `float`.

`state.currentVal` and `state.answer` are then set to the answer. Formula is cleared.

The use of state.answer allows calculations to be continued after pressing '='.

#### 7. `render()`

This method pulls in the Screen and Buttons components, updating the Screen component on state changes.

-----------------------------------------

Enjoy x