'use strict';

var React = require('react');
var CounterActions = require('../actions/CounterActions.js');

module.exports = React.createClass({
    render() {
        return (
            <div>
                <input ref="nameInput"></input>
                <input
                    type="submit"
                    value="+"
                    onClick={this._onAddClick}
                />
            </div>
        )
    },

    _onAddClick(event) {
        event.preventDefault();
        CounterActions.addCounter(this.refs.nameInput.getDOMNode().value);
    }
})
