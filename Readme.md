# JavaScript Essentials README

## Object and its Functions

The `Object` in JavaScript is a fundamental data type that allows you to store key-value pairs. It is a versatile data structure that supports various functions such as:

- **Object Creation:**
  ```javascript
  const myObject = {};
  ```

- **Adding Properties:**
  ```javascript
  myObject.key = 'value';
  ```

- **Accessing Properties:**
  ```javascript
  const value = myObject.key;
  ```

- **Deleting Properties:**
  ```javascript
  delete myObject.key;
  ```

## Map

The `Map` object in JavaScript is a collection of key-value pairs where both the keys and values can be of any data type. It provides methods for easy manipulation:

- **Map Creation:**
  ```javascript
  const myMap = new Map();
  ```

- **Setting Key-Value Pairs:**
  ```javascript
  myMap.set('key', 'value');
  ```

- **Getting Values:**
  ```javascript
  const value = myMap.get('key');
  ```

- **Deleting Entries:**
  ```javascript
  myMap.delete('key');
  ```

## Set

The `Set` object in JavaScript is a collection of unique values. It is useful for storing distinct elements:

- **Set Creation:**
  ```javascript
  const mySet = new Set();
  ```

- **Adding Values:**
  ```javascript
  mySet.add('value');
  ```

- **Checking Existence:**
  ```javascript
  const exists = mySet.has('value');
  ```

- **Deleting Values:**
  ```javascript
  mySet.delete('value');
  ```

## Date

The `Date` object in JavaScript is used for working with dates and times. It provides methods for retrieving and manipulating date information:

- **Current Date and Time:**
  ```javascript
  const currentDate = new Date();
  ```

- **Getting Specific Components:**
  ```javascript
  const year = currentDate.getFullYear();
  ```

- **Setting Date Components:**
  ```javascript
  currentDate.setMonth(5);
  ```

## String

Strings in JavaScript represent sequences of characters. They have various built-in methods for text manipulation:

- **String Creation:**
  ```javascript
  const myString = 'Hello, World!';
  ```

- **Getting Substrings:**
  ```javascript
  const substring = myString.substring(0, 5);
  ```

- **Finding Substring:**
  ```javascript
  const index = myString.indexOf('World');
  ```