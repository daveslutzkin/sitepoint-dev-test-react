'use strict';

var CounterRow = require('./CounterRow');
var InputRow = require('./InputRow');
var TotalRow = require('./TotalRow');

function doXhr(method, route, params, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, 'http://dev.vm:3000/api/v1/'+route, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(params);
}

function parseState(jsonState) {
    var hash = {};
    JSON.parse(jsonState).forEach(response =>
        hash[response.id] = {
            name: response.title,
            count: response.count
        }
    );
    return hash;
}

module.exports = React.createClass({
    getInitialState() {
        return {}
    },

    componentDidMount() {
        doXhr('GET', 'counters', '',
              responseText => this.setState(parseState(responseText)));
    },

    handleAddCounter(name) {
        doXhr('POST', 'counter', JSON.stringify({title:name}),
              responseText => this.setState(parseState(responseText)));
    },
    handleRemoveCounter(id) {
        doXhr('DELETE', 'counter', JSON.stringify({id:id}),
              responseText => this.replaceState(parseState(responseText)));
    },
    handleDecrementCounter(id, delta) {
        doXhr('POST', 'counter/dec', JSON.stringify({id:id}),
              responseText => this.setState(parseState(responseText)));
    },
    handleIncrementCounter(id, delta) {
        doXhr('POST', 'counter/inc', JSON.stringify({id:id}),
              responseText => this.setState(parseState(responseText)));
    },

    render() {
        var rows = [];
        Object.keys(this.state).forEach(id => rows.push(
            <CounterRow
                key={id}
                counterId={id}
                counter={this.state[id]}
                onRemoveCounter={this.handleRemoveCounter}
                onIncrementCounter={this.handleIncrementCounter}
                onDecrementCounter={this.handleDecrementCounter}
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
