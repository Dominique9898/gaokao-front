// pages/user/user.js
Page({
  data: {
    userInfo: {
      name:'请登录',
      avatarPath: 'https://dominikcloud.ltd/images/userAvator.png',
      phone: '绑定手机'
    }
  },
  bindLogin() {
    // 登录
    let that = this
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code
        wx.getUserInfo({
          success: function (res) {
              console.log('---- wxgetUserInfo successd.');
              that.thirdLogin(code,res.encryptedData,res.iv);//调用服务器api
          }
        })
      }
    })
  },
})