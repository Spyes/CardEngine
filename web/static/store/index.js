import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  preview: {},
  players: [
    {
      name: 'spyes',
      hand: [
        {
          name: 'Swamp'
        },
        {
          name: 'Mountain'
        }
      ]
    },
    {
      name: 'inn0',
      hand: [
        {
          name: 'Island'
        }
      ]
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  plugins: []
})
