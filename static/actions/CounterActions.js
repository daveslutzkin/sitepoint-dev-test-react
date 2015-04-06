var CounterDispatcher = require('../dispatcher/CounterDispatcher.js');
var CounterConstants = require('../constants/CounterConstants.js');

var CounterActions = {
    ajaxResponse(counters) {
        CounterDispatcher.dispatch({
            actionType: CounterConstants.AJAX_RESPONSE,
            counters: counters
        });
    },

    addCounter(title) {
        CounterDispatcher.dispatch({
            actionType: CounterConstants.ADD_COUNTER,
            title: title
        });
    },
    removeCounter(id) {
        CounterDispatcher.dispatch({
            actionType: CounterConstants.REMOVE_COUNTER,
            id: id
        });
    },

    incrementCounter(id) {
        CounterDispatcher.dispatch({
            actionType: CounterConstants.INCREMENT_COUNTER,
            id: id
        });
    },
    decrementCounter(id) {
        CounterDispatcher.dispatch({
            actionType: CounterConstants.DECREMENT_COUNTER,
            id: id
        });
    },
};

module.exports = CounterActions;
