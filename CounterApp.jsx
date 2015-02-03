'use strict';

var CounterRow = require('./CounterRow');
var InputRow = require('./InputRow');
var TotalRow = require('./TotalRow');

module.exports = React.createClass({
    getInitialState() {
        return { counters: this.props.counters.map(
            counter => { counter.id = Math.random(); return counter })
        }
    },

    handleAddCounter(name) {
        this.setState({ counters:
            this.state.counters.concat({ id: Math.random(), name: name, count: 0 })
        })
    },
    handleRemoveCounter(toRemove) {
        this.setState({
            counters: this.state.counters.filter(counter => counter != toRemove)
        })
    },
    handleChangeCounter(toChange, delta) {
        this.setState({
            counters: this.state.counters.map(counter => {
                if (counter == toChange) { counter.count += delta }
                return counter
            })
        })
    },

    render() {
        var rows = this.state.counters.map(counter =>
            <CounterRow
                key={counter.id}
                counter={counter}
                onRemoveCounter={this.handleRemoveCounter}
                onChangeCounter={this.handleChangeCounter}
            />
        );

        return (
            <div>
                <form>
                    <InputRow onAddCounter={this.handleAddCounter} />
                    <table>
                        <tbody>
                            {rows}
                            <TotalRow counters={this.state.counters} />
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
})
