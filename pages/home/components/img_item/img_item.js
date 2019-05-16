// pages/home/components/img_item/img_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {}
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
    onTap: (e) => {
      const data = e.currentTarget.dataset.data
      wx.navigateTo({
        url: '../../pages/detail/detail?data=' + JSON.stringify(data),
      })
    }
  }
})
