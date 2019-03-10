// pages/welcome/welcome.js
Page({

  onLoad: function () {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      const url = '/pages/index/index'
      wx.switchTab({
        url,
      })
    },3000)
  },
  
})