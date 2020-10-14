import React, { Component } from 'react'

const buttons = [
    {
        type: 'number',
        id: 'zero',
        value: '0'
    },
    {
        type: 'number',
        id: 'one',
        value: '1'
    },
    {
        type: 'number',
        id: 'two',
        value: '2'
    },
    {
        type: 'number',
        id: 'three',
        value: '3'
    },
    {
        type: 'number',
        id: 'four',
        value: '4'
    },
    {
        type: 'number',
        id: 'five',
        value: '5'
    },
    {
        type: 'number',
        id: 'six',
        value: '6'
    },
    {
        type: 'number',
        id: 'seven',
        value: '7'
    },
    {
        type: 'number',
        id: 'eight',
        value: '8'
    },
    {
        type: 'number',
        id: 'nine',
        value: '9'
    },
    {
        type: 'number',
        id: 'decimal',
        value: '.'
    },
    {
        type: 'operator',
        id: 'add',
        value: '+'
    },
    {
        type: 'operator',
        id: 'subtract',
        value: '-'
    },
    {
        type: 'operator',
        id: 'multiply',
        value: 'x'
    },
    {
        type: 'operator',
        id: 'divide',
        value: '/'
    },
    {
        type: 'operator',
        id: 'equals',
        value: '='
    },
    {
        type: 'operator',
        id: 'clear',
        value: 'CE'
    }

]

export default class Buttons extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const displayButtons = buttons.map(button => {
            return (
                <div
                    key={button.id}
                    id={button.id} 
                    className={`button ${button.type}`}
                    onClick={() => this.props.handleClick(button.value, button.type)}    
                >
                    {button.value}
                </div>
            )
        })

        return (
            <div id="buttons">
                {displayButtons}
            </div>
        )
    }
}
