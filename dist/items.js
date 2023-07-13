"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
}
exports.createItem = createItem;
function addToCart(item, user) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(user, item) {
    user.cart = user.cart.filter((cartItem) => cartItem.id != item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(item, user, quantity) {
    const remaining = user.cart.filter((cartItem) => cartItem.id = item.id);
    if (remaining.length > quantity) {
        remaining.splice(0, quantity);
    }
    else {
        user.cart = user.cart.filter((cartItem) => cartItem.id != item.id);
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    user.cart.forEach((item) => console.log(`${item.name} - $${item.price}`));
}
exports.printCart = printCart;
