function Products(){
this.products = [];
}

Products.prototype.addProduct = function(product){
  if(this.products.length < 1){
      return this.products.push(product)
  }
  else{
    this.products.forEach(prod =>{
      if(prod["id"] !== product["id"]){
     return  this.products.push(product);
      }
      return   prod["qty"] += product["qty"];

    })
  }
}

Products.prototype.getAllProducts = function(){
  return this.products;
}

const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99
  }
];


/* 
We filled up the rest of the products array to speed up the process.
Now that our shelves are full, let's build our shopping cart as a simple JavaScript object.
As you may have noticed, a JavaScript object is enclosed by curly braces and has key-value pairs.
```
*/


