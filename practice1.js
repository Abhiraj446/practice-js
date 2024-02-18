let student={
    firstName:'Abhiraj',
    lastName:'Khatana',
    age:19,
    address:'saharanpur',
}
// delete student.age
// console.log(student)
// console.log(student.address)

// const num=student.lastName
// console.log(num)

// student.address='india'
// console.log(student)

// student.gender='male'
// console.log(student)

// const namee=student["firstName","lastName","age","lastName"]
// console.log(namee)

// student["age"]=21
// console.log(student)

// student["gender"]='male'
// console.log(student)

// let mains={
//     "49":'germany',
//     "51":'india',
//     "20":'usa'
// }
// for(let code in mains){
//     // alert(mains)
// }


// let person={
//     boy:{
//         boy1:{
//            name:'abhiraj',
//            age:19,
//         },
//         boy2:{
//             name:'khatana',
//             age:19,
//         },
//     },
//     girl:{
//         girl1:{
//             name:'ritika',
//             age:18,
//         },
//         girl2:{
//             name:'priyanshi',
//             age:19,
//         },
//     },
// }
// console.log(person.boy.boy2.name)


// //method
// let user={
//     name:"IET",
//     age:19,
// }
// user.sayHi=function(){
    // alert("hello");
// }
// user.sayHi()

//this method
// let st={
//     name:'abhi',
//     age:19,
// } 
// st.bay=function(){ 
//     // alert(this.age) 
// }
// st.bay() 

// alert(7e9) 

// console.log(Math.max(5,8,12,21))
// console.log(Math.min(5,8,12,21))
// console.log(Math.pow(2,5))

// let iet="Institute\nof\nEducation \nand \bTraining"
// // console.log(iet)

// let a="hello"
// // alert(a[0]);
// // alert(a[a.length-1]) //length is 5 and 5-1 is 4,4th place is o
// console.log(a.substr(1,3))

// let fun={
//     name:"abhi",
//     age:19,
// }
// let gun={
//     name:"abc",
//     age:40,
// }
// Object.assign(fun,gun)

let abhi={
    name:'rohit',
    age:19,
}
abhi.pay=function(){
    alert(this.name)
}
abhi.pay()
