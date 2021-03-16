import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex

import state from './state' //引入state
import getters from './getters'
import mutations from './mutations' //引入mutations
import actions from './actions' //引入actions

Vue.use(Vuex)

const store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions
})

export default store