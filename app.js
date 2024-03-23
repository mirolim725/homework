
'use strict'


// IF-12


// let a = 3, b = 6,c = 7;


// if (a < b && a < c  ) {
//     console.log(a);
// } else if (b < c && b < a){
//     console.log(b);
// } else if (c < a && c <b) {
//     console.log(c);
// } else {
//     console.log("Hammasi teng");
// }


// IF-13

// let a=11 , b=22 , c=33

// if (a < b && a > c){
//     console.log(a);
// }else if (b < c && b >a){
//     console.log(b);
// } else if (c < a && c > b) {
//     console.log(c);
// }else {
//     console.log('Hammasi teng');
// }


// IF-14

// let a=2 , b=10, c=10;

// if (a < b && a < c && b < c) {
//     console.log(a,b,c);
// } else if (a <= b && a <= c && b >= c) {
//     console.log(a,c,b);
// } else if (b <= a && b <= c && a <= c) {
//     console.log(b,a,c);
// } else if (b <= a && b <= c && a >= c) {
//     console.log(b,c,a);
// } else if (c <= a && c <= b && a >= b) {
//     console.log(c,a,b);
// } else if (c <= a && c <= b && b >= a) {
//     console.log(c,b,a);
// } else {
//     console.log('Xato');
// }

// IF-15

// let x=1 , y=2 , z=3;

// let a=x+y , b=x+z , c=y+z;


// if (a > b && a > c  ) {
//     console.log(a);
// } else if (b > c && b > a){
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// } else {
//     console.log("Hammasi teng");
// }

// IF-16

// let a=0 , b=5, c=6;

// if (a < b && a < c && b < c ) {
//     console.log(a*2,b*2,c*2);
// }else {
//     console.log(`-${a} , -${b} , -${c}`);
// }

// IF-17

// let a=10 , b=9, c=8;

// if (a > b && a > c && b > c ) {
//     console.log(a*2,b*2,c*2);
// }else {
//     console.log(`-${a} , -${b} , -${c}`);
// }

// 18-IF

// let a=1, b=2, c=1 ;
// if (a===b && c!=(a&&b)) {
//     console.log("3")
// }else if(a===c && b!=(a&&c)){
//     console.log("2");
// }else if(b===c && a!=(c&&b)){
//     console.log("1");
// }else{
//     console.log('Ikkita teng son mavjud emas');
// }


// IF-19


// let a = prompt("a" , '')
// let b = prompt("b" , '')
// let c = prompt("c" , '')
// let d = prompt("d" , '')

// if (a===b && b===c && d!=(a&&b&&c)) {
//     alert("1");
// }else if(a===b && b===d && c!=(a&&b&&d)){
//     alert("2");
// }else if(a===c && c===d && b!=(c&&b&&a)){
//     alert("3");
// }else if(b===c && c===d && a!=(c&&b&&d)){
//     alert("4");
// }else{
//     alert('Uchta teng son mavjud emas');
// }


// IF-20

// let a=1 , b=2 , c=3;

// let x=b-a , y=c-a;

// if (x<y) {
//     console.log(x);
// } else if(y<x){
//     console.log(y);
// } else{
//     console.log('Togri son kiriting');
// }


// IF-21

// let x=1 , y=1;

// if (x===0 && y===0) {
//     console.log('0');
// }else if(y===0){
//     console.log('1');
// }else if(x===0){
//     console.log('2');
// }else{
//     console.log('3');
// }

// IF-22

// let x=1 , y=-1;

// if (x > 0 && y > 0) {
//     console.log('Birinchi chorak');
// }else if (x < 0 && y > 0) {
//     console.log('Ikkinchi chorak');
// }else if (x < 0 && y < 0) {
//     console.log('Uchinchi chorak');
// }else if (x > 0 && y < 0) {
//     console.log(`Tortinchi chorak`);
// }else{
//     console.log('Error');
// }

// IF-23

// let x1=1 , y1=1;
// let x2=1 , y2=2;
// let x3=2 , y3=2;

// if((x1&&x2&&x3&&y1&&y2&&y3)>0){
//     console.log(x3,y1, `va ular birinchi chorakda`);
// } else if((x1&&x2&&x3)<0 && (y1&&y2&&y3)>0){
//     console.log(x3,y1 ,`va ular ikkinchi chorakda`);
// }  else if((x1&&x2&&x3)<0 && (y1&&y2&&y3)<0){
//     console.log(x3,y1 ,`va ular uchinchi chorakda`);
// }  else if((x1&&x2&&x3)>0 && (y1&&y2&&y3)<0){
//     console.log(x3,y1 ,`va ular to'rtinchi chorakda`);
// }  else {
//     console.log('Nuqtalar xato');
// }

