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
          var items = $clipboard.link
          $app.tips(items)
          items = "www.google.com"
          $app.openURL(items)
        }
      }
    }
  ]
})