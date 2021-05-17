// pages/major/major.js
import $api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    majorList: [],
    title:[]
  },
  onTabClick(e) {
    this.setData({
      activeKey: e.currentTarget.dataset.index
    })
  },
  onLoad() {
    $api.getMajor()
    .then(res => {
      const majorList = res.data.major
      const title = res.data.title
      this.setData({
        majorList,
        title
      })
      console.log(this.data.majorList)
    })
    .catch(err => {
      console.log(err)
    })
  },
  onMajorTap(e) {
    console.log(e)
    const major = e.currentTarget.dataset.major
    wx.navigateTo({
      url: `../major/singlemajor?id=${major.id}&&name=${major.name}&&desc=${major.desc}`,
    })
  }
})