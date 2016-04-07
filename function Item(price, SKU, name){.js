function Item(price, SKU, name){
	this.price = price;
	this.SKU = SKU;
	this.name = name;
	this.describe = function(){
		return "This item is made by " + this.name + " and cost $ " + this.price;
	}
}

var shoe = new Item(50, "1235", "Nike");
var hat = new Item(40, "2345", "Stetson");
var jacket = new Item(100, "4567", "Under Armour");

var items = [];
items.push(shoe);
items.push(hat);
items.push(jacket);

for (i = 0; i < items.length; i++) {
	console.log(items[i].describe());
}
	// body...

//console.log(shoe.price);
//console.log("This item is made by " + shoe.name + " and cost $" + shoe.price);
//console.log(shoe.describe());