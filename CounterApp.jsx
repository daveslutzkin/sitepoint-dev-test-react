'use strict';

var CounterRow = require('./CounterRow');
var InputRow = require('./InputRow');
var TotalRow = require('./TotalRow');

module.exports = React.createClass({
    getInitialState() {
        var hash = {};
        this.props.counters.forEach(
            counter => { hash[Math.random()] = counter }
        );
        return hash
    },

    handleAddCounter(name) {
        this.state[Math.random()] = { name: name, count: 0 };
        this.setState(this.state);
    },
    handleRemoveCounter(id) {
        delete this.state[id];
        this.setState(this.state);
    },
    handleChangeCounter(id, delta) {
        this.state[id].count += delta;
        this.setState(this.state);
    },

    render() {
        var rows = [];
        Object.keys(this.state).forEach(id => rows.push(
            <CounterRow
                key={id}
                counterId={id}
                counter={this.state[id]}
                onRemoveCounter={this.handleRemoveCounter}
                onChangeCounter={this.handleChangeCounter}
            />
        ));

        return (
            <form>
                <InputRow onAddCounter={this.handleAddCounter} />
                <table>
                    <tbody>
                        {rows}
                        <TotalRow counters={this.state} />
                    </tbody>
                </table>
            </form>
        )
    }
})
