// index.js
// 获取应用实例
const app = getApp()
const baseroot = app.globalData.baseroot
Page({
  data: {
    user_location: '浙江省',
    imgUrls: [
      baseroot+'/images/kabi1.jpeg',
      baseroot+'/images/kabi2.jpeg'
    ],
    circleItems: [
      {
      label:'专业库',
      imgPath: baseroot+'/images/5t5.png'
      },
      {
        label:'职业库',
        imgPath: baseroot+'/images/huzi.png'
      }, 
      {
        label:'录取概率',
        imgPath: baseroot+'/images/megumi.png',
      },
      {
        label:'本科优选',
        imgPath: baseroot+'/images/yeqiangwei.png',
      }
  ],
    indicatorDots: true,
    autoplay: true,
    interval: 8000,
    duration: 1800
  },
})
