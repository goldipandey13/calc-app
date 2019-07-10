import React, { Component } from 'react';
import axios from 'axios';

import ResultComponent from './result-component';
import KeyPadComponent from "./keypad-component";

export default class Calculator extends Component {

    constructor() {
        super();

        this.state = {
            result: "",
            history: [],
        }
    }

    componentDidMount() {
    }

    getPreviousCalculation() {
        axios.get('http://localhost:8080/calculator').then((res) => {
            this.setState({ history: res.data });
        }).catch((error) => console.log(error));
    }

    onClick = button => {

        let val;
        switch (button) {
            case 'percent':
                this.setState({
                    result: `(${this.state.result} / 100) * `
                });
                break;
            case 'square':
                val = (eval(this.evaluateEquation()) || "") + "";
                this.saveCalculations({ state: `(${this.evaluateEquation()})^2` });
                this.setState({
                    result: (Math.pow(val, 2) || "") + ""
                });
                break;
            case 'cube':
                val = (eval(this.evaluateEquation()) || "") + "";
                this.saveCalculations({ state: `(${this.evaluateEquation()})^3` });
                this.setState({
                    result: (Math.pow(val, 3) || "") + ""
                });
                break;
            case 'sqrt':
                val = (eval(this.evaluateEquation()) || "") + "";
                this.saveCalculations({ state: `sqrt(${this.evaluateEquation()})` });
                this.setState({
                    result: (Math.sqrt(val) || "") + ""
                });
                break;
            case 'cbrt':
                val = (eval(this.evaluateEquation()) || "") + "";
                this.saveCalculations({ state: `cbrt(${this.evaluateEquation()})` });
                this.setState({
                    result: (Math.cbrt(val) || "") + ""
                });
                break;
            case '=':
                this.calculate();
                break;
            case 'C':
                this.reset()
                break;
            case 'CE':
                this.backspace()
                break;
            case 'previous':
                this.setState({ history: [] });
                this.getPreviousCalculation();
                break;
            default:
                this.setState({
                    result: this.state.result + button
                })
                break;
        }
    };

    deleteHistory = () => {
        axios.get('http://localhost:8080/calculator/delete').then((res) => {
            this.setState({ history: [] });
        });
    }

    percentage(num, per) {
        return (num / 100) * per;
    }

    evaluateEquation = () => {
        var checkResult = '';
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+');
        } else {
            checkResult = this.state.result;
        }

        return checkResult;
    }

    saveCalculations = (data) => {
        axios.post('http://localhost:8080/calculator', data).then((res) => {
            console.log(res);
        });
    }

    calculate = () => {
        const equations = { state: this.evaluateEquation() };
        this.saveCalculations(equations);
        try {
            this.setState({
                result: eval(this.evaluateEquation()) === 0 ? 0 : (eval(this.evaluateEquation()) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }

    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent onClick={this.deleteHistory} result={this.state.result} history={this.state.history} />
                    <KeyPadComponent onClick={this.onClick} />
                </div>
            </div>
        )
    }
}