var Tree = function() {
  FRUIT_BEARING_AGE = 5;
  MAX_AGE = 200;
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.grow = function () {
    this.age += 1;
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor((Math.random() * 100));
    }
  };

  this.dropOrange = function() {
    return {};
  };

};


var Orange = function(){
  this.diameter = Math.floor(Math.random()*10);

};
