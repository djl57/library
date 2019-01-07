function $(className) {
  return document.getElementsByClassName(className)[0];
}
var wrap = $('slide_wrap'),
    main = $('slide_main'),
    spans = $('slide_spans').getElementsByTagName('span'),
    prev = $('prev'),
    next = $('next'),
    index = 1,
    timer;

function play () {
  timer = setInterval(() => {
    next.onclick();
  }, 3000)
}

next.onclick = function () {
  index += 1;
  if (index > 3) {
    index = 1;
  }
  spansShow();
  animate(-600);
}

prev.onclick = function () {
  index -= 1;
  if (index > 3) {
    index = 1;
  }
  animate(600);
  spansShow();
}

function animate (offset) {
  var newLeft = parseInt(main.style.left) + offset;
  console.log(newLeft)
  main.style.left = newLeft + 'px';
  if (newLeft > -600) {
    main.style.left = -1800 + 'px';
  }
  if (newLeft < -1800){
    main.style.left = -600 + 'px';
  }
}

function spansShow () {
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].className == 'on slide_span') {
      spans[i].className = 'slide_span';
    }
  }
  spans[index - 1].className = 'on slide_span';
}

function stop () {
  clearInterval(timer);
}

for (var i = 0; i < spans.length; i++) {
  (function (i) {
    spans[i].onclick = function () {
      var clickIndex = parseInt(this.getAttribute('index'));
      var offset = 600 * (index - clickIndex);
      animate(offset);
      index = clickIndex;
      spansShow();
    }
  })(i)
}

wrap.onmouseover = stop;
// wrap.onmouseout = play;
// play();



