//II. Find logic and solve it.

//5. Check given number is armstrong or not.

var x=prompt("Enter a 3 digit number");
var a=x;
var rem;
var sum=0;

while(a>0){
	rem=a%10;
	sum+=rem**3;
	a=(a-rem)/10;
}
if(sum==x){
	console.log("The number is an Armstrong number");
}
else{
	console.log("The number is not an Armstrong number");
}
console.log(sum);


//1. input : 2345
   //output : 14
   
   var n=2345;
   var sum=0;
   var rem;
   while(n!=0){
	 rem=n%10;
     n=(n-rem)/10;
     sum+=rem;   
   }
   console.log(sum);
   
   
