const car = {
    Name: 'Mahindra',
    Model: 'Mahindra XUV500',
    Year: 2020
};

function displayProperties(car){
    for (let prop in car){
        console.log(prop + ":" + car[prop])
    }
}
displayProperties(car)