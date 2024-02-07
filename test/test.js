var str = '{"hello":"world"}';
try {
  var obj = JSON.parse(str); // this is how you parse a string into JSON 
  document.body.innerHTML += obj.hello;
} catch (ex) {
  console.error(ex);
}