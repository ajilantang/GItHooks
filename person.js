Person = function(name){
    this.name = name
}

Person.prototype.greet = function (person) {
    return "Hello, " + person.name +"!"
}

module.exports = Person