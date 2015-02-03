'use strict';

module.exports = React.createClass({
    handleRemoveClick(event) {
        event.preventDefault();
        this.props.onRemoveCounter(this.props.counter)
    },
    handleDecrementClick(event) {
        event.preventDefault();
        this.props.onChangeCounter(this.props.counter, -1)
    },
    handleIncrementClick(event) {
        event.preventDefault();
        this.props.onChangeCounter(this.props.counter, +1)
    },

    render() {
        return (
            <tr>
                <td>
                    <input
                        type="submit"
                        value="x"
                        onClick={this.handleRemoveClick}
                    />
                </td>
                <td>{this.props.counter.name}</td>
                <td>
                    <input
                        type="submit"
                        value="-"
                        onClick={this.handleDecrementClick}
                    />
                    {this.props.counter.count}
                    <input
                        type="submit"
                        value="+"
                        onClick={this.handleIncrementClick}
                    />
                </td>
            </tr>
        )
    }
})
