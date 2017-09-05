# localStorage
LocalStorage easier

## Getting Started
Copy the localStorage.js file and add it in your project.
```html
<script src="localStorage.js"></script>
```
### Create object
Instantiate a new object with the name of localStorage and the string to initialize if the localStorage does not exist.
```js
var mySave = new Storage('name', '{}');
```
### Update or/and load
Now you can to update the mySave data (saved locally in 'name'). For example to use data json.
```js
mySave.update('{"name":"Bob","city":"Boston"}');
```
You can to load the contain too.
```js
console.log(mySave.load());
// display: '{"name":"Bob","city":"Boston"}'
```
