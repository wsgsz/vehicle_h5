import * as type from './mutation-types';
const mutations = {
  [type.SET_MPVUEINFO](state, mpvueInfo) { // eslint-disable-line
    state.mpvueInfo = mpvueInfo;
  },
  [type.LOGIN](state, data) { // eslint-disable-line
    state.userInfo = data;
  },
  [type.LOCAL](state, data) { // eslint-disable-line
    state.local = data;
  },
  [type.SET_DETAIL](state, data) { // eslint-disable-line
    state.detail = data;
  },
  [type.SET_UNID](state, data) { // eslint-disable-line
    state.unid = data;
  },
}

export default mutations;
