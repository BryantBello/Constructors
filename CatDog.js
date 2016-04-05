function Animal(name, isSleepy, whatNoise){
	this.name = name;
	this.sleepy = isSleepy;
	this.noise = whatNoise;
	this.makeNoise = function(){
		if (this.sleepy === false){
			console.log(this.name + " says " + this.noise);
		}
	}
}

var dog = new Animal("benji", false, "woof");
dog.makeNoise();
var cat = new Animal("Mr.Wonderful", false, "meow");
cat.makeNoise();
