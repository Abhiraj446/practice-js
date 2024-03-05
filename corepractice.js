console.log("working")

// const a="abhiraj"
// a="kh"
// console.log(a)

// let age=prompt("Mention your age")
// if(age>=18){
//     console.log("you are eligible for vote")
// }
// else{
//     console.log("not")
// }

// let b=12;
// let c='12';
// if(b!=c){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// let a="hello"
// show();
// function show(){
//     let a="hello"
//     console.log(a);
// }
// show();
// console.log(a)

// let show=function(a,b){
//     return(a+b)
// }
// abhi=show(4,5)
// console.log(abhi)

// let user={
//     name:"abhi",
//     age:19,
//     address:{
//        city:"sre",
//        country:"india"
//     }
// }
// console.log(user.address.country)

// x="djn"
// console.log(x)
// let x;

// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err.message;
//   }

// let user="abhi"
// for(const key in user){
//     console.log(`${key}:$(user[key])`)
// }

// let matrix=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(matrix[1][2])

// let df=Array.from("abfgh")
// console.log(df)

// for(i=1;i<=5;i++){
//     console.log(i)
// }

// let i=1
// while(i<=5){
//     console.log(i)
//     i++;
// }

// let i=1;
// do{
//     console.log(i)
//     i++;
// }while(i<=5)

//for in

// let user={
//     name:'abhiraj',
//     age:19,
//     add:'sre',
//     func(){
//         console.log("My name is"+" "+this.name+" "+"and age is"+" "+this.age+" "+"from"+" "+this.add)
//     }
// }
// user.func()
// for(const key in user){
//     document.write(`${key}:${user[key]}`+"<br>")
// }
// user.num=646574984;
// console.log(user)

// let person={
//     boy:{
//         boy1:{
//             name:'abhi',
//             age:19
//         },
//         boy2:{
//             name:'raj',
//             age:19
//         },
//     },
//     girl:{
//         girl1:{
//             name:'kannu',
//             age:19
//         },
//         girl2:{
//             name:'kanika',
//             age:19
//         }
//     }
// }
// for(const key in person.girl.girl1){
//     document.write(`${key}:${person.girl.girl1[key]}`+"<br>")
// }

// for(let key in person.girl.girl1){
//     document.write(`${key}:${person.girl.girl1[key]}`+"<br>")
// }

// let input=document.getElementById("myinput");
// let inputValue=input.value;
// document.write(inputValue);

let user={
    name:"abhi",
    age:19,
    add:"sre"
}
// let txt="";
// for(let i in user){
//     txt+=user[i]+" ";
// }
// console.log(txt)
for(let a in user){
    console.log(user[a])
}


//add event listener

// function show(){
//     let x=document.getElementById("myInput").value;
//     document.getElementById("demo").innerHTML=x;
//     console.log(x)
// }

// function show(){
//     let x=document.getElementById("input").value;
//     // document.getElementById("demo").innerHTML=x;
//     console.log(x)
// }

// document.addEventListener("keypress",function(){
//     let a=document.getElementById("demo1").value;
//     document.getElementById("demo").innerHTML=a;
//     console.log(a)
// })

// document.addEventListener("click",function(){
//     let a=document.getElementById("clk")
//     a=document.getElementById(demo).value;
//     console.log(a)
// })

// function show(){
//     let a=document.getElementById("put").value
//     console.log(a)
// }

// function add(){
//     let num1=Number(document.getElementById("num1").value)
//     let num2=Number(document.getElementById("num2").value)
//     const sum=num1+num2
//     console.log(sum)
//     document.getElementById("result").value=sum
// }

// function sub(){
//     let num1=Number(document.getElementById("num1").value)
//     let num2=Number(document.getElementById("num2").value)
//     const sum=num1-num2
//     console.log(sum)
//     document.getElementById("result").value=sum
// }

// function mul(){
//     let num1=Number(document.getElementById("num1").value)
//     let num2=Number(document.getElementById("num2").value)
//     const sum=num1*num2
//     console.log(sum)
//     document.getElementById("result").value=sum
// }

// function div(){
//     let num1=Number(document.getElementById("num1").value)
//     let num2=Number(document.getElementById("num2").value)
//     const sum=num1/num2
//     console.log(sum)
//     document.getElementById("result").value=sum
// }


// function show(){
//     let a=document.getElementById("click")
//     a="Hii abhiraj "
//     console.log(a)
//     document.getElementById("result").value=a;
// }


// document.addEventListener("click",function(){
//     document.getElementById("demo").innerHTML="mousemove"
// })
// document.addEventListener("dbclick",function(){
//     document.getElementById("demo").body.backgroundColor="red"
// })


// var kk=(a,b)=>a*b
// d=kk(5,2)
// console.log(d)

// console.log(c)
// let show=(a,b)=>{
//     return a*b
// }
// c=show(2,5)
// console.log(c)

// alert('2'<1)
// for(i=1;i<=5;++i){
//     console.log(i)
// }

// let txt="H,e,l,lo World ";
// let txt1="abhiraj"
// let num=15;
// console.log(txt.charAt(2))
// console.log(txt.concat(txt1))
// console.log(txt.indexOf("o"))
// console.log(txt.lastIndexOf("World"))
// console.log(txt.replace("Hello","ram"))
// console.log(txt.search("o"))
// console.log(txt.slice(2,8))
// console.log(txt.substr(2,7))
// console.log(txt.substring(1,7))
// console.log(txt.toLowerCase())
// console.log(txt.trim())
// console.log(num.toString())
// console.log(txt.includes("o"))
// console.log(txt.split(","))

// let a=1e5;
// console.log(a)

// console.log(Math.pow(2,5))

// let a=[2,5,"abhi","ahbj"]
// let b=[5,8,9]
// a.push(45)
// console.log(a)
// a.pop()
// console.log(a)
// a.unshift(5)
// console.log(a)
// delete a[1]
// console.log(a)
// a.splice(1,2,"jhj","sxj")
// console.log(a)

// let city = ["new delhi", "Mumbai", "kolkata", "India"];
// city.splice(3, 0, "Azam");
// console.log(city)

// let c=a.concat(b)
// console.log(c)
// b.reverse()
// console.log(b)

// a.copyWithin[0,2]
// a.fill["jhf"]
// console.log(a)

// function xyz(a,b){
//     return a+b;
// }
// b.reduce(xyz)

// function add(){
//     let a=document.getElementById("show").value;
//     document.getElementById("demo").innerHTML=a;
//     document.getElementById("demo1").value=a;
//     console.log(a)
// }

// document.addEventListener("click",function(){
//     document.getAnimations("add").body.style.backgroundColor="red"
// })

// let a="dsma"
// a.push("cdsa")
// console.log(a)

// alert("hii")
// let a=prompt("mention ur name")
// confirm("eligible")
// console.log("your name is"+" "+a)

let a=[5,4,"hi",6]
a.includes(6)
// console.log(a)
// console.log(a)



