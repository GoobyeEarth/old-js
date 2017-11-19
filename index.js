var biscuit_counter = {};

// domに対する書き換えなどをstateに集約する
biscuit_counter.state = {};
biscuit_counter.state.get = function () {
    return {'count': $('#biscuit_counter').data('count')};
};
biscuit_counter.state.set = function (state) {
    //状態を保存
    $('#biscuit_counter').data('count', state['count']);

    //状態を元に文字を変更
    var message = this.create_count_message(state['count']); // どういった文言が生成されるかをテストしたい場合は切り出してテスト可能にする。
    $('#biscuit_counter').text(message);
};
biscuit_counter.state.create_count_message = function (count) {
    return 'ビスケットが' + count + 'つ';
};

// userのイベント、ajaxのリスポンスなどから発火させるaction群
biscuit_counter.action = {};
biscuit_counter.action.count_up = function (num) {
    var state = biscuit_counter.state.get();
    state['count'] = state['count'] + num; //ここがテストしたくなったら
    biscuit_counter.state.set(state);
};

biscuit_counter.action.count_down = function (num) {
    var state = biscuit_counter.state.get();
    state = biscuit_counter.reducer.count_down(state, num); // reducerに切り出す
    biscuit_counter.state.set(state);
};

// stateを書き換えるイベント群、テストしたくなったら作成して切り出す。
biscuit_counter.reducer = {};
biscuit_counter.reducer.count_down = function (state, num) {
    state['count'] = state['count'] - num;
    return state;
};

//非同期処理はこちらに退避
biscuit_counter.async = {};



