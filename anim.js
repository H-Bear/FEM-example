// code taken from one of the examples on popmotion.io
const popmotion = require("popmotion");
const { styler, spring, listen, pointer, value } = popmotion;

const ball = document.querySelector(".box");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
  from: ballXY.get(),
  velocity: ballXY.getVelocity(),
  to: { x: 0, y: 0 },
  stiffness: 200
  })
    .start(ballXY);
});