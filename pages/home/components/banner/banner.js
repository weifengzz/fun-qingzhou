// pages/home/components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImgTap: (e) => {
      const imgData = e.currentTarget.dataset.imgdata
      wx.navigateTo({
        url: '../../pages/banner_detail/banner_detail?data=' + JSON.stringify(imgData),
      })
    }
  }
})
