
// FOR-1

// let k=5,
// n = 3;



// for (let i = 0; i < n ; i++) {
//     console.log(k);
// }



// FOR-2

// let a = 12 , b = 5 , count=0 ;

// if (a < b) {
//     for (let i = a ; i <= b; i++) {
//         console.log(i);
//         count++
//     }
// } else{
//     for (let i = b; i <= a; i++) {
//         console.log(i);
//         count++
//     }
// }
// console.log(count);




// FOR-3


// let a = 1 , b = 5 , count=0 ;

// if (a < b) {
//     for (let i = b - 1  ; i > a; i--) {
//         console.log(i);
//         count++
//     }
// } else{
//     for (let i = a - 1 ; i > b; i--) {
//         console.log(i);
//         count++
//     }
// }
// console.log(count);



// FOR-4



// let a = 1 , b = 10 , c = 100 ;

// for (let i = a ; i <= b ; i++) {
//     let narx = i * c
//     console.log(`${i} kilogramm konfetning narxi ${narx} so'm`);
// }


// FOR-5


// let a = 1 , b = 10, c = 100 ;

// for (let i = a ; i <= b ; i++ ) {
//     let narx = (i / 10) * c
//     console.log(`${i / 10} kilogramm konfetning narxi ${narx} so'm`);
// }



// FOR-6


// let a = 10 , b = 20, c = 100 ;

// for (let i = a ; i <= b ; i+=2 ) {
//     let narx = (i / 10) * c
//     console.log(`${i / 10} kilogramm konfetning narxi ${narx} so'm`);
// }


// FOR-7




// let a = 1 , b = 100 , count=0 ;

// if (a < b) {
//     for (let i = a ; i <= b; i++) {  
//         count+=i
//     }
// } else{
//     for (let i = b; i <= a; i++) {
//         count+=i  
//     }
// }
// console.log(count);




// FOR-8




// let a = 1 , b = 100 , count=1 ;

// if (a < b) {
//     for (let i = a ; i <= b; i++) {  
//         count*=i
//     }
// } else{
//     for (let i = b; i <= a; i++) {
//         count*=i  
//     }
// }
// console.log(count);




// FOR-9




// let a = 1 , b = 4 , count=0 ;

// if (a < b) {
//     for (let i = a ; i <= b; i++) {  
//         let result= i*i
//         count+=result
//     }
// } else{
//     for (let i = b; i <= a; i++) {
//         let result= i*i
//         count+=result
//     }
// }
// console.log(count);



// FOR-10




// let n = 2 , count = 0;

// for (let i = 1; i <= n; i++) {
//     count+=1/i
// }
// console.log(count);



// FOR-11


// let n = 1 ;
// let total = 0;
// for (let i = n; i <= 2 * n; i++) {
//      total += i ** 2;
// }
// console.log(total);



// FOR-12

// let n = 3;
// let result = 1.1;
// for (let i = 1.1; i <= n; i += 1) {
//     result *= i;
// }
// console.log(result);


// FOR-13

// let n = 3 , a = 0.0 , b = 1 , c = 1.1;

// for (let i = 1; i <= n; i++) {
//     a += b * c;
//     c += 0.1;
//     b *= -1;
// }

// console.log(a);



// FOR-14


// let n = 7 , count = 1;


// for (let i = 3; i <= n; i+=2) {
//     console.log(`${count} + ${i}`);
//     count += i
// }

// console.log(Math.pow(count, 2));


// FOR-15


// let a = 2 , b = 3 ;
// for (let i = 1; i <= 1; i++) {
//     a **= b;
// }
// console.log(a);




// FOR-16


// let a = 3, b = 3 ;

// for (let i = 0; i <= b; i++) {
//    c = a**i
//    console.log(c)
// }



// FOR-17



// let a = 5, b = 2 , c = 0;

// for (let i = 0; i <= b; i++) {
//    c += Math.pow(a,i)
//    console.log("c="+c);
// }
// console.log(c);




// FOR-18

// let a = 2, b = 2, c = 0;

// for (let i = 0; i <= b; i++) {
//    c += a ** i ;
//    console.log("c="+c);
//    a *= -1;
// }
// console.log(c);

// FOR-19

// let n = 5 , count = 1;

// for (let i = 1; i <= n; i++) {
//    count *= i
//    console.log(count);
// }



// FOR-20

// let n = 4 , count = 0;

// for (let i = 1; i <= n; i++) {
//    let x = 1;  
//    for (let j = 1 ; j <= i; j++) {
//       x*=j
//    }
//    count += x
// }
// console.log(count);



// FOR-21



// let n = 4 , count = 0;

// for (let i = 1; i <= n; i++) {
//    let x = 1;  
//    for (let j = 1 ; j <= i; j++) {
//       x*=j
//    }
//    count += 1/x
// }
// console.log(count);



// FOR-22


// let n = 4 , count = 0;

// for (let i = 1; i <= n; i++) {
//    let x = 2;
//    x **= i;  
//    for (let j = 1 ; j <= i; j++) {
//       x*=j
//    }
//    count += 1/x
   
// }
// console.log(count);


// FOR-23



// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    for (let j = 1 ; j <= i; j++) {
//       sum*=j
//    }
//    count += x/sum
//    x *=-1
//    console.log(x);
// }
// console.log(count);


// FOR-24




// let n = 5 , count = 0 , sum = 0;

// for (let i = 0; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    for (let j = 1 ; j <= i; j++) {
//       sum*=j
//    }
//    count += x/sum
//    x *=-1
// }
// console.log(count);


// FOR-25


// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i++) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    count += x/i
//    x *=-1
//    console.log(x);
// }
// console.log(count);



// FOR-26



// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    count += x/i
//    x *=-1
//    console.log(i);
// }
// console.log(count);