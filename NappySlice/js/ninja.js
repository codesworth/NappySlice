var sword;

function setup() {
  createCanvas(600, 400);

  sword = new Sword(color("#FFF0EE"));
}

function draw() {
  background(51);
  if (mouseIsPressed) {
    //console.log(frameCount);
    sword.swipe(mouseX, mouseY);
  }

  //console.log(frameCount);

  if (frameCount % 2 === 0) {
    sword.update();
  }
  sword.draw();
}
