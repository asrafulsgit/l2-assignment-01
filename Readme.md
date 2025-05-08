# Differences Between Interfaces and Types in TypeScript

## What is an Interface?
An interface in TypeScript is  a  structure (like a schema)  for an object. It tells TypeScript what kind of properties (things inside an object) and their types should be in that object.

For example, i have a "car" object, we can use an interface:

```typescript

**syntax**
keyword interfaceName{
    property : type;
}

interface Car {     
  name: string;
  year: number;
}

## What is a Type?
In typeScript type is similar of an interface. but we can use type for more things. we can use types for a variable structure, for a object structure etc.
one more thing is we can use it with union and intersaction

**syntax**
keword name = type;     //use with variables variable
keword name = {         // use with objects
    property : type;
}

For example, my name is Asraful and i have a cat

type name = string;
type Cat ={
    name : string;
    color : string;
    age : number
} 


**interfaces** and **types**. 
In Typescript, Two important things in TypeScript are **interfaces** and **types**. These help us define what kind of data we are working with, like objects and variables. But they are a little different from each other. 

**Differences**
1.interface use with objects and type is use with objects,arrays,variables and more 
2. interface can extends from other interface and type do not extends from other type 
3. use multiple interfaces with the same name you can merge it and  type cannot do this 


