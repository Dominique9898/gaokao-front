// app.js
import $api from './utils/api'
App({
  onLaunch() {
    wx.setStorageSync('token', '')
    let session = wx.getStorageSync('token')
    let that = this
    if (session) {
      wx.checkSession({
        success: () => {
          // session 未过期
          console.log('session 未过期')
          that.globalData.userInfo = wx.getStorageSync('userInfo')
          that.globalData.login = true
        },
        fail: () => {
          // 已过期
          console.log('session 过期')
          this.bindLogin()
        }
      })
    } else {
      console.log('session 不存在')
      that.bindLogin()
    }
  },
  bindLogin() {
    let that = this
    wx.login({
      success: (res) => {
        const code = res.code;
        wx.getUserInfo({
          lang: 'ZH_CN',
          success: (res) => {
            const encryptedData = res.encryptedData
            const iv = res.iv
            that.getThirdSession(code, encryptedData, iv)
          }
        })
      }
    })
  },
  getThirdSession(code,encryptedData,iv) {
    let globalData = this.globalData
    $api.login(code,encryptedData,iv).then(res => {
      let data = res.data
      globalData.login = true
      globalData.userInfo = data.userInf
      wx.setStorageSync('userInfo', data.userInfo)
      wx.setStorageSync('token', data.third_session)
      wx.setStorageSync('public_key', data.public_key)
      console.log(res)
    })
  },
  globalData: {
    userInfo: null,
    login: false,
    baseroot: 'https://dominikcloud.ltd'
  }
})