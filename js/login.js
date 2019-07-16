// CAPTCHA
var bot = true;

var captchas = document.getElementsByClassName("jk-slider-wrapper");
var wrapper, slider;

for (var i = 0; i < captchas.length; i++) {
  var wrapper = captchas[i];
  var slider = wrapper.children[0];

  var maxleft = wrapper.offsetWidth - slider.offsetWidth - 2;

  slider.addEventListener("mousedown", function() {
    this.addEventListener("mousemove", onmousemove);

    document.addEventListener("mouseup", function() {
      slider.removeEventListener("mousemove", onmousemove);
    });
  });
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function onmousemove() {
  var w_offset = offset(wrapper);
  var left = event.pageX - w_offset.left - this.offsetWidth / 2;
  if (left <= 0) left = 0;
  else if (left >= maxleft) left = maxleft;

  this.style.left = left + "px";

  if (left == maxleft) {
    wrapper.classList.add("human");
    bot = false;
  } else {
    wrapper.classList.remove("human");
    bot = true;
  }
}