// pages/measurement/test.js
import $api from '../../utils/api'
import basetool from '../../utils/util'
Page({
  data: {
    type: 'interests',
    questionList: [],
    index: 0,
    score: 0,
  },
  onLoad: function (options) {
    // this.setData({
    //   type: options.type
    // })
    this.getQuestion(this.data.type)
    // this.getQuestion(options.type)
  },
  getQuestion(type) {
    const params = {
      type
    }
    $api.getQuestion(params)
    .then(res => {
      this.setData({
        questionList: res.data
      })
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  },
  onAnwserTap(e) {
    if (this.data.type === 'interests') {
      const value = e.currentTarget.dataset.value
      let index = this.data.index
      basetool.calholandScore(value, index)
      index++
      this.setData({
        index
      })
    }
  },
  calculateInterestsResult(value) {
    const score = value === ''
  },
})