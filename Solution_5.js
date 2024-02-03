function calculation(radius){
    const PI = Math.PI;
    let area = 2 * PI * radius;
    return area;
}
const result = calculation(5);

console.log(result.toFixed(2));