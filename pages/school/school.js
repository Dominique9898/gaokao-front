// school.js
const baseroot = 'https://dominikcloud.ltd'
import $api from '../../utils/api'
Page({
  data: {
    schoolList: [],
    type: '211',
    schooltype:['211', '985', '本科', '专科'],
    icons: [
      {
      label:'全部院校',
      imgPath:baseroot+'/images/university.png',
      url: '/pages/school/allschool'
      },
      {
        label:'院校排名',
        imgPath: baseroot+'/images/rank.png'
      }, 
      {
        label:'院校对比',
        imgPath: baseroot+'/images/compare.png',
      },
      {
        label:'收藏院校',
        imgPath: baseroot+'/images/collect.png',
      }
    ]
  },
  onLoad() {
    this.getUniversityList(this.data.type)
  },
  getUniversityList(type) {
    const param = {
      type: type
    }
    $api.getUniversityByType(param)
    .then(res => {
      this.setData({
        schoolList: res.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  onChange(e) {
    this.setData({
      type: e.detail.name
    })
    this.getUniversityList(this.data.type)
  },
  onSchoolItemTap(e) {
    const uniId = e.currentTarget.dataset.uniId
  },
  navi(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})
