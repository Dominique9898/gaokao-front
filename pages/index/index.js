// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    user_location: '浙江省',
    imgUrls: [
      '../../images/kabi1.jpeg',
      '../../images/kabi2.jpeg'
    ],
    circleItems: [
      {
      label:'专业库',
      imgPath: '../../images/logos/5t5.png'
      },
      {
        label:'职业库',
        imgPath: '../../images/logos/huzi.png'
      }, 
      {
        label:'录取概率',
        imgPath: '../../images/logos/megumi.png',
      },
      {
        label:'本科优选',
        imgPath: '../../images/logos/yeqiangwei.png',
      }
  ],
    indicatorDots: true,
    autoplay: true,
    interval: 8000,
    duration: 1800
  },
})
