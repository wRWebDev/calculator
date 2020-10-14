import React, { Component } from 'react'
import Screen from './Screen'
import Buttons from './Buttons'
import './css/app.css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            formula: '',
            currentVal: '0',
            answer: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.handleOperator = this.handleOperator.bind(this)
    }

    handleClick(value, type){
        type === 'number' ? this.handleNumber(value) : this.handleOperator(value)
    }

    handleNumber(value){
        if(value === '.'){
            /[.]/g.test(this.state.currentVal) 
                || this.setState(prevState => {
                    return {currentVal: prevState.currentVal += '.'}
                })
        }else{
            this.setState(prevState => {
                return prevState.currentVal !== '0'
                    ? {currentVal: prevState.currentVal += value, answer: ''} 
                    : {currentVal: value, answer: ''}
            })
        }
    }

    handleOperator(value){
        const passOperator = op => {
            const operators = /[+\-*/]+$/g
            if( operators.test(this.state.formula) && this.state.currentVal === '0'){
                op === '-'
                    ? this.setState(prevState => {return {formula: prevState.formula + op}})
                    : this.setState(prevState => {return {formula: prevState.formula.replace(operators, op)}})
            }else{
                this.setState(prevState => {
                    return {
                        formula: prevState.formula + prevState.currentVal + op,
                        currentVal: '0'
                    }
                })
            }
        }
        switch(value){
            case 'CE':
                this.clearAll()
                break
            case '=':
                this.calculate()
                break
            case 'x':
                passOperator('*')
                break
            default:
                passOperator(value)
                break
        }
    }

    clearAll(){
        this.setState({
            formula: '',
            currentVal: '0',
            lastPress: '',
            answer: ''
        })
    }

    calculate(){
        const answer = 
            parseFloat(
                (100000000 * eval(this.state.formula + this.state.currentVal) / 100000000)
                .toFixed(6)
            )
        this.setState({
            answer: answer,
            currentVal: answer,
            formula: ''
        })
    }
    
    render() {
        return (
            <main>
                <div id="calcWrapper">
                    <Screen currentVal={this.state.currentVal} />
                    <Buttons handleClick={this.handleClick} />
                </div>
            </main>
        )
    }
}