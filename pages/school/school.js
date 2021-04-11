// school.js
const baseroot = 'https://dominikcloud.ltd'
Page({
  data: {
    schooltype:['热门院校', '双一流', '艺术', '211', '985', '本科', '专科'],
    icons: [
      {
      label:'全部院校',
      imgPath:baseroot+'/images/university.png'
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
})
