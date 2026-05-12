// class Car {
//     static description = "class that describes a car";

//     static logInfo(carObj) {
//         console.log("Car.loginfo -> carObj", carObj);
//     }

//     constructor({ brand, model, price } = {}) {
//         this._brand = brand;
//         this._price = price;
//         this._model = model;
//     }


//     get price() {
//         return this._price;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//      get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model= newModel;
//     }
// }

// const carInstance = new Car({
//     brand: "audi",
//     model: "q3",
//     price:35000,
// })

// console.log(carInstance.model)
// carInstance.model = "q4";
// console.log(carInstance._model)

// console.log(carInstance)

// console.log(carInstance._brand)

class Hero {

    static test1 = "test1";

    constructor({name="hero", xp = 0} ={}) {
        this.name = name;
        this.xp = xp;
      
    }


    gainXp(amount) {
        console.log(`${this.name} gains ${amount} of xp`);
    }
}

class Warrior extends Hero{

    constructor({weapon, ...restProps} = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks usings ${this.weapon}`)
    }
}

class Berserk extends Warrior{
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);
        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: "ajax",
    xp: 500,
    weapon: "axe",
    warcry:"waaaaaah"
})

// console.log(ajax)

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(44);

class Mage extends Hero{

    constructor({ spells, ...restProps } = {}) {
        super(restProps);
        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} is casting`)
    }
}

const mango = new Warrior({
    name: "mango",
    xp: 1000,
    weapon:"alebarda"
})

// console.log(mango)
// mango.attack()
// mango.gainXp(1000)

const poly = new Mage({
    name: "poly",
    xp: 500,
    spells:["fareball"]
})

// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     "mango.__proto__ === Warrior.prototype",
//     mango.__proto__ === Warrior.prototype
// )

// console.log(Object.getPrototypeOf(mango) === Warrior.prototype)

console.log(
    Warrior.prototype.__proto__ === Hero.prototype
)

console.log(Hero.prototype.__proto__ === Object.prototype)

console.log(Object.prototype)