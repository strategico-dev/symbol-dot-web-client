import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/modules/auth";
import user from "@/store/modules/user";
import errors from "@/store/modules/errors";
import tableTheme from "@/store/modules/table-themes"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    errors,
    tableTheme
  }
})
