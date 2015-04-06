'use strict';

var React = require('react');
var CounterActions = require('../actions/CounterActions.js');

module.exports = React.createClass({
    render() {
        return (
            <tr>
                <td>
                    <input
                        type="submit"
                        value="x"
                        onClick={this._onRemoveClick}
                    />
                </td>
                <td>{this.props.counter.name}</td>
                <td>
                    <input
                        type="submit"
                        value="-"
                        onClick={this._onDecrementClick}
                    />
                    {this.props.counter.count}
                    <input
                        type="submit"
                        value="+"
                        onClick={this._onIncrementClick}
                    />
                </td>
            </tr>
        )
    },

    _onRemoveClick(event) {
        event.preventDefault();
        CounterActions.removeCounter(this.props.counterId);
    },
    _onIncrementClick(event) {
        event.preventDefault();
        CounterActions.incrementCounter(this.props.counterId);
    },
    _onDecrementClick(event) {
        event.preventDefault();
        CounterActions.decrementCounter(this.props.counterId);
    }
})
