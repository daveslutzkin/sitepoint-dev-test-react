'use strict';

var React = require('react');

var CounterStore = require('../stores/CounterStore.js');

var CounterRow = require('./CounterRow.jsx');
var InputRow = require('./InputRow.jsx');
var TotalRow = require('./TotalRow.jsx');

module.exports = React.createClass({
    getInitialState() {
        return { counters: CounterStore.getCounters() };
    },

    componentDidMount() {
        CounterStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        CounterStore.removeChangeListener(this._onChange);
    },

    render() {
        var counterRows = [];
        Object.keys(this.state.counters).forEach(id => counterRows.push(
            <CounterRow
                key={id}
                counterId={id}
                counter={this.state.counters[id]}
            />
        ));

        return (
            <form>
                <InputRow />
                <table>
                    <tbody>
                        {counterRows}
                        <TotalRow counters={this.state.counters} />
                    </tbody>
                </table>
            </form>
        )
    },

    _onChange() {
        this.setState({ counters: CounterStore.getCounters() });
    },
})
