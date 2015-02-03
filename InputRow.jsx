'use strict';

module.exports = React.createClass({
    handleAddClick(event) {
        event.preventDefault();
        this.props.onAddCounter(this.refs.nameInput.getDOMNode().value)
    },

    render() {
        return (
            <div>
                <input ref="nameInput"></input>
                <input
                    type="submit"
                    value="+"
                    onClick={this.handleAddClick}
                />
            </div>
        )
    }
})
