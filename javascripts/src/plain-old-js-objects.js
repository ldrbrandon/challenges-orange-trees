/* Write your code for the plain-old-js-objects-spec here */

function createTree(){
    var tree = {};
    FRUIT_BEARING_AGE = 5;
    MAX_AGE = 100;
    tree.orangeCount=0;
    tree.height=0;
    tree.age=0;
    tree.isAlive=true;
    
    tree.grow = function(){
      this.age += 1;
      this.height +=10;
      if (tree.age >= FRUIT_BEARING_AGE){
        this.orangeCount += Math.floor((Math.random()*10));
      }
      if (tree.age >= MAX_AGE) {
        tree.isAlive = false;
      } 
    };

    tree.dropOrange = function(){
      tree.orangeCount -= 1;
      return tree.orangeCount;
    };

    return tree;
}

function createOrange(){
  var orange = {};
  orange.diameter = Math.floor((Math.random()*10));
  return orange;
}

// def createTree()
//    tree = Tree.new(age=0,type="orange")

// end
