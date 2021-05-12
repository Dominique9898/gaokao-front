// pages/school/allschool.js
import { areaList } from '../../utils/area-data/lib/index';
import $api from '../../utils/api'
import basetool from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList,
    location: '地区',
    total: 0,
    pc: {
      name: "批次", 
      options: [
      { text: '全部', value: 0 },
      { text: '本科', value: 1 },
      { text: '专科', value: 2 },
      ],
      value:0
    },
   tag: {
     name: "标签",
     options: [
      { text: '全部', value: 0},
      { text: '985', value: 1},
      { text: '211', value: 2},
      { text: '双一流', value: 3},
     ],
     value: 0
   },
   province: 'all',
   city: 'all',
   schoolList: [],
   listQuery: {
    page: 1,
    limit: 20,
  },
  },
  onLoad() {
    setTimeout(() => {
      this.get20University(this.data.listQuery)
    }, 1000)
  },
  get20University(listQuery) {
    $api.get20University(listQuery)
    .then(res => {
      const list = res.data.list
      console.log(res)
      list.forEach(item => {
       if(item.icon) item.icon = basetool.getLocalUrl(item.icon)
       else item.icon = basetool.getLocalUrl('/images/5t5.png')
      })
      this.setData({
        schoolList: this.data.schoolList.concat(res.data.list),
        total: res.data.total
      })
      console.log(this.data.schoolList)
    })
    .catch(err => {
      console.log(err)
    })
  },
  onReachBottom(){
    if (this.checkIsSelected()) return
    console.log("上拉触底事件")
    let that = this
    if (this.data.schoolList.length !== this.data.schoolList) {
      let index = that.data.listQuery.page + 1
      this.setData({
        listQuery: {
          page: index,
          limit: 20
        }
      })
      console.log(that.data.listQuery)
      //加载更多，这里做下延时加载
      setTimeout(() => {
        that.get20University(that.data.listQuery)
      }, 500)
    }
  },
  onLocationTap(e) {
    this.selectComponent('#location').toggle(false);
    console.log(e)
    const province = e.detail.values[0].name
    const location = province === '全部' ? '地区' : province
    this.setData({
      location
    })
    let params = this.getParams(e)
    this.getUniversityBySelect(params)
  },
  onPcTap(e) {
    console.log(e)
    const pc = this.data.pc
    pc.value = e.detail
    pc.name = e.detail == 0? '批次' : pc.options[e.detail].text
    this.setData({
      pc
    })
    let params = this.getParams(e)
    this.getUniversityBySelect(params)
  },
  onTagTap(e) {
    console.log(e)
    const tag = this.data.tag
    tag.value = e.detail
    tag.name = e.detail == 0? '标签' : tag.options[e.detail].text
    this.setData({
      tag
    })
    let params = this.getParams(e)
    this.getUniversityBySelect(params)
  },
  onColTap(e) {
    console.log(e)
    let id = e.current
  },
  checkIsSelected() {
    if (this.data.location === '地区' && this.data.pc.value === 0 && this.data.tag.value === 0) {
      return false
    } else {
      return true
    }
  },
  getUniversityBySelect(params) {
    $api.getUniversityBySelect(params)
    .then(res => {
      const list = res.data
      console.log(res)
      list.forEach(item => {
       item.icon = basetool.getLocalUrl(item.icon)
      })
      console.log(list)
      this.setData({
        schoolList: list
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  getParams(e) {
    const province = this.data.location
    const pc = this.data.pc.options[this.data.pc.value].text
    const tag = this.data.tag.options[this.data.tag.value].text
    let params = {
      'province': province,
      'pc': pc,
      'tag': tag
    }
    console.log(params)
    return params
  }
})