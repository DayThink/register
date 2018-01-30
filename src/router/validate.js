//手机验证
export function isvalidUsername(str) {
  const valid_map = 11 && /^((13|14|15|17|18|16)[0-9]{1}\d{8})$/
  return valid_map.test(str)
}

//密码验证，包括字母和数字
export function isvalidPassword(str) {
  const password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
  return password.test(str)
}
