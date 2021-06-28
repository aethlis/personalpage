var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

window.onload = function() {
  prevButton.addEventListener("click", prevButtonClick);
  nextButton.addEventListener("click", nextButtonClick);

  function prevButtonClick() {
    document.getElementById(prevButton);
    console.log("Mouse click(" + this.id + ")");
    if (!TweenMax.isTweening(".box")) {
      TweenMax.to(".box", 0.25, {
        ease: Linear.easeNone,
        x: "-=100",
        modifiers: {
          x: function(x) {
             return wrap(x, -100, 900)
          }
        }
      });
    }
  }

  function nextButtonClick() {
    console.log("Mouse click(" + this.id + ")");
    if (!TweenMax.isTweening(".box")) {
      TweenMax.to(".box", 0.25, {
        ease: Linear.easeNone,
        x: "+=100",
        modifiers: {
          x: function(x) {
            return wrap(x, -100, 900)
          }
        }
      });
    }
  }

  //initially colorize each box and position in a row
  TweenMax.set(".box", {
    backgroundColor: function(i) {
      return colors[i % colors.length];
    },
    x: function(i) {
      return i * 100;
    }
  });
};


function wrap(value, min, max) {
  var v = value - min;
  var r = max - min;

  return ((r + v % r) % r) + min;
}

console.log(wrap(800, 0, 700));