function Sword(color) {
  this.swipes = [];
  this.swipeSizes = [];
  this.color = color;
}

Sword.prototype.update = function() {
  if (this.swipes.length > 0) {
    this.swipes.splice(0, 1);
    console.log("Updated");
  }
};

Sword.prototype.draw = function() {
  //console.log(this.swipes.count);
  for (var i = 0; i < this.swipes.count; i++) {
    var s = map(i, 0, this.swipes.length, 2, 20);
    ellipse(this.swipes[i].x, this.swipes[i].y, s);

    noStroke();
    fill(this.color);
    console.log("Im been drawn");
  }
};

Sword.prototype.swipe = function(x, y) {
  this.swipes.push(createVector(x, y));
};
