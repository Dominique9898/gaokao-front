Component({
  data: {
    selected: 0,
    color: "#515151",
    selectedColor: "#1296db",
    list: [{
      "pagePath": "/pages/index/index",
      "iconPath": "../images/icons/home.png",
      "selectedIconPath": "../images/icons/home_selected.png",
      "text": "首页"
    },
    {
      "pagePath": "/pages/school/school",
      "iconPath": "../images/icons/school.png",
      "selectedIconPath": "../images/icons/school_selected.png",
      "text": "院校"
    },
    {
      "pagePath": "/pages/test/test",
      "iconPath": "../images/icons/test.png",
      "selectedIconPath": "../images/icons/test_selected.png",
      "text": "测评"
    }],
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})