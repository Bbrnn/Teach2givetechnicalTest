/*Design a function that takes a list of integers as input. The function should
return True if the list contains two consecutive threes (3 next to a 3) anywhere
within the list. Otherwise, it should return False. For example, the function
should return True for [1, 3, 3] and False for [1, 3, 1, 3].
*/

function twoConsecutiveThrees(integerList) {

//traverse  the list of the integers
    for (let i = 0; i <= integerList.length; i++) {
        //check if the current element in the list and the
        //next element are both three
        if (integerList[i] == 3 && integerList[i + 1] == 3){
            return true;
        }
        return false
    }

         
}
//first test case without consecutive threes
let integerList = [2,3,4,6,5,3];
console.log(twoConsecutiveThrees(integerList));

//second test case with consecuive threes
integerList = [3,3,5,4,3,789];
console.log(twoConsecutiveThrees(integerList));


