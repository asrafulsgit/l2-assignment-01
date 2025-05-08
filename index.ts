function formatString(input: string, toUpper?: boolean): string{
    if( toUpper  === true || toUpper === undefined){
        return input.toUpperCase()
    }

    return input.toLowerCase()
}
// console.log(formatString("Hello", false))

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filter = items.filter(item => item.rating >= 4 )
    return filter
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

// console.log(filterByRating(books))

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((array, curr) => [...array, ...curr], []);
}
// console.log(concatenateArrays([1, 2,2], [3, 4], [5]))

class Vehicle {
    private make : string;
    private year : number;
    constructor(make : string,year : number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle{
    private model : string;
    constructor(make : string,year : number,model :string){
        super(make,year)
        this.model = model;
    }

    getModel(){
        console.log(`Model : ${this.model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo()
// myCar.getModel()

function processValue(value: string | number): number{
   
    if(typeof value === 'string'){
        return value.length;
    }

    return value * 2;
}
// console.log(processValue(10));

interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null{

    if(products.length === 0) return null;

    return products.reduce((highest,curr)=>{
        return curr.price > highest.price ? curr : highest;
    })

}
const products = [
    { name: "Pen", price: 80 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
// console.log(getMostExpensiveProduct(products));

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    return "Weekday"
  }
// console.log(getDayType(Day.Friday))

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        }
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}

squareAsync(4).then(console.log);        
// squareAsync(-3).catch(console.error);   