const isIE = (/trident/gi).test(window.navigator.userAgent.toLowerCase()) || (/msie/gi).test(window.navigator.userAgent.toLowerCase());
if (isIE) document.location.replace('/oldbrowser/index.html')

// ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ
//  LiveTex
// ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ
WebFont.load({
  google: {
    families: ['Inter:100,200,300,400,500,600,700,800,900&display=swap']
  }
})
