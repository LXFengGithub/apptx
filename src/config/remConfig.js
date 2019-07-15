export default function() {
  // var devicePixelRatio = 1;
  // var scale = 1 / devicePixelRatio;
  // document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  // 7.5根据设计稿的横向分辨率/100得来
  // alert(document.documentElement.clientWidth)
  var deviceWidth = document.documentElement.clientWidth;
  // var deviceWidth = window.screen.availWidth
  // alert(navigator.userAgent)
  // alert(deviceWidth)
  // console.log(navigator.userAgent)
  if(deviceWidth > 750) {
      // deviceWidth = 750;
      deviceWidth = 7.5 * 50;
  }

  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

  // 禁止双击放大
  document.documentElement.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
          event.preventDefault();
      }
  }, false);
  var lastTouchEnd = 0;
  document.documentElement.addEventListener('touchend', function (event) {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);
}


// 以上实现转换适用于：
// （1）组件中编写的<style></style>下的css
// （2）从index.js或者main.js中import ‘../../static/css/reset.css’引入css
// （3）在组件的<script type=”text/ecmascript-6″> import ‘../../static/css/reset.css'</script>中引入css
// 另外的情况不适用：
// （1）组件<style></style>中@import “../../static/css/reset.css (可考虑上面（2）、（3）的形式引入)
// （2）外部样式:<link rel=”stylesheet” href=”static/css/reset.css”>
// （3）元素内部样式：style=”height: 417px; width: 550px;”