//index.js
// 注意注意 js这个数据需要在开发工具中先创建文件，否则会显示改文件没有定义
const mjJdIndexJson = require("../../mockdata/mjdindex.js")


Page({
	data: {
		IsindicatorDots: true,
		Isautoplay: true,
		interval: 5000,
		duration: 1000
	},
	onLoad: function(options) {
		// 小程序中data读取数据是在onLoad函数之后，所以直接赋值也可
		// this.data.mjJdIndexJson = mjJdIndexJson;
		this.setData({
		   mjJdIndexJson:mjJdIndexJson
		});
	},
  Toswiperdetail:function(ops){
    const swiperId = ops.currentTarget.dataset.swiperid
    // console.log(swiperId)
    wx.navigateTo({
      url: '../swiperdetail/swiperdetail?id='+ swiperId
    })
  }, 
  Toadvdetail:function(ops){
    wx.navigateTo({
      url: '../advdetail/advdetail'
    })
  }, 
  Tolistdetail:function(ops){
  	const listTitle = ops.currentTarget.dataset.listname
  	console.log(listTitle)
    // wx.navigateTo({
    //   url: '../advdetail/advdetail'
    // })
  },
  onUnload: function(options) {
  		this.setData({
		   mjJdIndexJson:{}
		});
  }

  
})
