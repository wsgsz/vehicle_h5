export function getUrlParam(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

export const formValidator = {
  checkIdNum(value) {
    if (!value.length) {
      return '请输入正确的用户名'
    }
  },
  checkName(name) {
    if (!(/^[\u4E00-\u9FBF]{2,4}$/).test(name)) {
      return '请输入正确的姓名'
    }
    return false
  },
  checkMemo(text) {
    if (!text) {
      return '请输入文字'
    }
    return false
  },
  checkMobile(phone) {
    if (!(/^1[3,4,5,6,7,8,9][0-9]{9}$/).test(phone)) {
      return '输入正确手机号'
    }
    return false
  },
  checkPassword(value) {
    if (value.length < 6) {
      return '请输入正确的密码'
    }
    return false
  }
}
