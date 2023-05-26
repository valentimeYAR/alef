import {createStore} from "vuex";

const store = createStore({
    state:{
        userData: null
    },
    mutations: {
        saveUserData(state, userData) {
            state.userData = userData
        }
    }
})

export default store