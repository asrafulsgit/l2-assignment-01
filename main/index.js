"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
function filterByRating(items) {
    const filter = items.filter(item => item.rating >= 4);
    return filter;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function concatenateArrays(...arrays) {
    return arrays.reduce((array, curr) => [...array, ...curr], []);
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model : ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((highest, curr) => {
        return curr.price > highest.price ? curr : highest;
    });
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    });
}
