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
    basetool.wxRequest(`/getnewslist`, 'get', listQuery)
    .then(res => {
      resolve(res)
    })
  })
}

const getUniversityByType = (type) => {
  return new Promise((resolve,reject) => {
    basetool.wxRequest('/getUniversitiesbytype', 'get', type)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const get20University = (listQuery) => {
  return new Promise((resolve,reject) => {
    basetool.wxRequest('/getlistUniversity', 'get', listQuery)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const getUniversityBySelect = (params) => {
  return new Promise((resolve, reject) => {
    basetool.wxRequest('/getUniversitiesbyselect', 'get', params)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}
const getQuestion = (params) => {
  return new Promise((resolve, reject) => {
    basetool.wxRequest('/getQuestions', 'get', params)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}
export default { // 暴露接口
  login,
  getNewsList,
  getUniversityByType,
  get20University,
  getUniversityBySelect,
  getQuestion
} 