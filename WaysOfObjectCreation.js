var peopleFactory = function (firstName, lastName) {
	var temp = {}
	temp.firstName = firstName;
	temp.lastName = lastName;
	temp.print = function () {
		console.log(firstName + " " + lastName)
	}
	return temp;
}

var person1 = peopleFactory("Chris", "Evans");
person1.print();

// Constructor method

var peopleConstructor = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.print = function () {
		console.log(firstName + " " + lastName)
	}
}

var person2 = new peopleConstructor("Adam", "Gilchrist");
person2.print();

// Using above method firstName and lastName is created for all the objects created there is // no shared space using prototype we can overcome this

var peopleProto = function () {};
peopleProto.prototype.firstName = "no first name";
peopleProto.prototype.lastName = " no last name";
peopleProto.prototype.print = function () {
	console.log(this.firstName + " " + this.lastName);
}

var person3 = new peopleProto();
person3.firstName = "Sachin";
console.dir(person3);
person3.print();
