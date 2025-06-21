// var age = 19;

// if (age >= 18) {
//     console.log("above age ");

// }else{
//     console.log("below age");

// }

// let marks = [82,96,32,75,84]
// console.log(marks);
// marks[1]= 86;

// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

// for (let result of marks){
//     console.log(result);

// }
// let sum = 0
// for (let value of marks){
//     sum = sum + value;
// }
// console.log(sum);

// let final = sum / marks.length;
// // console.log(final);

// let item =[250,300,450,800]; 
// // let i = 0;
// for (let discount of item){
// console.log(`value of index${i} = ${discount}`);
// let offer = item/10;
// item[i]= item[i]- offer
// console.log(`value aftter offer= ${price}`);
// i++;
// }

// for (let i = 0; i < item.length; i++) {
//     let offer= item[i]/ 10;
//     item[i] -= offer; 

// }
// console.log(item);

// let friuts = ["banana" , "mangos" , "apples" , "oranges"];

// console.log(friuts);
// // friuts.pop();
// console.log(friuts.toString());

// let marvel = ["iron man", "hulk","spiderman"];
// let dcHero = ["superman","batman"];
//  let hero = marvel.concat(dcHero);

//  console.log(hero);

// let company = ['blomming' , 'microsoft', 'uber' , 'google' , 'IBM' , 'netflix']
// company.shift();
// company.splice(1 ,1,"ola");
// company.push("amazon")
// console.log(company);

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(5,9);

// const arrowsum =(a,b)=>{
//     return(a+b)
// }
// console.log(arrowsum);
// arrowsum(6 ,6);

// function vovels(str ) {
//     let count = 0;
//     for(const char of str){
//         if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u")
//         console.log(char);

//     }
// }

// let citys = ["mumbai", "surat", "delhi"]

// citys.forEach(element => {
//     console.log(element.toUpperCase());

// });

// let num =[1,2,3,4,5]

// num.forEach(number => {

//     console.log(number*number);


// });

// let nwearry = num.filter( (val)=>{
//     return val %2===0
// })
// console.log(nwearry);

// let marks =[86,68.75,95,63]

// above= marks.filter((val)=>{
//     return val >=80
// })

// console.log(above);


let n = prompt("enter a number");
let arr = []
for (let i = 1; i <= n; i++) {
    arr[ i-1]= i;
}
console.log(arr);

let ans=arr.reduce((previos , Number)=>{
    return previos* Number;
})
console.log(ans);

