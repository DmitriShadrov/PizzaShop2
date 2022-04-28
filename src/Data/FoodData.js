export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'ILS',
    })
}

export const foodItems = [
{
    name: 'Cheese Pizza',
    img: 'img/pizza.jpg',
    section: 'Pizza',
    price: 10,
},
{
    name: 'Pepperoni Pizza',
    img: 'img/pizza2.jpg',
    section: 'Pizza',
    price: 12,
},
{
    name: 'Chicken Pizza',
    img: 'img/chicken-pizza.jpg',
    section: 'Pizza',
    price: 10,
},
{
    name: 'Healthy Pizza',
    img: 'img/healthy-pizza.jpg',
    section: 'Pizza',
    price: 15,
},

{
    name: 'Burger',
    img: 'img/burger.jpg',
    section: 'Sandwich',
    price: 8,
},
{
    name: 'Gyro',
    img: 'img/gyro.jpg',
    section: 'Sandwich',
    price: 11,
},
{
    name: 'Sandwich',
    img: 'img/sandwich.jpg',
    section: 'Sandwich',
    price: 5,
},
{
    name: 'Chicken Fingers',
    img: 'img/chicken-fingers.jpg',
    section: 'Sides',
    price: 7,
},
{
    name: 'Fries',
    img: 'img/fries.jpg',
    section: 'Sides',
    price: 5,
},
{
    name: 'Chicken Salad',
    img: 'img/salad.jpg',
    section: 'Sides',
    price: 10,
},
{
    name: 'Soda',
    img: 'img/drinks.jpg',
    section: 'Drinks',
    price: 10,
    choices: ['Coke','Sprite','Root Beer'],
},
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {});