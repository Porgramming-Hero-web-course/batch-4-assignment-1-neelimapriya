// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// 

type Circle ={
    circle:"circle";
    radius:number;
}
type Rectangle={
    rectangle:"rectangle";
    height:number;
    width:number
}

const calculateShapeArea =(Shape: Circle | Rectangle)=>{
 if("circle" in Shape){
    return Math.PI*Shape.radius*Shape.radius
 }
 else if("rectangle" in Shape){
    return Shape.width * Shape.height;
 }
}


 const circleArea = calculateShapeArea({circle:"circle", radius:5})
 const rectangleArea = calculateShapeArea({rectangle:"rectangle", height:4, width:6})

 console.log(circleArea)
 console.log(rectangleArea)

 