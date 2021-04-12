export default {
    state: {
        errors: {}
    },
    getters: {
        errors(state) {
            return state.errors;
        },
        firstError(state) {
            return function (key) {
                return state.errors[key] && state.errors[key].length ? state.errors[key][0] : '';
            }
        }
    },
    mutations: {
        setErrors(state, errors) {
            state.errors = errors;
        }
    }
}