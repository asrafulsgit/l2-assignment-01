# Differences Between Interfaces and Types in TypeScript

## What is an Interface?

An interface in TypeScript is a structure (like a schema) for an object. It tells TypeScript what kind of properties (things inside an object) and their types should be in that object.


```typescript
// syntax
// keyword interfaceName {
//     property : type;
// }
```
For example, if I have a "car" object, I can define it using an interface:
```
interface Car {     
  name: string;
  year: number;
}
```

## What is a Type?
In TypeScript, a type is similar to an interface, but it can be used for more things.
We can use types for a variable structure, for an object structure, etc.
One more thing is we can use it with union and intersection.
```typescript
// syntax
// keyword name = type;     // use with variables
// keyword name = {         // use with objects
//     property : type;
// }
```
For example, my name is Asraful and I have a cat.
```
type name = string;

type Cat = {
  name: string;
  color: string;
  age: number;
}; 
```

**Interfaces** and **Types**
In TypeScript, two important things are interfaces and types. These help us define what kind of data we are working with, like objects and variables. But they are a little different from each other.

## Differences ##
1. Interface is used with objects, and type is used with objects, arrays, variables, and more.

2. Interface can extend from another interface, but type does not extend from another type.

3. You can use multiple interfaces with the same name and merge them — type cannot do this.



# Provide an example of using union and intersection types in TypeScript.

**Union Type**
Union is a combination of multiple types. it works like an (or) Operation.

example
```typescript

type ID = string | number;

const id : ID = '1s4f1fd0';
const userId : ID = 10251;

```
explanation :  it can receive both type of value 


**Intersection Type**

intersection is a combines multiple types into one. it works like (and) operation


exapmle 
```typescript
type Person = {name : string }
type Employee = { id : number}

type EmpInfo = Person & Employee;


const empInfo : EmpInfo ={
  name : 'karim',
  id : 1532
}
```
explanation : it combine two type of value in one type



