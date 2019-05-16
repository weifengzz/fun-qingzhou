// pages/home/screens/home.js

let video_id = '-1';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    datas: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    const { banners } = require('./banner.js')
    const { datas } = require('./data.js')
    that.setData({
      banners,
      datas
    })
    that.query = wx.createSelectorQuery()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  play: function(e) {
    var that = this
    if (video_id !== '-1' && video_id !== e.currentTarget.dataset.itemdata.id) {
      var video = that.selectComponent('#video_' + video_id)
      video.paused()
    }
    video_id = e.currentTarget.dataset.itemdata.id
  },
  scroll: function(e) {
    var that = this
    if (video_id !== '-1') {
      wx.getSystemInfo({
        success: function (res) {
          // 获取可使用窗口高度
          let clientHeight = res.windowHeight;
          that.query.select('#video_' + video_id).boundingClientRect()
          that.query.selectViewport().scrollOffset()
          that.query.exec(function (res) {
            if (res[0].bottom < 0 || res[0].bottom > (clientHeight + res[0].height)) {
              var video = that.selectComponent('#video_' + video_id)
              video && video.paused()
              video_id = '-1'
            }
          })
        }
      })
    }
  }
})