//index.js
//获取应用实例
const app = getApp()

/**
 * 跳转到首页
 */
const navigateHome = () => {
  wx.showToast({
    title: '登录成功',
    icon: 'success',
    duration: 1000
  })
  setTimeout(() => {
    // 跳转到首页界面
    wx.switchTab({
      url: '/pages/home/pages/home/home'
    })
  }, 1000)
}

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      navigateHome()
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 跳转到首页界面
        navigateHome()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          // 跳转到首页界面
          navigateHome()
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // 跳转到首页界面
    navigateHome()
  }
})
