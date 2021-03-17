import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';



// 在这里创建 action
const loadSuccessAction = createAction(actionTypes.LOAD_SUCCESS);

// 这里在业务代码中使用
// 第一个括号是业务代码调用传参，第二个括号是自动传参
const onload = (param) => (dispatch, getState) => {

    console.info('trigger')
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    }).then((res) => {
        // 根据条件触发 action
        dispatch(loadSuccessAction({ loading: false, data: res }));
    }).catch(() => {
        // 根据条件触发 action，这个表示异常情况
        dispatch(loadSuccessAction({ loading: false }));
    });

    console.info(param);

}

export {
    onload,
}