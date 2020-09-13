import produce from 'immer';
import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

// 默认 state，用到的所有变量都要在这里初始化
const _defaultState = {
    loading: true,

}

export default handleActions({
    // 每个类型对应一个处理函数
    [actionTypes.LOAD_SUCCESS]: produce((draft, { loading }) => {
        draft.loading = loading;
    }),
}, _defaultState);