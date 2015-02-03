'use strict';

var CounterApp = require('./CounterApp');

var INITIAL_COUNTERS = [
  { name: 'Something', count: 1 },
  { name: 'Nothing', count: 8 },
  { name: 'Anything', count: 99 },
];

React.render(
    <CounterApp counters={INITIAL_COUNTERS} />,
    document.getElementById('content')
)
