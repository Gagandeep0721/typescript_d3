import { v4 as uuidv4 } from "uuid"
let myUuid = uuidv4()
console.log(myUuid);


export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  age: number;
  cart: Item[];
}

export function createUser(name: string, age: number): User {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
}

export function createItem(name: string, price: number, description: string): Item {
  return {
    id: uuidv4(),
    name,
    price,
    description,
  };
}

export function addToCart(
    item: Item, 
    user: User){
  user.cart.push(item);
}

export function removeFromCart( 
    user: User,
    item: Item){
    user.cart = user.cart.filter((cartItem) => cartItem.id != item.id);
}

export function removeQuantityFromCart
(item: Item, 
user: User, 
quantity: number) {
    const remaining = user.cart.filter((cartItem) => cartItem.id = item.id);

    if (remaining.length > quantity) {
      remaining.splice(0, quantity);
    } else {
      user.cart = user.cart.filter((cartItem) => cartItem.id != item.id);
    }
  }   
     

export function cartTotal(
user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(
    user: User){
    user.cart.forEach((item) => console.log(`${item.name} - $${item.price}`));
 

}