// pages/recommend/recommendSchool.js
import $api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    provinces: [],
    type: '',
    schoolList:[],
  },
  onLoad: function (options) {
    this.setData({
      score: parseInt(options.score),
      provinces: options.province.split(','),
      type: options.type
    })
    const params = {
      provinces: JSON.stringify(options.province.split(',')),
      score: parseInt(options.score),
      type: options.type
    }
    console.log(params)
    $api.getRecommendUniversity(params)
    .then(res => {
      this.setData({
        schoolList: res.data
      })
    })
  },
})