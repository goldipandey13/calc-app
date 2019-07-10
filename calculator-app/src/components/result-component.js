import React, { Component } from 'react';
import '../App.css';

class ResultComponent extends Component {


    render() {
        let { result } = this.props;
        let { history } = this.props;

        return (
            <div className="result">
                {history.length > 0 ? (
                    <button name="deleteHistory" onClick={e => this.props.onClick(e.target.name)} className="btn btn-outline-danger delete-history btn-sm p-0 m-2 float-right">clear history</button>
                ) : ''}
                <div className="history">
                    {history.map(function (value, index) {
                        return <p key={index}> {[value.state]} </p>;
                    })}
                </div> <br />
                <p>{result}</p>
            </div>
        );
    }
}


export default ResultComponent;