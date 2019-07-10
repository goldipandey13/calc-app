import React, { Component } from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="previous" onClick={e => this.props.onClick(e.target.name)}>previous</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button name="percent" onClick={e => this.props.onClick(e.target.name)}>percent</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button><br />


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="square" onClick={e => this.props.onClick(e.target.name)}>x^2</button><br />


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="cube" onClick={e => this.props.onClick(e.target.name)}>x^3</button><br />

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="sqrt" onClick={e => this.props.onClick(e.target.name)}>&radic;</button><br />


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <button name="cbrt" onClick={e => this.props.onClick(e.target.name)}>3&radic;</button><br />

            </div>
        );
    }
}


export default KeyPadComponent;