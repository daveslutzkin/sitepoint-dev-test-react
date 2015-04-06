'use strict';

var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <tr>
                <td></td>
                <td>TOTAL</td>
                <td>
                    {Object.keys(this.props.counters).reduce((acc, id) => acc + this.props.counters[id].count, 0)}
                </td>
            </tr>
        );
    }
})
