//Design a function that reverses the digits of an integer. For example, 50
//should become 5 and -12 should become -21.

function reverseInteger(integer) {
   
	//convert the integer to string then split and reverse it
	//after join the reversed string
   const reverse = integer.toString().split('').reverse().join('')
  
   //revert back the string to an integer
   return parseInt(reverse)
   
   //print out the reversed integer
   console.log(reverse)

}

//Test the fuction
console.log("The reverse is:",reverseInteger(-123))
console.log("The reverse of",integer,"is:",reverseInteger(4076))

