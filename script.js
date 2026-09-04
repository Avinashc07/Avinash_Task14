//sum of first n natural numbers
var n = 14;
var sum = 0;
for(i=1; i<=14; i++){
    sum = sum + i;
}

console.log("Sum of first 14 natural number : ",sum);


//Print table of n
var n = 10;

for(i=1; i<=10; i++){
    console.log("10 * "+i+" = "+n*i);
}

//check is the number prime
var n = 19;

if(n<=0){
    console.log(n+" is not a prime number");
}

if(n==2){
    console.log("2 is prime Number");
}

if(n % 2 == 0){
    console.log(n+" is not a prime number");
}

for(i=3; i*i<=n; i+=2){
    if(n % i == 0){
        console.log(n+" is not a prime number");
    }
}

console.log(n+" is a prime number");

//Print all factor of n
var n = 20;
console.log("All factors of "+n+" are:");
for(i=1; i<=20; i++){
    if((n % i) == 0){
        console.log(i);
    }
}

//Find sum of all digits of a number
var n = 139;
var sum = 0;
while(n>0){
    var remainder = n % 10;
    sum = sum + remainder;
    n = Math.floor(n/10);
}

console.log("Sum of all digits of 139 is : "+sum);


//check if number is armStrong number
var n = 153;
var original = n;
var sum = 0;
while(n>0){
    var rem = n % 10;
    sum = sum + (rem ** 3);
    n = Math.floor(n / 10);
}

if(original == sum){
    console.log("Yes "+original+" is an Armstrong number");
}else{
    console.log(original+" is not Armstrong Number");
}
