import {HTTP} from "@/http";

export default {
    state: {
        userCreating: false,
        userAttemptCreate: false
    },
    getters: {
        userCreating(state) {
            return state.userCreating;
        },
        userAttemptCreate(state) {
            return state.userAttemptCreate;
        }
    },
    mutations: {
        setUserCreating(state, value) {
            state.userCreating = value;
            if(value) state.userAttemptCreate = true;
        }
    },
    actions: {
        async createUser({commit, getters}, data) {
            await HTTP.post('/api/v1/users', data);
        }
    }
}