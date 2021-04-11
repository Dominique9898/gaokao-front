// pages/measurement/measurement.js
const baseroot = 'https://dominikcloud.ltd'
Page({
  data: {
    measurements:[
      {
        title: '兴趣测试',
        subtitle: '霍兰德兴趣测试',
        logoPath: baseroot+'/images/interests.png'
      },
      {
        title: '职业倾向测试题',
        subtitle: '规划职业方向',
        logoPath: baseroot+'/images/occupation.png'
      },
      {
        title: '性格测试题',
        subtitle: 'MBTI性格测试',
        logoPath: baseroot+'/images/personality.png'
      },
      {
        title: '学科强弱测试题',
        subtitle: '客观评价学科优势',
        logoPath: baseroot+'/images/subjects.png'
      }
    ]
  },
})