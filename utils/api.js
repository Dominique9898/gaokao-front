import basetool from './request'

const login = (code,encryptedData,iv) => {
  const params = {
    code: code,
    encryptedData: encryptedData,
    iv: iv
  }
  return new Promise(resolve => {
    basetool.wxRequest(`/user/login`, 'post', params)
    .then(res => {
      resolve(res)
    })
  })
}

export default { // 暴露接口
  login,
} 