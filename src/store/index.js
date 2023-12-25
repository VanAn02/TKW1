import { createStore } from 'vuex'

export default createStore({
  state: {
    token:null,
    nguoidungId:null,
    quyen:null,
    search: '',

  },
  getters: {
    getSearch(state) {
      return state.search;
    },
    getToken: state => state.token,
    getNguoiDungId: state => state.nguoidungId,
    getQuyen: state => state.quyen,
  },
  mutations: {
    Search(state, data) {
      state.search = data;
    },
    setToken(state) {
      state.token = sessionStorage.getItem('token');
    },
    setNguoiDungId(state) {
      state.nguoidungId = sessionStorage.getItem('NguoiDungId');
    },
    setQuyen(state) {
      state.quyen = sessionStorage.getItem('Quyen');
    },
    removeToken(state) {
      state.token = sessionStorage.clear('token');
    },
    removeNguoiDungId(state) {
      state.nguoidungId = sessionStorage.clear('NguoiDungId')

    },
    removeQuyen(state) {
      state.quyen = sessionStorage.clear('Quyen');
    },
  },
  actions: {
    Login(context, data) {
      try {
        sessionStorage.setItem('token', data);
        context.commit('setToken');
      } catch (error) {
        console.log(error)
      }
    },
    Token(context, data) {
      try {
        sessionStorage.setItem('NguoiDungId', data.NguoiDungId);
        sessionStorage.setItem('Quyen', data.Quyen);
        context.commit('setNguoiDungId');
        context.commit('setQuyen');
      } catch (error) {
        console.log(error);
      }
    },
    Search(context, data) {
      context.commit('Search', data);
    },
    getSesstion(context){
      if(sessionStorage.getItem('token')){
        context.commit('setToken',sessionStorage.getItem('token'));
      }
      if(sessionStorage.getItem('NguoiDungId')){
        context.commit('setNguoiDungId',sessionStorage.getItem('NguoiDungId'));
      }
      if(sessionStorage.getItem('Quyen')){
        context.commit('setQuyen',sessionStorage.getItem('Quyen'));
      }
    },
    Logout(context) {
      try {
        context.commit('removeToken');
        context.commit('removeNguoiDungId');
        context.commit('removeQuyen');
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
