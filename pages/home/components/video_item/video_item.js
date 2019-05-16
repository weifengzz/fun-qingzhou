// pages/home/components/video_item/video_item.js
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
    paused: function () {
      var that = this
      let cvc = wx.createVideoContext('video', that)
      cvc.pause()
    },
    play: function () {
      var that = this
      that.triggerEvent('bindplay')
    }
  }
})
