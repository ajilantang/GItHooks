require("../person")
require("chai").should();

describe("Person", function(){
    it("greets people", function(){
        var p1 = new Person("Ajis"),
            p2 = new Person("Andy");
        p1.greet(p2).should.equal("Hello, Anasdasdy!")
    })
})