// pages/measurement/result.js
import * as echarts from '../ec-canvas/echarts'
let chart = null
let score = null
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  console.log('2', chart)
  const option = getOption(score)
  chart.setOption(option)
  canvas.setChart(chart);
  return chart;
}
function getOption(score) {
  let option = {
    backgroundColor: "#ffffff",
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '常规型',
        max:  100
      },
      {
        name: '艺术型',
        max: 100
      },
      {
        name: '社会型',
        max: 100
      },
      {
        name: '企业型',
        max: 100
      },
      {
        name: '研究型',
        max: 100
      },
      {
        name: '现实型',
        max: 100
      }
      ]
    },
    series: [{
      type: 'radar',
      data: [score]
    }]
  };
  return option
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind: '',
    xianshixing: 0,
    yanjiuxing: 0,
    yishuxing: 0,
    shehuixing: 0,
    qiyexing: 0,
    changguixing: 0,
    ec: {
      onInit: initChart
    },
    one: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      xianshixing: options.xianshixing * 10,
      yanjiuxing: options.yanjiuxing * 10,
      yishuxing: options.yishuxing * 10,
      shehuixing: options.shehuixing * 10,
      qiyexing: options.qiyexing * 10,
      changguixing: options.changguixing * 10,
    })
    const kind = this.whichkind()
    const one = this.data.one
    this.setData({
      kind
    })
    wx.setStorageSync('interests', {
      type: kind,
      desc: one
    })
    score = [this.data.changguixing, this.data.yishuxing, this.data.shehuixing, this.data.qiyexing, this.data.yanjiuxing, this.data.xianshixing]
  },
  whichkind: function () {
    if (this.data.xianshixing >= this.data.yanjiuxing && this.data.xianshixing >= this.data.yishuxing && this.data.xianshixing >= this.data.shehuixing && this.data.xianshixing >= this.data.qiyexing && this.data.xianshixing >= this.data.changguixing) {
      this.setData({
        one: "喜欢现实性的实在的工作，如机械维修、木匠活、烹饪、电气技术、管子工、电工、机械工、摄影师、制图员等。这类人通常具有机械技能和体力，喜欢户外工作，乐于使用各种工具和机器设备。这种人喜欢同事务而不是人打交道的工作。他们真诚、谦逊、敏感、务实、朴素、节俭、腼腆。"
      })
      return "现实型"
    } else if (this.data.yanjiuxing >= this.data.xianshixing && this.data.yanjiuxing >= this.data.yishuxing && this.data.yanjiuxing >= this.data.shehuixing && this.data.yanjiuxing >= this.data.qiyexing && this.data.yanjiuxing >= this.data.changguixing) {
      this.setData({
        one: "喜欢各种研究型工作，如：实验室研究员、医师、产品检验员、数学、物理学、化学、生物学等自然科学研究者、图书馆技师、计算机程序编制者和电子技术工作者等等。这类人通常具有较高的数学和科研能力，喜欢独立工作，喜欢解决问题；喜欢同观念而不是人或事务打交道。他们逻辑性强、好奇、聪明、仔细、独立、安详、俭朴。"
      })
      return "研究型"
    } else if (this.data.yishuxing >= this.data.xianshixing && this.data.yishuxing >= this.data.yanjiuxing && this.data.yishuxing >= this.data.shehuixing && this.data.yishuxing >= this.data.qiyexing && this.data.yishuxing >= this.data.changguixing) {
      this.setData({
        one: "喜欢现实性的实在的工作，如机械维修、木匠活、烹饪、电气技术、管子工、电工、机械工、摄影师、制图员等。这类人通常具有机械技能和体力，喜欢户外工作，乐于使用各种工具和机器设备。这种人喜欢同事务而不是人打交道的工作。他们真诚、谦逊、敏感、务实、朴素、节俭、腼腆。"
      })
      return "艺术型"
    } else if (this.data.shehuixing >= this.data.xianshixing && this.data.shehuixing >= this.data.yanjiuxing && this.data.shehuixing >= this.data.yishuxing && this.data.shehuixing >= this.data.qiyexing && this.data.shehuixing >= this.data.changguixing) {
      this.setData({
        one: "喜欢艺术性的工作，如：音乐、舞蹈、唱歌、演员、艺术家、美术家、音乐家、设计师、编辑、作家和文艺评论家等。这种取向类型的人往往具有某些艺术上的技能，喜欢创造性的工作，富于想象力。这类人通常喜欢同观念而不是事务打交道的工作。他们较开放、好想象、独立、有创造性。"
      })
      return "社会型"
    } else if (this.data.qiyexing >= this.data.xianshixing && this.data.qiyexing >= this.data.yanjiuxing && this.data.qiyexing >= this.data.yishuxing && this.data.qiyexing >= this.data.shehuixing && this.data.qiyexing >= this.data.changguixing) {
      this.setData({
        one: "喜欢社会交往性工作，如教师、教育行政人员、社会学家、社会工作者、咨询顾问、护士等。这类人通常喜欢周围有别人存在，对别人的事很有兴趣，乐于帮助别人解决难题。这种人喜欢与人而不是事务打交道的工作。他们助人为乐、有责任心、热情、善于合作、富于理想、友好、善良、慷慨、耐心。"
      })
      return "企业型"
    } else if (this.data.changguixing >= this.data.xianshixing && this.data.changguixing >= this.data.yanjiuxing && this.data.changguixing >= this.data.yishuxing && this.data.changguixing >= this.data.shehuixing && this.data.changguixing >= this.data.qiyexing) {
      this.setData({
        one: "喜欢传统性的工作，如：记账、秘书、办事员，以及测算办公室人员、接待员、文件档案管理员、秘书、打字员、会计、出纳员等工作。这种人有很好的数字和计算能力，喜欢室内工作，乐于整理、安排事务。他们往往喜欢同文字、数字打交道的工作，比较顺从、务实、细心、节俭、做事利索、很有条理性、有耐性。"
      })
      return "常规型"
    } else {
      this.setData({
        one: "能胜任各种各样的工作，如设计师、制图员、教师、办事员、医师、摄影师等。这类人通常会慢慢养成开朗活泼的性格，以及严谨细致的习惯。这种人具有比一般人更强的实践能力，他们喜欢做自己喜欢做的工作，并且能很好地完成它。他们乐观开朗、严谨细致、勇敢、谦逊、敏感、务实、朴素。"
      })
      return "均衡型"
    }
  },
})