import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import BaseData from '@/common/beans/base/IbaseData'

export const key: InjectionKey<Store<BaseData>> = Symbol('vuex-baseData')

export const store = createStore<BaseData>({
  state() {
    return {
      pageData: 'aaaaPagedata'
    }
  },
  getters: {},
  mutations: {
    SET_PAGE_DATA(state, payload) {
      state.pageData = payload
    }
  },
  actions: {},
  modules: {}
})

export function useStore() {
  return baseUseStore(key)
}
