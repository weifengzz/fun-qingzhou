// pages/travel/screens/travel.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.requestData()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  onItemTap(e) {
    const data = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '../detail/detail?id=' + data.id,
    })
  },
  // 数据请求
  requestData () {
    wx.request({
      url: 'http://192.168.1.111:3000/travel',
      data: {},
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          list: res.data
        })
        wx.stopPullDownRefresh()
      }
    })
  }
})