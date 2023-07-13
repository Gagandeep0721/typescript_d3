import { createUser, createItem, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './items';

const user = createUser('Ken wilson', 31);
console.log('User:', user);

const item1 = createItem('Item 1', 15, 'Red hat');
const item2 = createItem('Item 2', 10, 'Blue hat');
const item3 = createItem('Item 3', 25, 'white hat');
const item4 = createItem('Item 4', 10, 'Black hat');
const item5 = createItem('Item 5', 25, 'yellow hat');

addToCart(item1, user);
addToCart(item2, user);
addToCart(item3, user);
addToCart(item4, user);
addToCart(item5, user);

printCart(user);
console.log('Cart Total:', cartTotal(user));

removeFromCart(user,item4, );
printCart(user);
console.log('Cart Total:', cartTotal(user));

removeQuantityFromCart(item4,user, 2);
printCart(user);
console.log('Cart Total:', cartTotal(user));