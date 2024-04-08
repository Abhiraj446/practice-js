console.log("working")

let data="abhiraj";  //global variable
function a(){
    document.write("data")
}
function b(){
    document.write("data")
}
// a();
// b();


//declaring global variable within function
function c(){
    // window.value=50  //declaring global variable
}
function d(){
    // alert(window.value)  //accessing global variable
}
// c();
// d();

// console.log(~10)  //bitwise not

// function getcube(a){
    // alert(a**3)
    // return "hello"
// }
// console.log(getcube())

let add=new Function("a","b","return a+b");
console.log(add(5,45))

let pow=new Function("c","d","return Math.pow(c,d)")
console.log(pow(2,3))