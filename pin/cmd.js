$ui.render({
  props: {
    title: "CMD"
  },
  views: [
    {
      type: "button",
      props: {
        title: "open in Safari"
      },
      layout: function (make, view) {
        make.center.equalTo(view.super)
      },
      events: {
        tapped: function () {
          $app.tips("在 App Store 内通过分享面板使用")
          // var items = $clipboard.link
          var items = 'www.google.com'
          $app.openURL(items)
        }
      }
    }
  ]
})