//1 
function parseCount(value){
    const res = Number.parseFloat(value);
    if(Number.isNaN(res)){
        throw new Error ("Невалидное значение");
    }
    return res;
}

function validateCount (value){
   try{
    const res = parseCount(value)
        return res;}
    catch (error){
        return error;
    }
}

//2 

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c; 
        if(!(a + b > c &&
            a + c > b &&
            b + c > a)){
                throw new Error ("Треугольник с такими сторонами не существует");
    }      
    }
    get perimeter(){
        const p = (this.a+this.b+this.c);
        return p;
    }
    get area(){
        const p = (this.a+this.b+this.c)/2;
        const res = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(res.toFixed(3))
    }
}

function getTriangle(a, b,c){
        try{
            return new Triangle(a, b, c);
        }
        catch(error){
            return {
                get area() {
                    return "Ошибка! Треугольник не существует"; 
                },
                get perimeter() {
                    return "Ошибка! Треугольник не существует";
                }
            }
        }
    }