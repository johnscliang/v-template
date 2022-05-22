import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import BaseData from '@/common/types/base/IbaseData'

export const key: InjectionKey<Store<BaseData>> = Symbol('vuex-baseData')

export const store = createStore<BaseData>({
  state() {
    return {
      pageData: null
    }
  },
  getters: {
    getPageData(state, getters) {
      return state.pageData
    }
  },
  mutations: {},
  actions: {},
  modules: {
  }
})

export function useStore() {
  return baseUseStore(key)
}
