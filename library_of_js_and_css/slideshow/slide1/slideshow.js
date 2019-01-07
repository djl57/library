function $(className) {
  return document.getElementsByClassName(className)[0];
}
var slide_wrap = $('slide__wrap'),
    slide_main = $('slide__main'),
    slide_lists = slide_main.children,
    slide_control = $('slide__control');

for(var i = 0; i < slide_lists.length; i++) {
  var span = document.createElement('span');
  span.className = 'slider-ctrl-con';
  span.innerHTML = slide_lists.length - i;
  slide_control.insertBefore(span, slide_control.children[1])
}

var spans = $('slider-ctrl-con');
console.log('spans', spans)
var iNow = 0;
for(var k in spans) {
  spans[k].onclick = function() {
    if(this.className == 'slide__control_prev') {
      animate(img[iNow], {left: scrollWidth});
      --iNow < 0 ? iNow = slide_lists.length - 1 : iNow;
      slide_lists[iNow].style.left = -scrollWidth + 'px';
      animate(imgs[iNow], {left: 0});
      setSquare();
    } else if (this.className == 'slide__control_next') {
      autoplay();
    } else {
      var that = this.innerHTML - 1;
      if (that > iNow) {
        animate(slide_lists[iNow], {left: -scrollWidth});
        slide_lists[that].style.left = scrollWidth + 'px';
      } else if(that < iNow) {
        animate(slide_lists[iNow], {left: scrollWidth});
        slide_lists[that].style.left = scrollWidth + 'px';
      }
      iNow = that;
      animate(slide_lists[iNow], {left: 0});
      setSquare();
    }
  }
}

function setSquare() {
  for (var i = 1; i < spans.length - 1; i++) {
    spans[i].className = 'slider-ctrl-con';
  }
  spans[iNow + 1].className = 'slider-ctrl-con current';
}

var timer = null
timer = setInterval(autoplay, 2000);
function autoplay() {
  animate(slide_lists[iNow], {left: -scrollWidth});
  ++iNow > slide_lists-1 ? iNow = 0 : iNow;
  slide_lists[iNow].style.left = scrollWidth + 'px';
  animate(slide_lists[iNow], {left: 0});
  setSquare();
}

slide_wrap.onmouseover = function() {
  clearInterval(timer);
}
slide_wrap.onmouseut = function () {
  clearInterval(timer);
  timer = setInterval(autoplay, 2000)
}