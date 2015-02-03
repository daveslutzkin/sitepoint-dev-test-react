'use strict';

module.exports = React.createClass({
    render() {
        return (
            <tr>
                <td></td>
                <td>TOTAL</td>
                <td>
                    {this.props.counters.reduce((acc, {count}) => acc + count, 0)}
                </td>
            </tr>
        );
    }
})
