let stringHello="Hello";
let division = function (a, b) {
 let response;
 if(b!=0) {
 response = a / b;
 }
 else {
 response = "infini";
 }
 return response;
}
console.log(stringHello);
for(let i=0;i<10; i++) {
 console.log(division(10, i));
}