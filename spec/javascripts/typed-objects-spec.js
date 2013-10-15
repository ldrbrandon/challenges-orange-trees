describe ("Tree constructor", function(){
  var new_tree;

  beforeEach(function(){
    new_tree = new Tree();
  });

  it("should return a tree object", function(){
    expect(new_tree).toBeDefined();
  });

  it("should return tree with age 0 when created", function(){
    expect(new_tree.age).toEqual(0);
  });

  it ("should have height 0 when created", function(){
    expect(new_tree.height).toEqual(0);
  });

  it ("should have 0 oranges if age < FRUIT_BEARING_AGE", function(){
    expect(new_tree.orangeCount).toEqual(0);
  });

  describe("grow", function(){

    it("should increase the age of the tree by 1 year", function(){
      new_tree.grow();
      expect(new_tree.age).toEqual(1);
    });

    it("should increase the height of the tree by 10 inches", function(){
      new_tree.grow();
      expect(new_tree.height).toEqual(10);
    });

    it ("should add a random number of oranges if age > FRUIT_BEARING_AGE", function(){
      while(new_tree.age < FRUIT_BEARING_AGE){
        new_tree.grow();
      }
      new_tree.grow();
      expect(new_tree.orangeCount).toBeGreaterThan(0);
    });

  });

  describe ("die",function(){
  
      it("should die when age > MAX_AGE",function(){
        while(new_tree.age < MAX_AGE){
          new_tree.grow();
        }
        new_tree.grow();
        expect(new_tree.isAlive).toBeFalsy();
      });
  });

   describe("dropOrange", function(){
    it("should return the orange that is removed from oranges", function(){
      while(new_tree.age< FRUIT_BEARING_AGE){
        new_tree.grow();
      }
      new_tree.grow();
      expect(new_tree.dropOrange()).toBeDefined();
    });
  });
});



describe ("Orange constructor", function(){
  var new_orange;

  beforeEach(function(){
    new_orange = new Orange();
  });

  it("should return a orange object", function(){
    expect(new_orange).toBeDefined();
  });

  it ("should return an orange with a random diameter > 0", function(){
    expect(new_orange.diameter).toBeGreaterThan(0);
  });
});







  
