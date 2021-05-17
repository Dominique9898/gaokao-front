// pages/major/singlemajor.js
Page({

  data: {
    id: '',
    name: '',
    desc: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      name: options.name,
      desc: options.desc === null ? '-' : options.desc
    })
  },
})