function firstNonRepeatedChar(str) {
 // Write your code here
	let charMap = {};
	for(let char of str){
		charMap[char] = (charMap[char]||0)+1;
	}
		for(let i = 0;i<str.length;i++){
			if(charMap[str[i]]===1){
				return str[i];
			}
		}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
