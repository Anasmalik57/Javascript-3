const MyObj = {
    Name: 'Anas',
    Age: 19,
    Occupation: "Softeare Enngineer"
}

function numofproperties(MyObj){
    return console.log(Object.keys(MyObj).length) 
}
numofproperties(MyObj)