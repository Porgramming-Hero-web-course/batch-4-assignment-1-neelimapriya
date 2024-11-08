# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

## Why are Type Guards Necessary?

Type guards in TypeScript are necessary because this help us determine the exact type of a variable in a specific part of the code. They’re especially helpful when working with union types or when TypeScript isn’t able to figure out a variable’s type on its own. By using type guards, we can check a variable's type at runtime, allowing us to write safer and more predictable code that behaves as expected.

### Here are various types of type guards and their use cases:

1. `typeof` Type Guard

---

the `typeof` operator is used to narrow down the type of primitive types such as string, number, boolean, and symbol.

```tsx
function isHuman(creature: Human | Dog): creature is Human {
  return typeof (creature as Human).speak === "function";
}
```

2. `instanceof` Type Guard

---

The `instanceof` operator is used to check if an object is an instance of a specific class or subclass. This is typically used with objects and instances of classes.

```tsx
class Car {
  drive() {
    console.log("Driving the car!");
  }
}

class Bike {
  ride() {
    console.log("Riding the bike!");
  }
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

const myCar = new Car();
const myBike = new Bike();

move(myCar);
move(myBike);
```

3. `in` Operator Type Guard

---

The `in` operator in TypeScript is a handy tool to check if a specific property exists in an object. This is especially useful when you’re dealing with multiple types that share some similarities but also have unique properties.

```tsx
interface Car {
  drive(): void;
  make: string;
}

interface Bicycle {
  pedal(): void;
  type: string;
}

function moveVehicle(vehicle: Car | Bicycle) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}
```

4. Array `length` Check (for Arrays)

---

Sometimes, we might need to determine if an array is non-empty or if it has a specific length. A length check can be used as a type guard for arrays.

```tsx
function processData(data: string[] | string) {
  if (data.length > 0) {
    data.forEach((item) => console.log(item));
  } else {
    console.log(data);
  }
}
```

5.  `Literal` Type Guards

---

Literal types can also be narrowed using type guards, typically in combination with conditional checks. This is useful when dealing with specific string or numeric literals.

```tsx
type Status = "success" | "error" | "pending";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("successful.");
  } else if (status === "error") {
    console.log("An error occurred.");
  } else {
    console.log(" pending.");
  }
}
```
