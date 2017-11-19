var biscuit_counter = {};

// domに対するデータの保存をstateに集約する
biscuit_counter.state = {};
biscuit_counter.state.get = function () {
    return {'count': $('#biscuit_counter').data('count')};
};
biscuit_counter.state.set = function (state) {
    //状態を保存
    $('#biscuit_counter').data('count', state['count']);

    // 描画処理
    biscuit_counter.view.draw();
    apple_counter.view.draw();
};


//状態を元に、制御や文字を生成する。
//状態ではなく、表示上の操作をする、state.getで参照してはならない。
biscuit_counter.view = {};
biscuit_counter.view.draw = function () {
    var state = biscuit_counter.state.get();
    //状態を元に文字を生成
    var biscuit_message = this.create_biscuit_count_message(state['count']); // どういった文言が生成されるかをテストしたい場合は切り出してテスト可能にする。
    $('#biscuit_counter').text(biscuit_message);
};
biscuit_counter.view.create_biscuit_count_message = function (count) {
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


var apple_counter = {};
apple_counter.state = {};
apple_counter.state.get = function () {
    return {'count': $('#apple_counter').data('count')};
};
apple_counter.state.set = function (state) {
    $('#apple_counter').data('count', state['count']);

    apple_counter.view.draw();
};


apple_counter.view = {};
apple_counter.view.draw = function () {
    var apple_counter_state = apple_counter.state.get();
    var biscuit_counter_state = biscuit_counter.state.get();
    var message = this.create_apple_count_message(apple_counter_state['count'], biscuit_counter_state['count']);
    $('#apple_counter').text(message);
};
apple_counter.view.create_apple_count_message = function (apple_count, biscuit_count) {
    return 'ビスケットが' + biscuit_count + 'つ、りんごが' + apple_count + 'つ';
};

apple_counter.action = {};
apple_counter.action.count_up = function (num) {
    var state = apple_counter.state.get();
    state['count'] = state['count'] + num;
    apple_counter.state.set(state);
};
apple_counter.action.count_down = function (num) {
    var state = apple_counter.state.get();
    state['count'] = state['count'] - num;
    apple_counter.state.set(state);
};


