let userMap = new Map();

function addUser(name, age, email) {
    const userInfo = { age, email };
    userMap.set(name, userInfo);
}
addUser('Anas', 19, 'anas@example.com')
addUser('Tasleem', 19, 'tasleem@example.com')
addUser('Zoya', 19, 'Zoya@example.com')
console.log(userMap)

function updateUser(name, age, email) {
    if (userMap.has(name)) {
        const userInfo = userMap.get(name);
        const updatedUserInfo = { age, email };
        userMap.set(name, updatedUserInfo);
    }
}
updateUser('Tasleem', 21, 'shoib@gmail.com');
console.log(userMap);

function deleteUser(name) {
    userMap.delete(name);
}
deleteUser('Anas');
console.log(userMap);