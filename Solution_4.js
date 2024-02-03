let myobj = {
    Name: "Goyal",
    Age: 25,
    Occupation: "Compounder"
}
function hasProperty(obj, propName)
{
    return propName in obj;
}
let result = hasProperty(myobj, "Name");
console.log(result)