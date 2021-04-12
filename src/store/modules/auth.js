export default {
    state: {
        token: localStorage.getItem('token')
    },
    getters: {
        isAuth(state) {
            return state.token !== null;
        }
    }
}