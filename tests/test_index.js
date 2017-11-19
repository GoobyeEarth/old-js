var assert = require('assert');
var rewire = require('rewire');
describe('biscuit_counter state', function () {
    it('create_count_message', function () {
        assert.deepEqual(true, true);
        var biscuit_counter = rewire('../index').__get__('biscuit_counter');
        var message = biscuit_counter.state.create_count_message(2);
        assert.deepEqual('ビスケットが2つ', message);
    })
});

describe('biscuit_counter reducer', function () {
    it('count_down', function () {
        assert.deepEqual(true, true);
        var biscuit_counter = rewire('../index').__get__('biscuit_counter');
        var initial_state = {'count': 2};
        var result = biscuit_counter.reducer.count_down(initial_state, 3);
        assert.deepEqual(result, {'count': -1});
    })
});