// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    selectItems: [],
    type: ['公立', '民办'],
    schoolType: '',
    score: '',
    province:['安徽','北京','重庆','福建','甘肃','广东','广西','贵州','海南','河北','黑龙江','河南','香港','湖北','湖南','江苏','江西','吉林','辽宁','澳门','内蒙古','宁夏','青海','山东','上海','山西','陕西','四川','台湾','天津','新疆','西藏','云南','浙江']
  },
  checkboxChange(e) {
    this.setData({
      selectItems: e.detail.value
    })
  },
  onTypeChange(e) {
    console.log(e.detail)
    this.setData({
      radio: e.detail,
    });
  },
  synchroValue(e) {
    this.setData({
      score: e.detail.value
    })
  },
  onConfirm() {
    const province = this.data.selectItems;
    const score = this.data.score
    const type = this.data.type[this.data.radio - 1]
    wx.navigateTo({
      url: `/pages/recommend/recommendSchool?province=${province}&score=${score}&type=${type}`,
    })
  },
})