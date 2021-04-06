Page({
  data: {
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      console.log('onShow')
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
})