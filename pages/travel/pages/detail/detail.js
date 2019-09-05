// pages/travel/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: {},
    statusBarHeight: getApp().globalData.statusBarHeight,
    showHeader: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options
    wx.request({
      url: `http://192.168.1.111:3000/travel/${id}`,
      data: {},
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          itemData: res.data
        })
      }
    })
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
  // 返回按钮
  onBackPress() {
    wx.navigateBack()
  },
  // 滑动事件
  scroll(e) {
    let top = e.detail.scrollTop
    if (top > 100 && !this.data.showHeader) {
      this.setData({
        showHeader: true
      })
    } else if (top < 100 && this.data.showHeader) {
      this.setData({
        showHeader: false
      })
    }
  }
})