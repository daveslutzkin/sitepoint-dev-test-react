var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CounterActions = require('../actions/CounterActions.js');
var CounterConstants = require('../constants/CounterConstants.js');
var CounterDispatcher = require('../dispatcher/CounterDispatcher.js');

var CHANGE_EVENT = 'change';

function doApiCall(method, route, params) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, '/api/v1/'+route, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var counters = {};
            JSON.parse(xhr.responseText).forEach(counter =>
                counters[counter.id] = {
                    name: counter.title,
                    count: counter.count
                }
            );
            CounterActions.ajaxResponse(counters);
        }
    };
    xhr.send(JSON.stringify(params));
}

var _counters = {};

var CounterStore = assign({}, EventEmitter.prototype, {
    getCounters() {
        return _counters;
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    dispatcherIndex: CounterDispatcher.register(action => {
        switch (action.actionType) {
            case CounterConstants.AJAX_RESPONSE:
                _counters = action.counters;
                CounterStore.emitChange();
                break;

            case CounterConstants.ADD_COUNTER:
                doApiCall('POST', 'counter', {title: action.title});
                break;
            case CounterConstants.DECREMENT_COUNTER:
                doApiCall('POST', 'counter/dec', {id: action.id});
                break;
            case CounterConstants.INCREMENT_COUNTER:
                doApiCall('POST', 'counter/inc', {id: action.id});
                break;
            case CounterConstants.REMOVE_COUNTER:
                doApiCall('DELETE', 'counter', {id: action.id});
                break;
        }
    })
});

doApiCall('GET', 'counters', '');

module.exports = CounterStore;
