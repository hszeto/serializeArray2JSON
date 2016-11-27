# serialize_array_object.js
___   
Convert form inputs into a JSON key/value pair object using Javascript and jQuery.
___
#### Usage:
1. Add script tag for jQuery in the html head.
2. Add script tag for large_file_uploader.js in html head. (after jQuery)
3. Use '$SA' to define ajax_downlader. 

##### Example:
###### In index.html:
```
  <form id="my-form">
    <input type="text" name="data1">
    <input type="text" name="data2">
    <input type="text" name="data3">

    <input type="submit">
  </form>
```
###### In javascript file: 
 ```javascript
  $('#my-form').submit(function(event){
    event.preventDefault();
    var my_form_data = $('#my-form');
    console.log( $SA(my_form_data) );
  });
 ```
___
###### Expected output:
```javascript
{data1:"xxxx", data2:"yyyy", data3:"zzzz"}
```
___
#### Demo:  
Visit https://jsfiddle.net/hszeto/g4qw7zvh/

