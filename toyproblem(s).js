// 1-26-15
//write a function called ABCheck that takes a string parameter and return the string true if the characters a and b are seperated by exactly 
//3 places anywhere in the string at least once (ie. "lane borrowed" would result in true b/c there is exactly three characters between a and b)
//Otherwise return the string false

//function takes any string
//need to loop through the string and check if a and b are exactly 3 spaces apart. if so, return true

var ABCheck = function(str) {
	var str = str.toUpperCase();
	var newArray = [];
for (var i = 0; i < str.length; i++) {
	newArray = newArray.push(str[i]);

}
};


//-------------------------------------------------------------------------------------------------------------------------

var ABCheck = function(str) {
	var arr = str.toLowerCase.split('');
for (var i = 0; i < str.length; i++) {
	if arr[i] === 'a' && (arr[i + 4] === 'b' || arr[i - 4] === 'b') {
	return true;
	}
};
	return false;
};

//----------------------------------------------------------------------------------------------------------------------------------

//write a function that generates an array of integers of the fibonacci sequence, up to i = 100. The fibonacci sequence is defined by
//Fn = Fn-1 + Fn-2 , which means to find Fn you add the previous numbers up. The first two numbers in the sequence are 0 and 1. Write a function
// to check if a given number is in the fibonacci sequence, return "yes" if it is, if not return the string "no".

function fibonacci(){
  var newArr = [];
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
    if (current > 100) {
    	break;
    }
  }

}

//----------------------------------------------------------------

var numberCheck = function(num) {
	var array = [0,1];
	var total = 0;
	var i = 2;
	while (total < num) {
		total = array[i-2] + array[i-1];
		array.push(total);
		i++;
	}
	if (array.indeOf(num) !== -1){
		return true;
	}
		return false;

}

//---------------------------------------------------------------------

function fib(num){
	var fibnArray = [0, 1];
	for (var i = 0)
}
//---------------------------------------------------------------------------------------------------------

//Find the only item that occurs an even number if times in an array. If there is more than one item that occurs an even number of time
//just return one of them. If there are no items that occur an even number of times, return null. 

var onlyEven = function(arr) {
	var sorted_arr = arr.sort(); 
	var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
    if (results.length % 2 === 0) {
    	return results;
		
		}		
	}

};

onlyEven([1,6,2,4,4,5,6,8,9,6]);

//---------------------------------------------------------------------------------

var onlyEven = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occurs = 0;
	for (var j = 0; j <arr.length; i++) {
		if (arr[i] === arr[j]) {
			occurs++;
		}
	}
	if (occurs % 2 === 0) {
		return arr[i];
		}
}

var arr = [1,6,2,4,4,5,6,8,9,6];
//--------------------------------------------------------------------------------------

// Write a function that accepts a number, n , and returns the nth Fibonacci number. Use a recursive solutuion to this problem; 
// if you finish with time left over, implement an iterative solution

var nthFib = function(num) {   //non recursive (iterative) solution
	var fibArr = [0,1];
for (i = 2; i <= num; i++) {
	fibArr[i] = fibArr[i-2] + fibArr[i-1];
	}
	return fibArr[num];
};

//------------------------------------------------------------------

var nthFib = function(num) {   //another iterative solution 
	var sum = 0;
	var num1 = 0;
	var num2 = 1;
for(var i = 1; i < num; i++) {
	sum = num1 + num2;
	num1 = num2;
	num2 = sum;
	}
return sum;
}

//---------------------------------------------------------------------------------------------

var recursiveFib = function(n) {      //recursive solution!!
	if (n <=2 ) {
		return 1;
	}
	return recursiveFib(n - 1) + recursiveFib(n - 2);
}

//-------------------------------------------------------------------------------------------

//create a function that takes in three strings as parameters. The goal is to swap all x characters in the string for y characters.
//For example: swapper('some string', 's', 'z') returns 'zome ztring'. 

var swapper = function(str, x, y) {
	var strArr = str.split("");
for (var i = 0; i < str.length; i++) {
	if (strArray[i] === x) {
		strArray[i] === y;
	}
}
var string = strArray.join('');
return string;
}

//-------------------------------------------------------------------------------------------------------

//write a function that accepts a multi dimensional  array and returns a flattened version
//flatten([1,2,[3,[4], 5, 6], 7]) // [1,2,3,4,5,6,7]

var flatten() = function(arr) {
	var newString = arr.toString();
	var newArr = [];
	for(i = 0; i < newString.length; i++) {
		if (newString[i] !== ','){
			newArr.push(parseInt(newString[i]));
		}
	}
	return newArr;
}






















