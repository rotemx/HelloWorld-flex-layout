// DRY - Do Not Repeat Yourself


// Base Class
class Shape {
	color
	border
	size
	container
	div
	
	constructor({color, size, border})
	{
		console.log("Constructing a Shape...");
		this.color  = color;
		this.size   = size;
		this.border = border;
		
		this.container = document.getElementById("container");
		
	}
	
	render()
	{
		this.div                  = document.createElement('div');
		this.div.style.background = this.color;
		this.div.style.border     = this.border;
		this.div.style.width      = this.size;
		this.div.style.height     = this.size;
		this.container.append(this.div);
	}
	
	sayMyName(){
		console.log("I am a shape");
	}
	erase()
	{
	}
	
	makeAlpha()
	{
	}
	
}


// Derived Class
class Rectangle extends Shape {
}

// Derived Class
class Circle extends Shape {

	// When overriding the constructor...
	// 1. recommended use of the same function signature (same params)
	constructor({color, size, border})
	{
		// 2. MUST CALL super() base class constructor
		super({color, size, border})
		
		// 3. Cannot use "this." BEFORE the super() call
		console.log("Constructing a Circle with color..." + this.color);
	}
	
	render()
	{
		// call the base class render() method:
		super.render();
		this.div.style.borderRadius = "50%";
	}
	
	sayMyName() {
		super.sayMyName();
		console.log("I am a Circle!");
	}
	
}

let circle1 = new Circle({
	                        size  : "100px",
	                        border: "2px solid magenta",
	                        color : "cornflowerblue"
                        });

let rect   = new Rectangle({
	                           size  : "100px",
	                           border: "2px solid blue",
	                           color : "coral"
                           });

circle1.render();
rect.render();


class Person {
	fisrtName
	lastName
	age
}

class Employee extends Person{
	partTime
}

let employee = new Employee();
