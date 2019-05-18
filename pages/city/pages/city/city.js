// pages/city/screens/city.js

/**
 * 获取位置信息
 */
const getLocation = (that) => {
  wx.getSetting({
    success: (res) => {
      console.log(JSON.stringify(res))
      // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
      // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
      // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
      if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
        wx.showModal({
          title: '请求授权当前位置',
          content: '需要获取您的地理位置，请确认授权',
          success: function(res) {
            if (res.cancel) {
              wx.showToast({
                title: '拒绝授权',
                icon: 'none',
                duration: 1000
              })
            } else if (res.confirm) {
              wx.openSetting({
                success: function(dataAu) {
                  if (dataAu.authSetting["scope.userLocation"] == true) {
                    wx.showToast({
                      title: '授权成功',
                      icon: 'success',
                      duration: 1000
                    })
                    //再次授权，调用wx.getLocation的API

                  } else {
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                  }
                }
              })
            }
          }
        })
      } else if (res.authSetting['scope.userLocation'] == undefined) {
        // 获取中心坐标
        wx.getLocation({
          success: function(res) {
            that.setData({
              location: {
                longitude: res.longitude,
                latitude: res.latitude
              }
            })
            console.log(res.longitude)
            console.log(res.latitude)
          }
        })
        //调用wx.getLocation的API
      } else {
        // 获取中心坐标
        wx.getLocation({
          success: function(res) {
            that.setData({
              location: {
                longitude: res.longitude,
                latitude: res.latitude
              }
            })
            console.log(res.longitude)
            console.log(res.latitude)
          }
        })
      }
    }
  })
}

const IMG_WIDTH = 300
const IMG_HEIGHT = 420

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '青州古城景区',
    location: {
      longitude: 118.47966,
      latitude: 36.68456
    },
    markers: [{
      iconPath: '/assets/icons/logo.png',
      id: 0,
      latitude: 36.68456,
      longitude: 118.47966,
      width: 30,
      height: 30,
      callout: {
        content: ' 八喜旅游网 ',
        bgColor: '#ffffff',
        padding: 5,
        borderRadius: 5,
        display: 'ALWAYS'
      },
      // label: {
      //   content: ' 八喜旅游网 ',
      //   bgColor: '#ffffff',
      //   padding: 5,
      //   borderRadius: 5
      // }
    }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.64456,
        longitude: 118.77966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.68496,
        longitude: 118.45966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.18456,
        longitude: 118.43966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.38456,
        longitude: 118.41966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.38456,
        longitude: 118.43966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.18456,
        longitude: 118.45966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.68156,
        longitude: 118.41966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }, {
        iconPath: '/assets/icons/logo.png',
        id: 0,
        latitude: 36.62456,
        longitude: 118.27966,
        width: 30,
        height: 30,
        callout: {
          content: ' 八喜旅游网 ',
          bgColor: '#ffffff',
          padding: 5,
          borderRadius: 5,
          display: 'ALWAYS'
        },
        // label: {
        //   content: ' 八喜旅游网 ',
        //   bgColor: '#ffffff',
        //   padding: 5,
        //   borderRadius: 5
        // }
      }],
    scale: 18
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    getLocation(this)
    this.mapCtx = wx.createMapContext('city')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 地图缩放变化
   */
  bindregionchange: function(e) {},

  /**
   * 地图marker点击
   */
  markertap: function (e) {
    var that = this;
    that.setData({
      scale: 18,
      location: {
        longitude: that.data.markers[0].longitude,
        latitude: that.data.markers[0].latitude
      }
    })
  },

  /**
   * 点击气泡
   */

  callouttap: function (e) {
    wx.navigateTo(
      {
        url: '/pages/city/pages/detail/city_detail?path=http://www.baxily.cn/&title=八喜旅游网'
      }
    )
  }
})