const holandScore = {}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const getLocalUrl = (url) => {
  const baseroot = 'https://dominikcloud.ltd'
  return baseroot + url
}

const calholandScore = (type, index) => {
  if (type == '错' && index !== 60) return
  if (type == '错' && index === 60) {
    wx.navigateTo({
      url: '/pages/measurement/result?xianshixing='+holandScore.xianshixing+'&yanjiuxing='+holandScore.yanjiuxing+'&yishuxing='+holandScore.yishuxing+'&shehuixing='+holandScore.shehuixing+'&qiyexing='+holandScore.qiyexing+'&changguixing='+holandScore.changguixing,
    })
  }
  if (index == 0 || index % 6 == 0) {
    holandScore['xianshixing'] = !holandScore['xianshixing'] ? 1 : holandScore['xianshixing'] + 1
    console.log('holandScore.xianshixing', holandScore['xianshixing'])
    if (index === 60) {
      wx.navigateTo({
        url: '/pages/measurement/result?xianshixing='+holandScore.xianshixing+'&yanjiuxing='+holandScore.yanjiuxing+'&yishuxing='+holandScore.yishuxing+'&shehuixing='+holandScore.shehuixing+'&qiyexing='+holandScore.qiyexing+'&changguixing='+holandScore.changguixing,
      })
    }
  }
  if (index == 1 || (index - 1) % 6 == 0) {
    holandScore['yanjiuxing'] = !holandScore['yanjiuxing'] ? 1 : holandScore['yanjiuxing'] + 1
    console.log('holandScore.yanjiuxing', holandScore['yanjiuxing'])
  }
  if (index == 2  || (index - 2) % 6 == 0) {
    holandScore['yishuxing'] = !holandScore['yishuxing'] ? 1 : holandScore['yishuxing'] + 1
    console.log('holandScore.yishuxing', holandScore['yishuxing'])
  }
  if (index == 3 || (index - 3) % 6 == 0) {
    holandScore['shehuixing'] = !holandScore['shehuixing'] ? 1 : holandScore['shehuixing'] + 1
    console.log('holandScore.shehuixing', holandScore['shehuixing'])
  }
  if (index == 4 || (index - 4) % 6 == 0) {
    holandScore['qiyexing'] = !holandScore['qiyexing'] ? 1 : holandScore['qiyexing'] + 1
    console.log('holandScore.qiyexing', holandScore['qiyexing'])
  }
  if (index == 5 || (index - 5) % 6 == 0) {
    holandScore['changguixing'] = !holandScore['changguixing'] ? 1 : holandScore['changguixing'] + 1
    console.log('holandScore.changguixing', holandScore['changguixing'])
  }
}

module.exports = {
  formatTime,
  getLocalUrl,
  calholandScore
}