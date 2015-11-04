/**
 * A simple demo function  *count* all subsequences of 'AB' that occur in the string 
 * 
 * Module pattern calculation created 
 * @author Dilip
 * @example 
 * //input:  ACKHJAEDAKLOIBAA  output: total=3
 * //input:  ACKHJAEDAKLOIBAABB output = 13
 * String prototype methods are added to calculate number of occurance of certain string
 * @see application.object
 * @since 1.0
 * @version 1.0.1<br>
 */
/**
 * Represents String prototype.
 * @returns {Number} total number of occurance in the string
 */
String.prototype.imperativeCount = function ( twoChr ) {
	var total = 0;
	var firstChr = twoChr.charAt(0);
	var secondChr = twoChr.charAt(1);
	var firstLoc = this.indexOf( firstChr );
	var str = this.substring(firstLoc, (this.indexOf( secondChr ) + 1));
	var arrStr = this.split(secondChr);
	for( var i=0; i<arrStr.length-1; i++){
		if (i>0)arrStr[i] = arrStr[i-1]+arrStr[i];
		total += findElement(arrStr[i], firstChr, firstLoc);
	}
	return total;
};
/**
 * find the total number of occurance in the string
 * @param   {string} str      string which is to be searche
 * @param   {String} firstChr first character to be search
 * @param   {Number} firstLoc location of the first char
 * @returns {Number} total
 */
function findElement(str, firstChr, firstLoc) {
	var total=0;
	while( firstLoc = str.indexOf( firstChr, firstLoc ) + 1 ){
		total++;
	}
	return total;
}

//call imperative way and calculate its execution time
var start = Date.now();
var concurrent = 'ACKHJAEDAKLOIBAABB';
var imper123 = concurrent.imperativeCount('AB');
console.log('b   '+imper123);
var end = Date.now();
console.log("\nTime: " + (end - start) + "ms");
