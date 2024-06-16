//Write a recursive function to calculate the factorial of a number
//

function factorialNumber(num) {

	//Base case
	if(num == 0) {

		return 1
	}
        //calculate factorial of the number
	return num * factorialNumber(num - 1)
}

//Main function
function main() {

	//initialize the number
	let num = 10;

	let factorial=factorialNumber(num);

	console.log("Factorial of",num,"is",factorial);
}

main();

