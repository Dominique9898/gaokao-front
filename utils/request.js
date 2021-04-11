let base = 'https://dominikcloud.ltd/api';
let header = {
  'content-type': 'application/json',
}

const wxRequest = (url, method, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base+url,
      data: data,
      header: header,
      method: method,
      success: (res => {
        resolve(res.data)
      }),
      fail: (res => {
        reject(res)
      })
    })
  })
}
module.exports = {
  wxRequest: wxRequest
}
