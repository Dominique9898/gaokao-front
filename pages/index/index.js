// index.js
// 获取应用实例
const app = getApp()
const baseroot = app.globalData.baseroot

import $api from '../../utils/api'

Page({
  onLoad() {
    this.getNewsList()
  },
  data: {
    listQuery: {
      page: 1,
      limit: 20,
    },
    list: [],
    user_location: '浙江省',
    imgUrls: [
      baseroot+'/images/kabi1.jpeg',
      baseroot+'/images/kabi2.jpeg'
    ],
    circleItems: [
      {
      label:'院校库',
      imgPath: baseroot+'/images/5t5.png',
      url: '/pages/school/allschool'
      },
      {
        label:'专业库',
        imgPath: baseroot+'/images/huzi.png',
        url: '/pages/major/major',
      }, 
      {
        label:'录取概率',
        imgPath: baseroot+'/images/megumi.png',
        url: '/pages/recommend/recommend',
      },
      {
        label:'本科优选',
        imgPath: baseroot+'/images/yeqiangwei.png',
        url: '/pages/school/allschool'
      }
  ],
    indicatorDots: true,
    autoplay: true,
    interval: 8000,
    duration: 1800
  },
  getLocalUrl(file){
    return `https://dominikcloud.ltd${file}`
  },
  getNewsList() {
    let that = this
    $api.getNewsList(this.data.listQuery)
    .then(res => {
      const data = res.data.list
      data.forEach(item => {
        item.img = that.getLocalUrl(item.img)
        console.log(item.img);
      })
      this.setData({
        list: data
      })
    })
  },
  onCircleItemTap(e) {
    console.log(e)
    const index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: this.data.circleItems[index].url,
    })
  }
})
