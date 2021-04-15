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

const getNewsList = (listQuery) => {
  return new Promise(resolve => {
    basetool.wxRequest(`/new/getnewslist`, 'get', listQuery)
    .then(res => {
      resolve(res)
    })
  })
}

export default { // 暴露接口
  login,
  getNewsList
} 