/**
 * Created by xzz on 2017/12/6.
 */
import axios from './request'

// post
export function post(url, data) {
  return axios.post(url, data)
}

// get
export function get(url, params) {
  return axios.get(url, {params: params})
}
export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
