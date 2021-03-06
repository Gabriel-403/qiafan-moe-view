import axios from "axios";
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
axios.interceptors.response.use((response) => {
    return response;
}, function(error) {
    if (error.response == undefined) {
        alert("请求无响应")
    } else {
        if (401 === error.response.status) {
            window.location = '/#/login';
        }
        return Promise.reject(error);
    }

});
export default setAuthToken;