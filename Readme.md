# Differences Between Interfaces and Types in TypeScript

## What is an Interface?

An interface in TypeScript is a structure (like a schema) for an object. It tells TypeScript what kind of properties (things inside an object) and their types should be in that object.


```typescript
// syntax
// keyword interfaceName {
//     property : type;
// }
```
For example, I have a "car" object, we can use an interface:
```
interface Car {     
  name: string;
  year: number;
}
```

## What is a Type?
In TypeScript, type is similar to an interface. But we can use type for more things.
We can use types for a variable structure, for an object structure, etc.
One more thing is we can use it with union and intersection.
```typescript
// syntax
// keyword name = type;     // use with variables
// keyword name = {         // use with objects
//     property : type;
// }
```
For example, my name is Asraful and i have a cat
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


