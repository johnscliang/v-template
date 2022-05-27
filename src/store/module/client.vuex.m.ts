import { Module } from 'vuex'
import ClientInfo from '@/common/beans/clientInfo.model'
import BaseData from '@/common/beans/base/IbaseData'

const clientModule: Module<ClientInfo, BaseData> = {
  namespaced: true,
  state: new ClientInfo(),
  mutations: {
    UPDATE_CLIENT(state, payload) {
      state = payload
    }
  },
  actions: {}
}

export default clientModule
