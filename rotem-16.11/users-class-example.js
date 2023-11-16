// Declaring a class
class User {
	//Prototype Properties
	gggg
	lastName
	email
	
	//private property
	#age
	
	constructor({firstName, lastName, age, email})
	{
		this.gggg     = firstName;
		this.lastName = lastName;
		this.age       = age;
		this.email     = email;
	}
	
	
	get fullName()
	{
		return this.gggg + ' ' + this.lastName
	}
	
	set fullName(fullName)
	{
		// this.firstName = fullName.split(" ")[0];
		// this.lastName = fullName.split(" ")[1];
		[this.gggg, this.lastName] = fullName.split(' ')
	}
	
	set age(age)
	{
		if (age < 0 || age > 120)
		{
			throw new Error('Bad Age Provided!')
		}
		// Private property = can only read/write from within the class.
		this.#age = age
	}
	
	//Prototype Methods
	createPost()
	{
		console.log(this.gggg + " is creating a post...");
	}
	
	getAge()
	{
		return this.age
	}
	
	deletePost()
	{
		console.log("Deleting a post...");
	}
}

// Creating an instance
const john = new User({
	                      firstName: "John",
	                      lastName : "Doe",
	                      age      : 42,
	                      email    : "John@john.com"
                      });

const james = new User({
	                       firstName: "James",
	                       lastName : "Lebron",
	                       age      : 12,
	                       email    : "James@john.com"
                       });

// returns a bound (binded) function (but does not invoke it)
const boundFn = john.createPost.bind(james)
boundFn()

// creates a BOUND function and immediately invokes it. You can specify the params with comma (,)
john.createPost.call(james, 1, 2, 3)

// // creates a BOUND function and immediately invokes it. You can specify the params in an array
john.createPost.apply(james, [1, 2, 3])


console.log(john.fullName);
john.fullName = "Jane Doe"

// the instance has all the class' prototype's methods and properties.
john.age;
john.gggg
john.age


// Cannot read/write private properties
john.#age


john.createPost()
john.deletePost()


let rect = new Rectangle("red", "4px dahsed blue", "10px");
rect.render()
